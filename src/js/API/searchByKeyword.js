import axios from 'axios';
import settings from './settings';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { BASE_URL, API_KEY } = settings;
axios.defaults.baseURL = BASE_URL;

// export default function fetchSearchByKeyword(q, pageCounter = 1) {
//   return fetch(
//     `${BASE_URL}api_key=${API_KEY}&query=${q}&page=${pageCounter}&include_adult=true`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

export async function fetchSearchByKeyword(q, page = 1) {
  try {
    const data = await axios.get(`search/movie?api_key=${API_KEY}&query=${q}&page=${page}`);

    return data;
  } catch (e) {
    Notify.failure('Search result not successful. Enter the correct movie name and try again');
  }
}
