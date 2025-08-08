// 轮播图数据管理
import { defineStore } from "pinia";
import { getIndexBannerList } from "../api/supabase/banner";

interface indexBanner {
  id: number;
  banner_img: string;
  banner_title: string;
  banner_subtitle: string;

  // 其他字段...
}
export const useBannerStore = defineStore("banner", {
  state: () => ({
    indexBannerList: [] as indexBanner[],
  }),
  actions: {
    async fetchBannerList() {
      this.indexBannerList = await getIndexBannerList();
    },
  },
});
