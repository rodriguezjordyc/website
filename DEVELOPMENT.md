# Development Guide

Project documentation for working on this codebase.

## Project Overview

Minimalist personal website and blog hosted on GitHub Pages at `jordy.space`. Static site using vanilla HTML, CSS, and JavaScript with markdown-based blog posts.

## Development Commands

### Local Development
```bash
# No build step required - open index.html directly in browser
open index.html

# Or use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Adding Blog Posts
```bash
# 1. Add markdown file to /posts/ directory
# 2. Update POST_FILES array in blog.js
# 3. Commit and push
git add posts/ blog.js
git commit -m "Add new blog post: [Title]"
git push
```

See `PUBLISHING.md` for detailed publishing workflow.

### Deployment
- Push to `main` branch to deploy via GitHub Pages
- No build process or GitHub Actions required
- Changes go live within 2-3 minutes

## Architecture

### Two-Page Design

**index.html** – Homepage
1. **Hero Section** – Name and tagline with links to Substack and blog
2. **Contact Section** – Email with copy-to-clipboard button

**blog.html** – Blog
1. **Hero** – Name (links to homepage) and posts list
2. **Post View** – Full blog post display (replaces list when viewing)

Navigation between pages is via standard links. Within the blog, post viewing is handled client-side without page reloads.

### Blog System

**Static Markdown Architecture:**

1. **Content Storage** (`/posts/`):
   - Markdown files directly in `/posts/` for simple posts
   - Folders in `/posts/` for posts with images/assets
   - No database or API - just static files

2. **Post Discovery** (`blog.js`):
   - Manual file listing in `POST_FILES` array
   - Fetches markdown files on page load (only when on blog.html)
   - Parses title and published date from markdown content
   - Removes "Published:" or "Date:" line from rendered content
   - Sorts chronologically (newest first)

3. **Rendering** (`blog.js` + `marked.js`):
   - Client-side markdown parsing using marked.js CDN (loaded on blog.html only)
   - Converts markdown to HTML on demand
   - Handles relative image paths for folder-based posts
   - Image lightbox on click for zooming

4. **Publishing Workflow**:
   - Add file to `/posts/`
   - Update `POST_FILES` in `blog.js`
   - Commit and push

### Post File Formats

**Simple post (no images):**
```
/posts/
  └── my-post.md
```

**Post with assets:**
```
/posts/
  └── my-post-folder/
      ├── My Post [notion-id].md
      └── My Post/
          ├── image1.png
          └── image2.jpg
```

**Markdown structure:**
```markdown
# Post Title

Published: Month Day, Year

## Content starts here...
```

Note: The "Published:" or "Date:" line is automatically removed from rendered content but the date is displayed above the title.

### Styling Architecture

**Color Scheme:**
- Single light theme
- Background: #FAF9F6
- Text: #1a1918
- Accent: #4a7ba7 (links, hovers)

**Typography:**
- Primary font: Work Sans (Google Fonts)
- Fallback: Proxima Nova, system fonts
- Font weight: 300 (light) for minimal aesthetic
- Line height: 1.7-1.8 for readability
- Hero name: clamp(1.5rem, 4.55vw, 2.5rem)
- Tagline/body: 1.125rem

**Layout:**
- Max content width: 700px
- Left-aligned layout
- Mobile-first responsive design

### Features

**Copy Email:**
- Clipboard button next to email on homepage
- Copies "jordy@alumni.harvard.edu" to clipboard
- Brief visual feedback (opacity change) on click

**Image Lightbox:**
- Click any blog post image to view full-size
- Dark overlay (95% opacity black background)
- Close with click, Escape key, or × button
- Images display at up to 95% screen size

### Key Files

- `index.html` – Homepage with hero and contact
- `blog.html` – Blog with posts list and post view
- `style.css` – Styling
- `blog.js` – Email copy, blog post loading, rendering, navigation, image lightbox
- `/posts/` – Blog post markdown files and assets
- `404.html` – Custom 404 page (redirects to homepage)
- `PUBLISHING.md` – Publishing workflow guide
- `README.md` – Project overview

### Dependencies

**Runtime:**
- marked.js (v11.0.0) – Markdown parser, loaded via CDN on blog.html only
- No npm packages or build tools required

**External Resources:**
- Google Fonts: Work Sans

## Important Notes

- **No build step** – Pure static site
- **Manual post listing** – Update `POST_FILES` in `blog.js` when adding posts
- **Hash routing** – Blog posts use URL hashes for navigation (`#post-title`)
- **Mobile-first** – All styling is responsive

## Design Principles

- Typography-driven hierarchy
- Left-aligned layout with natural flow
- Minimal color (grayscale + subtle accent)
- No complex animations or effects
- Fast, clean loading
- Accessibility-first (semantic HTML, WCAG contrast)
