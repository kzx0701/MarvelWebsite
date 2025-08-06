<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="main-container">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.main-container {
  background-color: #000000d6;
  min-height: 100vh;
}
</style>
