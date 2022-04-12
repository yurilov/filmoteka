const refs = {
    searchInputRef: document.querySelector('.input'),
    containerMovies: document.querySelector('.gallery'),
  };  

export const addDataToDOM = (data, date) => {
	const postElement = document.createElement('div');

    console.log('================================DATA RECEIVED', data)
	postElement.classList.add('movie-card');
	postElement.innerHTML = `
      <img class="movie-card_img" src="https://image.tmdb.org/t/p/original${
        data.poster_path
      }" alt="${data.title}" loading="lazy" />
      <div class="movie-card_info">
        <p class="movie_title">
            ${data.original_title}
        </p>
        <div class="movie_text">
          
            <p class="movie-date">
                ${date}
            </p>
          </div>       
      </div>
  `;
  ;

  console.log('================================DATA', data)
  console.log('================================postElement', postElement)
  
 // refs.containerMovies.insertAdjacentHTML("beforeend", postElement);

return postElement.firstElementChild;
}