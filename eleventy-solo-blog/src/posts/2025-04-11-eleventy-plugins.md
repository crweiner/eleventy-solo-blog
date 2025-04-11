---
layout: post.njk
title: Enhancing Your Eleventy Blog with Plugins
date: 2025-04-11
permalink: /2025-04-11-eleventy-plugins/
tags: posts
featured_image: /assets/images/featured/hacktoberfest.png
---

# Enhancing Your Eleventy Blog with Plugins

Eleventy is a powerful static site generator that becomes even more versatile when you add plugins. In this post, I'll show you some of the plugins I've added to my blog and how they enhance the user experience.

## Syntax Highlighting

One of the most useful plugins for technical blogs is syntax highlighting. Here's an example of JavaScript code with syntax highlighting:

```javascript
// A simple function to calculate Fibonacci numbers
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate the first 10 Fibonacci numbers
const fibSequence = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log(fibSequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

And here's some CSS:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

## Embedding Content

The embed-everything plugin makes it easy to include content from various platforms. For example, here's a YouTube video:

https://www.youtube.com/watch?v=dQw4w9WgXcQ

And here's a tweet:

https://twitter.com/11ty/status/1458909300270354434

## Optimized Images

The eleventy-img plugin automatically generates optimized images in multiple formats and sizes. Here's an example using the image shortcode:

{% image "./src/assets/images/featured/hacktoberfest.png", "Hacktoberfest logo", "(min-width: 30em) 50vw, 100vw" %}

## External Links

All external links on this blog automatically open in a new tab, thanks to the external-links plugin. Try clicking on [this link to Eleventy's website](https://www.11ty.dev/).

## SEO Improvements

The SEO plugin adds appropriate meta tags, Open Graph data, and Twitter card information to make the content more shareable and discoverable.

## RSS Feed

An RSS feed is now available at [/feed.xml](/feed.xml), allowing readers to subscribe to the blog using their favorite RSS reader.

## Conclusion

These plugins have significantly enhanced the functionality and user experience of my Eleventy blog. The best part is how easy they are to implement and configure.

What plugins do you use with your static site generator? Let me know in the comments!
