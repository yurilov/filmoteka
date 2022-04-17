import './sass/main.scss';
import './js/handleSearchInput';
import './js/theme-switcher';
import './js/renderHomeGalleryMovie';
import './js/renderMyLibraryGallery';
import './js/openModal';
import './js/team/openMembersModal';
import { trendingPagination } from './js/pagination';
import './js/clickingLogo';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
Loading.hourglass('Loading...', {
  svgColor: '#FF6B08',
});
import './js/openModal';

setTimeout(() => {
  Loading.remove();
}, 1500);

trendingPagination();
