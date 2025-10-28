import { createApp } from 'vue'
import App from './components/App.vue'
import { router } from '../router'
import NavigationMenu from './components/NavigationMenu/NavigationMenu.vue'
import ProductCard from './components/ProductCard/ProductCard.vue'
import ActionButton from './components/ActionButton.vue'

createApp(App).use(router).component('NavigationMenu', NavigationMenu).component('ProductCard', ProductCard).component('ActionButton', ActionButton).mount('#app')
