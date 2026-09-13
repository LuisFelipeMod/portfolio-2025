<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Color,
  ColorManagement,
  LinearSRGBColorSpace,
  Mesh,
  NoToneMapping,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer
} from 'three'

const vertexShader = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform float uInkComposite;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform float uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (float(i) >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  float lum = max(c.r, max(c.g, c.b));
  vec3 rgb = c;
  if (uInkComposite > 0.5 && lum > 1e-4) {
    rgb = clamp(c / lum, 0.0, 1.0);
    lum = pow(lum, 0.48);
  }
  gl_FragColor = vec4(rgb, clamp(lum * uOpacity, 0.0, 1.0));
}
`

const props = defineProps({
  color: { type: String, default: '#3b82f6' },
  colorTwo: { type: String, default: '#67e8f9' },
  speed: { type: Number, default: 1 },
  ringCount: { type: Number, default: 6 },
  attenuation: { type: Number, default: 10 },
  lineThickness: { type: Number, default: 2 },
  baseRadius: { type: Number, default: 0.35 },
  radiusStep: { type: Number, default: 0.1 },
  scaleRate: { type: Number, default: 0.1 },
  opacity: { type: Number, default: 1 },
  blur: { type: Number, default: 0 },
  noiseAmount: { type: Number, default: 0.1 },
  rotation: { type: Number, default: 0 },
  ringGap: { type: Number, default: 1.5 },
  fadeIn: { type: Number, default: 0.7 },
  fadeOut: { type: Number, default: 0.5 },
  followMouse: { type: Boolean, default: false },
  mouseInfluence: { type: Number, default: 0.2 },
  hoverScale: { type: Number, default: 1.2 },
  parallax: { type: Number, default: 0.05 },
  clickBurst: { type: Boolean, default: false },
  inkComposite: { type: Boolean, default: false }
})

const mountRef = ref(null)

const mouseRef = ref([0, 0])
const smoothMouseRef = ref([0, 0])
const hoverAmountRef = ref(0)
const isHoveredRef = ref(false)
const burstRef = ref(0)

const blurStyle = computed(() => (
  props.blur > 0 ? { filter: `blur(${props.blur}px)` } : undefined
))

const propsRef = computed(() => ({
  color: props.color,
  colorTwo: props.colorTwo,
  speed: props.speed,
  ringCount: props.ringCount,
  attenuation: props.attenuation,
  lineThickness: props.lineThickness,
  baseRadius: props.baseRadius,
  radiusStep: props.radiusStep,
  scaleRate: props.scaleRate,
  opacity: props.opacity,
  noiseAmount: props.noiseAmount,
  rotation: props.rotation,
  ringGap: props.ringGap,
  fadeIn: props.fadeIn,
  fadeOut: props.fadeOut,
  followMouse: props.followMouse,
  mouseInfluence: props.mouseInfluence,
  hoverScale: props.hoverScale,
  parallax: props.parallax,
  clickBurst: props.clickBurst,
  inkComposite: props.inkComposite
}))

let renderer = null
let frameId = 0
let ro = null
let io = null
let isVisible = true

const cleanupFns = []

onMounted(() => {
  const mount = mountRef.value
  if (!mount) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: 'high-performance'
    })
  } catch {
    return
  }

  if (!renderer.capabilities.isWebGL2) {
    renderer.dispose()
    renderer = null
    return
  }

  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = LinearSRGBColorSpace
  renderer.toneMapping = NoToneMapping
  renderer.domElement.setAttribute('aria-hidden', 'true')
  mount.appendChild(renderer.domElement)

  const scene = new Scene()
  const camera = new OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10)
  camera.position.z = 1

  const uniforms = {
    uTime: { value: 0 },
    uAttenuation: { value: 0 },
    uResolution: { value: new Vector2() },
    uColor: { value: new Color() },
    uColorTwo: { value: new Color() },
    uLineThickness: { value: 0 },
    uBaseRadius: { value: 0 },
    uRadiusStep: { value: 0 },
    uScaleRate: { value: 0 },
    uRingCount: { value: 0 },
    uOpacity: { value: 1 },
    uNoiseAmount: { value: 0 },
    uRotation: { value: 0 },
    uRingGap: { value: 1.6 },
    uFadeIn: { value: 0.5 },
    uFadeOut: { value: 0.75 },
    uMouse: { value: new Vector2() },
    uMouseInfluence: { value: 0 },
    uHoverAmount: { value: 0 },
    uHoverScale: { value: 1 },
    uParallax: { value: 0 },
    uBurst: { value: 0 },
    uInkComposite: { value: 0 }
  }

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    toneMapped: false,
    depthTest: false,
    depthWrite: false,
    premultipliedAlpha: false
  })

  const setDisplayColor = (target, hex) => {
    target.set(hex)
    if (ColorManagement.enabled) target.convertLinearToSRGB()
  }

  const geometry = new PlaneGeometry(1, 1)
  const quad = new Mesh(geometry, material)
  scene.add(quad)

  const resize = () => {
    if (!renderer) return
    const w = mount.clientWidth
    const h = mount.clientHeight
    if (w === 0 || h === 0) return
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.25 : 2)
    renderer.setSize(w, h)
    renderer.setPixelRatio(dpr)
    uniforms.uResolution.value.set(w * dpr, h * dpr)
  }

  resize()
  window.addEventListener('resize', resize)

  ro = new ResizeObserver(resize)
  ro.observe(mount)

  const updateMouseFromEvent = (e) => {
    const rect = mount.getBoundingClientRect()
    mouseRef.value[0] = (e.clientX - rect.left) / rect.width - 0.5
    mouseRef.value[1] = -((e.clientY - rect.top) / rect.height - 0.5)
    isHoveredRef.value =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
  }

  const onMouseMove = (e) => {
    updateMouseFromEvent(e)
  }

  const onMouseLeave = () => {
    isHoveredRef.value = false
    mouseRef.value = [0, 0]
  }

  const onClick = () => {
    burstRef.value = 1
  }

  // Window tracking lets the rings react even when used as a decorative layer
  // with pointer-events: none (behind copy and UI).
  window.addEventListener('mousemove', onMouseMove)
  mount.addEventListener('mouseleave', onMouseLeave)
  mount.addEventListener('click', onClick)

  const stopLoop = () => {
    if (frameId) {
      cancelAnimationFrame(frameId)
      frameId = 0
    }
  }

  const animate = (t) => {
    frameId = requestAnimationFrame(animate)
    if (!isVisible || !renderer) return

    const p = propsRef.value

    smoothMouseRef.value[0] += (mouseRef.value[0] - smoothMouseRef.value[0]) * 0.08
    smoothMouseRef.value[1] += (mouseRef.value[1] - smoothMouseRef.value[1]) * 0.08
    hoverAmountRef.value += ((isHoveredRef.value ? 1 : 0) - hoverAmountRef.value) * 0.08
    burstRef.value *= 0.95
    if (burstRef.value < 0.001) burstRef.value = 0

    uniforms.uTime.value = t * 0.001 * p.speed
    uniforms.uAttenuation.value = p.attenuation
    setDisplayColor(uniforms.uColor.value, p.color)
    setDisplayColor(uniforms.uColorTwo.value, p.colorTwo)
    uniforms.uLineThickness.value = p.lineThickness
    uniforms.uBaseRadius.value = p.baseRadius
    uniforms.uRadiusStep.value = p.radiusStep
    uniforms.uScaleRate.value = p.scaleRate
    uniforms.uRingCount.value = p.ringCount
    uniforms.uOpacity.value = p.opacity
    uniforms.uNoiseAmount.value = p.noiseAmount
    uniforms.uRotation.value = (p.rotation * Math.PI) / 180
    uniforms.uRingGap.value = p.ringGap
    uniforms.uFadeIn.value = p.fadeIn
    uniforms.uFadeOut.value = p.fadeOut
    uniforms.uMouse.value.set(smoothMouseRef.value[0], smoothMouseRef.value[1])
    uniforms.uMouseInfluence.value = p.followMouse ? p.mouseInfluence : 0
    uniforms.uHoverAmount.value = hoverAmountRef.value
    uniforms.uHoverScale.value = p.hoverScale
    uniforms.uParallax.value = p.parallax
    uniforms.uBurst.value = p.clickBurst ? burstRef.value : 0
    uniforms.uInkComposite.value = p.inkComposite ? 1 : 0

    renderer.render(scene, camera)
  }

  const startLoop = () => {
    if (!frameId) frameId = requestAnimationFrame(animate)
  }

  io = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting
    if (isVisible) startLoop()
  }, { threshold: 0 })
  io.observe(mount)

  startLoop()

  cleanupFns.push(() => {
    stopLoop()
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', onMouseMove)
    ro?.disconnect()
    io?.disconnect()
    mount.removeEventListener('mouseleave', onMouseLeave)
    mount.removeEventListener('click', onClick)
    if (renderer?.domElement?.parentNode === mount) {
      mount.removeChild(renderer.domElement)
    }
    geometry.dispose()
    material.dispose()
    renderer?.dispose()
    renderer = null
  })
})

onBeforeUnmount(() => {
  cleanupFns.forEach((fn) => fn())
})
</script>

<template>
  <div ref="mountRef" class="magic-rings" :style="blurStyle" />
</template>

<style scoped>
.magic-rings {
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
}

.magic-rings :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
}
</style>
