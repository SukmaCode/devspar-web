import Redis from "ioredis";

// ioredis otomatis melakukan connect() sehingga kita tidak perlu memanggil connect() lagi secara manual
const redisClient = new Redis(process.env.REDIS_URL || "redis://127.0.0.1:6379");

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

export default redisClient;