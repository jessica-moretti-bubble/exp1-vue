<script setup lang="ts">
const props = defineProps<{
    title: string
    type: 'remove' | 'view'
    action: () => void
}>()
</script>

<template>
    <button :class="['btn', type === 'remove' ? 'remove-btn' : 'view-btn']" @click="action">
        {{ title }}
    </button>
</template>

<style scoped>
.btn {
    border: none;
    border-radius: 0.5rem;
    padding: 0.4rem 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
}

.remove-btn {
    background: #ff4444;
    color: white;
}

.remove-btn:hover {
    background: #ff6666;
    transform: translateY(-1px);
}

.view-btn {
    background: #2ecc71;
    color: white;
}

.view-btn:hover {
    background: #48e68b;
    transform: translateY(-1px);
}
</style>
