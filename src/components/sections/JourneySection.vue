<template>
  <section id="experience" class="section" aria-label="Professional Journey">
    <div class="container">
      <SectionTitle
        :badge="t('journey.badge').value"
        :title="t('journey.title').value"
        :subtitle="t('journey.subtitle').value"
      />
      <div class="timeline">
        <div
          v-for="(role, i) in roles"
          :key="i"
          class="timeline__item reveal"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="timeline__dot"></div>
          <div class="timeline__content">
            <span class="timeline__date">{{ role.period }}</span>
            <h3 class="timeline__title">{{ role.title }}</h3>
            <p class="timeline__company">{{ role.company }}</p>
            <p class="timeline__desc">{{ role.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage.js'
import SectionTitle from '../ui/SectionTitle.vue'

const { t } = useLanguage()

const roles = computed(() => t('journey.roles').value)
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: var(--space-8);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--color-border);
}

.timeline__item {
  position: relative;
  padding-bottom: var(--space-10);
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__dot {
  position: absolute;
  left: calc(-1 * var(--space-8) + 1px);
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 3px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-primary);
}

.timeline__date {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  background: var(--color-primary-glow);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.timeline__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-1);
}

.timeline__company {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.timeline__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
</style>
