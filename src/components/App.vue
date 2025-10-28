<script setup>

</script>

<template>
  <div class="root">
    <NavigationMenu />
    <RouterView />
  </div>
</template>

<style scoped>
.root {
  background: black;
  color: white;
  min-height: 100vh;
  padding: 1rem;
}

:global(html, body) {
  margin: 0;
  height: 100%;
  background: black;
}
</style>
