const externalLinks = require('eleventy-plugin-external-links');
const Image = require('@11ty/eleventy-img');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const embedEverything = require('eleventy-plugin-embed-everything');
const pluginSEO = require('eleventy-plugin-seo');

// Image shortcode function
async function imageShortcode(src, alt, sizes = "100vw") {
  if (!src) {
    throw new Error(`Missing image source`);
  }
  if (!alt) {
    throw new Error(`Missing alt text for image: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./_site/img/",
    urlPath: "/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Add external links plugin to open links in new tab
  eleventyConfig.addPlugin(externalLinks, {
    domain: 'chandlerweiner.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  });

  // Add image optimization plugin
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);

  // Add embed everything plugin
  eleventyConfig.addPlugin(embedEverything);

  // Add SEO plugin
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Chandler Weiner",
    description: "Scientist, Techie, Tea Lover, and Traveler",
    url: "https://chandlerweiner.com",
    author: "Chandler Weiner",
    twitter: "c_dubbs",
    image: "/assets/images/chandler-weiner.jpg",
    options: {
      titleDivider: "|",
      imageWithBaseUrl: true
    }
  });

  // Copy the assets directory to the output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch for changes in the assets directory
  eleventyConfig.addWatchTarget("src/assets");
  
  // Configure the Sass plugin (if you decide to use it)
  // This would require additional setup with a plugin like eleventy-sass

  // Create a date filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add a limit filter for collections
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add a W3C date filter for the datetime attribute
  eleventyConfig.addFilter("w3DateFilter", function(date) {
    return date ? new Date(date).toISOString().slice(0, 10) : '';
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
