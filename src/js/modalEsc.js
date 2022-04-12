const modalWindow = document.querySelector('.modal-one-film');
const body = document.querySelector('body');
const btn = document.querySelector('[data-modal-close]');
const wrapper = document.querySelector('.div-wrapper');

function closeModal() {
  modalWindow.classList.remove('open');
  wrapper.innerHTML = '';
  body.classList.remove('content-hidden');
}

const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};

document.addEventListener('keydown', onKeyPress);

const onCloseOnBtn = () => {
  closeModal();
};

btn.addEventListener('click', onCloseOnBtn);