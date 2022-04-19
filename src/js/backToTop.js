import { refs } from './getRefs';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    refs.backToTopRef.classList.add('show');
  } else {
    refs.backToTopRef.classList.remove('show');
  }
}

refs.backToTopRef.addEventListener('click', topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
