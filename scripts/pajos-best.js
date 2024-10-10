document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.className = currentTheme;

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.className === 'light' ? 'dark' : 'light';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});
