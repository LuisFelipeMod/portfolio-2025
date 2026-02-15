<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <nav class="header__nav container" aria-label="Main navigation">
      <router-link to="/" class="header__logo" aria-label="LM Dev - Home">
        <svg width="88" height="19" viewBox="0 0 88 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.688 17.88V14.52H38.868V17.88H35.688ZM43.536 17.88V9.53674e-07H49.38C51.2722 9.53674e-07 52.9173 0.379001 54.3152 1.137C55.7131 1.895 56.796 2.945 57.564 4.287C58.332 5.629 58.716 7.17886 58.716 8.93656C58.716 10.6789 58.332 12.225 57.564 13.575C56.796 14.925 55.7131 15.98 54.3152 16.74C52.9173 17.5 51.2722 17.88 49.38 17.88H43.536ZM46.806 15H49.452C50.6674 15 51.7202 14.75 52.6105 14.25C53.5008 13.75 54.192 13.0454 54.684 12.1363C55.176 11.2271 55.422 10.1551 55.422 8.92025C55.422 7.68542 55.1752 6.61735 54.6816 5.71605C54.1881 4.81475 53.4971 4.11675 52.6086 3.62205C51.7202 3.12735 50.668 2.88 49.452 2.88H46.806V15ZM67.23 18.168C65.886 18.168 64.709 17.864 63.699 17.256C62.689 16.648 61.904 15.826 61.344 14.79C60.784 13.754 60.504 12.6 60.504 11.328C60.504 10.02 60.791 8.857 61.365 7.839C61.939 6.821 62.715 6.018 63.693 5.43C64.671 4.842 65.774 4.548 67.002 4.548C68.014 4.548 68.911 4.714 69.693 5.046C70.475 5.378 71.137 5.839 71.679 6.429C72.221 7.019 72.634 7.696 72.918 8.46C73.202 9.224 73.344 10.044 73.344 10.92C73.344 11.152 73.333 11.386 73.311 11.622C73.289 11.858 73.25 12.068 73.194 12.252H63.114V9.852H71.406L69.912 10.968C70.068 10.232 70.037 9.576 69.819 9C69.601 8.424 69.247 7.968 68.757 7.632C68.267 7.296 67.682 7.128 67.002 7.128C66.334 7.128 65.747 7.294 65.241 7.626C64.735 7.958 64.35 8.439 64.086 9.069C63.822 9.699 63.718 10.46 63.774 11.352C63.706 12.16 63.813 12.869 64.095 13.479C64.377 14.089 64.793 14.563 65.343 14.901C65.893 15.239 66.534 15.408 67.266 15.408C67.982 15.408 68.591 15.256 69.093 14.952C69.595 14.648 69.992 14.244 70.284 13.74L72.828 14.97C72.572 15.594 72.171 16.147 71.625 16.629C71.079 17.111 70.433 17.488 69.687 17.76C68.941 18.032 68.122 18.168 67.23 18.168ZM79.416 17.88L74.292 4.836H77.712L81.45 15.09H80.172L83.916 4.836H87.342L82.206 17.88H79.416Z" fill="#007AFF"/>
          <path d="M4.76837e-07 17.88V9.53674e-07H3.27V15H10.92V17.88H4.76837e-07ZM13.032 17.88V9.53674e-07H16.152L22.854 9.096H21.36L27.912 9.53674e-07H31.032V17.88H27.762V3.726L29.034 4.038L22.224 13.08H21.84L15.216 4.038L16.302 3.726V17.88H13.032Z" fill="white"/>
        </svg>
      </router-link>

      <ul class="header__links" :class="{ 'header__links--open': menuOpen }" role="list">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="header__link"
            @click.prevent="handleNavClick(link.id)"
          >
            {{ link.label.value }}
          </a>
        </li>
      </ul>

      <div class="header__actions">
        <LanguageToggle />
        <ThemeToggle />
        <BaseButton variant="primary" small @click="handleNavClick('contact')">
          {{ t('nav.letsTalk').value }}
        </BaseButton>
        <button
          class="header__hamburger"
          :class="{ 'header__hamburger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          aria-controls="mobile-menu"
          :aria-expanded="menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'
import { useLanguage } from '../../composables/useLanguage.js'
import ThemeToggle from '../ui/ThemeToggle.vue'
import LanguageToggle from '../ui/LanguageToggle.vue'
import BaseButton from '../ui/BaseButton.vue'

const router = useRouter()
const route = useRoute()
const { scrollTo } = useSmoothScroll()
const { t } = useLanguage()

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { id: 'about', label: t('nav.about') },
  { id: 'expertise', label: t('nav.expertise') },
  { id: 'projects', label: t('nav.projects') },
  { id: 'experience', label: t('nav.experience') }
]

const handleNavClick = (id) => {
  menuOpen.value = false
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => scrollTo(id), 100)
    })
  } else {
    scrollTo(id)
  }
}

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all var(--transition-base);
  border-bottom: 1px solid transparent;
}

.header--scrolled {
  border-bottom-color: var(--color-border);
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
}

.header__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
}

.header__logo-text {
  color: var(--color-text);
}

.header__links {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.header__link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  position: relative;
}

.header__link:hover {
  color: var(--color-text);
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.header__link:hover::after {
  width: 100%;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
}

.header__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.header__hamburger--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__hamburger--open span:nth-child(2) {
  opacity: 0;
}

.header__hamburger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .header__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-8);
    background: var(--color-bg);
    transform: translateX(100%);
    transition: transform var(--transition-base);
  }

  .header__links--open {
    transform: translateX(0);
  }

  .header__link {
    font-size: var(--text-2xl);
  }

  .header__hamburger {
    display: flex;
  }

  .header__actions .btn {
    display: none;
  }
}
</style>
