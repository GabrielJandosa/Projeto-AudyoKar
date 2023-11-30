// Seleciona todos os elementos com a classe 'fade-in' e os armazena em uma NodeList
const elements = document.querySelectorAll('.fade-in');

// Cria um objeto IntersectionObserver que observará quando os elementos ficarem visíveis no viewport
const observer = new IntersectionObserver((entries) => {
  // Itera sobre cada entrada (elemento observado)
  entries.forEach((entry) => {
    // Verifica se o elemento está atualmente intersectando o viewport
    if (entry.isIntersecting) {
      // Adiciona a classe 'fade-in-visible' ao elemento para aplicar animações de fade-in
      entry.target.classList.add('fade-in-visible');

      // Deixa de observar o elemento para evitar repetições desnecessárias
      observer.unobserve(entry.target);
    }
  });
});

// Itera sobre cada elemento 'fade-in' e adiciona cada um deles ao IntersectionObserver
elements.forEach((element) => {
  observer.observe(element);
});
