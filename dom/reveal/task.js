const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach((reveal) => {
    const position = reveal.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
      reveal.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);

checkReveal();
