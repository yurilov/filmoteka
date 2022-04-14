export const renderCardMovie = (data, arrGenres, date, movie_id) => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `
    <div class="movie-card" data-action="open-modal" data-modal-open>
      <img class="movie-card_img" data-action="open-modal" src="https://image.tmdb.org/t/p/original${
        data.poster_path
      }" alt="${data.title}" loading="lazy" />
      <div class="movie-card_info">
        <p class="movie_title">
            ${data.original_title}
        </p>
        <div class="movie_text">
            <p class="movie_genre">
                ${arrGenres.join(', ')}
            </p>
            <p class="movie-date">
                ${date}
            </p>
          </div>
          
      </div>
    </div>
  `;
  return wrapper.firstElementChild;
};

export default renderCardMovie;
