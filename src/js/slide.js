
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {

    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3 )
        cont = 1

        document.getElementById('radio'+cont).checked = true
}


document.querySelectorAll('.dentro').forEach(home3 => {
  window.addEventListener('scroll', () => {
    const divTop = home3.getBoundingClientRect().top;

    home3.style.transform = divTop < window.innerHeight ? 'translateX(0)' : 'translateX(100%)';
  });
});

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});





