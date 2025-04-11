# Chandler Weiner's Blog

A personal blog built with [Eleventy](https://www.11ty.dev/), a lightweight static site generator. Made to try and mimic the [Solo theme by Ghost](https://github.com/TryGhost/Solo).

This is my first attempt at coding with an AI assistant, as the site's structure was built using Cline and Anthropic's Claud 3.7 Sonnet.

## Features

- Responsive design with clean, minimal styling
- Blog post listing with featured images
- Individual post pages with featured images
- About page with custom permalink
- Fast build times
- No client-side JavaScript required
- Netlify-ready with proper configuration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: `http://localhost:8082`

## Project Structure

```
/
├── src/                  # Source files
│   ├── _data/            # Global data files
│   │   └── site.json     # Site configuration
│   ├── _includes/        # Layout templates
│   │   ├── base.njk      # Base layout
│   │   └── post.njk      # Post layout
│   ├── assets/           # Static assets
│   │   ├── css/          # CSS files
│   │   │   └── style.css # Main stylesheet
│   │   └── images/       # Image files
│   │       └── featured/ # Featured images for posts
│   ├── posts/            # Blog posts (Markdown)
│   ├── about.njk         # About page
│   ├── blog.njk          # Blog listing page
│   └── index.njk         # Home page
├── _site/                # Generated site (not committed to Git)
├── .eleventy.js          # Eleventy configuration
├── .gitignore            # Git ignore file
├── netlify.toml          # Netlify configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

### Files Not to Commit to Git

The following files and directories are excluded in the `.gitignore` file and should not be committed to your Git repository:

- `_site/` - The build output directory (Netlify will generate this)
- `node_modules/` - Node.js dependencies (Netlify will install these)
- `.cache/` and `.eleventy.cache/` - Cache directories
- `.netlify/` - Netlify local development files
- Various editor and OS-specific files (`.DS_Store`, `.vscode/`, etc.)

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate the static site in the `_site` directory, which can be deployed to any static hosting service.

## Deploying to Netlify

This project is configured for seamless deployment to Netlify using the included `netlify.toml` file.

### Deployment Steps

1. Push your repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click "New site from Git" and select your GitHub repository.
4. Netlify will automatically detect the build settings from the `netlify.toml` file.
5. Click "Deploy site".

That's it! Netlify will automatically build and deploy your site whenever you push changes to your GitHub repository. The `netlify.toml` file includes optimized settings for:

- Build configuration
- Asset optimization (CSS, JS, and image compression)
- Security headers
- Cache control
- Custom redirects

### Manual Deployment (Optional)

If you prefer to deploy manually:

1. Build your site: `npm run build`
2. Install the Netlify CLI: `npm install -g netlify-cli`
3. Log in to Netlify: `netlify login`
4. Deploy the site: `netlify deploy --prod --dir=_site`

## Customization

### Site Information

Edit `src/_data/site.json` to update site-wide information like title, description, and author details.

### Styling

The site uses vanilla CSS located in `src/assets/css/style.css`. Modify this file to change the site's appearance.

### Adding Content

- **Blog Posts**: Add new Markdown files to the `src/posts/` directory with the appropriate frontmatter.
  
  Example post frontmatter with featured image:
  ```yaml
  ---
  layout: post.njk
  title: My New Post
  date: 2025-04-11
  permalink: /my-new-post/
  tags: posts
  featured_image: /assets/images/featured/my-image.jpg
  ---
  ```

- **Pages**: Create new `.njk` or `.md` files in the `src/` directory.

### Featured Images

To add a featured image to a post:

1. Add your image to the `src/assets/images/featured/` directory.
2. Add a `featured_image` property to the post's frontmatter pointing to the image path.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
