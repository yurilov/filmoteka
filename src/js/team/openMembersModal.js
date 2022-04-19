import { refs } from '../getRefs';
import { teamInfo } from './teamInfo';
import { renderTeamMemberCard } from './renderTeamMemberCards';
import { openModal } from '../openModal';
import { closeModal } from '../modalEsc';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css/bundle';

function handleFooterBtnClick(e) {
  e.preventDefault();
  openModal();
  const swiperMarkup = renderSwiper();
  refs.backdropRef.innerHTML = '';
  refs.backdropRef.append(swiperMarkup);
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  });
}

refs.footerBtnRef.addEventListener('click', handleFooterBtnClick);

function renderSwiper() {
  const memberCards = teamInfo.map(member => renderTeamMemberCard(member)).join('');
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add(`swiper-wrapper`);
  swiperWrapper.insertAdjacentHTML('beforeend', memberCards);
  const swiperMarkup = document.createElement('div');
  swiperMarkup.classList.add('swiper');
  swiperMarkup.append(swiperWrapper);
  console.log(swiperMarkup);
  return swiperMarkup;
}
