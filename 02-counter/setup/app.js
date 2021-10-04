let count = 0; 

const valueRef = document.querySelector('#value');
const btnsRef = document.querySelectorAll('.btn');

btnsRef.forEach((el) => {
  el.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) count -= 1;
    if (styles.contains('increase')) count += 1;
    if (styles.contains('reset')) count = 0;
    if (count > 0) valueRef.style.color = 'green';
    if (count < 0) valueRef.style.color = 'red';
    if (count === 0) valueRef.style.color = '#222';
    valueRef.textContent = count;
  })
});