# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimalist personal website and blog hosted on GitHub Pages at `jordy.space`. Single-page static site using vanilla HTML, CSS, and JavaScript with markdown-based blog posts.

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

### Single-Page Design

The site uses a **single-page, left-aligned architecture**:

1. **Hero Section** - Name ("Jordy Rodriguez") and complete tagline/bio
2. **Writing Section** - Minimal table of contents (titles only, tightly spaced)
3. **Post View** - Full blog post display (replaces sections when viewing)
4. **Footer** - Email with copy-to-clipboard button

Navigation is handled client-side via JavaScript without page reloads.

### Blog System

**Static Markdown Architecture:**

1. **Content Storage** (`/posts/`):
   - Markdown files directly in `/posts/` for simple posts
   - Folders in `/posts/` for posts with images/assets
   - No database or API - just static files

2. **Post Discovery** (`blog.js`):
   - Manual file listing in `POST_FILES` array
   - Fetches markdown files on page load
   - Parses title and published date from markdown content
   - Removes "Published:" line from rendered content
   - Sorts chronologically (newest first)

3. **Rendering** (`blog.js` + `marked.js`):
   - Client-side markdown parsing using marked.js CDN
   - Converts markdown to HTML on demand
   - Handles relative image paths for folder-based posts
   - Theme-aware styling via CSS variables
   - Image lightbox on click for zooming

4. **Publishing Workflow**:
   - Write in Notion
   - Export as Markdown & CSV
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

Note: The "Published:" line is automatically removed from rendered content but the date is displayed above the title.

### Styling Architecture

**Color Scheme:**
- Dark mode (default): Deep charcoal background (#121212), near-white text (#f5f5f5)
- Light mode: Cream background (#FAFAF7), near-black text (#1a1918)
- Accent: Subtle blue (#6b9bd1 dark, #4a7ba7 light) for links and hovers
- CSS variables for theme switching

**Typography:**
- Primary font: Gidolinya (custom, from `/Fonts/`)
- Fallback: Latin Modern Roman, system fonts
- Font weight: 200-300 (light) for minimal aesthetic
- Generous line height (1.7-1.8) for readability
- Hero name: clamp(2rem, 5.33vw, 3.33rem) - reduced by 1/3
- Tagline/body: 1.125rem

**Layout:**
- Max content width: 700px
- **Left-aligned** layout (all text aligned left)
- Tight vertical spacing between sections
- Hero section: no min-height, natural flow from top
- Writing section: 1rem spacing between header and first post
- Table of contents: minimal padding (0.25rem) between entries
- Mobile-first responsive design

### Features

**Theme Toggle:**
- Fixed top-right button with sun/moon icons
- Stores preference in localStorage
- Switches between `data-theme="dark"` and `data-theme="light"`
- CSS variables automatically update all colors

**Image Lightbox:**
- Click any blog post image to view full-size
- Dark overlay (95% opacity black background)
- Close with click, Escape key, or × button
- Images display at up to 95% screen size

**Copy Email:**
- Clipboard icon button next to email in footer
- Copies "jordy@alumni.harvard.edu" to clipboard
- Brief visual feedback (color change) on click

### Key Files

- `index.html` - Single-page structure with hero and writing sections
- `style.css` - Minimalist styling with dark/light mode and left alignment
- `blog.js` - Blog post loading, rendering, navigation, theme toggle, email copy, image lightbox
- `/posts/` - All blog post markdown files and assets
- `PUBLISHING.md` - Publishing workflow guide
- `README.md` - Project overview

### Dependencies

**Runtime:**
- marked.js (v11.0.0) - Markdown parser, loaded via CDN
- No npm packages or build tools required

**External Resources:**
- Google Fonts: Latin Modern Roman (fallback font)
- marked.js CDN for markdown parsing

## Important Notes

- **No build step** - This is a pure static site
- **Manual post listing** - Update `POST_FILES` in `blog.js` when adding posts
- **Preserve styling** - Gidolinya font, left alignment, and tight spacing are core to design
- **Hash routing** - Blog posts use URL hashes for navigation (`#post-title`)
- **Theme persistence** - Dark mode preference saved in localStorage
- **Mobile-first** - All styling is responsive with mobile breakpoints
- **Left-aligned** - All content is left-aligned, not centered
- **Tight spacing** - Minimal vertical space between sections for compact design

## Design Principles

Inspired by minimalist design:
- Typography-driven hierarchy
- Left-aligned layout with natural flow
- Tight, intentional spacing
- Minimal color (grayscale + subtle accent)
- No complex animations or effects
- Fast, clean loading with no layout shift
- Accessibility-first (semantic HTML, WCAG contrast)

## Content Structure

**Hero Section:**
- Name: "Jordy Rodriguez" (large, reduced by 1/3 from original)
- Tagline: Complete bio paragraph combining:
  - "Energized by solving the underlying problems that limit how we experience and benefit from products we love."
  - "Weightlifter when it's cold, runner when it's warm. Always have time to talk about my faith, Real Madrid, and philosophy."

**Writing Section:**
- Simple "Writing" header
- List of blog post titles (no dates, no excerpts)
- Chronologically sorted (newest first)
- Minimal spacing between entries

**Footer:**
- Clipboard icon + email link
