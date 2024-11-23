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

//change theme when 'd' is pressed
document.addEventListener('keydown', function(event) {
	if (event.key === 'd' || event.key === 'D') {
		// Toggle dark theme class on the body
		document.body.classList.toggle('dark-theme');
	}
});

//apply dark theme if user prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
	document.body.classList.add('dark-theme');
}
else {
	document.body.classList.remove('dark-theme');
}