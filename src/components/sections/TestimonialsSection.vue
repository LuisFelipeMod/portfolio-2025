<template>
  <section class="section" aria-label="Testimonials">
    <div class="container">
      <SectionTitle
        :badge="t('testimonials.badge').value"
        :title="t('testimonials.title').value"
        :subtitle="t('testimonials.subtitle').value"
      />
      <div class="testimonials__grid">
        <BaseCard
          v-for="(item, i) in testimonials"
          :key="i"
          class="testimonials__card reveal"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <svg class="testimonials__quote" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="testimonials__text">{{ item.text }}</p>
          <div class="testimonials__author">
            <div class="testimonials__avatar">{{ item.name.charAt(0) }}</div>
            <div>
              <p class="testimonials__name">{{ item.name }}</p>
              <p class="testimonials__role">{{ item.role }}</p>
            </div>
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

const testimonials = computed(() => t('testimonials.items').value)
</script>

<style scoped>
.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.testimonials__card {
  position: relative;
}

.testimonials__quote {
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.testimonials__text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonials__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonials__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
}

.testimonials__name {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
}

.testimonials__role {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
