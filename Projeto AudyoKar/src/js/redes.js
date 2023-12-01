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



const texto = document.querySelector('.texto')
const redes = document.querySelector('.redes')
const slide = document.querySelector('.slider')

window.addEventListener('DOMContentLoaded', () => {
  const redesTop = redes.getBoundingClientRect().top;
  const divTop = texto.getBoundingClientRect().top;
  const slideTop = slide.getBoundingClientRect().top;

  if (divTop < window.innerHeight) {
    texto.style.transform = 'translateX(0)';
  } else {
    texto.style.transform = 'translateX (-30%)';
  }
  if (redesTop < window.innerHeight) {
    redes.style.transform = 'translateX(0)';
  } else {
    redes.style.transform = 'translateX (-30%)';
  }
  
  if (slideTop < window.innerHeight) {
    slide.style.transform = 'translateX(0)';
  } else {
    slide.style.transform = 'translateX (-30%)';
  }
  
});