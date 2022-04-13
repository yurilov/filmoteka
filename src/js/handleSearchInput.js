import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/searchByKeyword';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
import movieCard from './templates/movieCard.hbs';

async function handleSearchInput(e) {
  e.preventDefault();
  const q = e.target.value.trim();
  const data = await loadMovies(q);
  const results = data.results;
  console.log(results);
  const standardizedResults = results.map(result => standardizeDataFromAPI(result));
  console.log(standardizedResults);
  const moviesMarkup = movieCard(standardizedResults);
  refs.moviesContainerRef.innerHTML = '';
  refs.moviesContainerRef.insertAdjacentHTML('beforeend', moviesMarkup);
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q) {
  const dataFromAPI = await fetchSearchByKeyword(q);
  return dataFromAPI.data;
}
