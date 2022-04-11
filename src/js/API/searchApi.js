
import axios from 'axios';
import settings from './settings';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { BASE_URL, API_KEY } = settings;
axios.defaults.baseURL = BASE_URL;

export async function fetchSearchMoviesApi(q, page = 1) {                        
   try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${q}&page=${page}`);
   return response;
    } catch (err) {
        return console.log(err);
    }
}