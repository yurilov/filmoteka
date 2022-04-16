import { fetchFullMovieInfo } from './API/APIRequests';

const listWithId = document.querySelector('.backdrop');
const movieCardIdHome = document.querySelector('.gallery-home');


listWithId.addEventListener("click", openAlt);
movieCardIdHome.addEventListener("click", openAlt);

let id = '';

async function openAlt(event) {

    if (event.target.dataset.id) {
        id = event.target.dataset.id;
        return
    }

    if (event.target.classList.contains("movie__img")) {
        console.log(event.target.getAttribute("alt"));
        console.log(id);
        const data = await fetchFullMovieInfo(id);
        console.log(data);
        return
    }

};