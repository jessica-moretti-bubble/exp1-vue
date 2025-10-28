<template>
    <div v-if="isLoading">Caricamento prodotto...</div>

    <div v-else-if="p" class="productDetail">
        <h1>{{ p.name }}</h1>

        <ul v-if="p.data">
            <li v-for="(val, key) in p.data" :key="key">
                <strong>{{ key }}:</strong> {{ val }}
            </li>
        </ul>
        <p v-else>Nessun dettaglio disponibile</p>

        <button @click="$router.back()" class="backBtn">⬅ Torna ai prodotti</button>
    </div>

    <p v-else class="noProduct">
        ⚠️ Nessun prodotto trovato.
    </p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useFetch } from '@vueuse/core'

const route = useRoute()

const apiUrl = import.meta.env.VITE_API_URL

const product = ref(route.state?.product || null)

const isLoading = ref(false)

onMounted(async () => {
    if (!product.value && route.params.id) {
        isLoading.value = true

        const { data, error } = await useFetch(`${apiUrl}/objects/${route.params.id}`).json()

        if (error.value) {
            console.error('Errore nel caricamento del prodotto:', error.value)
        } else {
            product.value = data.value
        }
        isLoading.value = false
    }
})

const p = computed(() => product.value)

</script>

<style scoped>
.productDetail {
    background: #1a1a1a;
    color: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    max-width: 600px;
    margin: 2rem auto;
}

.backBtn {
    margin-top: 1.5rem;
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    border: none;
    color: #fff;
    padding: 0.7rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.backBtn:hover {
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.noProduct {
    color: #aaa;
    text-align: center;
    margin-top: 3rem;
}
</style>
