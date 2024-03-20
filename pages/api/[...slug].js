// pages/api/[...slug].js

import { NextApiRequest, NextApiResponse } from "next";
import LRUCache from "lru-cache";

// Create an LRU cache instance
const cache = new LRUCache({
  max: 100, // Maximum number of items in the cache
  maxAge: 1000 * 60 * 60, // Cache entries expire after 1 hour (in milliseconds)
});

// Middleware function to cache server responses
const cacheMiddleware = (handler) => {
  return async (req, res) => {
    const cacheKey = req.url;

    // Check if the response is already cached
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
      console.log("Cache hit:", cacheKey);
      return res.status(200).json(cachedResponse);
    }

    // If response is not cached, call the handler to generate the response
    const response = await handler(req, res);

    // Cache the response for future requests
    cache.set(cacheKey, response);

    return response;
  };
};

// Example API route using caching middleware
const handler = async (req, res) => {
  // Your API logic here
  const data = { message: "Hello, world!" };
  return res.status(200).json(data);
};

export default cacheMiddleware(handler);
