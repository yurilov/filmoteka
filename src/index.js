import './sass/main.scss';
import './js/handleSearchInput';
import './js/theme-switcher';
import './js/renderHomeGalleryMovie';
import './js/renderMyLibraryGallery';
import './js/openModal';
import './js/team/openMembersModal';
import './js/sortByGenre';
import { trendingPagination } from './js/pagination';
import './js/clickingLogo';
import './js/playerForTrailer';
import './js/backToTop';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const currentPage = localStorage.getItem('currentPage');
Loading.hourglass('Loading...', {
  svgColor: '#FF6B08',
});

setTimeout(() => {
  Loading.remove();
}, 1500);

trendingPagination(currentPage);
