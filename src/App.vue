<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="main-container">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.main-container {
  padding: 5rem 15rem 0;
  background-color: #000000d4;
}
</style>
