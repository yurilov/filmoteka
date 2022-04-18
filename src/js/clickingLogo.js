import { refs } from './getRefs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderTrending } from './renderHomeGalleryMovie';
refs.jsIcon.addEventListener('click', openHome);
refs.jsHome.addEventListener('click', openHome);
refs.jsLibrary.addEventListener('click', openGallery);

function openGallery(e) {
  e.preventDefault();
  Loading.pulse('Loading...', {
    svgColor: '#FF6B08',
  });

  refs.headerRef.classList.remove('header-home');
  refs.headerRef.classList.add('header-library');
  refs.searchRef.classList.add('visually-hidden');
  refs.libraryBtnRef.classList.remove('visually-hidden');
  refs.moviesContainerRef.classList.add('visually-hidden');
  refs.myLibraryContainerRef.classList.remove('visually-hidden');
  refs.jsHome.classList.remove('current');
  refs.jsLibrary.classList.add('current');
  document.querySelector('#pagination').classList.add('visually-hidden');
  document.querySelector('#genres-container').classList.add('visually-hidden');
  document.querySelector('.header-library__btn--watched').click();

  setTimeout(() => {
    Loading.remove();
  }, 500);
}

function openHome(e) {
  e.preventDefault();
  Loading.pulse('Loading...', {
    svgColor: '#FF6B08',
  });

  refs.headerRef.classList.add('header-home');
  refs.headerRef.classList.remove('header-library');
  refs.searchRef.classList.remove('visually-hidden');
  refs.libraryBtnRef.classList.add('visually-hidden');
  refs.moviesContainerRef.classList.remove('visually-hidden');
  refs.myLibraryContainerRef.classList.add('visually-hidden');
  refs.jsHome.classList.add('current');
  refs.jsLibrary.classList.remove('current');
  document.querySelector('#pagination').classList.remove('visually-hidden');
  document.querySelector('#genres-container').classList.remove('visually-hidden');
  renderTrending();
  setTimeout(() => {
    Loading.remove();
  }, 500);
}
