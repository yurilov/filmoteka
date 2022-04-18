import { addLocalData } from './addLocalData';
import { addToLibrary } from './addToLibrary';

let localData = {};
let type = '';
let movies = [];
let localKey = '';

// функції які при настисканні на кнопку додати видаляє з іншого локалу, якщо фільм та уже є
// functions, when you click the add button removes from another locale, if the movie already exists
export function addWithoutDuplication(data, key) {
    const choosenMovies = addLocalData(key);
    const id = data.id;
    const isMovieInLocalData = choosenMovies.find(movie => movie.id === id);
    if (!isMovieInLocalData) {
      return;
    } else {
      const buttons = document.querySelectorAll('.modal__movie-btn');
      for (const button of buttons) {
          if (button.id === 'watchedModalBtn') {
              movies = localData.watched;
              type = 'watched';
          } else {
              movies = localData.queued;
              type = 'queued';
          }

      const newArrayQueue =choosenMovies.filter(movie => movie.id !== id);
      localStorage.setItem(localKey, JSON.stringify(newArrayQueue));

     const isMovieInLocalData = movies.find(movie => movie.id === data.id);
     if (isMovieInLocalData) {
         button.textContent = 'Delete from ' + type;
     } else {
         button.textContent = 'Add to ' + type;
     }

      addToLibrary(data);
    }
}
}

// export function queuesWithoutDuplication(data, key) {
//     const selectedMovies = addLocalData(key);
//       const id = data.id;
//       const isMovieInLocalData = selectedMovies.find(movie => movie.id === id);
//       if (!isMovieInLocalData) {
//         return;
//       } else {
//         let movieIsInQueue = confirm("Фільм є у черзі на перегляд. Перемістити його у переглянуті?");
//         if (!movieIsInQueue) {
//           return
//         }
//         const btnAddToQueue = document.querySelector('#queueModalBtn');
//         const newArrayQueue = selectedMovies.filter(movie => movie.id !== id);
//         localStorage.setItem('movieQueued', JSON.stringify(newArrayQueue));
//         btnAddToQueue.textContent = 'Add to queue';
//         onBtnAddToWatched();
//       }
//   } 