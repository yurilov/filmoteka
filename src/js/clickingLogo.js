const contactIcon = document.querySelector('.contact-icon');
const headerLibrary = document.querySelector('.header-library');

contactIcon.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    headerLibrary.innerHTML = '';
};