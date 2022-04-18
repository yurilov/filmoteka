import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/APIRequests';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
// import movieCard from './templates/movieCard.hbs';
import { renderCardMovie } from './renderMovieCard';

async function handleSearchInput(e) {
    e.preventDefault();
    const q = e.target.value.trim();
    const data = await loadMovies(q);
    if (refs.searchInputRef.value > 0) {
        let results = data.results;
        const standardizedResults = results.map(result => standardizeDataFromAPI(result));
        const movieCard = standardizedResults.map(result => renderCardMovie(result));
        refs.moviesContainerRef.innerHTML = '';
        refs.moviesContainerRef.append(...movieCard);
    } else {
        return refs.moviesContainerRef.innerHTML = '';
    }
}


refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q) {
    if (q.length > 0) {
        const dataFromAPI = await fetchSearchByKeyword(q);
        return dataFromAPI.data;
    } else {
        return
    }
}