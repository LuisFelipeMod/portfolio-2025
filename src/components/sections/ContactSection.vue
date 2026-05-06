<template>
  <section id="contact" class="section" aria-label="Contact">
    <div class="container">
      <div class="contact reveal">
        <div class="contact__content">
          <div class="contact__text">
            <h2 class="contact__heading">
              {{ t('contact.heading1').value }}<br />
              <span class="contact__heading--accent">{{ t('contact.heading2').value }}</span> {{ t('contact.heading3').value }}
            </h2>
            <p class="contact__subtitle">
              {{ t('contact.subtitle').value }}
            </p>
            <a href="mailto:luisgmodesto12@gmail.com" class="contact__email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              luisgmodesto12@gmail.com
            </a>
            <div class="contact__social">
              <a href="https://github.com/LuisFelipeMod" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" class="contact__social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/luisfelipegm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="contact__social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <form class="contact__form" @submit.prevent="handleSubmit" aria-label="Contact form">
          <div class="contact__field">
            <input
              v-model="form.name"
              type="text"
              :placeholder="t('contact.namePlaceholder').value"
              class="contact__input"
              required
              aria-label="Name"
            />
          </div>
          <div class="contact__field">
            <input
              v-model="form.email"
              type="email"
              :placeholder="t('contact.emailPlaceholder').value"
              class="contact__input"
              required
              aria-label="Email address"
            />
          </div>
          <div class="contact__field">
            <textarea
              v-model="form.message"
              :placeholder="t('contact.messagePlaceholder').value"
              class="contact__input contact__textarea"
              required
              rows="5"
              aria-label="Message"
            ></textarea>
          </div>
          <BaseButton variant="primary" type="submit" :disabled="sending">
            {{ sending ? t('contact.sending').value : t('contact.submit').value }}
            <svg v-if="!sending" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </BaseButton>
          <p v-if="status === 'success'" class="contact__success">{{ t('contact.success').value }}</p>
          <p v-if="status === 'error'" class="contact__error">{{ t('contact.error').value }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage.js'
import BaseButton from '../ui/BaseButton.vue'

const { t } = useLanguage()

const form = reactive({ name: '', email: '', message: '' })
const sending = ref(false)
const status = ref('')

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const handleSubmit = async () => {
  sending.value = true
  status.value = ''

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        message: form.message
      })
    })

    const data = await res.json()

    if (data.success) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
      setTimeout(() => { status.value = '' }, 5000)
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-2xl);
}

.contact__content {
  display: flex;
  gap: var(--space-12);
  align-items: flex-start;
}

.contact__text {
  flex: 1;
  text-align: left;
}

.contact__heading {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.contact__heading--accent {
  color: var(--color-primary);
}

.contact__subtitle {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.contact__email {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  margin-bottom: var(--space-4);
}

.contact__email:hover {
  color: var(--color-primary);
}

.contact__social {
  display: flex;
  gap: var(--space-3);
}

.contact__social-link {
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

.contact__social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.contact__form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  align-items: flex-end;
}

.contact__field {
  width: 100%;
}

.contact__input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  color: var(--color-text);
  font-family: inherit;
  transition: border-color var(--transition-fast);
}

.contact__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact__input::placeholder {
  color: var(--color-text-muted);
}

.contact__input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.contact__success {
  font-size: var(--text-sm);
  color: #22c55e;
}

.contact__error {
  font-size: var(--text-sm);
  color: #ef4444;
}

.contact__form .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact__content {
    flex-direction: column;
    gap: var(--space-8);
  }

  .contact__subtitle {
    margin-bottom: 0;
  }

  .contact {
    padding: var(--space-10) var(--space-6);
  }
}
</style>
