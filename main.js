// Copy Email to Clipboard
function copyEmail() {
    const email = 'jordy@alumni.harvard.edu';
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.querySelector('.copy-email-btn');
        if (!btn) return;
        const originalOpacity = btn.style.opacity;
        btn.style.opacity = '0.5';
        setTimeout(() => {
            btn.style.opacity = originalOpacity;
        }, 500);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}
