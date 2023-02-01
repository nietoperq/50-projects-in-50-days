let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.inner-text');
const slides = document.querySelectorAll('.slide');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center center)`;
    text.style.left = `${100 - (value / 5)}%`
    innerText.style.left = `${100 - (value / 5)}%`

    const triggerBottom = window.innerHeight / 5 * 4;
    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;
        if (slideTop < triggerBottom) {
            slide.classList.add('in');
        } else {
            slide.classList.remove('in');
        }
    });

});