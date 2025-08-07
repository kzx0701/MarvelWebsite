// 轮播图数据管理
import { defineStore } from "pinia";
import { getBannerList } from "../api/supabase/banner";

interface indexBanner {
  id: number;
  imageUrl: string;
  // 其他字段...
}
export const useBannerStore = defineStore("banner", {
  state: () => ({
    indexBannerList: [] as indexBanner[],
  }),
  actions: {
    async fetchBannerList() {
      this.indexBannerList = await getBannerList();
    },
  },
});
