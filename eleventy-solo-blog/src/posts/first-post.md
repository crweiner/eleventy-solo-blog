---
layout: post.njk
title: Getting Started with Eleventy
date: 2025-04-11
excerpt: Learn how to build a static site with Eleventy, a simple and flexible static site generator.
tags: posts
---

Eleventy (11ty) is a simple static site generator that's perfect for building blogs, documentation sites, and more. It's flexible, fast, and doesn't require you to learn a complex framework.

## Why Eleventy?

There are many static site generators out there, so why choose Eleventy?

- **Zero client-side JavaScript** - Eleventy generates plain HTML, which means your site loads quickly and works without JavaScript.
- **Use the templating language you prefer** - Eleventy supports multiple templating languages, including Nunjucks, Liquid, Handlebars, and more.
- **Simple to learn** - If you know HTML, CSS, and a bit of JavaScript, you can build a site with Eleventy.
- **Highly customizable** - Eleventy doesn't force you into a specific structure or way of doing things.

## Getting Started

To create a new Eleventy site, you'll need to:

1. Install Node.js and npm
2. Create a new directory for your project
3. Initialize a new npm project with `npm init -y`
4. Install Eleventy with `npm install @11ty/eleventy --save-dev`
5. Create your first template file
6. Run Eleventy with `npx eleventy --serve`

## Basic Configuration

Eleventy uses a `.eleventy.js` file for configuration. Here's a simple example:

```javascript
module.exports = function(eleventyConfig) {
  // Copy the assets directory to the output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
```

## Creating Content

Eleventy supports Markdown for content creation, which makes writing blog posts easy. You can use front matter (the YAML at the top of the file) to add metadata to your posts.

## Conclusion

Eleventy is a great choice for building static sites. It's simple to learn, flexible, and produces fast-loading websites. Give it a try for your next project!
