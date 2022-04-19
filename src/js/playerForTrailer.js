import { getVideoUrl } from './API/APIRequests';
import { refs } from './getRefs';

export function openPlayer(event) {
  event.preventDefault();

  if (!event.target.classList.contains('movie__img')) {
    return;
  }

  const movieId = event.target.dataset.id;

  createPlayer(movieId);
  refs.backdropRef.addEventListener('click', handlePlayerClose);
}

const createPlayer = movieId => {
  const trailerUrl = getVideoUrl(movieId).then(url => {
    const markup = `
         <div class="backdrop-player">
           <iframe class="iframe"  width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <button type="button" class="close-modal-btn" data-action="close-modal" id="close">
             <span class="material-icons" width="14" height="14">close</span>
           </button>
         </div>
       `;
    refs.backdropRef.insertAdjacentHTML('beforeend', markup);
  });
};

function handlePlayerClose(event) {
  event.preventDefault();

  if (
    event.target.classList.contains('material-icons') ||
    event.target.classList.contains('backdrop-player')
  ) {
    closePlayer();
    refs.backdropRef.removeEventListener('click', handlePlayerClose);
  }
}

function closePlayer() {
  if (refs.backdropRef.querySelector('.backdrop-player')) {
    const backdropPlayer = document.querySelector('.backdrop-player');
    backdropPlayer.remove();
  }
}
