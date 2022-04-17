import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
import { renderCardMovie } from './renderMovieCard';

const LOCAL_KEY = 'movieWatched';

export function addToWatched(data) {
  const btnAddToWatched = document.querySelector('#watchedModalBtn');
  const arrayWatchedMovie = addLocalData();
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
    const watchedMovies = addLocalData();
    watchedMovies.push(data);
    const movieWatched = localStorage.setItem(LOCAL_KEY, JSON.stringify(watchedMovies));
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

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return [];
  return localData;
}

// *** DISPLAY WATCHED MOVIES *** \\

const watchedBtnRef = document.querySelector('.header-library__btn--watched');
const queueBtnRef = document.querySelector('.header-library__btn--queue');

watchedBtnRef.addEventListener('click', showWatched);

// ФУНКЦІЯ ВІДОБРАЖЕННЯ ПЕРЕГЛЯНУТИХ ФІЛЬМІВ В "БІБЛІОТЕЦІ"
export function showWatched() {
  changeActiveBtnColor();
    const savedWatchedMovies = addLocalData();
    const standardizedResults = savedWatchedMovies.map(data => standardizeDataFromAPI(data));
    const renderWatched = standardizedResults.map(movie => renderCardMovie(movie));
    refs.myLibraryContainerRef.innerHTML = '';
    refs.myLibraryContainerRef.append(...renderWatched);
    
}

// ФУНКЦІЯ ЗМІНИ КОЛЬОРУ АКТИВНОЇ КНОПКИ В "БІБЛІОТЕЦІ"
export function changeActiveBtnColor() {
  watchedBtnRef.classList.add('header-library__btn--active');
  queueBtnRef.classList.remove('header-library__btn--active');
}
