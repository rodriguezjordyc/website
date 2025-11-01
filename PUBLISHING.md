# Publishing Workflow

Simple guide for adding new blog posts to your website.

## Quick Start

1. Write your post in Notion
2. Export from Notion as Markdown
3. Add the markdown file to the `/posts/` directory
4. Update `blog.js` with the new filename
5. Commit and push to GitHub

## Detailed Steps

### 1. Write in Notion

Write your blog post in Notion as you normally would. Use standard formatting:
- Headings (H1, H2, H3)
- Bold, italic, code
- Lists (bulleted and numbered)
- Blockquotes
- Images
- Tables
- Links

### 2. Add Published Date

Include a "Published:" line near the top of your post:

```markdown
# Your Post Title

Published: November 1, 2025

Your content starts here...
```

### 3. Export from Notion

1. Click the `...` menu in the top right of your Notion page
2. Select "Export"
3. Choose format: **Markdown & CSV**
4. Choose "Include subpages" if you have images/assets
5. Download the export

### 4. Organize Files

**For posts without images:**
- Rename the file if needed (e.g., `my-post.md`)
- Place it directly in `/posts/`

**For posts with images/assets:**
- Create a folder in `/posts/` (e.g., `/posts/my-post/`)
- Place the markdown file inside
- Place the assets folder (from Notion export) inside
- The structure should look like:
  ```
  /posts/
    └── my-post/
        ├── My Post [id].md
        └── My Post/
            ├── image1.png
            └── image2.jpg
  ```

### 5. Update blog.js

Open `blog.js` and add your new post to the `POST_FILES` array:

```javascript
const POST_FILES = [
    'ailiteracy.md',
    'aivaluechain.md',
    'your-new-post.md',  // ← Add this
    // OR for folder-based posts:
    'my-post/My Post [id].md',  // ← Or this
];
```

**Important:** Posts are sorted by published date (newest first), so the order in this array doesn't matter.

### 6. Test Locally

Open `index.html` in your browser to verify:
- Post appears in the list
- Post title is correct
- Post content renders properly
- Images load (if any)
- Links work

### 7. Deploy

```bash
git add .
git commit -m "Add new blog post: [Post Title]"
git push
```

GitHub Pages will automatically deploy your changes within a few minutes.

## File Format Notes

### Markdown File Structure

```markdown
# Post Title

Published: Month Day, Year

## Section Heading

Your content here with **bold** and *italic* text.

- Bullet point 1
- Bullet point 2

![Alt text](path/to/image.png)
```

### Image Paths

For folder-based posts, use relative paths in your markdown:
```markdown
![Description](My Post/image.png)
```

The blog system automatically resolves these paths.

### Supported Markdown

- **Headings:** `#`, `##`, `###`
- **Bold:** `**text**`
- **Italic:** `*text*`
- **Code:** `` `code` ``
- **Code blocks:** ` ```language ... ``` `
- **Links:** `[text](url)`
- **Images:** `![alt](url)`
- **Lists:** `-` or `1.`
- **Blockquotes:** `>`
- **Tables:** Standard markdown tables
- **Horizontal rules:** `---`

## Tips

1. **Keep filenames simple:** Use lowercase, hyphens, no spaces
2. **Check published dates:** Ensure format is consistent
3. **Test image links:** Make sure relative paths are correct
4. **Preview locally:** Always check before pushing
5. **Commit messages:** Use descriptive commit messages

## Troubleshooting

**Post doesn't appear:**
- Check if you added the filename to `POST_FILES` in `blog.js`
- Verify the file path is correct
- Check for typos in the filename

**Images don't load:**
- Verify the folder structure matches Notion's export
- Check that image paths in markdown are relative
- Ensure images are in the correct folder

**Date sorting is wrong:**
- Check the "Published:" line format
- Use a standard date format (e.g., "November 1, 2025")

## Example Commit Workflow

```bash
# After adding your post
git status                              # Check what changed
git add posts/                          # Add new post files
git add blog.js                         # Add updated post list
git commit -m "Add post: AI Literacy"  # Commit with message
git push                                # Deploy to GitHub Pages
```

That's it! Your post is now live.
