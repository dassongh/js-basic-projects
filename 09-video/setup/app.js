// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btnRef = document.querySelector('.switch-btn');
const videoRef = document.querySelector('.video-container');

btnRef.addEventListener('click', () => {
  if (!btnRef.classList.contains('slide')) {
    btnRef.classList.add('slide');
    videoRef.pause();
  } else {
    btnRef.classList.remove('slide');
    videoRef.play();
  }
});

const preloaderRef = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preloaderRef.classList.add('hide-preloader');
})