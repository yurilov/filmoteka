import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/APIRequests';
import { refs } from './getRefs';
import { standardizeDataFromAPI } from './standardizeDataFromAPI';
// import movieCard from './templates/movieCard.hbs';
import { renderCardMovie } from './renderMovieCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';

async function handleSearchInput(e) {
  e.preventDefault();
  document.querySelector('#genres-container').classList.add('visually-hidden');
  const q = e.target.value.trim();
  loadMovies(q).then(data => {
    if (refs.searchInputRef.value.length > 0) {
      const results = data.results;
      if (results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name and try again');
      }
      const standardizedResults = results.map(result => standardizeDataFromAPI(result));
      const movieCard = standardizedResults.map(result => renderCardMovie(result));
      refs.moviesContainerRef.innerHTML = '';
      refs.moviesContainerRef.append(...movieCard);
    } else {
      refs.moviesContainerRef.innerHTML = '';
    }
  }).catch(e => console.log(e));
  
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
    const currentPage = (loadMovies.page = evt.page);
    const movies = await loadMovies(q, currentPage).then(data => {
      const results = data.results;
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
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q, page = 1) {
  const currentPage = page;
  if (q.length > 0) {
    const dataFromAPI = await fetchSearchByKeyword(q, currentPage);
    return dataFromAPI.data;
  } else {
    return;
  }
}
