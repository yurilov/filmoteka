import { renderCardMovie } from '../index';

import {settings} from './API/settings'

/* async function fetchOneMovieInfo(movie_id) {
    const id = e.tagret.getAttribute('href');

    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return ({
        ...data,
        popularity: data.popularity.toFixed(1),
    });
} */



function handleMovieCardClick(event) {
    
    event.preventDefault();
    if (event.target.dataset.action !== 'open-modal') {
        return;   
    }
    onOpenModal();
}

function onOpenModal() {
    document.querySelector('.backdrop').classList.toggle('is-hidden');
    fetchOneMovieInfo(movie_id);
    
};
window.addEventListener('click', handleMovieCardClick);


const closeBtn = document.querySelector('.close-modal-btn');
    closeBtn.addEventListener('click', closeOpenModal);

    window.addEventListener('keydown', closeOpenModal);
    
    function closeModal(e) {
    document.removeEventListener('click', closeOpenModal);
    closeModal();
    }


function closeOpenModal() {
    document.querySelector('.backdrop').classList.add('is-hidden');
};
closeOpenModal();


/* const modalCard = document.querySelector('movie');
modalCard.innerHTML = `<a href="{{id}}" class="movie-card link" data-action="open-modal" data-modal-open>    
    <img class="movie-card_img" data-action="open-modal" src="{{poster_link}}" 
        alt="{{title}}" loading="lazy" />
    <div class="movie-card_info">
        <p class="movie_title">
            {{original_title}}
        </p>
        <div class="movie_text">
            <p class="movie_genre">
                {{genres}}
            </p>
            <p class="movie-date">
                {{date}}
            </p>
        </div>        
    </div>    
</a>` */

