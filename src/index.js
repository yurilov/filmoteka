import './sass/main.scss';
import './js/handleSearchInput';
import { fetchSearchByKeyword } from './js/API/searchByKeyword';
import { fetchTrending } from './js/API/searchByKeyword';
import { renderCardMovie } from './js/render-card';
import { refs } from './js/getRefs';
import './js/clickingLogo';
import { creatingAnArrayOfGenres } from './js/creatingAnArrayOfGenres';


const movie = fetchTrending().then(movie => {
  const objDataMovie = movie;

  const results = objDataMovie.results;
  console.log(results);

  const movieCard = results.map(result => {
    let date = result.release_date.slice(0, 4);

    const arrGenres = creatingAnArrayOfGenres(result);
    return renderCardMovie(result, arrGenres, date);
  });
  refs.containerMovies.append(...movieCard);
});
