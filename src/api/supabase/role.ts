import { supabase } from "../../lib/supabaseClient";

// 获取漫威英雄数据
export const getMarvelHeroList = async (limit = 5) => {
  try {
    const { data, error } = await supabase.from("marvel_heroes").select("*");
    console.log("123", data);

    if (error) throw error;

    return data || [];
  } catch (err) {
    console.error("获取数据失败：", err);
    return []; // 出错时返回空数组，避免前端崩溃
  }
};
