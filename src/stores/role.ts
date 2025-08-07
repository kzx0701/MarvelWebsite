// 角色数据管理
import { defineStore } from "pinia";
import { getMarvelHeroList } from "../api/supabase/role";

interface role {
  id: number;
  name: string;
  // 其他字段...
}
export const useRoleStore = defineStore("role", {
  state: () => ({
    roleList: [] as role[],
  }),
  actions: {
    async fetchRoleList() {
      this.roleList = await getMarvelHeroList();
    },
  },
});
