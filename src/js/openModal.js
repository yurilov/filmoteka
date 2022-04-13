function handleMovieCardClick(event) {
    event.preventDefault();
    if (event.target.dataset.action !== 'open-modal') {
        return;   
    }
    onOpenModal();
}

function onOpenModal() {
    document.querySelector('.backdrop').classList.toggle('is-hidden');
};

window.addEventListener('click', handleMovieCardClick);



/* 
/* const galleryRef = document.querySelector('.gallery'); */

/* const movieCardRef = document.querySelector(".movie-card")

const modalRef = {
    openModal: document.querySelector('[data-action="open-modal"]'),
}; */

/* galleryRef.addEventListener("click", selectMovie); */
 
/* movieCardRef.addEventListener("click", selectMovie);

function selectMovie(event) {
    event.preventDefault();
    if (event.target.nodeName !== event.current.target) {
        return;
    };

    function onOpenModal() {
        document.querySelector.backdrop.classList.remove('is-hidden');
    };
    onOpenModal();
    const closeModal: document.querySelector('[data-action="close-modal"]');
        
    const backdrop: document.querySelector('backdrop')
};
 */
/* function closeModal() {
    document.querySelector.backdrop.classList.add('is-hidden')
};
closeModal(); */
    
/* export default selectMovie; */

/* const modal = basicLightbox.create(
    `"${modal}">`
   );

 modal.show(); */
