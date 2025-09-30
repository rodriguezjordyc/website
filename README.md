# personal website

Static website hosted on GitHub Pages at `jordy.space`

## Key Features

- **Notion API Integration**: Blog posts automatically fetched from Notion via `scripts/fetch-blog-content.js` and updated every 6 hours through GitHub Actions
- **Minimalist Styling**: Custom CSS with dark mode support, using Gidole font with clean typography
- **Directory-based routing**: Clean URLs with `index.html` in subdirectories (`/about/`, `/blog/`)

## Structure

```
/
├── index.html              # Homepage
├── about/
│   └── index.html          # About page
├── blog/
│   └── index.html          # Blog page
├── style.css               # Global styles
├── menu.js                 # Mobile menu
├── blog-notion.js          # Blog rendering
├── blog-content.json       # Blog data (auto-generated)
├── images/                 # Blog images (auto-generated)
├── pics/                   # Profile images
├── Fonts/                  # Custom fonts
├── scripts/
│   └── fetch-blog-content.js  # Notion API integration
├── .github/workflows/
│   └── update-blog.yml     # Automated blog updates
└── CNAME                   # Custom domain
```