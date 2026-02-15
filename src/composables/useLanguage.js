import { ref, computed } from 'vue'
import en from '../i18n/en.js'
import pt from '../i18n/pt.js'

const locale = ref('en')
const messages = { en, pt }

function resolve(obj, key) {
  return key.split('.').reduce((o, k) => o?.[k], obj)
}

export function useLanguage() {
  const init = () => {
    const saved = localStorage.getItem('locale')
    if (saved && messages[saved]) {
      locale.value = saved
    } else if (navigator.language?.startsWith('pt')) {
      locale.value = 'pt'
    }
  }

  const toggle = () => {
    locale.value = locale.value === 'en' ? 'pt' : 'en'
    localStorage.setItem('locale', locale.value)
  }

  const t = (key) => {
    return computed(() => resolve(messages[locale.value], key))
  }

  return { locale, toggle, t, init }
}
