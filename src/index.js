import './sass/main.scss';
import './js/handleSearchInput';
import { fetchSearchByKeyword } from './js/API/searchByKeyword';
import { fetchTrending } from './js/API/searchByKeyword';
import { renderCardMovie } from './js/render-card';
import { refs } from './js/getRefs';

const movie = fetchTrending().then(movie => {
  console.log(movie);
  const objDataMovie = movie;
  console.log(objDataMovie);

  const results = objDataMovie.results;
  console.log(results);

  const movieCard = results.map(result => {
    let date = result.release_date.slice(0, 4);
    return renderCardMovie(result, date)
    
  });
  refs.containerMovies.append(...movieCard);
});


