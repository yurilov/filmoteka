import { refs } from './getRefs';
import { standardizeDataFromLocalStorage } from './standardizeDataFromAPI';
import { renderCardMovieMyLibrary } from './renderMovieCard';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';

const body = document.querySelector('body');

export function closeModal() {
  const closeBtn = document.querySelector('.js-close-modal');
  closeBtn.removeEventListener('click', closeModal);
  refs.body.removeEventListener('keydown', onKeyPress);
  refs.body.classList.remove('modal-is-open');
  refs.backdropRef.removeEventListener('click', closeBackdropClick);

  reload();

  refs.backdropRef.classList.add('is-hidden');
  refs.backdropRef.innerHTML = '';
  refs.body.classList.remove('content-hidden');
}

function reload() {
  let localData = {};
  let movies = [];
  const watched = JSON.parse(localStorage.getItem('movieWatched'));
  const queued = JSON.parse(localStorage.getItem('movieQueued'));

  localData.watched = watched ? watched : [];
  localData.queued = queued ? queued : [];

  const activeButton = document.querySelector('.header-library__btn--active');

  if (activeButton) {
    if (activeButton.classList.contains('header-library__btn--watched')) {
      movies = localData.watched;
    }
    if (activeButton.classList.contains('header-library__btn--queue')) {
      movies = localData.queued;
    }

    let page = 1;
    let newTotalItems = movies.length;
    const newItemsPerPage = 20;
    let moviesOnPage = movies.slice(0, newItemsPerPage);

    const standardizedResults = moviesOnPage.map(data => standardizeDataFromLocalStorage(data));
    const renderSaved = standardizedResults.map(movie => renderCardMovieMyLibrary(movie));
    refs.myLibraryContainerRef.innerHTML = '';
    refs.myLibraryContainerRef.append(...renderSaved);
    Loading.pulse('Loading...', {
      svgColor: '#FF6B08',
    });
    Loading.remove(500);

    if (newTotalItems < 1) {
      document.querySelector('#pagination').classList.add('visually-hidden');
    } else {
      document.querySelector('#pagination').classList.remove('visually-hidden');
    }

    const libPagination = new Pagination('pagination', {
      totalItems: newTotalItems,
      itemsPerPage: newItemsPerPage,
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

    libPagination.on('afterMove', async evt => {
      page = evt.page;
      const moviesOnPage = movies.slice((page - 1) * newItemsPerPage, page * newItemsPerPage);
      const standardizedResults = moviesOnPage.map(data => standardizeDataFromLocalStorage(data));
      const renderSaved = standardizedResults.map(movie => renderCardMovieMyLibrary(movie));
      refs.myLibraryContainerRef.innerHTML = '';
      refs.myLibraryContainerRef.append(...renderSaved);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      Loading.hourglass('Loading...', {
        svgColor: '#FF6B08',
      });
      Loading.remove(800);
    });
  }
}

export const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};

export function closeBackdropClick(e) {
  const classList = e.target.classList;

  if (classList.contains('movie-modal-wrap') || classList.contains('backdrop')) {
    closeModal();
  } else {
    return;
  }
}
