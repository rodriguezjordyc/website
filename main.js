const TYPE_SPEED_WPM = 200;
const AVERAGE_WORD_LENGTH = 5;
const TYPE_DELAY_MS = 60000 / (TYPE_SPEED_WPM * AVERAGE_WORD_LENGTH);

const typewriterRoot = document.querySelector('[data-typewriter]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function createCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    return cursor;
}

function moveCursor(cursor, parent) {
    cursor.remove();
    parent.appendChild(cursor);
}

async function typeText(text, parent, cursor) {
    if (!text) {
        return;
    }

    const textNode = document.createTextNode('');
    parent.appendChild(textNode);
    moveCursor(cursor, parent);

    for (const character of text) {
        textNode.textContent += character;
        await wait(TYPE_DELAY_MS);
    }
}

async function renderNode(node, parent, cursor) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.trim() === '') {
            return;
        }

        await typeText(node.textContent, parent, cursor);
        return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
    }

    const element = node.cloneNode(false);
    parent.appendChild(element);
    moveCursor(cursor, element);

    for (const child of node.childNodes) {
        await renderNode(child, element, cursor);
    }
}

async function runTypewriter(root) {
    const originalNodes = Array.from(root.childNodes).map((node) => node.cloneNode(true));
    const cursor = createCursor();

    root.textContent = '';
    root.setAttribute('aria-busy', 'true');
    root.appendChild(cursor);

    for (const node of originalNodes) {
        await renderNode(node, root, cursor);
    }

    root.removeAttribute('aria-busy');
}

if (typewriterRoot && !prefersReducedMotion) {
    runTypewriter(typewriterRoot);
}
