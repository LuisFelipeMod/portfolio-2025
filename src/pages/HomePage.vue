<script setup>
import { onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import HeroSection from '../components/sections/HeroSection.vue'
import ExpertiseSection from '../components/sections/ExpertiseSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const { observe } = useScrollAnimation()

onMounted(() => {
  nextTick(() => {
    observe('.reveal')
  })
})
</script>

<template>
  <HeroSection />
  <ExpertiseSection />
  <ProjectsSection />
  <JourneySection />
  <TestimonialsSection />
  <ContactSection />
</template>
