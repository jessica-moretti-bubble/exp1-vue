<template>
    <h1>Products</h1>

    <p v-if="isFetching">Caricamento...</p>
    <p v-else-if="error">Errore</p>

    <div v-else class="productsWrapper">
        <ProductCard v-for="p in data" :key="p.id" :item="p" />
    </div>
</template>

<style scoped>
.productsWrapper {
    max-height: 70vh;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
const apiUrl = import.meta.env.VITE_API_URL
const { data, isFetching, error } = useFetch(`${apiUrl}/objects`).json()
</script>
