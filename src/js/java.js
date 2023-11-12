const elements = document.querySelectorAll('.fade-in');

function checkElements() {
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

window.addEventListener('load', checkElements);

window.addEventListener('scroll', checkElements);
