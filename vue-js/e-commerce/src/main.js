import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/styles.css' 
import '@/assets/img/bg.jpg'
import '@/assets/img/foodies.gif'

createApp(App).use(router).mount('#app')
