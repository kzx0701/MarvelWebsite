<!-- 顶部通用导航 -->
<script setup lang="ts">
import { useNavStore } from "../stores/navStore";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const navStore = useNavStore();
const activeSubmenu = ref<number | null>(null);

const showSubmenu = (index: number) => {
  activeSubmenu.value = index;
  console.log(activeSubmenu.value);
};

const hideSubmenu = () => {
  activeSubmenu.value = null;
};

// 判断是否是当前页面
const isActive = (path: string) => {
  return navStore.currentPath === path;
};
</script>

<template>
  <nav class="nav-bar">
    <!-- logo区 -->
    <img class="logo" src="../assets/images/Marvel_Logo.svg" />
    <!-- 导航区 -->
    <div class="nav-container">
      <div
        class="nav-item"
        :class="{ active: isActive(item.path) }"
        v-for="(item, index) in navStore.navList"
        :key="index"
        @mouseenter="showSubmenu(index)"
        @mouseleave="hideSubmenu()"
        @click="$go(item.path)">
        <a class="title">{{ item.name }}</a>
        <!-- 使用Transition包裹子菜单 -->
        <Transition name="slide">
          <div class="submenu" v-if="item.children && activeSubmenu === index">
            <a v-for="(subItem, subIndex) in item.children" :key="subIndex" :href="subItem.path" class="submenu-item">
              {{ subItem.name }}
            </a>
          </div>
        </Transition>
      </div>
    </div>
    <!-- 个人区 -->
    <div class="right-container">
      <!-- 搜索框 -->
      <div class="search-container">
        <el-icon color="#9e9ea7" class="no-inherit icon">
          <Search />
        </el-icon>
        <input placeholder="查询" type="search" class="input" />
      </div>
      <div class="personal-container">
        <img class="avatar" src="../assets/images/avatar_default.png" />
        <div>游客</div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-bar {
  background-color: black;
  color: white;
  padding: 0 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  position: fixed; /* 改为固定定位 */
  top: 0; /* 固定在顶部 */
  left: 0; /* 左侧对齐 */
  right: 0; /* 右侧对齐 */
  z-index: 1000; /* 确保导航栏在最上层 */
}

.logo {
  width: 8rem;
}

.nav-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  flex: 1;
}

.nav-item {
  position: relative;
  cursor: pointer;
  padding: 0 2rem;
  transition: all 0.3s ease;
  height: 100%;
  width: 4rem;
  align-content: center;
  text-align: center;
  font-size: 1rem;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-weight: normal;
}

.nav-item.active {
  background-color: var(--primary-color);
  .title {
    font-weight: bold;
  }
}

.nav-item:hover {
  background-color: var(--primary-color);
  .title {
    font-weight: bold;
  }
}

.personal-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  .avatar {
    width: 1rem;
  }
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  border-radius: 0 0 4px 4px;
}

/* 过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  transform-origin: top center;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: scaleY(1);
  opacity: 1;
}

.submenu-item {
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--primary-color);
    font-weight: bold;
  }
}

.right-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-container {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 200px;
  .input {
    width: 100%;
    line-height: 28px;
    padding: 0.3rem 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #2d2d2d;
    color: #c9c9c9;
    transition: 0.3s ease;
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 1em;
      width: 1em;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23c9c9c9'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>")
        no-repeat 50% 50%;
      cursor: pointer;
    }
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    background-color: #5f5f5f;
    // border-color: var(--primary-color);
    // box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    width: 1rem;
    height: 1rem;
  }
}
</style>
