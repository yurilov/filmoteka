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

export async function sortByGenre(genre, page = 1) {
    const response = await axios.get(
      `discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`,
  );
  
      return response.data;
};
