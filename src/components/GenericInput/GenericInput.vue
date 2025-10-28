<template>
    <div :class="styles.inputGroup">
        <label v-if="label" :for="id" :class="styles.label">{{ label }}</label>
        <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', castValue($event.target.value))" :class="styles.input" />
    </div>
</template>

<script setup lang="ts">
import styles from './generic-input.module.css'

interface Props {
    label?: string
    placeholder?: string
    type?: string
    id?: string
    modelValue: string | number
}

const props = defineProps<Props>()
defineEmits(['update:modelValue'])

const castValue = (val: string) => (props.type === 'number' ? Number(val) : val)
</script>