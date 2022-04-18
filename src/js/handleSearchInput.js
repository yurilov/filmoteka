import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/APIRequests';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
// import movieCard from './templates/movieCard.hbs';
import { renderCardMovie } from './renderMovieCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

async function handleSearchInput(e) {
  e.preventDefault();
  document.querySelector('#genres-container').classList.add('visually-hidden');
  const q = e.target.value.trim();
  loadMovies(q).then(data => {
    if (refs.searchInputRef.value.length > 0) {
      const results = data.results;
      if (results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name and try again');
      }
      const standardizedResults = results.map(result => standardizeDataFromAPI(result));
      const movieCard = standardizedResults.map(result => renderCardMovie(result));
      refs.moviesContainerRef.innerHTML = '';
      refs.moviesContainerRef.append(...movieCard);
    } else {
      refs.moviesContainerRef.innerHTML = '';
    }
  });
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q) {
  if (q.length > 0) {
    const dataFromAPI = await fetchSearchByKeyword(q);
    return dataFromAPI.data;
  } else {
    return;
  }
}
