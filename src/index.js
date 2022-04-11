import './sass/main.scss';
import './js/handleSearchInput';
import {fetchSearchMoviesApi} from './js/API/searchApi';
import { fetchSearchByKeyword } from './js/API/searchByKeyword';
import { fetchTrending } from './js/API/searchByKeyword';
import { renderCardMovie } from './js/render-card';
import { refs } from './js/getRefs';
import { creatingAnArrayOfGenres } from './js/creatingAnArrayOfGenres';
// import './js/clickingLogo';


// const movie = fetchTrending().then(movie => {
//   const objDataMovie = movie;

//   const results = objDataMovie.results;
//   console.log(results);

//   const movieCard = results.map(result => {
//     let date = result.release_date.slice(0, 4);

//     const arrGenres = creatingAnArrayOfGenres(result);
//     return renderCardMovie(result, arrGenres, date);
//   });
//   refs.containerMovies.append(...movieCard);
// });

const movie = fetchSearchMoviesApi().then(movie => {
  const objDataMovie = movie;
  const results = objDataMovie.data.results;

  console.log('RESULTS FROM FETCH SEARCH MOVIES API: ' + JSON.stringify(results));

  for (const [key, value] of Object.entries(results)) {
    console.log(`KEY: ${JSON.stringify(key)}: VALUE${JSON.stringify(value)}`);
  }
  
  // const movieCard = results.foreach(result => {
  //   console.log('Object.keys(result): ' + Object.keys(result));
  //   return renderCardMovie(result, arrGenres, date);
  // });
  // refs.containerMovies.append(...movieCard);

});
