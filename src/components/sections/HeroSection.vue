<template>
  <section id="about" class="hero section" aria-label="Introduction">
    <div class="hero__rings" aria-hidden="true">
      <MagicRings
        :color="ringsColor"
        :color-two="ringsColorTwo"
        :opacity="ringsOpacity"
        :ring-count="ringsCount"
        :speed="0.65"
        :attenuation="ringsAttenuation"
        :line-thickness="ringsThickness"
        :base-radius="0.28"
        :radius-step="0.09"
        :scale-rate="0.08"
        :noise-amount="ringsNoise"
        :rotation="18"
        :ring-gap="ringsGap"
        :fade-in="0.7"
        :fade-out="0.5"
        :follow-mouse="!isNarrow"
        :mouse-influence="isNarrow ? 0 : 0.14"
        :hover-scale="1.08"
        :parallax="0.04"
        :click-burst="false"
        :ink-composite="!isDark"
      />
    </div>
    <div class="container hero__container">
      <div class="hero__content">
        <p class="hero__greeting reveal">{{ t('hero.greeting').value }}</p>
        <h1 class="hero__name reveal">
          Luis Felipe<br />
          <span class="hero__name--accent">G. Modesto</span>
        </h1>
        <p class="hero__subtitle reveal">
          {{ t('hero.subtitle').value }}
        </p>
        <div class="hero__actions reveal">
          <BaseButton variant="primary" @click="scrollTo('projects')">
            {{ t('hero.viewWork').value }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </BaseButton>
          <BaseButton variant="outline" href="/cv.pdf" download>
            {{ t('hero.downloadCv').value }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </BaseButton>
        </div>
        <div class="hero__social reveal">
          <a href="https://github.com/LuisFelipeMod" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" class="hero__social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/luisfelipegm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="hero__social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'
import { useLanguage } from '../../composables/useLanguage.js'
import { useTheme } from '../../composables/useTheme.js'
import BaseButton from '../ui/BaseButton.vue'
import MagicRings from '../effects/MagicRings.vue'

const { scrollTo } = useSmoothScroll()
const { t } = useLanguage()
const { theme } = useTheme()

const isNarrow = ref(false)
let narrowQuery
const syncNarrow = () => { isNarrow.value = narrowQuery.matches }

onMounted(() => {
  narrowQuery = window.matchMedia('(max-width: 767px)')
  syncNarrow()
  narrowQuery.addEventListener('change', syncNarrow)
})

onUnmounted(() => {
  narrowQuery?.removeEventListener('change', syncNarrow)
})

const isDark = computed(() => theme.value === 'dark')
const ringsColor = computed(() => isDark.value ? '#60a5fa' : '#1d4ed8')
const ringsColorTwo = computed(() => isDark.value ? '#67e8f9' : '#0891b2')
const ringsCount = computed(() => isNarrow.value ? 3 : 5)
const ringsThickness = computed(() => {
  if (isDark.value) return isNarrow.value ? 1.5 : 2
  return isNarrow.value ? 14 : 11
})
const ringsAttenuation = computed(() => {
  if (isDark.value) return isNarrow.value ? 12 : 9
  return isNarrow.value ? 38 : 46
})
const ringsOpacity = computed(() => {
  if (isDark.value) return isNarrow.value ? 0.58 : 0.94
  return isNarrow.value ? 0.95 : 1
})
const ringsNoise = computed(() => isDark.value ? 0.05 : 0.012)
const ringsGap = computed(() => isDark.value ? 1.6 : 1.85)
</script>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding-top: 72px;
  overflow: visible;
}

.hero__rings {
  --rings-opacity: 0.58;
  position: absolute;
  z-index: 0;
  pointer-events: none;
  top: 36%;
  right: 0;
  bottom: auto;
  left: auto;
  width: min(280px, 78vw);
  height: min(280px, 40vh);
  transform: none;
  opacity: 0;
  animation: hero-rings-in 1.4s ease 0.25s forwards;
  -webkit-mask-image: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    #000 68%,
    rgba(0, 0, 0, 0.7) 88%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    #000 68%,
    rgba(0, 0, 0, 0.7) 88%,
    transparent 100%
  );
}

@keyframes hero-rings-in {
  from { opacity: 0; }
  to { opacity: var(--rings-opacity, 0.58); }
}

.hero__container {
  position: relative;
  z-index: auto;
  width: 100%;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 36rem;
  width: min(100%, 36rem);
}

@media (min-width: 768px) {
  .hero__rings {
    --rings-opacity: 0.85;
    top: 50%;
    right: 0;
    bottom: auto;
    width: min(520px, 54vw);
    height: min(520px, calc(100dvh - 144px));
    transform: translateY(-50%);
    -webkit-mask-image: radial-gradient(
      ellipse 100% 100% at 52% 50%,
      #000 72%,
      rgba(0, 0, 0, 0.7) 90%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 100% 100% at 52% 50%,
      #000 72%,
      rgba(0, 0, 0, 0.7) 90%,
      transparent 100%
    );
  }
}

@media (min-width: 1024px) {
  .hero__rings {
    --rings-opacity: 1;
    top: 50%;
    right: 2%;
    width: min(680px, 50vw);
    height: min(680px, calc(100dvh - 144px));
  }
}

:global([data-theme="light"]) .hero__rings {
  mix-blend-mode: normal;
  filter: saturate(1.7) contrast(1.22);
}

@media (max-width: 767px) {
  :global([data-theme="light"]) .hero__rings {
    --rings-opacity: 0.9;
  }
}

.hero__greeting {
  font-size: var(--text-lg);
  color: var(--color-primary);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-4);
}

.hero__name {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
  overflow-wrap: anywhere;
}

@media (min-width: 768px) {
  .hero__name {
    font-size: var(--text-6xl);
  }
}

.hero__name--accent {
  color: var(--color-primary);
}

.hero__subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 480px;
  margin-bottom: var(--space-8);
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.hero__social {
  display: flex;
  gap: var(--space-4);
}

.hero__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.hero__social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}
</style>
