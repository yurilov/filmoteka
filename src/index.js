import './sass/main.scss';
import './js/handleSearchInput';
import './js/renderHomeGalleryMovie';
import './js/renderMyLibraryGallery'
import { Pagination } from './js/pagination';
// import { myLibraryQueue } from './js/myLibraryQueue';
import './js/clickingLogo';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
Loading.hourglass('Loading...', {
  svgColor: '#FF6B08',
});
import './js/openModal';


setTimeout(() => {
  Loading.remove();
}, 1500);
