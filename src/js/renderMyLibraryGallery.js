import { fetchTrending } from './API/APIRequests';
import { renderCardMovieMyLibrary } from './renderMovieCard';
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
    return renderCardMovieMyLibrary(result);
  });

  refs.myLibraryContainerRef.append(...movieCard);
});
