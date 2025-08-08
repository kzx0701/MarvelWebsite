<!-- 主页 -->
<template>
  <div class="home-container" ref="container">
    <!-- 第一屏 -->
    <IndexCarousel />
    <!-- 第二屏 -->
    <div class="screen-section" v-if="screensCount > 1">
      <div>55555555551</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IndexCarousel from "../components/IndexCarousel.vue";
import { useRoleStore } from "../stores/role";
import { ref, onMounted, watch, useTemplateRef } from "vue";
import { useScroll } from "@vueuse/core";
const roleStore = useRoleStore();
// 屏幕数量和当前索引
const container = useTemplateRef<HTMLElement>("container");
const screensCount = 4;
const currentIndex = ref(0);
const isScrolling = ref(false);
// 使用useScroll监听滚动
const { y } = useScroll(container);
const headerHeight = 5 * 16; // 5rem转换为px
// 监听滚动位置变化
watch(y, (newY) => {
  console.log(y.value, newY);

  if (isScrolling.value) return;

  const newIndex = Math.round((newY + headerHeight) / window.innerHeight);

  if (newIndex !== currentIndex.value) {
    isScrolling.value = true;
    currentIndex.value = newIndex;

    // 平滑滚动到目标屏幕
    container.value?.scrollTo({
      top: currentIndex.value * window.innerHeight - headerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.value = false;
    }, 800);
  }
});

// 数据初始化
onMounted(() => {
  roleStore.fetchRoleList();
});
</script>

<style scoped lang="scss">
.home-container {
  height: 100vh;

  .screen-section {
    height: 100vh;
  }
}
</style>
