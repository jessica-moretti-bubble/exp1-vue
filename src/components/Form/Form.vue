<template>
    <form @submit.prevent="addProduct" :class="styles.productForm">
        <h2 :class="styles.formTitle">🛒 Aggiungi un nuovo prodotto</h2>

        <GenericInput label="Nome" placeholder="Scrivi nome" v-model="product.name" />

        <GenericInput label="Prezzo (€)" placeholder="Inserisci prezzo" type="number" v-model="product.price" />

        <GenericInput label="Anno" placeholder="Scrivi anno" type="number" v-model="product.year" />

        <GenericInput label="CPU Model" placeholder="Scrivi CPU model" v-model="product.cpuModel" />

        <GenericInput label="Hard Disk Size" placeholder="Scrivi Hard disk size" v-model="product.hardDiskSize" />

        <button type="submit" :class="[
            styles.submitBtn,
            buttonIsDisabled ? styles.submitBtnDisabled : ''
        ]" :disabled="buttonIsDisabled">
            ➕ Aggiungi prodotto
        </button>
    </form>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { useToast } from 'vue-toastification'
import GenericInput from '@/components/GenericInput/GenericInput.vue'
import styles from './form.module.css'

const apiUrl = import.meta.env.VITE_API_URL

const toast = useToast()

const product = reactive({
    name: '',
    price: 0,
    year: 0,
    cpuModel: '',
    hardDiskSize: ''
})

const buttonIsDisabled = computed(() => {
    return (
        !product.name.trim() ||
        !product.price ||
        !product.year ||
        !product.cpuModel.trim() ||
        !product.hardDiskSize.trim()
    )
})

const addProduct = async () => {


    const payload = {
        name: product.name,
        data: {
            year: product.year,
            price: product.price,
            'CPU model': product.cpuModel,
            'Hard disk size': product.hardDiskSize
        }
    }

    const { error } = await useFetch(`${apiUrl}/objects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).json()

    if (error.value) {
        toast.error('Errore durante la creazione del prodotto')
    } else {
        toast.success('Prodotto creato con successo!')
        Object.assign(product, {
            name: '',
            price: 0,
            year: 0,
            cpuModel: '',
            hardDiskSize: ''
        })
    }
}
</script>