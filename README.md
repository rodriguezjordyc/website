# personal website

Personal website and blog hosted on GitHub Pages with custom domain.

## Structure

This is a static HTML website with a clean, minimalist design featuring:

### Pages
- **Homepage** (`/`) - Landing page with profile and about section
- **About** (`/about/`) - Dedicated about page (same content as homepage)
- **Blog** (`/blog/`) - Blog index and individual post views

### Key Features

**Clean URL Structure**
- Directory-based routing with `index.html` files for clean URLs (no `.html` extensions)
- Custom domain: `jordy.space`
- Absolute paths (`/style.css`, `/images/`, etc.) for consistent asset loading across all pages

**Notion-Powered Blog**
- Blog content is dynamically fetched from Notion API via `scripts/fetch-blog-content.js`
- Posts are stored in `blog-content.json` and rendered client-side via `blog-notion.js`
- Images are downloaded from Notion and stored in `/images/` directory
- Automatic updates every 6 hours via GitHub Actions workflow

**GitHub Actions Automation**
- `.github/workflows/update-blog.yml` - Fetches latest blog posts from Notion and commits changes
- Requires `NOTION_API_KEY` secret in repository settings

**Responsive Design**
- Mobile-first approach with hamburger menu on small screens
- Custom styling in `style.css` with dark mode support
- Minimalist typography using Gidole font with fallback to Latin Modern Roman

### Directory Structure

```
/
├── index.html              # Homepage
├── about/
│   └── index.html          # About page
├── blog/
│   └── index.html          # Blog page
├── style.css               # Global styles
├── menu.js                 # Mobile menu functionality
├── blog-notion.js          # Blog rendering and navigation
├── blog-content.json       # Blog posts data (auto-generated)
├── images/                 # Blog post images (auto-generated)
├── pics/                   # Profile and static images
├── Fonts/                  # Custom fonts
├── scripts/
│   └── fetch-blog-content.js  # Notion API integration
├── .github/workflows/
│   └── update-blog.yml     # Automated blog updates
├── CNAME                   # Custom domain configuration
└── 404.html                # 404 error page
```

## Deployment

- **Hosting**: GitHub Pages (builds from `main` branch root)
- **Custom Domain**: `jordy.space` (configured via DNS A records pointing to GitHub Pages IPs)
- **SSL**: Automatic HTTPS via GitHub Pages

## Local Development

Simply open `index.html` in a browser. No build process required - it's pure HTML, CSS, and vanilla JavaScript.