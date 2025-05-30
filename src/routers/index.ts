import { createRouter, createWebHistory } from "vue-router";
import { useNavStore } from "../stores/navStore";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Roles from "../views/Roles.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, meta: { title: "首页" } },
    { path: "/news", component: News, meta: { title: "新闻资讯" } },
    {
      path: "/encyclopedia",
      meta: { title: "漫威百科" },
      children: [{ path: "roles", component: Roles, meta: { title: "主要角色", parentPath: "/encyclopedia" } }],
    },
  ],
});

// 添加全局前置守卫
router.beforeEach((to) => {
  const navStore = useNavStore();
  // 获取父路径，优先从路由meta中获取，没有则使用匹配的第一个路径
  // const parentPath = to.meta.parentPath || to.matched[0]?.path || '/';
  navStore.setCurrentPath(to.path);
  console.log("111", to.path,to.meta);
});
export default router;
