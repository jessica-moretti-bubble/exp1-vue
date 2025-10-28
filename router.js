import Backoffice from "@/pages/Backoffice.vue";
import Product from "@/pages/Product.vue";
import Products from "@/pages/Products.vue";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', component: Products},
    {path: '/backoffice', component: Backoffice},
    { path: '/product/:id', component: Product, name: 'ProductDetail' },

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})