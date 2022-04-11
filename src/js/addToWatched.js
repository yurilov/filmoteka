import { refs } from './getRefs';

refs.btnAddToWatched.addEventListener("click", onBtnAddToWatched);

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

function onBtnAddToWatched(evt) {
    const arrMovieWatched = [];
    evt.preventDefault();
    const movieWatched = localStorage.setItem("settings", JSON.stringify(settings));
    arrMovieWatched.push(movieWatched);
    return arrMovieWatched;
}