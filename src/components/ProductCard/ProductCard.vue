<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import ActionButton from '../ActionButton.vue'

interface Product {
    id: string
    name: string
    data?: Record<string, any> | null
}

const props = defineProps<{ item: Product }>()

const handleRemove = async () => {
    const apiUrl = import.meta.env.VITE_API_URL

    const { error } = await useFetch(`${apiUrl}/objects/${props.item.id}`, {
        method: 'DELETE',
    })

    if (error.value) {
        console.error('Errore durante la DELETE:', error.value)
    } else {
        console.log(`✅ Prodotto "${props.item.name}" eliminato correttamente`)
    }
}
</script>

<template>
    <div class="product">
        <h3>{{ item.name }}</h3>

        <ul v-if="item.data">
            <li v-for="(val, key) in item.data" :key="key">
                <strong>{{ key }}:</strong> {{ val }}
            </li>
        </ul>
        <p v-else>Nessun dettaglio disponibile</p>

        <div class="buttonsContainer">
            <ActionButton title="Rimuovi" :action="handleRemove" type="remove" />
            <ActionButton title="Visualizza" :action="handleRemove" type="view" />

        </div>


    </div>
</template>

<style scoped>
.product {
    background: #1a1a1a;
    color: white;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.buttonsContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.product:hover {
    transform: translateY(-2px);
    transition: transform 0.15s;
}
</style>
