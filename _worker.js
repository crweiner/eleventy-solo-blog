// Cloudflare Pages _worker.js for Eleventy static site
// This file is optional, only needed for advanced routing or custom logic
// For a basic Eleventy site, you usually don't need a _worker.js file.

export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  }
};
