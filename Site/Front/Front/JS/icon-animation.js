document.querySelector('.navbar-icon img').addEventListener('mouseenter', function() {
    this.classList.add('rotate');
});

document.querySelector('.navbar-icon img').addEventListener('mouseleave', function() {
    this.classList.remove('rotate');
});
