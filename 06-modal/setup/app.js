// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const refs = {
  modalBtn: document.querySelector('.modal-btn'),
  closeBtn: document.querySelector('.close-btn'),
  modalOverlay: document.querySelector('.modal-overlay'),
};

refs.modalBtn.addEventListener('click', toggleModal);

refs.closeBtn.addEventListener('click', toggleModal);

refs.modalOverlay.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) toggleModal();
})

function toggleModal() {
  refs.modalOverlay.classList.toggle('open-modal');
}