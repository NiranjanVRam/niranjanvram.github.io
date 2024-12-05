document.addEventListener('DOMContentLoaded', () => {
	// Select necessary elements
	const menuIcon = document.querySelector('.menu-icon');
	const menuText = document.querySelector('.menu-text');
	const mobileMenu = document.querySelector('.mobile-menu');
	const mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-link');

	// Function to toggle the menu
	function toggleMenu() {
		menuIcon.classList.toggle('open');
		mobileMenu.classList.toggle('open');
		menuText.textContent = menuIcon.classList.contains('open') ? 'close' : 'menu';
	}

	// Function to close the mobile menu
	function closeMobileMenu() {
		menuIcon.classList.remove('open');
		mobileMenu.classList.remove('open');
		menuText.textContent = 'menu';
	}

	// Event listener for menu icon click
	menuIcon.addEventListener('click', toggleMenu);

	// Close the menu when a link inside the mobile menu is clicked
	mobileNavLinks.forEach(link => {
		link.addEventListener('click', closeMobileMenu);
	});

	// Reset the menu state on window resize
	let resizeTimeout;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			if (window.innerWidth > 768) {
				closeMobileMenu();
			}
		}, 100); // Executes 100ms after resizing stops
	});

	// Ensure the menu is closed on page load or history navigation
	window.addEventListener('load', closeMobileMenu);
	window.addEventListener('popstate', closeMobileMenu);
});

//---------------------------------------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------------------------------------

//change theme on 'D' or 'd' key press
document.addEventListener('DOMContentLoaded', function () {
    const themes = ['dark-theme', 'light-theme', 'blue-n-blue', 'fruity'];
    let currentThemeIndex = 0;

    // Load saved theme or default to 'dark-theme'
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes.includes(savedTheme)) {
        currentThemeIndex = themes.indexOf(savedTheme);
    }
    document.body.classList.add(themes[currentThemeIndex]);

    // Switch theme on 'D' or 'd' key press
    document.addEventListener('keydown', function (event) {
        if (event.key === 'd' || event.key === 'D') {
            // Remove current theme
            document.body.classList.remove(themes[currentThemeIndex]);

            // Update theme index
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;

            // Add new theme
            const newTheme = themes[currentThemeIndex];
            document.body.classList.add(newTheme);

            // Save new theme to localStorage
            localStorage.setItem('theme', newTheme);
        }
    });
});

//---------------------------------------------------------------------------------------------------------------------------

//fullscreen image viewer
document.querySelectorAll('img').forEach(img => {
	img.addEventListener('click', () => {
		const viewer = document.createElement('div');
		viewer.className = 'fullscreen';

		const fullImage = document.createElement('img');
		fullImage.src = img.src;

		const closeButton = document.createElement('button');
		closeButton.innerHTML = '×';
		closeButton.addEventListener('click', () => {
		viewer.remove();
		});

		viewer.appendChild(fullImage);
		viewer.appendChild(closeButton);
		document.body.appendChild(viewer);
	});
});