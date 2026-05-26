const links = document.querySelectorAll('.has-tooltip');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const oldTooltip = document.querySelector('.tooltip');

    if (oldTooltip) {
      oldTooltip.remove();
    }

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = link.getAttribute('title');

    document.body.appendChild(tooltip);

    const linkPosition = link.getBoundingClientRect();

    tooltip.style.left = linkPosition.left + 'px';
    tooltip.style.top = linkPosition.bottom + 'px';
  });
});
