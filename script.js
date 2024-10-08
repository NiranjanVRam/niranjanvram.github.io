document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector('.navbar-toggle');
    var navbarFull = document.querySelector('.navbar-fullscreen');

    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        if (navbarFull.classList.contains('active')) {
            navbarFull.classList.remove('active');
            setTimeout(function () {
                navbarFull.style.display = 'none';
            }, 600);
        } else {
            navbarFull.style.display = 'block';
            setTimeout(function () {
                navbarFull.classList.add('active');
            }, 10);
        }
    });

    window.addEventListener('beforeunload', function () {
        if (navbarFull.classList.contains('active')) {
            navbarFull.classList.remove('active');
            navbarFull.style.display = 'none';
            toggleButton.classList.remove('active');
        }
    });
});
