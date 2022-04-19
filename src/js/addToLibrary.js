import { refs } from './getRefs';
import { standardizeDataFromLocalStorage } from './standardizeDataFromAPI';
import { renderCardMovieMyLibrary } from './renderMovieCard';

let localData = {};
let activeType = '';
let activeMovies = [];
let activeLocalKey = '';
let inactiveType = '';
let inactiveMovies = [];
let inactiveLocalKey = '';
let inactiveButton = null;

export function addToLibrary(data) {
  addLocalData();
  //localStorage.clear();
  const buttons = document.querySelectorAll('.modal__movie-btn');
  for (const button of buttons) {
    if (button.id === 'watchedModalBtn') {
      activeMovies = localData.watched;
      activeType = 'watched';
    } else {
      activeMovies = localData.queued;
      activeType = 'queue';
    }

    const isMovieInLocalData = activeMovies.find(movie => movie.id === data.id);
    if (isMovieInLocalData) {
      button.textContent = 'Delete from ' + activeType;
    } else {
      button.textContent = 'Add to ' + activeType;
    }
    button.addEventListener('click', onAddOrDelete);
  }

  function onAddOrDelete(evt) {
    evt.preventDefault();
    addLocalData();

    if (this.id === 'watchedModalBtn') {
      activeMovies = localData.watched;
      activeType = 'watched';
      activeLocalKey = 'movieWatched';
      inactiveMovies = localData.queued;
      inactiveType = 'queue';
      inactiveLocalKey = 'movieQueued';
      inactiveButton = document.querySelector('#queueModalBtn');
    } else {
      activeMovies = localData.queued;
      activeType = 'queue';
      activeLocalKey = 'movieQueued';
      inactiveMovies = localData.watched;
      inactiveType = 'watched';
      inactiveLocalKey = 'movieWatched';
      inactiveButton = document.querySelector('#watchedModalBtn');
    }

    const isMovieInLocalData = activeMovies.find(movie => movie.id === data.id);
    if (isMovieInLocalData) {
      const filteredMoviesArray = activeMovies.filter(movie => movie.id !== data.id);
      localStorage.setItem(activeLocalKey, JSON.stringify(filteredMoviesArray));
      this.textContent = 'Add to ' + activeType;
    } else {
      activeMovies.push(data);
      localStorage.setItem(activeLocalKey, JSON.stringify(activeMovies));
      this.textContent = 'Delete from ' + activeType;
      const filteredMoviesArray = inactiveMovies.filter(movie => movie.id !== data.id);
      localStorage.setItem(inactiveLocalKey, JSON.stringify(filteredMoviesArray));
      inactiveButton.textContent = 'Add to ' + inactiveType;
    }
  }
}

export function addLocalData() {
  const watched = JSON.parse(localStorage.getItem('movieWatched'));
  const queued = JSON.parse(localStorage.getItem('movieQueued'));

  localData.watched = watched ? watched : [];
  localData.queued = queued ? queued : [];
}

// *** DISPLAY WATCHED MOVIES *** \\

const watchedBtnRef = document.querySelector('.header-library__btn--watched');
const queueBtnRef = document.querySelector('.header-library__btn--queue');

watchedBtnRef.addEventListener('click', showSaved);
queueBtnRef.addEventListener('click', showSaved);

// ФУНКЦІЯ ВІДОБРАЖЕННЯ ПЕРЕГЛЯНУТИХ ФІЛЬМІВ В "БІБЛІОТЕЦІ"
function showSaved() {
  changeActiveBtnColor(this);
  addLocalData();
  let savedMovies = [];
  if (
    this.classList.contains('header-library__btn--watched') ||
    this.classList.contains('js-library')
  ) {
    savedMovies = localData.watched;
  } else {
    savedMovies = localData.queued;
  }
  const standardizedResults = savedMovies.map(data => standardizeDataFromLocalStorage(data));
  const renderSaved = standardizedResults.map(movie => renderCardMovieMyLibrary(movie));
  refs.myLibraryContainerRef.innerHTML = '';
  refs.myLibraryContainerRef.append(...renderSaved);
}

// ФУНКЦІЯ ЗМІНИ КОЛЬОРУ АКТИВНОЇ КНОПКИ В "БІБЛІОТЕЦІ"
export function changeActiveBtnColor(button) {
  if (button.classList.contains('header-library__btn--watched')) {
    watchedBtnRef.classList.add('header-library__btn--active');
    queueBtnRef.classList.remove('header-library__btn--active');
  } else {
    queueBtnRef.classList.add('header-library__btn--active');
    watchedBtnRef.classList.remove('header-library__btn--active');
  }
}
