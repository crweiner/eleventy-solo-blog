---
layout: post.njk
title: Customizing Your Eleventy Blog
date: 2025-04-12
excerpt: Learn how to customize your Eleventy blog with layouts, includes, and data files.
tags: posts
---

Once you have a basic Eleventy blog up and running, you'll want to customize it to match your style and needs. This post covers some common customization techniques.

## Working with Layouts

Layouts in Eleventy allow you to define the common structure of your pages. They're typically stored in the `_includes` directory.

A basic layout might look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/blog/">Blog</a>
      <a href="/about/">About</a>
    </nav>
  </header>
  
  <main>
    {{ content | safe }}
  </main>
  
  <footer>
    <p>&copy; 2025 My Blog</p>
  </footer>
</body>
</html>
```

## Using Data Files

Data files allow you to store site-wide information that can be accessed from any template. They're stored in the `_data` directory.

For example, you might create a `site.json` file:

```json
{
  "title": "My Awesome Blog",
  "description": "A blog about web development and other cool stuff",
  "author": "Your Name"
}
```

Then you can access this data in your templates:

```html
<title>{{ site.title }}</title>
<meta name="description" content="{{ site.description }}">
```

## Custom Filters

Eleventy allows you to create custom filters to transform data in your templates. For example, you might want to format dates in a specific way:

```javascript
eleventyConfig.addFilter("readableDate", dateObj => {
  return new Date(dateObj).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
```

Then in your templates:

```html
<time>{{ post.date | readableDate }}</time>
```

## Collections

Collections in Eleventy allow you to group content together. The most common use is for blog posts.

You can create a collection by tagging your content:

```yaml
---
tags: posts
---
```

Then you can access all posts with:

```html
{% for post in collections.posts %}
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
{% endfor %}
```

## Conclusion

Eleventy provides many ways to customize your blog. By using layouts, data files, custom filters, and collections, you can create a unique and personalized blog that meets your specific needs.
