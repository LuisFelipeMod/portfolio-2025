import { ref, watchEffect } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const init = () => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      theme.value = saved
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme.value = 'light'
    }
  }

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  })

  const isDark = () => theme.value === 'dark'

  return { theme, toggle, init, isDark }
}
