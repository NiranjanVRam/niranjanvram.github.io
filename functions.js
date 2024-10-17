//monochrome filter on all images and videos when 'm' is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        const mediaItems = document.querySelectorAll('img, video');
        mediaItems.forEach(item => {
            if (item.style.filter === 'grayscale(100%)') {
                item.style.filter = '';
            } else {
                item.style.filter = 'grayscale(100%)';
            }
        });
    }
});

// Function to switch themes
function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Function to apply the saved theme or default to dark
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Listen for the 'd' key press to toggle the theme
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        switchTheme();
    }
});

// Apply the saved theme on page load
applySavedTheme();


document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-out effect when clicking links
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Check if the link is not an external link
            if (link.hostname === window.location.hostname) {
                event.preventDefault();
                document.body.classList.add('fade-out');
                const href = this.href;
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});