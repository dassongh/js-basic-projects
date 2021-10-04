const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnRef = document.getElementById('btn');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', () => {
  const randomHex = getRandomHex();
  document.body.style.backgroundColor = randomHex;
  colorRef.textContent = randomHex;
});

function getRandomHex() {
  let hexOutput = '#';

  for (let i = 0; i < 6; i += 1) {
    hexOutput += hex[getRandomNumber()]; 
  }

  return hexOutput;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}