<template>
  <div :class="['card', { 'card--hoverable': hoverable }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--color-card-shadow);
  transition: all var(--transition-base);
}

.card--hoverable:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: var(--color-card-shadow), var(--color-card-glow);
}
</style>
