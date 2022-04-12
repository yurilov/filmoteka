import { refs } from './getRefs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

refs.headerLibrary.classList.toggle('visually-hidden');

refs.jsIcon.addEventListener('click', opensOrCloses);
refs.jsHome.addEventListener('click', opensOrCloses);
refs.jsLibrary.addEventListener('click', opensOrCloses);

function opensOrCloses(e) {
  e.preventDefault();

  Loading.pulse('Loading...', {
    svgColor: '#FF6B08',
  });

  refs.headerHome.classList.toggle('visually-hidden');
  refs.headerLibrary.classList.toggle('visually-hidden');
  refs.containerMovies.classList.toggle('visually-hidden');
  refs.containerMyLibrary.classList.toggle('visually-hidden');

  setTimeout(() => {
    Loading.remove();
  }, 500);
}
