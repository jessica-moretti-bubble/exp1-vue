import { createApp } from 'vue'
import App from './components/App.vue'
import { router } from '../router'
import NavigationMenu from './components/NavigationMenu/NavigationMenu.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


createApp(App).use(router).component('NavigationMenu', NavigationMenu).use(Toast).mount('#app')
