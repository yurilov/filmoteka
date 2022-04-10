const headerHome = document.querySelector('.search-block');
const headerLibrary = document.querySelector('.header-buttons');
const gallery = document.querySelector('.gallery');

// headerLibrary.classList.toggle('visually-hidden');

const jsLibrary = document.querySelector('.header-home .js-library');
const jsIcon = document.querySelector('.header-library .js-icon');

jsIcon.addEventListener('click', opensOrCloses);
jsLibrary.addEventListener('click', opensOrCloses);

function opensOrCloses(e) {
  e.preventDefault();

  headerHome.classList.toggle('visually-hidden');
  headerLibrary.classList.toggle('visually-hidden');
  gallery.classList.toggle('visually-hidden');
}
