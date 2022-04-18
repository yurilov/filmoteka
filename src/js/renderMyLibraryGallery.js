
import { refs } from './getRefs';
import { showSaved } from './addToLibrary';


refs.jsLibrary.addEventListener('click', showSaved);
refs.jsLibrary.addEventListener('click', () => {
  document.querySelector('#pagination').classList.add('visually-hidden');
  //document.querySelector('#genres-container').classList.add('visually-hidden');
});
