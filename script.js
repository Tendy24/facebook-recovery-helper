const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primary-nav');
const navContainer = document.querySelector('nav[aria-label="Main navigation"]');
const copyLinkButton = document.getElementById('copy-official-link');
const copyFeedback = document.getElementById('copy-feedback');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const OFFICIAL_RECOVERY_URL = 'https://www.facebook.com/recover/initiate/';
const THEME_STORAGE_KEY = 'recovery-helper-theme';

const closeMenu = () => {
    if (navLinks && toggleButton) {
        navLinks.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
};

if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a, button').forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (event) => {
        if (navLinks.classList.contains('open') && navContainer && !navContainer.contains(event.target)) {
            closeMenu();
        }
    });
}

if (copyLinkButton && copyFeedback) {
    const defaultLabel = copyLinkButton.textContent;
    let resetTimerId;

    const resetButtonState = () => {
        copyLinkButton.disabled = false;
        copyLinkButton.textContent = defaultLabel;
    };

    copyLinkButton.addEventListener('click', async () => {
        copyLinkButton.disabled = true;

        try {
            await navigator.clipboard.writeText(OFFICIAL_RECOVERY_URL);
            copyFeedback.textContent = 'Official link copied to clipboard.';
            copyLinkButton.textContent = 'Copied!';
        } catch {
            copyFeedback.textContent = `Copy failed. Use this URL: ${OFFICIAL_RECOVERY_URL}`;
            copyLinkButton.textContent = 'Try again';
        }

        if (resetTimerId) {
            clearTimeout(resetTimerId);
        }

        resetTimerId = setTimeout(() => {
            resetButtonState();
        }, 2000);
    });
}

const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? 'Switch to light' : 'Switch to dark';
    }
};

if (themeToggle) {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || 'dark';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}
