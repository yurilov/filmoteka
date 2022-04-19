import { creatingAnArrayOfGenres, transformGenresToString } from './creatingAnArrayOfGenres';

export function standardizeDataFromAPI(results) {
  const { title, original_title, poster_path, release_date, id, vote_average } = results;
  const date = release_date.slice(0, 4);
  const genres = creatingAnArrayOfGenres(results).join(', ');
  let poster_link;
  if (poster_path) {
    poster_link = `https://image.tmdb.org/t/p/original${poster_path}`;
  } else {
    poster_link = 'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg';
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
    vote_count,
    popularity,
    overview,
    genres: genresArray,
  } = results;
  const date = release_date.slice(0, 4);
  const genres = transformGenresToString(genresArray);
  let poster_link;
  let poster_link_modal:
  if (poster_path !== null) {
    poster_link = `https://image.tmdb.org/t/p/original${poster_path}`;
    poster_link_modal = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
  } else {
    poster_link = 'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg';
    poster_link_modal = 'https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg';
  }
  const rating = vote_average.toFixed(1);

  return {
    date,
    genres,
    title,
    original_title,
    poster_link,
    poster_link_modal,
    id,
    rating,
    vote_count,
    popularity,
    overview,
  };
}
