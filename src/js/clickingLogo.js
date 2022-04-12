const headerHome = document.querySelector('.header-home');
const headerLibrary = document.querySelector('.header-library');
const gallery = document.querySelector('.gallery');

headerLibrary.classList.toggle('visually-hidden');

const jsLibrary = document.querySelector('.header-home .js-library');
const jsHome = document.querySelector('.header-library .js-home');
const jsIcon = document.querySelector('.header-library .js-icon');


jsIcon.addEventListener('click', opensOrCloses);
jsHome.addEventListener('click', opensOrCloses);
jsLibrary.addEventListener('click', opensOrCloses);

function opensOrCloses(e) {
  e.preventDefault();

  headerHome.classList.toggle('visually-hidden');
  headerLibrary.classList.toggle('visually-hidden');
  gallery.classList.toggle('visually-hidden');
}
