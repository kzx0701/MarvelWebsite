<!-- 主页 -->
<template>
  <div class="home-container">
    <IndexCarousel />
  </div>
</template>

<script setup lang="ts">
import IndexCarousel from "../components/IndexCarousel.vue";
import { useRoleStore } from "../stores/role";
import { onMounted } from "vue";
const roleStore = useRoleStore();

onMounted(async () => {
  roleStore.fetchRoleList();
});
</script>

<style scoped lang="scss">
.home-container {
}
</style>
