const LOCAL_KEY = 'movieWatched';

export function addToWatched(data) {
  const btnAddToWatched = document.querySelector('#watchedModalBtn');
  const arrayWatchedMovie = addLocalData();
  const id = data.id;
  const isMovieInLocalData = arrayWatchedMovie.find(movie => movie.id === id);
  if (!isMovieInLocalData) {
    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
  }
  if (isMovieInLocalData) {
    btnAddToWatched.textContent = 'Delete from watched';
    btnAddToWatched.addEventListener('click', onDeleteFromWatched);
  }

  function onBtnAddToWatched(evt) {
    evt.preventDefault();
    btnAddToWatched.textContent = 'Delete from watched';
    const watchedMovies = addLocalData();
    watchedMovies.push(data);
    const movieWatched = localStorage.setItem(LOCAL_KEY, JSON.stringify(watchedMovies));
    btnAddToWatched.removeEventListener('click', onBtnAddToWatched);
    btnAddToWatched.addEventListener('click', onDeleteFromWatched);
    console.log(watchedMovies);
  }

  function onDeleteFromWatched(evt) {
    evt.preventDefault();
    btnAddToWatched.textContent = 'Add to watched';
    const filteredMoviesArray = arrayWatchedMovie.filter(movie => movie.id !== id);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(filteredMoviesArray));
    btnAddToWatched.removeEventListener('click', onDeleteFromWatched);
    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
  }
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return [];
  return localData;
}
