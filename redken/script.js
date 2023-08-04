const slider = document.querySelector('.slider');
let currentIndex = 0;
const intervalTime = 3000; // 3 seconds

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider img');
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  prevButton.textContent = 'Previous';
  nextButton.textContent = 'Next';

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  document.body.appendChild(prevButton);
  document.body.appendChild(nextButton);

  showSlide(currentIndex);

  // Auto-rotate slides every 3 seconds
  setInterval(nextSlide, intervalTime);
});
