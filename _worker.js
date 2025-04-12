export default {
  async fetch(request, env) {
    // Get the URL and pathname
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Clone the request to pass to the origin
    const response = await env.ASSETS.fetch(request.clone());

    // Return the response from the origin
    return response;
  }
};
