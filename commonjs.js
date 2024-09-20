document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        if (document.body.style.filter === 'grayscale(100%)') {
            document.body.style.filter = '';
        } else {
            document.body.style.filter = 'grayscale(100%)';
        }
    }
});
