export const renderCardMovie = data => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `
    <a href="${data.id}" class="movie-card link" data-action="open-modal" data-modal-open>
      <img class="movie-card_img" data-id=${data.id} src="${data.poster_link}" alt="${data.title}" loading="lazy" data-action="open-modal"/>
      <div class="movie-card_info">
        <p class="movie_title">
            ${data.original_title}
        </p>
        <div class="movie_text">
            <p class="movie_genre">
                ${data.genres}
            </p>
            <p class="movie-date">
                | ${data.date}
            </p>
          </div>
          
      </div>
    </a>
  `;
  return wrapper.firstElementChild;
};

export default renderCardMovie;
