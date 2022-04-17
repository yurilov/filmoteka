import { refs } from './getRefs';
import { standardizeDataFromLocalStorage } from './standardizeDataFromAPI';
import { renderCardMovieMyLibrary } from './renderMovieCard';
import { addLocalData } from './addLocalData';

const LOCAL_KEY = 'movieQueued';

export function addToQueued(data) {
  const queueModalBtn = document.querySelector('#queueModalBtn');
  const id = data.id;

  const arrayQueuedMovies = addLocalData(LOCAL_KEY);
  const isMovieInLocalData = arrayQueuedMovies.find(movie => movie.id === id);
  if (!isMovieInLocalData) {
    queueModalBtn.addEventListener('click', addToQueued);
  }
  if (isMovieInLocalData) {
    queueModalBtn.textContent = 'Delete from queue';
    queueModalBtn.addEventListener('click', deleteFromQueued);
  }

  function addToQueued(e) {
    e.preventDefault();
    queueModalBtn.textContent = 'Delete from queue';
    const queuedMovies = addLocalData(LOCAL_KEY);
    queuedMovies.push(data);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(queuedMovies));
    queueModalBtn.removeEventListener('click', addToQueued);
    queueModalBtn.addEventListener('click', deleteFromQueued);
  }

  function deleteFromQueued(e) {
    e.preventDefault();
    queueModalBtn.textContent = 'Add to queue';
    const filteredMoviesArray = arrayQueuedMovies.filter(movie => movie.id !== id);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(filteredMoviesArray));
    queueModalBtn.removeEventListener('click', deleteFromQueued);
    queueModalBtn.addEventListener('click', addToQueued);
  }
}
// *** DISPLAY QUEUED MOVIES *** \\

const watchedBtnRef = document.querySelector('.header-library__btn--watched');
const queueBtnRef = document.querySelector('.header-library__btn--queue');

queueBtnRef.addEventListener('click', showQueued);

// ФУНКЦІЯ ВІДОБРАЖЕННЯ ПЕРЕГЛЯНУТИХ ФІЛЬМІВ В "БІБЛІОТЕЦІ"
export function showQueued() {
  changeActiveBtnColor();
  const savedQueuedMovies = addLocalData(LOCAL_KEY);
  const standardizedResults = savedQueuedMovies.map(data => standardizeDataFromLocalStorage(data));
  const renderQueued = standardizedResults.map(movie => renderCardMovieMyLibrary(movie));
  refs.myLibraryContainerRef.innerHTML = '';
  refs.myLibraryContainerRef.append(...renderQueued);
}

// ФУНКЦІЯ ЗМІНИ КОЛЬОРУ АКТИВНОЇ КНОПКИ В "БІБЛІОТЕЦІ"
export function changeActiveBtnColor() {
  watchedBtnRef.classList.remove('header-library__btn--active');
  queueBtnRef.classList.add('header-library__btn--active');
}
