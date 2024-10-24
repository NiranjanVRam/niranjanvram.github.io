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


document.addEventListener("DOMContentLoaded", function () {
    // Remove fade-out class on page load or back navigation
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || performance.navigation.type === 2) {
            // If the page is coming from cache (back/forward navigation), remove the fade-out
            document.body.classList.remove('fade-out');
        }
    });

    // Apply fade-out effect when clicking internal links
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Check if the link is internal (same domain)
            if (link.hostname === window.location.hostname && link.href !== window.location.href) {
                event.preventDefault(); // Prevent immediate navigation
                document.body.classList.add('fade-out'); // Trigger fade-out effect
                const href = this.href;
                setTimeout(() => {
                    window.location.href = href; // Navigate after the fade-out animation
                }, 500); // Delay matches the CSS transition duration
            }
        });
    });
});
