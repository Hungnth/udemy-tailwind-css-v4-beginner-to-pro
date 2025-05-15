window.onload = function () {
    const mobileMenuIcon = document.getElementById('mobile-menu-button');
    mobileMenuIcon.addEventListener('click', function () {
        if (mobileMenuIcon.classList.contains('open')) {
            mobileMenuIcon.classList.remove('open');
        } else {
            mobileMenuIcon.classList.add('open');
        }
    });

    const ticketMenuItem = document.getElementById('ticket-menu-button');
    ticketMenuItem.addEventListener('click', function () {
        if (ticketMenuItem.classList.contains('open')) {
            ticketMenuItem.classList.remove('open');
        } else {
            ticketMenuItem.classList.add('open');
        }
    });

    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const carousel = document.getElementById('carousel');
    previousButton.addEventListener('click', function () {
        const itemWidth = carousel.getElementsByTagName('div')[0].clientWidth;
        carousel.scrollLeft -= itemWidth;
    });
    nextButton.addEventListener('click', function () {
        const itemWidth = carousel.getElementsByTagName('div')[0].clientWidth;
        carousel.scrollLeft += itemWidth;
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    });
};
