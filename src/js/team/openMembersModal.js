import { refs } from '../getRefs';
import { teamInfo } from './teamInfo';
import { renderTeamMemberCard } from './renderTeamMemberCards';
import { openModal } from '../openModal';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css/bundle';

function handleFooterBtnClick(e) {
  e.preventDefault();
  openModal();
  refs.body.addEventListener('keydown', onKeyPress);
  refs.backdropRef.addEventListener('click', closeBackdropClick);

  const swiperMarkup = renderSwiper();
  refs.backdropRef.innerHTML = '';
  refs.backdropRef.insertAdjacentHTML('beforeend', swiperMarkup);
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

refs.footerBtnRef.addEventListener('click', handleFooterBtnClick);

function renderSwiper() {
  const memberCards = teamInfo.map(member => renderTeamMemberCard(member)).join('');
  const markup = `<div class="swiper">
                    <div class="swiper-wrapper">
                      ${memberCards}
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                    
  `;
  return markup;
}

export function closeMembersModal() {
  refs.body.removeEventListener('keydown', onKeyPress);
  refs.body.classList.remove('modal-is-open');
  refs.backdropRef.removeEventListener('click', closeBackdropClick);

  refs.backdropRef.classList.add('is-hidden');
  refs.backdropRef.innerHTML = '';
  refs.body.classList.remove('content-hidden');
}

const onKeyPress = event => {
  if (event.code === 'Escape') closeMembersModal();
};

function closeBackdropClick(e) {
  const classList = e.target.classList;

  if (classList.contains('backdrop') || classList.contains('swiper')) {
    closeMembersModal();
  } else {
    return;
  }
}
