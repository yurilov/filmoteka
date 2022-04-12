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
      "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      "genre_ids": [
          28,
          878,
          35,
          10751
      ],
      "id": 675353,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 2",
      "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      "popularity": 7221.466,
      "poster_path": "/8E7mIpEpSATxX5JEuw55GYx9hfk.jpg",
      "release_date": "2022-03-30",
      "title": "Sonic the Hedgehog 2",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 335
  },
  {
      "adult": false,
      "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
      "genre_ids": [
          28,
          878,
          35,
          10751
      ],
      "id": 454626,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog",
      "overview": "Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik. Now it’s super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic’s unique power for world domination.",
      "popularity": 2232.332,
      "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "release_date": "2020-02-12",
      "title": "Sonic the Hedgehog",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 7723
  },
  {
      "adult": false,
      "backdrop_path": "/j0xO6355h5HfvC425sWDT6tiBZM.jpg",
      "genre_ids": [
          28,
          12,
          14
      ],
      "id": 939243,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 3",
      "overview": "The third film in the \"Sonic the Hedgehog\" franchise.",
      "popularity": 1953.486,
      "poster_path": "/aNSBaYTgPz8QEADi3xiD52X4uVF.jpg",
      "release_date": "",
      "title": "Sonic the Hedgehog 3",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/xkAgaCeMoJWwAQ5ocJMxXIqv3hh.jpg",
      "genre_ids": [
          28,
          16,
          35
      ],
      "id": 87442,
      "original_language": "en",
      "original_title": "Sonic: Christmas Blast",
      "overview": "Sonic the Hedgehog must stop the evil Dr. Robotnik from ruining Christmas after Santa Claus disappears",
      "popularity": 127.789,
      "poster_path": "/dugRUjNPO0vullROtBSORBH3eBD.jpg",
      "release_date": "1996-11-24",
      "title": "Sonic: Christmas Blast",
      "video": false,
      "vote_average": 5.4,
      "vote_count": 12
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          10751,
          16
      ],
      "id": 452607,
      "original_language": "pl",
      "original_title": "Sonic Maskarada",
      "overview": "",
      "popularity": 98.258,
      "poster_path": "/e23LjxgIwSEUtEg0BiMJ7mjB7d.jpg",
      "release_date": "2006-01-01",
      "title": "Sonic Maskarada",
      "video": true,
      "vote_average": 10,
      "vote_count": 1
  }];

const pictureMarkup = createPictureMarkup(arrayOfMovieObjects);
refs.containerMovies.insertAdjacentHTML('beforeend', pictureMarkup);


function createPictureMarkup(pictures){
  const markup =  pictures.map(({ poster_path, title, original_title, date } ) => {
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