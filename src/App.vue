<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme.js'
import { useLanguage } from './composables/useLanguage.js'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

const { init } = useTheme()
const { init: initLanguage } = useLanguage()

onMounted(() => {
  init()
  initLanguage()
})
</script>

<template>
  <AppHeader />
  <main id="main-content">
    <router-view />
  </main>
  <AppFooter />
</template>
