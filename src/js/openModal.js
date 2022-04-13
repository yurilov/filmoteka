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

function closeOpenModal() {
    document.querySelector('.backdrop').classList.add('is-hidden');
};
closeOpenModal();

window.addEventListener('click', handleMovieCardClick);
/* -------------Lightbox basic library ------------------*/

/* const instance = basicLightbox.create(`
    <div class="backdrop is-hidden" data-index="backdrop">
  <div class="movie-modal-wrap">
  <div class="movie" data-index="modal" data-modal>
    <div class="movie__image-wrap">
      <img
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nrTGCUytgvWjKlZtFXKuDNI30aw.jpg"
        alt="Movie img"
        class="movie__img modal-poster"
      />
    </div>
    <div class="movie__content-wrap">
      <h3 class="movie__title">Movie name</h3>
      <div class="movie__info-wrap">
        <ul class="movie__info-wrap-list list">
          <li class="movie__info-wrap-item">
            <p class="movie__info-wrap-item-type">Vote / Votes</p>
            <p class="movie__info-wrap-item-vote"><span></span> / <span></span></p>
          </li>
          <li class="movie__info-wrap-item">
            <p class="movie__info-wrap-item-type">Popularity</p>
            <p class="movie__info-wrap-item-popularity"></p>
          </li>
          <li class="movie__info-wrap-item">
            <p class="movie__info-wrap-item-type">Original Title</p>
            <p class="movie__info-wrap-item-name">xxxx</p>
          </li>
          <li class="movie__info-wrap-item">
            <p class="movie__info-wrap-item-type">Genre</p>
            <ul class="movie__info-list list">
              <li class="movie__info-item"><span>,</span></li>
              <li class="movie__info-item"><span>,</span></li>
              <li class="movie__info-item"></li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="about-movie-title">About</p>
      <p class="movie-description">
        Four of the West is most infamous outlaws assemble to steal a huge stash of gold from the
        most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and
        the other three escapes with bags of gold hide out in the abandoned gold mine where they
        happen across another gang of three – who themselves were planning to hit the very same
        bank! As tensions rise, things go from bad to worse as they realise the bags of gold are
        filled with lead... they have been double crossed – but by who and how
      </p>
      <div class="movie__modal-btn-box">
        <button type="button" class="button modal__movie-btn" id="watchedModalBtn">
          Add to watched
        </button>
        <button type="button" class="button modal__movie-btn" id="queueModalBtn">
          Add to queue
        </button>
      </div>
    </div>
    <button type="button" class="close-modal-btn" data-modal-close id="close">
      <!-- <svg class="close-modal-icon" width="20" height="20">
        <use href="/images/svg/close.svg#icon-close"></use> -->
        <span class="material-icons" width="14" height="14">close</span>
      </svg>
    </button>
  </div>
  </div>
</div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})

instance.show()
 */
/* ------------------------------------------------------------- */


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