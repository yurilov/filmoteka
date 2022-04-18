import axios from 'axios';
import settings from './settings';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { BASE_URL, API_KEY } = settings;
axios.defaults.baseURL = BASE_URL;

export async function fetchSearchByKeyword(q, page = 1) {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${q}&page=${page}`);

    return response;
  } catch (e) {
    Notify.failure('Search result not successful. Enter the correct movie name and try again');
  }
}

export async function fetchTrending(page = 1) {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${page}`);

    return response.data;
  } catch (e) {
    Notify.failure('Search result not successful. Enter the correct movie name and try again');
  }
}

export async function fetchFullMovieInfo(id) {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    return response.data;
  } catch (e) {
    Notify.failure('Search result not successful. Enter the correct movie id and try again');
  }
}

async function fetchVideo(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function getVideoUrl(movie_id) {
  const data = await fetchVideo(movie_id)
    .then(({ results }) =>
      results.map(item => {
        if (item.site === 'YouTube') {
          return `https://www.youtube.com/embed/${item.key}`;
        }
      }),
    )
    .catch(err => console.log(err));
  return data[0];
}
