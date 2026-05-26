const tabsBlocks = document.querySelectorAll('.tabs');

tabsBlocks.forEach((tabsBlock) => {
  const tabs = Array.from(tabsBlock.querySelectorAll('.tab'));
  const contents = Array.from(tabsBlock.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const activeTab = tabsBlock.querySelector('.tab_active');
      const activeContent = tabsBlock.querySelector('.tab__content_active');

      activeTab.classList.remove('tab_active');
      activeContent.classList.remove('tab__content_active');

      tab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
