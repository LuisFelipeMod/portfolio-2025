<template>
  <div class="section-title">
    <span v-if="badge" class="section-title__badge">{{ badge }}</span>
    <h2 class="section-title__heading">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: String,
  badge: String
})
</script>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-title__badge {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-glow);
  border-radius: var(--radius-full);
}

.section-title__heading {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.section-title__subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-inline: auto;
  line-height: var(--leading-relaxed);
}
</style>
