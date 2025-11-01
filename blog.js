// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Copy Email to Clipboard
function copyEmail() {
    const email = 'jordy@alumni.harvard.edu';
    navigator.clipboard.writeText(email).then(() => {
        // Visual feedback - change opacity briefly
        const btn = document.querySelector('.copy-email-btn');
        const originalOpacity = btn.style.opacity;
        btn.style.opacity = '0.5';

        setTimeout(() => {
            btn.style.opacity = originalOpacity;
        }, 500);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}

// Blog Posts Management
let allPosts = [];

// Post file paths (update this when adding new posts)
const POST_FILES = [
    'ailiteracy.md',
    'aivaluechain.md',
    'Complexity Science in Football.md',
    'modernstewardship.md',
    'technicalailandscape/Technical AI Landscape 27b79889bbb1815d9432ec68ae21dac5.md'
];

// Parse post metadata from markdown content
function parsePostMetadata(markdown, filename) {
    const lines = markdown.split('\n');
    let title = '';
    let publishedDate = '';

    // Extract title (first H1)
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        if (lines[i].startsWith('# ')) {
            title = lines[i].replace('# ', '').trim();
            break;
        }
    }

    // Extract published date
    for (let i = 0; i < Math.min(15, lines.length); i++) {
        if (lines[i].toLowerCase().includes('published:')) {
            publishedDate = lines[i].replace(/published:/i, '').trim();
            break;
        }
    }

    // Fallback to filename if no title found
    if (!title) {
        title = filename.replace(/\.md$/, '').replace(/[-_]/g, ' ');
    }

    return {
        title,
        publishedDate: publishedDate || '',
        rawDate: parseDate(publishedDate)
    };
}

// Parse date string to Date object for sorting
function parseDate(dateString) {
    if (!dateString) return new Date(0);

    // Try to parse common date formats
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
        return date;
    }

    // Fallback
    return new Date(0);
}

// Load and parse a single post
async function loadPost(filepath) {
    try {
        const response = await fetch(`posts/${filepath}`);
        if (!response.ok) {
            console.error(`Failed to load ${filepath}`);
            return null;
        }

        const markdown = await response.text();
        const metadata = parsePostMetadata(markdown, filepath);

        return {
            filepath,
            markdown,
            ...metadata
        };
    } catch (error) {
        console.error(`Error loading ${filepath}:`, error);
        return null;
    }
}

// Load all posts
async function loadAllPosts() {
    const postsListElement = document.getElementById('posts-list');
    postsListElement.innerHTML = '<div class="loading">Loading posts...</div>';

    try {
        const posts = await Promise.all(POST_FILES.map(loadPost));
        allPosts = posts.filter(p => p !== null);

        // Sort by date (newest first)
        allPosts.sort((a, b) => b.rawDate - a.rawDate);

        renderPostsList();
    } catch (error) {
        console.error('Error loading posts:', error);
        postsListElement.innerHTML = '<div class="loading">Failed to load posts.</div>';
    }
}

// Render the list of posts
function renderPostsList() {
    const postsListElement = document.getElementById('posts-list');

    if (allPosts.length === 0) {
        postsListElement.innerHTML = '<div class="loading">No posts available.</div>';
        return;
    }

    const html = allPosts.map((post, index) =>
        `<div class="post-item">
            <a href="#" class="post-link" onclick="showPost(${index}); return false;">
                ${post.title}
            </a>
        </div>`
    ).join('');

    postsListElement.innerHTML = html;
}

// Image Lightbox Management
let lightbox = null;

function createLightbox() {
    if (lightbox) return;

    lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'image-lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Close image');

    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Close on click
    lightbox.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imgSrc, imgAlt) {
    createLightbox();

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt || '';

    // Clear previous image if any
    const existingImg = lightbox.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }

    lightbox.appendChild(img);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';

    // Remove image after animation
    setTimeout(() => {
        const img = lightbox.querySelector('img');
        if (img) img.remove();
    }, 200);
}

// Show a specific post
function showPost(index) {
    const post = allPosts[index];
    if (!post) return;

    const postView = document.getElementById('post-view');
    const writingSection = document.querySelector('.writing');
    const heroSection = document.querySelector('.hero');
    const postContentElement = document.getElementById('post-content');

    // Configure marked.js options
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        mangle: false
    });

    // Remove "Published:" line from markdown content
    let cleanedMarkdown = post.markdown.replace(/^Published:.*$/mi, '').trim();

    // Parse markdown to HTML
    let html = marked.parse(cleanedMarkdown);

    // Handle relative image paths for folder-based posts
    if (post.filepath.includes('/')) {
        const basePath = post.filepath.substring(0, post.filepath.lastIndexOf('/'));
        html = html.replace(
            /src="(?!http|\/)/g,
            `src="posts/${basePath}/`
        );
    }

    // Add published date if available
    let contentHTML = '';
    if (post.publishedDate) {
        contentHTML = `<div class="published-date">${post.publishedDate}</div>`;
    }
    contentHTML += html;

    postContentElement.innerHTML = contentHTML;

    // Add click handlers to all images in the post
    const images = postContentElement.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src, img.alt);
        });
    });

    // Show post view, hide other sections
    writingSection.style.display = 'none';
    heroSection.style.display = 'none';
    postView.style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash
    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.location.hash = slug;
}

// Show posts list
function showPostsList() {
    const postView = document.getElementById('post-view');
    const writingSection = document.querySelector('.writing');
    const heroSection = document.querySelector('.hero');

    // Show all sections, hide post view
    heroSection.style.display = 'flex';
    writingSection.style.display = 'block';
    postView.style.display = 'none';

    // Clear URL hash
    history.pushState("", document.title, window.location.pathname);

    // Scroll to writing section
    writingSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
    if (!window.location.hash) {
        showPostsList();
    }
});

// Check for hash on page load
window.addEventListener('DOMContentLoaded', () => {
    loadAllPosts();

    // If there's a hash, try to find and show that post
    if (window.location.hash) {
        const slug = window.location.hash.substring(1);
        setTimeout(() => {
            const postIndex = allPosts.findIndex(post => {
                const postSlug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return postSlug === slug;
            });

            if (postIndex !== -1) {
                showPost(postIndex);
            }
        }, 500);
    }
});
