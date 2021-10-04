const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnRef = document.getElementById('btn');
const colorRef = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorRef.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}