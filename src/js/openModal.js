import { renderMovieModal } from './renderMovieModal';
import { refs } from './getRefs';
import { fetchFullMovieInfo } from './API/APIRequests';
import { closeModal, onKeyPress, handleBackdropClick } from './modalEsc';
import { addToWatched } from './addToWatched';
import { addToQueued } from './addToQueued';

async function handleMovieCardClick(e) {
  e.preventDefault();
  if (e.target.dataset.action !== 'open-modal') {
    return;
  }
  openModal();
  const id = e.target.dataset.id;
  const data = await fetchFullMovieInfo(id);

  const modalMarkup = renderMovieModal(data);
  refs.backdropRef.innerHTML = '';

  refs.backdropRef.append(modalMarkup);
  addEventListenerToModal(e);
  addToWatched(data);
  addToQueued(data);
}

export function openModal() {
  refs.backdropRef.classList.toggle('is-hidden');
  refs.body.classList.add('modal-is-open');
}

export function addEventListenerToModal(e) {
  const closeBtn = document.querySelector('.js-close-modal');
  closeBtn.addEventListener('click', closeModal);
  refs.body.addEventListener('keydown', onKeyPress);
  refs.backdropRef.addEventListener('click', handleBackdropClick);
}

refs.galleryRef.addEventListener('click', handleMovieCardClick);
