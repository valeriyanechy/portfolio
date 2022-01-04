var bg = document.querySelector('.header__image');
var windowWidth = window.innerWidth / 5;
var windowHeight = window.innerHeight / 5;

bg.addEventListener('mousemove', (e) => {
    var mouseY = e.clientX / windowHeight;
    var mouseX = e.clientY / windowWidth;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});