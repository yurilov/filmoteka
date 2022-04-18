import { creatingAnArrayOfGenres, transformGenresToString } from './creatingAnArrayOfGenres';

export function standardizeDataFromAPI(results) {
  const { title, original_title, poster_path, release_date, id, vote_average } = results;
  const date = release_date.slice(0, 4);
  const genres = creatingAnArrayOfGenres(results).join(', ');
  let poster_link;
  if (poster_path) {
    poster_link = `https://image.tmdb.org/t/p/original${poster_path}`;
  } else {
    poster_link = 'https://i.stack.imgur.com/mwFzF.png';
  }

  const rating = vote_average.toFixed(1);

  return {
    date,
    genres,
    title,
    original_title,
    poster_link,
    id,
    rating,
  };
}

export function standardizeDataFromLocalStorage(results) {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    id,
    vote_average,
    genres: genresArray,
  } = results;
  const date = release_date.slice(0, 4);
  const genres = transformGenresToString(genresArray);
  let poster_link;
  if (poster_path !== null) {
    poster_link = `https://image.tmdb.org/t/p/original${poster_path}`;
  } else {
    poster_link = 'https://i.stack.imgur.com/mwFzF.png';
  }
  const rating = vote_average.toFixed(1);

  return {
    date,
    genres,
    title,
    original_title,
    poster_link,
    id,
    rating,
  };
}
