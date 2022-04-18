import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
import { renderCardMovie } from './renderMovieCard';

const body = document.querySelector('body');

export function closeModal() {
  const closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.removeEventListener('click', closeModal);
  refs.body.removeEventListener('keydown', onKeyPress);
  refs.body.classList.remove('modal-is-open');

  reload();

  refs.backdropRef.classList.add('is-hidden');
  refs.backdropRef.innerHTML = '';
  refs.body.classList.remove('content-hidden');
}

function reload() {
  let localData = {};
  let movies = [];
  const watched = JSON.parse(localStorage.getItem('movieWatched'));
  const queued = JSON.parse(localStorage.getItem('movieQueued'));

  localData.watched = watched ? watched : [];
  localData.queued = queued ? queued : [];

  const activeButton = document.querySelector('.header-library__btn--active');

  if (activeButton) {
    if (activeButton.classList.contains('header-library__btn--watched')) {
      movies = localData.watched;
    } else {
      movies = localData.queued;
    }

    const standardizedResults = movies.map((data) =>
      standardizeDataFromAPI(data)
    );
    const renderSaved = standardizedResults.map((movie) =>
      renderCardMovie(movie)
    );
    refs.myLibraryContainerRef.innerHTML = '';
    refs.myLibraryContainerRef.append(...renderSaved);
  }
}

export const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};
