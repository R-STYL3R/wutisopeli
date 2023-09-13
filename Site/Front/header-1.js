document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav__toggle');
    const navWrapper = document.querySelector('.nav__wrapper');

    toggleButton.addEventListener('click', function() {
        navWrapper.classList.toggle('active');

        let ariaExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !ariaExpanded);
    });
});