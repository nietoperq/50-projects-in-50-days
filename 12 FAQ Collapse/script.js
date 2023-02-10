const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => button.parentElement.classList.toggle('active'));
})