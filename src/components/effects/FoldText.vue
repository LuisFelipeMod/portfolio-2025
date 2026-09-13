<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HINGE_CONFIG = {
  top: { origin: '50% 0%', rotateX: -92, rotateY: 0 },
  bottom: { origin: '50% 100%', rotateX: 92, rotateY: 0 },
  left: { origin: '0% 50%', rotateX: 0, rotateY: 92 },
  right: { origin: '100% 50%', rotateX: 0, rotateY: -92 }
}

const CREASE_GRADIENTS = {
  top: 'linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.22) 42%, rgba(255, 255, 255, 0.26) 100%)',
  bottom: 'linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.22) 42%, rgba(255, 255, 255, 0.26) 100%)',
  left: 'linear-gradient(90deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.22) 42%, rgba(255, 255, 255, 0.26) 100%)',
  right: 'linear-gradient(270deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.22) 42%, rgba(255, 255, 255, 0.26) 100%)'
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const props = defineProps({
  text: { type: String, default: '' },
  splitBy: { type: String, default: 'char' },
  hinge: { type: String, default: 'top' },
  duration: { type: Number, default: 0.65 },
  stagger: { type: Number, default: 0.045 },
  ease: { type: String, default: 'power3.out' },
  perspective: { type: Number, default: 700 },
  creaseShading: { type: Number, default: 0.4 },
  trigger: { type: String, default: 'scroll' },
  fontSize: { type: [String, Number], default: undefined },
  fontWeight: { type: [String, Number], default: undefined },
  color: { type: String, default: undefined }
})

const rootRef = ref(null)

const hingeConfig = computed(() => HINGE_CONFIG[props.hinge] || HINGE_CONFIG.top)
const creaseGradient = computed(() => CREASE_GRADIENTS[props.hinge] || CREASE_GRADIENTS.top)
const safeCrease = computed(() => clamp(props.creaseShading, 0, 1))
const safePerspective = computed(() => Math.max(120, props.perspective))

const rootStyle = computed(() => {
  const style = {}
  if (props.fontSize != null) {
    style.fontSize = typeof props.fontSize === 'number' ? `${props.fontSize}px` : props.fontSize
  }
  if (props.fontWeight != null) {
    style.fontWeight = props.fontWeight
  }
  if (props.color) {
    style.color = props.color
  }
  return style
})

const items = computed(() => {
  if (props.splitBy === 'line') {
    return props.text.split('\n').map((line, index) => ({
      type: 'segment',
      key: `segment-line-${index}`,
      data: { content: line || '\u00A0', split: 'line' }
    }))
  }

  if (props.splitBy === 'word') {
    let segmentIndex = 0
    const result = []
    props.text.split(/(\s+)/).forEach((part, index) => {
      if (!part) return
      if (/^\s+$/.test(part)) {
        part.split(/(\n)/).forEach((wsPart, wsIndex) => {
          if (wsPart === '\n') result.push({ type: 'br', key: `ws-${index}-br-${wsIndex}` })
          else if (wsPart) {
            result.push({
              type: 'whitespace',
              key: `ws-${index}-space-${wsIndex}`,
              text: wsPart.replace(/ /g, '\u00A0')
            })
          }
        })
        return
      }
      segmentIndex += 1
      result.push({
        type: 'segment',
        key: `segment-word-${segmentIndex}`,
        data: { content: part, split: 'word' }
      })
    })
    return result
  }

  const result = []
  Array.from(props.text).forEach((char, index) => {
    if (char === '\n') {
      result.push({ type: 'br', key: `br-${index}` })
      return
    }
    result.push({
      type: 'segment',
      key: `segment-char-${index}`,
      data: { content: char === ' ' ? '\u00A0' : char, split: 'char' }
    })
  })
  return result
})

let ctx
let hoverHandler = null
let hoverRoot = null

const teardownAnimation = () => {
  if (hoverHandler && hoverRoot) {
    hoverRoot.removeEventListener('mouseenter', hoverHandler)
  }
  hoverHandler = null
  hoverRoot = null
  ctx?.revert()
  ctx = null
}

const setupAnimation = () => {
  if (typeof window === 'undefined') return
  const root = rootRef.value
  if (!root) return

  teardownAnimation()

  const pieces = Array.from(root.querySelectorAll('.fold-text-piece'))
  if (!pieces.length) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const activeDuration = reduceMotion ? Math.min(props.duration, 0.22) : props.duration
  const activeStagger = reduceMotion ? Math.min(props.stagger, 0.02) : props.stagger
  const fromVars = {
    opacity: 0,
    rotateX: reduceMotion ? 0 : hingeConfig.value.rotateX,
    rotateY: reduceMotion ? 0 : hingeConfig.value.rotateY,
    '--fold-crease': reduceMotion ? 0 : safeCrease.value,
    transformOrigin: hingeConfig.value.origin,
    force3D: true
  }
  const toVars = {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    '--fold-crease': 0,
    duration: activeDuration,
    ease: reduceMotion ? 'power1.out' : props.ease,
    stagger: activeStagger,
    clearProps: 'willChange'
  }

  ctx = gsap.context(() => {
    const play = (repeat) => gsap
      .timeline({ repeat: repeat ? -1 : 0, repeatDelay: repeat ? 0.75 : 0 })
      .fromTo(pieces, fromVars, toVars)

    if (props.trigger === 'hover') {
      gsap.set(pieces, {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        '--fold-crease': 0,
        transformOrigin: hingeConfig.value.origin
      })
      hoverHandler = () => play(false)
      hoverRoot = root
      root.addEventListener('mouseenter', hoverHandler)
    } else if (props.trigger === 'scroll') {
      gsap.set(pieces, fromVars)
      ScrollTrigger.create({
        trigger: root,
        start: 'top 82%',
        once: true,
        onEnter: () => play(false)
      })
    } else if (props.trigger === 'loop') {
      play(true)
    } else {
      play(false)
    }
  }, root)
}

onMounted(() => {
  setupAnimation()
})

onUnmounted(() => {
  teardownAnimation()
})

watch(
  () => [
    props.text,
    props.splitBy,
    props.hinge,
    props.duration,
    props.stagger,
    props.ease,
    props.perspective,
    safeCrease.value,
    props.trigger,
    hingeConfig.value.origin,
    hingeConfig.value.rotateX,
    hingeConfig.value.rotateY
  ],
  async () => {
    await nextTick()
    setupAnimation()
  }
)
</script>

<template>
  <span
    ref="rootRef"
    class="fold-text"
    :data-trigger="trigger"
    :style="rootStyle"
  >
    <span class="sr-only">{{ text }}</span>
    <span class="fold-text__live" aria-hidden="true">
      <template v-for="item in items" :key="item.key">
        <br v-if="item.type === 'br'" />
        <span v-else-if="item.type === 'whitespace'">{{ item.text }}</span>
        <span
          v-else
          class="fold-text-segment"
          :class="item.data.split === 'line' ? 'fold-text-segment--line' : null"
          :data-fold-split="item.data.split"
          :style="{ '--fold-perspective': `${safePerspective}px` }"
        >
          <span
            class="fold-text-piece"
            :data-fold-hinge="hinge"
            :style="{
              transformOrigin: hingeConfig.origin,
              '--fold-crease': 0,
              '--fold-crease-bg': creaseGradient
            }"
          >
            {{ item.data.content }}
          </span>
        </span>
      </template>
    </span>
  </span>
</template>

<style scoped>
.fold-text {
  display: block;
  max-width: 100%;
  white-space: normal;
  overflow-wrap: break-word;
  user-select: text;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}

.fold-text-segment {
  display: inline-block;
  vertical-align: baseline;
  line-height: inherit;
  perspective: min(420px, var(--fold-perspective));
  transform-style: preserve-3d;
}

@media (min-width: 768px) {
  .fold-text-segment {
    perspective: var(--fold-perspective);
  }
}

.fold-text__live {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.fold-text-segment--line {
  display: block;
  width: 100%;
}

.fold-text-piece {
  display: inline-block;
  position: relative;
  color: inherit;
  line-height: inherit;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.fold-text-piece::after {
  content: '';
  position: absolute;
  inset: -0.08em -0.02em;
  border-radius: 0.08em;
  pointer-events: none;
  background-image: var(--fold-crease-bg);
  opacity: var(--fold-crease, 0);
  mix-blend-mode: multiply;
}

.fold-text[data-trigger="scroll"] .fold-text-piece {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fold-text[data-trigger="scroll"] .fold-text-piece {
    opacity: 1;
  }

  .fold-text-piece {
    transform: none !important;
  }

  .fold-text-piece::after {
    opacity: 0 !important;
  }
}
</style>
