import { addLocalData } from './addLocalData';
import { addToQueued } from './addToQueued'
import {addToWatched} from './addToWatched'

// функції які при настисканні на кнопку додати видаляє з іншого локалу, якщо фільм та уже є
export function addToWatchedWithoutDuplication(data) {
    const queueMovies = addLocalData('movieQueued');
    const id = data.id;
    const isMovieInLocalData = queueMovies.find(movie => movie.id === id);
    if (!isMovieInLocalData) {
      return;
    } else {
      const btnAddToQueue = document.querySelector('#queueModalBtn');
      const newArrayQueue = queueMovies.filter(movie => movie.id !== id);
      localStorage.setItem('movieQueued', JSON.stringify(newArrayQueue));
      btnAddToQueue.textContent = 'Add to queue';
      addToQueued(data)
    }

}

export function addToQueueWithoutDuplication(data) {
    const watchedMovies = addLocalData('movieWatched');
    const id = data.id;
    const isMovieInLocalData = watchedMovies.find(movie => movie.id === id);
    if (!isMovieInLocalData) {
      return;
    } else {
      const btnAddToWatched = document.querySelector('#watchedModalBtn');
      const newArrayWatched = watchedMovies.filter(movie => movie.id !== id);
      localStorage.setItem('movieWatched', JSON.stringify(newArrayWatched));
      btnAddToWatched.textContent = 'Add to watched';
        addToWatched(data);
    }

}



// при натисканні на btnAddToWatched перевіряє чм є фільм у черзі на перегляд і або переміщає
//  його в інший локал або додає фільм в обидва
export function queuesWithoutDuplication(data) {
  const queueMovies = addLocalData('movieQueued');
    const id = data.id;
    const isMovieInLocalData = queueMovies.find(movie => movie.id === id);
    if (!isMovieInLocalData) {
      return;
    } else {
      let movieIsInQueue = confirm("Фільм є у черзі на перегляд. Перемістити його у переглянуті?");
      if (!movieIsInQueue) {
        return
      }
      const btnAddToQueue = document.querySelector('#queueModalBtn');
      const newArrayQueue = queueMovies.filter(movie => movie.id !== id);
      localStorage.setItem('movieQueued', JSON.stringify(newArrayQueue));
      btnAddToQueue.textContent = 'Add to queue';
      onBtnAddToWatched();
    }
}