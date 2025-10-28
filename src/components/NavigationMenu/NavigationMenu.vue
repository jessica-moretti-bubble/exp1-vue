<script setup lang="ts">
import styles from './style.module.css'
</script>

<template>
    <nav :class="styles.nav">
        <RouterLink :class="styles.btn" to="/" :active-class="styles.active">
            Products
        </RouterLink>

        <RouterLink :class="styles.btn" to="/backoffice" :active-class="styles.active">
            Backoffice
        </RouterLink>
    </nav>
</template>
