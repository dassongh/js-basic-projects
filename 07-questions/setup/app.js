// using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    questions.forEach((el) => {
      if (el !== question) el.classList.remove('show-text');
    });
    
    question.classList.toggle('show-text');
  });
});


// const btnsRef = document.querySelectorAll('.question-btn');

// btnsRef.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//   });
// });