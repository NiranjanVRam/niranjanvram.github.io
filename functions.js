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
document.addEventListener('keydown', function (event) {
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
	// const themes = ['dark-theme', 'light-theme', 'blue-n-blue', 'fruity', 'forest'];
	// const themes = ['sesame-rice', 'coffee-cream'];
	const themes = ['dark-theme', 'light-theme'];

	// Function to update active theme dot
	function updateActiveDot(theme) {
		document.querySelectorAll('.theme-dot').forEach(dot => {
			dot.classList.remove('active');
			if (dot.getAttribute('data-theme') === theme) {
				dot.classList.add('active');
			}
		});
	}

	// Load saved theme or default to 'dark-theme'
	const savedTheme = localStorage.getItem('theme') || themes[0];
	if (!themes.includes(savedTheme)) {
		localStorage.setItem('theme', themes[0]);
	}
	document.body.classList.add(savedTheme);
	updateActiveDot(savedTheme);

	// Switch theme on 'D' or 'd' key press
	document.addEventListener('keydown', function (event) {
		if (event.key === 'd' || event.key === 'D') {
			const currentTheme = Array.from(document.body.classList).find(cls => themes.includes(cls));
			if (currentTheme) {
				document.body.classList.remove(currentTheme);
			}
			const currentIndex = themes.indexOf(localStorage.getItem('theme'));
			const newTheme = themes[(currentIndex + 1) % themes.length];
			document.body.classList.add(newTheme);
			localStorage.setItem('theme', newTheme);
			updateActiveDot(newTheme);
		}
	});

	// Add event listeners for theme dots
	document.querySelectorAll('.theme-dot').forEach(dot => {
		dot.addEventListener('click', function () {
			const selectedTheme = this.getAttribute('data-theme');
			const currentTheme = Array.from(document.body.classList).find(cls => themes.includes(cls));
			if (currentTheme) {
				document.body.classList.remove(currentTheme);
			}
			document.body.classList.add(selectedTheme);
			localStorage.setItem('theme', selectedTheme);
			updateActiveDot(selectedTheme);
		});
	});

	// Listen for storage changes (to sync themes across tabs/pages)
	window.addEventListener('storage', function (event) {
		if (event.key === 'theme' && themes.includes(event.newValue)) {
			const currentTheme = Array.from(document.body.classList).find(cls => themes.includes(cls));
			if (currentTheme) {
				document.body.classList.remove(currentTheme);
			}
			document.body.classList.add(event.newValue);
			updateActiveDot(event.newValue);
		}
	});
});

//---------------------------------------------------------------------------------------------------------------------------

document.querySelectorAll('img').forEach(img => {
	img.addEventListener('click', () => {
		const viewer = document.createElement('div');
		viewer.className = 'fullscreen';

		const fullImage = document.createElement('img');
		fullImage.src = img.src;

		const description = document.createElement('p');
		description.textContent = img.alt || "No description available";

		const closeButton = document.createElement('button');
		closeButton.innerHTML = '×';
		closeButton.addEventListener('click', () => {
			viewer.remove();
		});

		viewer.appendChild(fullImage);
		viewer.appendChild(description);
		viewer.appendChild(closeButton);
		document.body.appendChild(viewer);
	});
});