import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/searchByKeyword';
import { refs } from './getRefs';
import {renderCardMovie} from './render-card';
import { creatingAnArrayOfGenres } from './creatingAnArrayOfGenres';

async function handleSearchInput(e) {
  e.preventDefault();
  const q = e.target.value.trim();
  const data = await loadMovies(q);
  // console.log(data.results);
 
  const movie = fetchSearchByKeyword().then(movie => {
  // const objectMovie = movie.data.results;

  const objectMovie = movie.results;

  console.log('OBJECT MOVIE: ' + JSON.stringify(objectMovie));
  
    const movieCard = objectMovie.map(result => {
      let date = result.release_date.slice(0, 4);

      console.log('RESULTS MOVIECARD STRINGIFIED: ' + JSON.stringify(result));
      console.log('RESULTS MOVIECARD: ' + result);
  
      const arrGenres = creatingAnArrayOfGenres(result);
      return renderCardMovie(result, arrGenres, date);
    });
    refs.containerMovies.append(...movieCard);
  });
}

async function loadMovies(q) {
  const dataFromAPI = await fetchSearchByKeyword(q);
  return dataFromAPI.data;
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));