<!-- 主页 -->
<template>
  <div class="scroll-container" ref="container">
    <!-- 第一屏 -->
    <section class="scroll-section">
      <IndexCarousel />
    </section>
    <!-- 第二屏 -->
    <section class="scroll-section">
      <div>55555555551</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import IndexCarousel from "../components/IndexCarousel.vue";
import { useRoleStore } from "../stores/role";
import { ref, onMounted, watch, useTemplateRef } from "vue";
import { useScroll, useWindowSize } from "@vueuse/core";
const roleStore = useRoleStore();

// 屏幕数量
const container = useTemplateRef<HTMLElement>("container");
// 当前索引
const currentIndex = ref(0);

// 使用useScroll监听滚动
const { y } = useScroll(container);
const { height: windowHeight } = useWindowSize();

// 监听滚动位置更新当前索引
watch(y, (newY) => {
  if (windowHeight) {
    const newIndex = Math.round(newY / Number(windowHeight));
    currentIndex.value = Math.max(0, Math.min(newIndex, document.querySelectorAll(".scroll-section").length - 1));
  }
});

// 数据初始化
onMounted(() => {
  roleStore.fetchRoleList();
});
</script>

<style scoped lang="scss">
.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* 添加以下代码隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  /* Chrome, Safari 和 Opera */
  .scroll-container::-webkit-scrollbar {
    display: none;
  }
  .scroll-section {
    height: 100vh;
    scroll-snap-align: start;
    width: 100%;
  }
}
</style>
