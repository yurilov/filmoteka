import { fetchTrending } from './API/APIRequests';
import { renderCardMovie } from './renderMovieCard';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';

export const renderTrending = (page = 1) => {
  fetchTrending(page).then(movie => {
    const objDataMovie = movie;

    const results = objDataMovie.results;
    // console.log(results);

    const standardizedResults = results.map(result => standardizeDataFromAPI(result));
    // console.log(standardizedResults);

    const movieCard = standardizedResults.map(result => {
      // console.log(result)
      return renderCardMovie(result);
    });

    refs.moviesContainerRef.append(...movieCard);

    // refs.myLibraryContainerRef.append(...movieCard);
  });
};
let currentPage = localStorage.getItem('currentPage');
renderTrending(currentPage);
