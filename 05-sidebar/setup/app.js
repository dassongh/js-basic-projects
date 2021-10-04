const refs = {
  btnOpen: document.querySelector('.sidebar-toggle'),
  btnClose: document.querySelector('.close-btn'),
  sidebar: document.querySelector('.sidebar'),
};

refs.btnOpen.addEventListener('click', () => {
  refs.sidebar.classList.toggle('show-sidebar');
});

refs.btnClose.addEventListener('click', () => {
  refs.sidebar.classList.toggle('show-sidebar');
});