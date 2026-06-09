import { supabase } from "../config/supabase.js";
import redisClient from "../cache/redis.js";

export const getAllCourses = async () => {
    const cacheKey = "courses:all";
    const cachedCourses = await redisClient.get(cacheKey);

    if (cachedCourses) {
        return JSON.parse(cachedCourses);
    }

    const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("id", { ascending: true });

    if (error) throw error;
    
    // Simpan ke Redis dengan waktu kadaluarsa 1 jam (3600 detik)
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};

export const getCoursesById = async (id) => {
    const cacheKey = `courses:${id}`;
    const cachedCourses = await redisClient.get(cacheKey);

    if (cachedCourses) {
        return JSON.parse(cachedCourses);
    }

    const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    
    await redisClient.setex(cacheKey, 3600, JSON.stringify(data));

    return data;
};