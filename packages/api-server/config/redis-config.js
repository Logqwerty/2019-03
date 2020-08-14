const redis = require('redis');

const redisClient = redis.createClient(
  process.env.REDIS_PORT || 6379,
  process.env.REDIS_HOST || '127.0.0.1',
  { password: process.env.REDIS_PASSWORD },
);

module.exports = redisClient;
