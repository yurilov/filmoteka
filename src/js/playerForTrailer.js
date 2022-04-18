
import { trailers } from './trailerList'; //src, alt

const listWithId = document.querySelector('.backdrop');
listWithId.addEventListener("click", openPlayer);
listWithId.addEventListener("click", closePlayerIcons);
listWithId.addEventListener("click", closePlayerBeckdrop);


function openPlayer(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains("movie__img")) {
    return
  };

  const nameAlt = event.target.getAttribute("alt");

  createPlayer(nameAlt);
};


const createPlayer = nameAlt => {

  return trailers.forEach(({ src, alt }) => {

    if (nameAlt === alt) {
      
      const markup = `
        <div class="beckdrop-player">
          <iframe class="iframe"  width="560" height="315" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <button type="button" class="close-modal-btn" data-action="close-modal" id="close">
            <span class="material-icons" width="14" height="14">close</span>
          </button>
        </div>
      `

      return listWithId.insertAdjacentHTML("beforeend", markup);        
    };

  });  
};


function closePlayerIcons(event) { 
  event.preventDefault();

  if (!event.target.classList.contains("material-icons")) {
    return
  };

  closePlayer()
};


function closePlayerBeckdrop(event) { 
  event.preventDefault();

  if (!event.target.classList.contains("beckdrop-player")) {
    return
  };

  closePlayer();
};


function closePlayer() { 

  if (listWithId.querySelector('.beckdrop-player')) { 
    const beckdropPlayer = document.querySelector('.beckdrop-player');
    beckdropPlayer.remove();
    return
  };

  return
};
