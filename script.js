// Controle do Carrossel (Mantido e Refinado)
const carousel = document.getElementById("carouselImages");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

function updateCarousel() {
  if (images.length === 0) return;
  const width = images[0].clientWidth;
  carousel.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

// Dinâmica do Header e Animações no Scroll
const topbar = document.getElementById('topbar');
const animatableElements = document.querySelectorAll('.animate-on-scroll');

function checkScrollAndAnimate() {
  // 1. Dinâmica do Header
  if (window.scrollY > 100) {
    topbar.classList.add('solid');
    topbar.classList.remove('transparente');
  } else {
    topbar.classList.remove('solid');
    topbar.classList.add('transparente');
  }

  // 2. Animações de Entrada
  animatableElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Escuta o Scroll e Redimensionamento
window.addEventListener('scroll', checkScrollAndAnimate);
window.addEventListener('resize', updateCarousel);
window.addEventListener('load', () => {
    updateCarousel();
    checkScrollAndAnimate(); // Executa uma vez no load
});