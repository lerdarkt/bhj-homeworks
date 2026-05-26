const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const menuItem = link.closest('.menu__item');
    const subMenu = menuItem.querySelector('.menu_sub');

    if (subMenu) {
      event.preventDefault();

      subMenu.classList.toggle('menu_active');
    }
  });
});
