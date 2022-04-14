const LOCAL_KEY = 'movieWatched';
const arrayWatchedMovie = [];

export function addToWatched(data) {
    const btnAddToWatched = document.querySelector('#watchedModalBtn');
    
    btnAddToWatched.addEventListener("click", onBtnAddToWatched);
    
    function onBtnAddToWatched(evt) {
        evt.preventDefault();
        btnAddToWatched.textContent = 'Added';
        btnAddToWatched.removeEventListener('click', onBtnAddToWatched);
        const dataMovie = addLocalData();
        console.log(dataMovie);
        arrayWatchedMovie.push(data);
        const movieWatched = localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayWatchedMovie));
        
        return arrayWatchedMovie;
    }
    
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return [];
  return localData;
}

