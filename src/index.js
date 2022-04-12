import './sass/main.scss';
import './js/handleSearchInput';
import { addDataToDOM } from './js/render-search-keyword';
import { fetchSearchByKeyword } from './js/API/searchByKeyword';
import { fetchTrending } from './js/API/searchByKeyword';
import { renderCardMovie } from './js/render-card';
import { refs } from './js/getRefs';
import { creatingAnArrayOfGenres } from './js/creatingAnArrayOfGenres';
// import './js/clickingLogo';


/* const movie = fetchSearchByKeyword().then(movie => {
  const objDataMovie = movie;
  const results = objDataMovie.data.results;
 
    const movieCard = results.forEach(result => {
    console.log('Object.keys(result): ' + Object.keys(result));
     return renderCardMovie(result, arrGenres, date);
  });
   refs.containerMovies.insertAdjacentHTML("beforeend", ...movieCard);
});
 */

/* const movie = fetchSearchByKeyword().then(movie => {
  const objDataMovie = movie;
  const results = objDataMovie.data.results;

  const movieCard = results.forEach(result => {
    for(let key in Object.keys(results)) {
     console.log(`${key} => ${JSON.stringify(results[key])}`);
    }

    const arrGenres = creatingAnArrayOfGenres(result);
   return addDataToDOM(result, arrGenres);
  });
  refs.containerMovies.append(...movieCard);
});
 */
/* const movie = fetchSearchByKeyword().then(movie => {
  const objDataMovie = movie;
  const results = objDataMovie.data.results;
  const movieCard = results.forEach(result => {
    for(let key in Object.keys(results)) {
     console.log(`${key} => ${JSON.stringify(results[key])}`);
    }

    const arrGenres = creatingAnArrayOfGenres(result);
   return addDataToDOM(result, arrGenres);

  });
  refs.containerMovies.append(...movieCard);
}); */