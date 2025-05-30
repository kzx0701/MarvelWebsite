// 全局方法
import type { Router } from "vue-router";
export const setGlobalProperties = (app: any, router: Router) => {
  // 路由跳转方法
  app.config.globalProperties.$go = (path: string) => {
    router.push(path);
  };
};
