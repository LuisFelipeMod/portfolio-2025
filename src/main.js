import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/utilities.css'

createApp(App).use(router).mount('#app')
