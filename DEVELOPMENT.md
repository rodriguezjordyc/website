# Development Guide

Minimalist personal homepage hosted on GitHub Pages at `jordy.space`. Static single-page site using vanilla HTML, CSS, and a tiny bit of JavaScript.

## Local Development

```bash
# Open directly in a browser
open index.html

# Or run a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment

- Push to `main` branch to deploy via GitHub Pages
- No build process or GitHub Actions required
- Changes go live within a few minutes

## Architecture

### Single-Page Design

**index.html** – Homepage (only page)
1. **Hero Section** – Name and tagline with a link to Substack
2. **Contact Section** – Email with copy-to-clipboard button

### Styling

- Single light theme
- Background: #FAF9F6
- Text: #1a1918
- Accent: #4a7ba7 (links, hovers)
- Max content width: 700px
- Left-aligned layout
- Mobile-first responsive design

Typography:
- Display: Bebas Neue (Google Fonts) for hero name and headings
- Body: Work Sans (Google Fonts)

### Behavior

**Copy Email:**
- Implemented in `main.js`
- Copies `jordy@alumni.harvard.edu` to the clipboard
- Brief visual feedback (opacity change) on click

## Key Files

- `index.html` – Markup
- `style.css` – Styles
- `main.js` – Copy-to-clipboard behavior
- `pics/` – Profile image(s)
- `Fonts/` – Font files
- `404.html` – Custom 404 page (redirects to homepage)
- `CNAME` – Custom domain configuration
