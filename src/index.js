import './sass/main.scss';
import './js/handleSearchInput';
import './js/renderHomeGalleryMovie';
import './js/renderMyLibraryGallery';
import './js/openModal';
import { Pagination } from './js/pagination';
// import { myLibraryQueue } from './js/myLibraryQueue';
import './js/clickingLogo';
import './js/addToWatched';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
Loading.hourglass('Loading...', {
  svgColor: '#FF6B08',
});

setTimeout(() => {
  Loading.remove();
}, 1500);
