// Display time on the top right corner of the screen
function updateTime() {
    const timeElement = document.getElementById('current-time');

    // Check if the element exists before attempting to update
    if (!timeElement) {
        console.warn("Element with id 'current-time' not found. Skipping time update.");
        return;
    }

    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = now.toLocaleTimeString('en-US', options);

    timeElement.textContent = time;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial time update
updateTime();

//---------------------------------------------------------------------------------------------------------------------------

// Change status icon color based on time
function updateStatusIcon() {
    const now = new Date();
    const currentHour = now.getHours();

    // Get the status-icon element
    const statusIcon = document.querySelector('.status-icon');

    // Check if the element exists before applying changes
    if (!statusIcon) {
        console.warn("Element with class 'status-icon' not found. Skipping status update.");
        return;
    }

    // Determine color based on time (10 PM to 6 AM)
    if (currentHour >= 22 || currentHour < 6) {
        statusIcon.style.backgroundColor = 'var(--red-signal)'; // Set to red
    } else {
        statusIcon.style.backgroundColor = 'var(--live-green)'; // Set to green
    }
}

// Call updateStatusIcon on page load and every minute
updateStatusIcon();
setInterval(updateStatusIcon, 60000);

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