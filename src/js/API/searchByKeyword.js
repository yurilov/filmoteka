const API_KEY = '6c127b3c75b6f148a4347b27ab4461ee';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?';

export default function fetchSearchByKeyword(q, pageCounter = 1) {
  return fetch(`${BASE_URL}api_key=${API_KEY}&query=${q}&page=${pageCounter}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
