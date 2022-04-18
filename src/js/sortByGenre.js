import { refs } from './getRefs';
import { fetchTrending } from "./API/APIRequests";
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
import { renderCardMovie } from './renderMovieCard';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';
import { sortByGenre } from "./API/APIRequests";
import { trendingPagination } from './pagination';

document.getElementById('selected').addEventListener('change', getGenreId);

function getGenreId() {
  let genreId = parseInt(this.value);
    
  if (genreId > 0) {
    const movie = sortByGenre(genreId).then(movie => {
      const results = movie.results;
      const standardizedResults = results.map(result => standardizeDataFromAPI(result));
      const movieCard = standardizedResults.map(result => {
        return renderCardMovie(result);
      });
      refs.moviesContainerRef.innerHTML = '';
      refs.moviesContainerRef.append(...movieCard);
      Loading.pulse('Loading...', {
        svgColor: '#FF6B08',
      });
      Loading.remove(500);
      const myPagination = new Pagination('pagination', {
        totalItems: 5000,
        itemsPerPage: 10,
        visiblePages: 5,
        page: 1,
        usageStatistics: false,
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
          moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
          moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
        },
      });

      myPagination.on('beforeMove', async evt => {
        const currentGenre = (sortByGenre.page = genreId);
        const currentPage = (sortByGenre.page = evt.page);
        const movies = await sortByGenre(currentGenre, currentPage).then(movie => {
          const results = movie.results;
          const standardizedResults = results.map(result => standardizeDataFromAPI(result));
          const movieCard = standardizedResults.map(result => renderCardMovie(result));
          refs.moviesContainerRef.innerHTML = '';
          refs.moviesContainerRef.append(...movieCard);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        Loading.hourglass('Loading...', {
          svgColor: '#FF6B08',
        });
        Loading.remove(800);
      });
    });
  } else {
    const movieW = fetchTrending().then(movie => {
      const resultsW = movie.results;
      const standardizedResultsW = resultsW.map(result => standardizeDataFromAPI(result));
      const movieCardW = standardizedResultsW.map(result => {
        return renderCardMovie(result);
      });
      refs.moviesContainerRef.innerHTML = '';
      refs.moviesContainerRef.append(...movieCardW);
      Loading.pulse('Loading...', {
        svgColor: '#FF6B08',
      });
      Loading.remove(500);
    });

    trendingPagination();
  }
};
