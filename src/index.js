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
    let stringDate = result.release_date;
    console.log(stringDate);
    let date = stringDate.slice(0, 4);
    console.log(date);
    renderCardMovie(result, date);
  });
  refs.containerMovies.append(...movieCard);
});

// images.hits.map((hit) => renderCardImg(hit));
//
// console.log(movieCard)
// console.log(renderCardMovie(movie.data))
