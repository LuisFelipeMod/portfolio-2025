<template>
  <section id="about" class="hero section" aria-label="Introduction">
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" class="hero__social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="hero__social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div class="hero__visual reveal">
        <div class="hero__code-editor">
          <div class="hero__code-header">
            <div class="hero__code-dots">
              <span class="dot dot--red"></span>
              <span class="dot dot--yellow"></span>
              <span class="dot dot--green"></span>
            </div>
            <span class="hero__code-filename">developer.ts</span>
          </div>
          <pre class="hero__code-body"><code><span class="code-keyword">const</span> <span class="code-var">developer</span> = {
  <span class="code-key">name</span>: <span class="code-string">"Luis Felipe"</span>,
  <span class="code-key">role</span>: <span class="code-string">"Full-Stack Engineer"</span>,
  <span class="code-key">skills</span>: [
    <span class="code-string">"Vue.js"</span>, <span class="code-string">"React"</span>, <span class="code-string">"Next.js"</span>,  <span class="code-string">"Nest.js"</span>, 
    <span class="code-string">"Node.js"</span>, <span class="code-string">"TypeScript"</span>, <span class="code-string">"PHP"</span>, <span class="code-string">"Laravel"</span>
  ],
  <span class="code-key">passion</span>: <span class="code-string">"{{ t('hero.codePassion').value }}"</span>
};</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'
import { useLanguage } from '../../composables/useLanguage.js'
import BaseButton from '../ui/BaseButton.vue'

const { scrollTo } = useSmoothScroll()
const { t } = useLanguage()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
  }
}

.hero__greeting {
  font-size: var(--text-lg);
  color: var(--color-primary);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-4);
}

.hero__name {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
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

/* Code editor mockup */
.hero__code-editor {
  background: var(--color-surface);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--color-card-shadow);
}

.hero__code-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-border);
}

.hero__code-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot--red { background: #ef4444; }
.dot--yellow { background: #eab308; }
.dot--green { background: #22c55e; }

.hero__code-filename {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.hero__code-body {
  padding: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  overflow-x: auto;
}

.code-keyword { color: #c084fc; }
.code-var { color: #60a5fa; }
.code-key { color: #67e8f9; }
.code-string { color: #86efac; }
</style>
