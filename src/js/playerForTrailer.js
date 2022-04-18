import { getVideoUrl } from './API/APIRequests';
// import { trailers } from './trailerList'; //src, alt
import { refs } from './getRefs';
const listWithId = document.querySelector('.backdrop');
listWithId.addEventListener('click', openPlayer);
listWithId.addEventListener('click', closePlayerIcons);
listWithId.addEventListener('click', closePlayerbackdrop);

function openPlayer(event) {
  event.preventDefault();

  if (!event.target.classList.contains('movie__img')) {
    return;
  }

  const movieId = event.target.dataset.id;

  createPlayer(movieId);
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
    listWithId.insertAdjacentHTML('beforeend', markup);
  });
};
// const createPlayer = movie_id => {
//   return trailers.forEach(({ src, alt }) => {
//     if (nameAlt === alt) {
//       const markup = `
//         <div class="backdrop-player">
//           <iframe class="iframe"  width="560" height="315" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//           <button type="button" class="close-modal-btn" data-action="close-modal" id="close">
//             <span class="material-icons" width="14" height="14">close</span>
//           </button>
//         </div>
//       `;

//       return listWithId.insertAdjacentHTML('beforeend', markup);
//     }
//   });
// };

function closePlayerIcons(event) {
  event.preventDefault();

  if (!event.target.classList.contains('material-icons')) {
    return;
  }

  closePlayer();
}

function closePlayerbackdrop(event) {
  event.preventDefault();

  if (!event.target.classList.contains('backdrop-player')) {
    return;
  }

  closePlayer();
}

function closePlayer() {
  if (listWithId.querySelector('.backdrop-player')) {
    const backdropPlayer = document.querySelector('.backdrop-player');
    backdropPlayer.remove();
    return;
  }

  return;
}
