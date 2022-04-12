export const addDataToDOM = (data) => {
	const postElement = document.createElement('div');
	postElement.classList.add('photo-card');
	postElement.innerHTML = `<div class="photo-card-item">
    <img src="${data.webformatURL}" alt="" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>${data.likes}</b>
      </p>
      <p class="info-item">
        <b>${data.views}</b>
      </p>
      <p class="info-item">
        <b>${data.comments}</b>
      </p>
      <p class="info-item">
        <b>${data.downloads}</b>
      </p>
    </div>
  </div>`;
  ;

  console.log('================================DATA', data)
  console.log('================================postElement', postElement)
  refs.galleryEl.insertAdjacentHTML("beforeend", postElement);
}