import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/searchByKeyword';
import { refs } from './getRefs';

async function handleSearchInput(e) {
  e.preventDefault();
  const q = e.target.value.trim();
  const data = await loadMovies(q);
  // console.log(data.results);
  const moviesMarkup = createMarkup(data.results);
  refs.containerMovies.innerHTML = '';
  refs.containerMovies.insertAdjacentHTML('beforeend', moviesMarkup);
}

async function loadMovies(q) {
  const dataFromAPI = await fetchSearchByKeyword(q);
  return dataFromAPI.data;
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));
 
  function createMarkup(results){
    const markup =  results.map(({ poster_path, title, original_title, date } ) => {
   return `
   <div class="movie-card">
   <img class="movie-card_img" src="https://image.tmdb.org/t/p/original${
     poster_path
   }" alt="${title}" loading="lazy" />
   <div class="movie-card_info">
     <p class="movie_title">
         ${original_title}
     </p>
     <div class="movie_text">
         <p class="movie-date">
             ${date}
         </p>
       </div>
       
   </div>
  </div>`
  }).join("");
    return markup;
  }