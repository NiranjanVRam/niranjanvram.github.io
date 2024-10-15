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

//disables right click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

//disables ctrl + anything
document.body.addEventListener("keydown", (event) => {
    if (event.ctrlKey) { event.preventDefault() }
});