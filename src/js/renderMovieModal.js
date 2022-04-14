export function renderMovieModal(data) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="movie-modal-wrap">
      <div class="movie modal" data-index="modal" modal data-modal>
        <div class="movie__image-wrap">
        <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}"
            alt="${data.title}"
            class="movie__img modal-poster"
        />
        </div>
        <div class="movie__content-wrap">
        <h3 class="movie__title">${data.original_title}</h3>
        <div class="movie__info-wrap">
            <ul class="movie__info-wrap-list list">
            <li class="movie__info-wrap-item">
                <p class="movie__info-wrap-item-type">Vote / Votes</p>
                <p class="movie__info-wrap-item-vote"><span>${data.vote_average}</span> / <span>${data.vote_count}</span></p>
            </li>
            <li class="movie__info-wrap-item">
                <p class="movie__info-wrap-item-type">Popularity</p>
                <p class="movie__info-wrap-item-popularity">${data.popularity}</p>
            </li>
            <li class="movie__info-wrap-item">
                <p class="movie__info-wrap-item-type">Original Title</p>
                <p class="movie__info-wrap-item-name">${data.original_title}</p>
            </li>
            <li class="movie__info-wrap-item">
                <p class="movie__info-wrap-item-type">Genre</p>
                <ul class="movie__info-list list">
                    <li class="movie__info-item">${data.genres[0].name}</li>
                </ul>
            </li>
            </ul>
        </div>
        <p class="about-movie-title">About</p>
        <p class="movie-description">
            ${data.overview}
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
        <button type="button" class="close-modal-btn" data-action="close-modal" id="close">
            <span class="material-icons" width="14" height="14">close</span>
        </button>
      </div>
    </div>`;
  return wrapper.firstElementChild;
}
