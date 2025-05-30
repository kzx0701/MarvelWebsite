import { defineStore } from "pinia";
export const useNavStore = defineStore("nav", {
  state: () => ({
    // 当前选中主菜单
    currentPath: "/",
    // 当前选中子菜单
    currentSubPath: "",
    // 导航列表
    navList: [
      {
        name: "首页",
        path: "/",
        default: true,
      },
      {
        name: "漫威资讯",
        path: "/news",
      },
      {
        name: "漫威百科",
        path: "/encyclopedia",
        children: [
          { name: "主要角色", path: "/encyclopedia/roles", icon: "heroicons:user" },
          { name: "重要事件", path: "/encyclopedia/events", icon: "heroicons:user" },
        ],
      },
      {
        name: "漫威影视",
        path: "/media",
        children: [
          { name: "漫威电影", path: "/movies", icon: "heroicons:user" },
          { name: "漫威剧集", path: "/tv-series", icon: "heroicons:user" },
        ],
      },
      {
        name: "资源下载",
        path: "/download",
        children: [
          { name: "影视资源", path: "/media", icon: "heroicons:user" },
          { name: "漫画资源", path: "/comic", icon: "heroicons:user" },
        ],
      },
    ],
  }),
  actions: {
    setCurrentPath(path: string, subPath?: string) {
      this.currentPath = path;
      this.currentSubPath = subPath || "";
    },
  },
});
