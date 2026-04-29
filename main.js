const DEFAULT_EMAIL = 'jordy@alumni.harvard.edu';
const COPY_FEEDBACK_OPACITY = '0.5';
const COPY_FEEDBACK_DURATION_MS = 500;

function showCopyFeedback(button) {
    const originalOpacity = button.style.opacity;
    button.style.opacity = COPY_FEEDBACK_OPACITY;
    setTimeout(() => {
        button.style.opacity = originalOpacity;
    }, COPY_FEEDBACK_DURATION_MS);
}

function copyEmail(button) {
    const email = button.dataset.copyEmail || DEFAULT_EMAIL;

    navigator.clipboard
        .writeText(email)
        .then(() => {
            showCopyFeedback(button);
        })
        .catch((error) => {
            console.error('Failed to copy email:', error);
        });
}

const copyEmailButton = document.querySelector('.copy-email-btn');
if (copyEmailButton) {
    copyEmailButton.addEventListener('click', () => {
        copyEmail(copyEmailButton);
    });
}
