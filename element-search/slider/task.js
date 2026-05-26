const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let currentSlide = 0;

function showSlide(index) {
  sliderItems[currentSlide].classList.remove('slider__item_active');

  if (sliderDots.length > 0) {
    sliderDots[currentSlide].classList.remove('slider__dot_active');
  }

  currentSlide = index;

  sliderItems[currentSlide].classList.add('slider__item_active');

  if (sliderDots.length > 0) {
    sliderDots[currentSlide].classList.add('slider__dot_active');
  }
}

function showNextSlide() {
  let nextSlide = currentSlide + 1;

  if (nextSlide >= sliderItems.length) {
    nextSlide = 0;
  }

  showSlide(nextSlide);
}

function showPrevSlide() {
  let prevSlide = currentSlide - 1;

  if (prevSlide < 0) {
    prevSlide = sliderItems.length - 1;
  }

  showSlide(prevSlide);
}

nextArrow.addEventListener('click', showNextSlide);
prevArrow.addEventListener('click', showPrevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});
