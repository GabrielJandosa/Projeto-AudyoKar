const servicos = document.querySelector('.servicos');

window.addEventListener('DOMContentLoaded', () => {
  const servicosTop = servicos.getBoundingClientRect().top;

  if (servicosTop < window.innerHeight) {
    servicos.style.transform = 'translateX(0%)';
  } else {
    servicos.style.transform = 'translateX(100%)';
  }
});