import { supabase } from "../config/supabase.js";
import redisClient from "../cache/redis.js";

export const getAllAvatar = async () => {
    const cacheKey = "avatars:all";
    const cachedAvatar = await redisClient.get(cacheKey);

    if (cachedAvatar) {
        return JSON.parse(cachedAvatar);
    }

    const { data, error } = await supabase
        .from("avatars")
        .select("*")
        .order("id", { ascending: true });

    if (error) throw error;
    
    // Simpan ke Redis dengan waktu kadaluarsa 1 jam (3600 detik)
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};

export const getAvatarById = async (id) => {
    const cacheKey = `avatars:${id}`;
    const cachedAvatar = await redisClient.get(cacheKey);

    if (cachedAvatar) {
        return JSON.parse(cachedAvatar);
    }

    const { data, error } = await supabase
        .from("avatars")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};
