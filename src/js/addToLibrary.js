import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
import { renderCardMovie } from './renderMovieCard';

let localData = {};
let type = '';
let movies = [];
let localKey = '';

export function addToLibrary(data) {
    addLocalData();
    const buttons = document.querySelectorAll('.modal__movie-btn');
    for (const button of buttons) {
        if (button.id === 'watchedModalBtn') {
            movies = localData.watched;
            type = 'watched';
        } else {
            movies = localData.queued;
            type = 'queued';
        }

        const isMovieInLocalData = movies.find(movie => movie.id === data.id);
        if (isMovieInLocalData) {
            button.textContent = 'Delete from ' + type;
        } else {
            button.textContent = 'Add to ' + type;
        }
        button.addEventListener('click', onAddOrDelete);
    }

    function onAddOrDelete(evt) {
        evt.preventDefault();
        addLocalData();

        if (this.id === 'watchedModalBtn') {
            movies = localData.watched;
            type = 'watched';
            localKey = 'movieWatched';
        } else {
            movies = localData.queued;
            type = 'queued';
            localKey = 'movieQueued';
        }

        const isMovieInLocalData = movies.find(movie => movie.id === data.id);
        if (!isMovieInLocalData) {
            this.textContent = 'Add to ' + type;
            movies.push(data);
            localStorage.setItem(localKey, JSON.stringify(movies));
            this.textContent = 'Delete from ' + type;
        }
        if (isMovieInLocalData) {
            this.textContent = 'Delete from ' + type;
            const filteredMoviesArray = movies.filter(movie => movie.id !== data.id);
            localStorage.setItem(localKey, JSON.stringify(filteredMoviesArray));
            this.textContent = 'Add to ' + type;
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
    if (this.classList.contains('header-library__btn--watched')) {
        savedMovies = localData.watched;
    } else {
        savedMovies = localData.queued;
    }
    const standardizedResults = savedMovies.map(data => standardizeDataFromAPI(data));
    const renderSaved = standardizedResults.map(movie => renderCardMovie(movie));
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
