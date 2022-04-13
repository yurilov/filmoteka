import { renderCardMovie } from '../index';
import * as basicLightbox from 'basiclightbox';

function handleMovieCardClick(event) {
    event.preventDefault();
    if (event.target.dataset.action !== 'open-modal') {
        return;   
    }
    onOpenModal();

}

function onOpenModal() {
    document.querySelector('.backdrop').classList.toggle('is-hidden');
};
window.addEventListener('click', handleMovieCardClick);


const closeBtn = document.querySelector('.close-modal-btn');
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('keydown', closeOpenModal);
    
    function closeModal(e) {
    document.removeEventListener('click', closeOpenModal);
    closeModal();
      }


function closeOpenModal() {
    document.querySelector('.backdrop').classList.add('is-hidden');
};
closeOpenModal();


function fetchOneMovieInfo(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      ...data,
      popularity: data.popularity.toFixed(1),
    }));
}




/* (() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() { refs.modal.classList.toggle('.is-hidden'); }
})(); */

/* const modalCard = document.querySelector('movie');
modalCard.innerHTML = `<div class="movie-card" data-action="open-modal">
      <img class="movie-card_img" data-action="open-modal" src="https://image.tmdb.org/t/p/original${
        data.poster_path
}" alt="${data.title}" loading="lazy" />
      <div class="movie-card_info">
        <p class="movie_title">
            ${data.original_title}
        </p>
        <div class="movie_text">
            <p class="movie_genre">
                ${arrGenres.join(', ')}
            </p>
            <p class="movie-date">
                ${date}
            </p>
          </div>
          
      </div>
    </div>`
 */
/* const cardFilm = document.querySelector('.movie');

cardFilm.addEventListener('click', onOpenModal)

async function fetchOneMovieInfo(movie_id) {
const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
return fetch(url)
    .then(response => response.json())
    .then(data => ({
        ...data,
        popularity: data.popularity.toFixed(1),
    }));
};
*/

/* function showModal() */

/* 
/* const galleryRef = document.querySelector('.gallery'); */

/* const movieCardRef = document.querySelector(".movie-card")

const modalRef = {
    openModal: document.querySelector('[data-action="open-modal"]'),
}; */

/* galleryRef.addEventListener("click", selectMovie); */
 
/* movieCardRef.addEventListener("click", selectMovie);

/* function closeModal() {
    document.querySelector.backdrop.classList.add('is-hidden')
};
closeModal(); */