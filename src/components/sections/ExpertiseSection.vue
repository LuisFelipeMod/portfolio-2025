<template>
  <section id="expertise" class="section" aria-label="My Expertise">
    <div class="container">
      <SectionTitle
        :badge="t('expertise.badge').value"
        :title="t('expertise.title').value"
        :subtitle="t('expertise.subtitle').value"
      />
      <div class="expertise__grid">
        <BaseCard v-for="(item, i) in expertiseItems" :key="i" class="reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <div class="expertise__icon" v-html="icons[i]"></div>
          <h3 class="expertise__title">{{ item.title }}</h3>
          <p class="expertise__desc">{{ item.description }}</p>
          <div class="expertise__tags">
            <span v-for="tag in tags[i]" :key="tag" class="expertise__tag">{{ tag }}</span>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage.js'
import SectionTitle from '../ui/SectionTitle.vue'
import BaseCard from '../ui/BaseCard.vue'

const { t } = useLanguage()

const expertiseItems = computed(() => t('expertise.items').value)

const icons = [
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
]

const tags = [
  ['React', 'Vue.js', 'Next.js', 'TypeScript'],
  ['Node.js', 'Express', 'PHP', 'Socket.io'],
  ['Cypress', 'Jest', 'CI/CD', 'AI Agents']
]
</script>

<style scoped>
.expertise__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .expertise__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.expertise__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--color-primary-glow);
  color: var(--color-primary);
  margin-bottom: var(--space-5);
}

.expertise__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-3);
}

.expertise__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-5);
}

.expertise__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.expertise__tag {
  font-size: var(--text-xs);
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-alt);
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}
</style>
