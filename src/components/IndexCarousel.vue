<template>
  <el-carousel :interval="4000" motion-blur>
    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
      <img class="banner-img" :src="item.image" loading="lazy" />
      <div class="banner-text">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import banner1 from "../assets/sources/index_banner1.jpg";
import banner2 from "../assets/sources/index_banner2.jpg";
import banner3 from "../assets/sources/index_banner3.jpg";
const bannerList = ref([
  {
    title: "雷霆特工队今日上映",
    description: "漫威宇宙",
    image: banner1,
    link: "",
  },
  {
    title: "雷霆特工队今日上映",
    description: "漫威宇宙",
    image: banner2,
    link: "",
  },
  {
    title: "雷霆特工队今日上映",
    description: "漫威宇宙",
    image: banner3,
    link: "",
  },
]);
</script>

<style scoped>
.el-carousel {
  position: relative;
  /* width: 60%; */
  /* max-height: 500px; */
}
:deep(.el-carousel__container) {
  height: 550px;
  width: 100%;
}
.banner-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.banner-text {
  position: absolute;
  bottom: 20%;
  left: 10%;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}
</style>
