
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


const home3 = document.querySelector('.home3');

window.addEventListener('scroll', () => {
  const scrollX = window.scrollX;
  const divTop = home3.getBoundingClientRect().top;

  if (divTop < window.innerHeight) {
    home3.style.transform = 'translateX(0)';
  } else {
    home3.style.transform = 'translateX (100%)';
  }
});