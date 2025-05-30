<!-- 主页 -->
<template>
  <div class="home-container">
    <IndexCarousel class="index-carousel" />
    <LatestNews class="latest-news" />
  </div>
</template>

<script setup lang="ts">
import IndexCarousel from "../components/IndexCarousel.vue";
import LatestNews from "../components/LatestNews.vue";
</script>

<style scoped lang="scss">
.home-container {
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  .index-carousel {
    width: 70%;
  }
  .latest-news {
    width: 30%;
  }
}
</style>
