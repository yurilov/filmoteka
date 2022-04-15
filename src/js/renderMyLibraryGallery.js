import { fetchTrending } from './API/APIRequests';
import { renderCardMovie } from './renderMovieCard';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';

// хотіла створити окрему функцію на рендер My Library
//  але тут немаю ща данніх про додані фільми і
// виходить що окремо ще потрібно створити renderMovieCard
// тільки вже для цієї сторінки, щоб воно рендерело в потрібний дів
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

  refs.myLibraryContainerRef.append(...movieCard);
});
