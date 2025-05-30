<!-- 面包屑 -->
<template>
  <div class="breadcrumb-container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item.path">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

// 生成面包屑路径
const breadcrumbs = computed(() => {
  const matched = route.matched.filter((item) => item.meta?.title !== false);
  return matched.map((item) => ({
    path: item.path,
    title: item.meta?.title || "未命名",
  }));
});
</script>

<style scoped>
.breadcrumb-container {
  padding: 2rem 0;
}
:deep(.el-breadcrumb__inner.is-link) {
  font-weight: normal;
  color: #606266;
}
:deep(.el-breadcrumb__inner.is-link:hover) {
  font-weight: normal;
  color: #fff;
  cursor: pointer;
}
</style>
