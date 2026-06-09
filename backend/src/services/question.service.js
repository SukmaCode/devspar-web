import { supabase } from "../config/supabase.js";
import redisClient from "../cache/redis.js";

export const getQuestionsByLevelId = async (levelId) => {
    const cacheKey = `questions:level:${levelId}`;
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("level_id", levelId)
        .order("id", { ascending: true });
    
    if (error) throw error;
    
    await redisClient.set(cacheKey, 3600, JSON.stringify(data));
    return data;
};