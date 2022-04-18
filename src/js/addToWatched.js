import { refs } from './getRefs';
import { standardizeDataFromLocalStorage } from './standardizeDataFromAPI';
import { renderCardMovieMyLibrary } from './renderMovieCard';
import { addLocalData } from './addLocalData';
const LOCAL_KEY = 'movieWatched';

export function addToWatched(data) {
  const btnAddToWatched = document.querySelector('#watchedModalBtn');
  const arrayWatchedMovie = addLocalData(LOCAL_KEY);
  const id = data.id;
  const isMovieInLocalData = arrayWatchedMovie.find(movie => movie.id === id);
  if (!isMovieInLocalData) {
    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
  }
  if (isMovieInLocalData) {
    btnAddToWatched.textContent = 'Delete from watched';
    btnAddToWatched.addEventListener('click', onDeleteFromWatched);
  }

  function onBtnAddToWatched(evt) {
    evt.preventDefault();
    btnAddToWatched.textContent = 'Delete from watched';
    const watchedMovies = addLocalData(LOCAL_KEY);
    watchedMovies.push(data);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(watchedMovies));
    btnAddToWatched.removeEventListener('click', onBtnAddToWatched);
    btnAddToWatched.addEventListener('click', onDeleteFromWatched);
    console.log(watchedMovies);
  }

  function onDeleteFromWatched(evt) {
    evt.preventDefault();
    btnAddToWatched.textContent = 'Add to watched';
    const filteredMoviesArray = arrayWatchedMovie.filter(movie => movie.id !== id);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(filteredMoviesArray));
    btnAddToWatched.removeEventListener('click', onDeleteFromWatched);
    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
  }
}

// *** DISPLAY WATCHED MOVIES *** \\

const watchedBtnRef = document.querySelector('.header-library__btn--watched');
const queueBtnRef = document.querySelector('.header-library__btn--queue');

watchedBtnRef.addEventListener('click', showWatched);

// ФУНКЦІЯ ВІДОБРАЖЕННЯ ПЕРЕГЛЯНУТИХ ФІЛЬМІВ В "БІБЛІОТЕЦІ"
export function showWatched() {
  changeActiveBtnColor();
  const savedWatchedMovies = addLocalData(LOCAL_KEY);
  const standardizedResults = savedWatchedMovies.map(data => standardizeDataFromLocalStorage(data));
  const renderWatched = standardizedResults.map(movie => renderCardMovieMyLibrary(movie));
  refs.myLibraryContainerRef.innerHTML = '';
  refs.myLibraryContainerRef.append(...renderWatched);
}

// ФУНКЦІЯ ЗМІНИ КОЛЬОРУ АКТИВНОЇ КНОПКИ В "БІБЛІОТЕЦІ"
export function changeActiveBtnColor() {
  watchedBtnRef.classList.add('header-library__btn--active');
  queueBtnRef.classList.remove('header-library__btn--active');
}
