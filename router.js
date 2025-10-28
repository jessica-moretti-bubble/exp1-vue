import Backoffice from "@/pages/Backoffice.vue";
import Product from "@/pages/Product.vue";
import Products from "@/pages/Products.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {path: '/', component: Products},
    {path: '/backoffice', component: Backoffice},
    { path: '/product/:id', component: Product },

]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})