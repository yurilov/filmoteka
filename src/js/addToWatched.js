const LOCAL_KEY = 'movieWatched';

export function addToWatched(data) {
  const btnAddToWatched = document.querySelector('#watchedModalBtn');
  const arrayWatchedMovie = addLocalData();
  
  let index; 
  
  btnAddToWatched.addEventListener("click", onBtnAddToWatched);
  
    for (let i = 0; i < arrayWatchedMovie.length; i++) {
        let objDataMovie = arrayWatchedMovie[i];
        for (const key in objDataMovie) {
          if (key === "id") {
            if (data.id == objDataMovie[key]) {
              index = i;
              btnAddToWatched.textContent = 'Delete from watched';
              btnAddToWatched.addEventListener("click", onDeleteFromWatched);
              
            }
            // else {
            //   btnAddToWatched.addEventListener("click", onBtnAddToWatched);
            // }
            } 
          
        }
    }
 
  function onBtnAddToWatched(evt) {
                  evt.preventDefault();
                  btnAddToWatched.textContent = 'Delete from watched';
                  // arrayWatchedMovie = addLocalData();
                  // console.log(data.id)
                  arrayWatchedMovie.push(data);
                  const movieWatched = localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayWatchedMovie)); 
                  btnAddToWatched.removeEventListener("click", onBtnAddToWatched);  
                // btnAddToWatched.addEventListener("click", onDeleteFromWatched);
                  return console.log(arrayWatchedMovie);
  } 
  
  function onDeleteFromWatched(evt) {
    evt.preventDefault();
    btnAddToWatched.textContent = 'Add to watched';
    console.log(index)
    arrayWatchedMovie.splice(index, 1);
    console.log(arrayWatchedMovie)
    const movieWatched = localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayWatchedMovie));
    console.log('вірезан фильм')
    // btnAddToWatched.removeEventListener("click", onDeleteFromWatched);
    // btnAddToWatched.addEventListener("click", onBtnAddToWatched);
    return console.log(arrayWatchedMovie);
  }
  

    
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return [];
  return localData;
}

