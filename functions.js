//Function to toggle the mobile menu
document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.querySelector('.menu-icon');
	const menuText = document.querySelector('.menu-text');
	const hamburger = document.querySelector('.hamburger');
	const mobileMenu = document.querySelector('.mobile-menu');

	menuIcon.addEventListener('click', () => {
		// Toggle the open class
		menuIcon.classList.toggle('open');
		mobileMenu.classList.toggle('open');

		// Update the text and hamburger icon
		if (menuIcon.classList.contains('open')) {
			menuText.textContent = 'close';
		} else {
			menuText.textContent = 'menu';
		}
	});
});

//---------------------------------------------------------------------------------------------------------------------------

// Function to close the mobile menu
function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    mobileMenu.classList.remove('open');
    menuIcon.classList.remove('open');
  }
  
  // Event listener for the popstate event (history navigation)
  window.addEventListener('popstate', () => {
    closeMobileMenu(); // Close the mobile menu on history navigation (back/forward)
  });
  
  // Close the menu on page load if it's open
  window.addEventListener('load', () => {
    closeMobileMenu();
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

//change theme when 'd' is pressed
document.addEventListener('keydown', function(event) {
	if (event.key === 'd' || event.key === 'D') {
		// Toggle dark theme class on the body
		document.body.classList.toggle('dark-theme');
	}
});

//---------------------------------------------------------------------------------------------------------------------------

//apply dark theme if user prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
	document.body.classList.add('dark-theme');
}
else {
	document.body.classList.remove('dark-theme');
}