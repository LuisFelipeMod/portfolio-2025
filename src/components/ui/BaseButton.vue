<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to || undefined"
    :href="href"
    :class="['btn', `btn--${variant}`, { 'btn--sm': small }]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'ghost'].includes(v)
  },
  href: String,
  to: [String, Object],
  small: Boolean
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  white-space: nowrap;
  cursor: pointer;
  line-height: 1.5;
}

.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
}

.btn--primary {
  background: var(--color-primary);
  color: #ffffff;
  border: 1px solid var(--color-primary);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
  box-shadow: 0 0 20px var(--color-primary-glow);
  transform: translateY(-1px);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-1px);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid transparent;
}

.btn--ghost:hover {
  color: var(--color-primary);
}
</style>
