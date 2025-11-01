# personal website

Static website hosted on GitHub Pages at `jordy.space`

## Key Features

- **Single-Page Design**: Minimalist layout with hero, tagline, and writing sections on one page
- **Markdown Blog Posts**: Write in Notion, export as markdown, and publish with simple file upload
- **Dark/Light Mode**: Theme toggle with localStorage persistence, dark mode default
- **Image Lightbox**: Click blog post images to view full-size in a clean overlay
- **Custom Typography**: Gidole font with clean, minimal aesthetic

## Structure

```
/
├── index.html              # Single-page site
├── style.css               # Dark/light mode styles
├── blog.js                 # Blog rendering & theme toggle
├── posts/                  # Markdown blog posts
│   ├── ailiteracy.md
│   ├── aivaluechain.md
│   ├── modernstewardship.md
│   └── technicalailandscape/
│       └── *.md            # Posts with images/assets
├── pics/                   # Profile images
├── Fonts/                  # Custom Gidole font
├── PUBLISHING.md           # Publishing workflow guide
└── CNAME                   # Custom domain
```

## Publishing

1. Write in Notion
2. Export as Markdown & CSV
3. Add to `/posts/` directory
4. Update `POST_FILES` in `blog.js`
5. Commit and push

See `PUBLISHING.md` for detailed instructions.