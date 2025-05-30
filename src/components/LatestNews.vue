<!-- 最新资讯 -->
<template>
  <div>
    <div class="module-title text-yellow-400">最新资讯</div>
    <div class="news-container">
        <MiniCard v-for="(item, index) in newsList" :key="index" :title="item.title" :desc="item.desc" />
      <!-- <div class="news-item" v-for="(item, index) in newsList" :key="index">
        <img :src="item.image" />
        <div class="news-content">
          <div>
            <div class="news-title">{{ item.title }}</div>
            <div class="news-desc">{{ item.desc }}</div>
          </div>
          <div>
            <div class="time-container">
              <el-icon color="#999"><Clock /></el-icon>
              <div class="news-createtime">{{ item.createTime }}</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import latestNews from "../assets/sources/latest_news.jpg";
import MiniCard from "./MiniCard.vue";
// import { Clock } from "@element-plus/icons-vue";
const newsList = ref([
  { title: "最新新闻1", desc: "这是最新新闻1的内容。", createTime: "2025-05-23", image: latestNews },
  { title: "最新新闻2", desc: "这是最新新闻2的内容。", createTime: "2025-05-23", image: latestNews },
  { title: "最新新闻3", desc: "这是最新新闻3的内容。", createTime: "2025-05-23", image: latestNews },
]);
</script>

<style scoped lang="scss">
.module-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.news-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  img {
    width: 7rem;
    height: 7rem;
  }
  .news-content {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7rem;
    .time-container {
      display: flex;
      align-items: center;
      .news-createtime {
        color: #999;
        font-size: 0.8rem;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
