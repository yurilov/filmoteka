import { refs } from './getRefs';
const body = document.querySelector('body');

export function closeModal() {
  const closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.removeEventListener('click', closeModal);
  refs.body.removeEventListener('keydown', onKeyPress);

  refs.backdropRef.classList.add('is-hidden');
  refs.backdropRef.innerHTML = '';
  refs.body.classList.remove('content-hidden');
}

export const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};
