// Toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
