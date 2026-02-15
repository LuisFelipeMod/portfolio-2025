<template>
  <button
    class="lang-toggle"
    @click="toggle"
    :aria-label="locale === 'en' ? 'Mudar para português' : 'Switch to English'"
  >
    <span class="lang-toggle__label">{{ locale === 'en' ? 'PT' : 'EN' }}</span>
  </button>
</template>

<script setup>
import { useLanguage } from '../../composables/useLanguage.js'

const { locale, toggle } = useLanguage()
</script>

<style scoped>
.lang-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.lang-toggle:hover {
  color: var(--color-primary);
  background: var(--color-primary-glow);
}

.lang-toggle__label {
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.05em;
}
</style>
