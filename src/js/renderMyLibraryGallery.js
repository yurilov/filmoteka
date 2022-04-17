import { refs } from './getRefs';
import { showWatched } from './addToWatched';

refs.jsLibrary.addEventListener('click', showWatched);
refs.jsLibrary.addEventListener('click', () => {
  document.querySelector('#pagination').classList.add('visually-hidden');
});
