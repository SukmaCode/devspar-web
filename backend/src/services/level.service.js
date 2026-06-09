import { supabase } from "../config/supabase.js";
import redisClient from "../cache/redis.js";

export const getAllLevels = async () => {
    const cacheKey = "levels:all";
    const cachedLevels = await redisClient.get(cacheKey);

    if (cachedLevels) {
        return JSON.parse(cachedLevels);
    }

    const { data, error } = await supabase
        .from("levels")
        .select("*")
        .order("course_id")
        .order("id", { ascending: true });

    if (error) throw error;
    
    // Simpan ke Redis dengan waktu kadaluarsa 1 jam (3600 detik)
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};

export const getLevelById = async (id) => {
    const cacheKey = `levels:${id}`;
    const cachedLevel = await redisClient.get(cacheKey);

    if (cachedLevel) {
        return JSON.parse(cachedLevel);
    }

    const { data, error } = await supabase
        .from("levels")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};