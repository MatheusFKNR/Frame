const carousel = document.getElementById("carouselImages");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateCarousel() {
    if (images.length === 0) return;
    const width = images[0].getBoundingClientRect().width;
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

// Garante que o cálculo ocorra após o carregamento das imagens
window.addEventListener("load", updateCarousel);
window.addEventListener("resize", updateCarousel);