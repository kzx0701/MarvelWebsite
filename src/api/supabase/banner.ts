import { supabase } from "../../lib/supabaseClient";

// 获取首页轮播图数据
export const getBannerList = async (limit = 5) => {
  try {
    const { data, error } = await supabase
      .from("marvel_heroes") // 假设表名为 banners
      .select("*")
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("获取轮播图失败：", err);
    return []; // 出错时返回空数组，避免前端崩溃
  }
};
