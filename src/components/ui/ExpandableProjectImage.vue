<template>
  <div class="expandable-project-image">
    <button
      v-if="src"
      type="button"
      class="expandable-project-image__trigger"
      :aria-label="expandLabel"
      @click="openLightbox"
    >
      <img :src="src" :alt="alt" class="expandable-project-image__img" loading="lazy" />
    </button>
    <div
      v-else
      class="expandable-project-image__placeholder"
      :style="{ background: gradient }"
    >
      <span class="expandable-project-image__label">{{ tagline || alt }}</span>
    </div>

    <Teleport to="body">
      <div
        v-if="isOpen && src"
        class="expandable-project-image__overlay"
        role="presentation"
        @click="closeLightbox"
      >
        <div
          class="expandable-project-image__dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="alt"
          @click.stop
        >
          <button
            ref="closeRef"
            type="button"
            class="expandable-project-image__close"
            :aria-label="closeLabel"
            @click="closeLightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img :src="src" :alt="alt" class="expandable-project-image__expanded" />
          <p class="expandable-project-image__caption">{{ alt }}</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { useLanguage } from '../../composables/useLanguage.js'

const props = defineProps({
  src: String,
  alt: {
    type: String,
    required: true
  },
  tagline: String,
  gradient: String
})

const { t } = useLanguage()

const isOpen = ref(false)
const closeRef = ref(null)
const dialogRef = ref(null)
let previousOverflow = ''

const expandLabel = computed(() => t('projects.expandImage').value)
const closeLabel = computed(() => t('projects.closeExpandedImage').value)

function openLightbox() {
  isOpen.value = true
}

function closeLightbox() {
  isOpen.value = false
}

function onKeydown(event) {
  if (!isOpen.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    closeLightbox()
  }
}

watch(isOpen, (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
    nextTick(() => closeRef.value?.focus())
  } else {
    document.body.style.overflow = previousOverflow
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  document.body.style.overflow = previousOverflow
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.expandable-project-image__trigger {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: zoom-in;
  text-align: inherit;
}

.expandable-project-image__trigger:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.expandable-project-image__img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  display: block;
  transition: opacity var(--transition-fast);
}

.expandable-project-image__trigger:hover .expandable-project-image__img {
  opacity: 0.92;
}

.expandable-project-image__placeholder {
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.expandable-project-image__label {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: #fff;
  opacity: 0.8;
  text-align: center;
  padding: 0 var(--space-4);
  line-height: var(--leading-relaxed);
}

.expandable-project-image__overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  animation: expandable-project-image-fade-in 0.2s ease;
}

.expandable-project-image__dialog {
  position: relative;
  max-width: min(1200px, 100%);
  max-height: min(90vh, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.expandable-project-image__close {
  position: absolute;
  top: calc(-1 * var(--space-10));
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.expandable-project-image__close:hover {
  background: var(--color-primary);
  color: #fff;
}

.expandable-project-image__close:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.expandable-project-image__expanded {
  max-width: 100%;
  max-height: calc(90vh - 3rem);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.expandable-project-image__caption {
  margin: 0;
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
}

@keyframes expandable-project-image-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .expandable-project-image__overlay {
    animation: none;
  }

  .expandable-project-image__img {
    transition: none;
  }
}
</style>
