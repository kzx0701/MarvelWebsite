<!-- 组件：首页轮播图 -->
<template>
  <div class="container">
    <!-- 左侧banner -->
    <div class="banner-container">
      <el-carousel :interval="5000" direction="vertical" activeIndex="1" trigger="click" ref="carouselRef">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <div class="banner-img" :style="{ '--bg-banner-image': 'url(' + item.image + ')' }"  />
          <div class="banner-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 右侧列表 -->
    <div class="cards">
      <div
        class="card"
        :style="{ '--bg-image': 'url(' + item.image + ')' }"
        @mouseenter="(e) => handleMouseEnter(e, index)"
        v-for="(item, index) in bannerList"
        :key="index">
        <p class="tip">{{ item.title }}</p>
        <p class="second-text">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import banner1 from "../assets/sources/index_banner1.jpg";
import banner2 from "../assets/sources/index_banner2.jpg";
import banner3 from "../assets/sources/index_banner3.jpg";
// 获取轮播图组件实例
const carouselRef = ref<any>(null);

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
  {
    title: "雷霆特工队今日上映",
    description: "漫威宇宙",
    image: banner3,
    link: "",
  },
  {
    title: "雷霆特工队今日上映",
    description: "漫威宇宙",
    image: banner3,
    link: "",
  },
]);
// 列表悬浮事件
const handleMouseEnter = (e: any, index: number) => {
  console.log("hover", e, index);
  carouselRef.value.setActiveItem(index);
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 65vh;
  .banner-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px; /* 增加圆角增强质感 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* 深色阴影增强立体感 */
  }

  .cards {
    width: 20%;
    height: calc(100% - 20px);
    padding: 0 25px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 20%;
    width: 100%;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 更自然的过渡曲线 */
    border: 1px solid rgba(255, 255, 255, 0.05); /* 细边框增强轮廓 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background: linear-gradient(90deg, #000 30%, transparent 70%), var(--bg-image) bottom right / cover no-repeat;
  }

  .cards .card p.tip {
    font-size: 1rem;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: 0.7rem;
  }

  .cards .card:hover {
    transform: scale(1.08, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
}
.el-carousel {
  position: relative;
  width: 100%;
}
:deep(.el-carousel__container) {
  height: 65vh;
  width: 100%;
  text-align: center;
}

.banner-img {
  height: 100%;
  width: 90%;
  object-fit: cover;
  object-position: bottom;
  filter: brightness(0.75) contrast(1.1);
  transition: transform 8s ease;
  background: linear-gradient(90deg, transparent 40%, #000 90%), var(--bg-banner-image) bottom left / cover no-repeat;
  &:hover {
    transform: scale(1.05);
  }
}
.banner-text {
  position: absolute;
  bottom: 15%;
  left: 5%;
  z-index: 10; /* 确保文字在遮罩上方 */
  max-width: 60%;
  color: #fff;
  h2 {
    font-size: 2rem;
    margin: 0 0 10px 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    margin: 0;
  }
}
</style>
