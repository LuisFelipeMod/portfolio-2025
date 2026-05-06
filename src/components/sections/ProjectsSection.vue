<template>
  <section id="projects" class="section" aria-label="Featured Projects">
    <div class="container">
      <div class="projects__header">
        <SectionTitle
          :badge="t('projects.badge').value"
          :title="t('projects.title').value"
          :subtitle="t('projects.subtitle').value"
        />
      </div>
      <div class="projects__grid">
        <BaseCard v-for="(project, i) in projectItems" :key="i" class="projects__card reveal" :style="{ transitionDelay: `${i * 120}ms` }">
          <div class="projects__image">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="projects__image-img" loading="lazy" />
            <div v-else class="projects__image-placeholder" :style="{ background: gradients[i] }">
              <span class="projects__image-label">{{ project.title }}</span>
            </div>
          </div>
          <div class="projects__info">
            <h3 class="projects__title">{{ project.title }}</h3>
            <p class="projects__desc">{{ project.description }}</p>
            <div class="projects__tech">
              <span v-for="tech in techStacks[i]" :key="tech" class="projects__tech-tag">{{ tech }}</span>
            </div>
            <div class="projects__links">
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="projects__link" aria-label="View project">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                {{ t('projects.liveDemo').value }}
              </a>
              <a v-if="project.source" :href="project.source" target="_blank" rel="noopener noreferrer" class="projects__link" aria-label="View source code">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                {{ t('projects.source').value }}
              </a>
            </div>
          </div>
        </BaseCard>
      </div>
      <div class="projects__view-all reveal">
        <router-link to="/projects" class="projects__view-all-link">
          {{ t('projects.viewAll').value }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </router-link>
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

const projectItems = computed(() => t('projects.items').value)

const techStacks = [
  ['Vue.js', 'SaaS', 'Railway'],
  ['Vue.js', 'SaaS'],
  ['NestJS', 'Vue 3', 'PostgreSQL', 'JWT'],
  ['Vue 3', 'NestJS', 'CRDTs', 'Socket.io'],
  ['PHP', 'REST API', 'JWT', 'MySQL'],
  ['Node.js', 'E2E Testing', 'REST API']
]

const gradients = [
  'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
  'linear-gradient(135deg, #14b8a6 0%, #6366f1 100%)'
]
</script>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.projects__card {
  overflow: hidden;
}

.projects__card :deep(.card) {
  padding: 0;
}

.projects__image {
  overflow: hidden;
}

.projects__image-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  display: block;
}

.projects__image-placeholder {
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.projects__image-label {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: #fff;
  opacity: 0.8;
}

.projects__info {
  padding: var(--space-5);
}

.projects__title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.projects__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.projects__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.projects__tech-tag {
  font-size: var(--text-xs);
  padding: var(--space-1) var(--space-2);
  background: var(--color-primary-glow);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
}

.projects__links {
  display: flex;
  gap: var(--space-4);
}

.projects__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.projects__link:hover {
  color: var(--color-primary);
}

.projects__view-all {
  display: flex;
  justify-content: center;
  margin-top: var(--space-8);
}

.projects__view-all-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.projects__view-all-link:hover {
  gap: var(--space-3);
}
</style>
