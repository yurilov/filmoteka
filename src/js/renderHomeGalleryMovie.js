import { fetchTrending } from './API/APIRequests';
import { renderCardMovie } from './renderMovieCard';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';

const movie = fetchTrending().then(movie => {
  const objDataMovie = movie;

  const results = objDataMovie.results;
  // console.log(results);

  const standardizedResults = results.map(result => standardizeDataFromAPI(result));
  // console.log(standardizedResults);

  const movieCard = standardizedResults.map(result => {
    // console.log(result)
    return renderCardMovie(result);
  });

  refs.moviesContainerRef.append(...movieCard);

  // refs.myLibraryContainerRef.append(...movieCard);
});

refs.jsHome.addEventListener('click', () => {
  document.querySelector('#pagination').classList.remove('visually-hidden');
  //document.querySelector('#genres-container').classList.remove('visually-hidden');
});