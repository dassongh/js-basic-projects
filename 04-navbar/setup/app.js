// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const refs = {
  navToggle: document.querySelector('.nav-toggle'),
  links: document.querySelector('.links')
}

refs.navToggle.addEventListener('click', () => {
  refs.links.classList.toggle('show-links');
})