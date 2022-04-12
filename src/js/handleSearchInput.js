import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/searchByKeyword';
import { refs } from './getRefs';

async function handleSearchInput(e) {
  e.preventDefault();
  const q = e.target.value.trim();
  const data = await loadMovies(q);
  console.log(data.results);
}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q) {
  const dataFromAPI = await fetchSearchByKeyword(q);
  return dataFromAPI.data;
}

const arrayOfMovieObjects =  [ 
  {
    "adult": false,
    "backdrop_path": "/w2zzdVq58ZccJBZyMNcTieq7pfk.jpg",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "id": 605,
    "original_language": "en",
    "original_title": "The Matrix Revolutions",
    "overview": "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
    "popularity": 52.292,
    "poster_path": "/fgm8OZ7o4G1G1I9EeGcb85Noe6L.jpg",
    "release_date": "2003-11-05",
    "title": "The Matrix Revolutions",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 8024
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [
        878
    ],
    "id": 51767,
    "original_language": "en",
    "original_title": "Sexual Matrix",
    "overview": "A professor designing a machine designed to meet the naughtiest fantasies. In order to perfect the discovery, he performed tests on various subjects, aided by his very appealing assistant.",
    "popularity": 15.112,
    "poster_path": "/vmhBIPKyYCWlp2PrIIc6EXZlP9Z.jpg",
    "release_date": "2000-04-01",
    "title": "Sexual Matrix",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 13
  },
  {
    "adult": false,
    "backdrop_path": "/lBdXACywnLwKUZmZkZ87djDQBeV.jpg",
    "genre_ids": [
        99
    ],
    "id": 14543,
    "original_language": "en",
    "original_title": "The Matrix Revisited",
    "overview": "The film goes behind the scenes of the 1999 sci-fi movie The Matrix.",
    "popularity": 15.282,
    "poster_path": "/8yxSztoc5sqZiGuKcFuVOh65B6Y.jpg",
    "release_date": "2001-11-19",
    "title": "The Matrix Revisited",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 155
  }];
  
  const moviesMarkup = createMarkup(arrayOfMovieObjects);
  refs.containerMovies.insertAdjacentHTML('beforeend', moviesMarkup);
  
  
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