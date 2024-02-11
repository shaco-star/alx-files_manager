import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => console.log('Redis Client Error', err));
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const value = await this.client.get(key);
    return value;
  }

  async set(key, value, expiration) {
    this.client.set(key, value);
  }

  async del(key) {
    this.client.del(key);
  }
}

export const redisClient = new RedisClient();
export default redisClient;
