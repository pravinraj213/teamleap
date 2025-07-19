document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        menuButton.setAttribute(
            'aria-expanded',
            mobileMenu.classList.contains('open') ? 'true' : 'false'
        );
    });
});