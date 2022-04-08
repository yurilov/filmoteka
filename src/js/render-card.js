export const renderCardMovie = (data, date) => {
  const wrapper = document.createElement('div');
    
  wrapper.innerHTML = `
    <div class="movie-card">
        <img class="movie-card_img" src="${data.poster_path}" alt="${data.title}" loading="lazy" />
    <div class="movie-card_info">
        <p class="movie_title">
        ${data.original_title}
        </p>
        <div class="movie_text">
            <p class="movie_genre">
            ${data.genre_ids}
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