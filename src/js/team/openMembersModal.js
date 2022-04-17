import { refs } from '../getRefs';
import { teamInfo } from './teamInfo';
import { renderTeamMemberCard } from './renderTeamMemberCards';
import { openModal, addEventListenerToModal } from '../openModal';
// import { closeModal } from '../modalEsc';

function handleFooterBtnClick(e) {
  e.preventDefault();
  openModal();
  const memberCards = renderTeamMemberCard(teamInfo[0]);
  refs.backdropRef.innerHTML = '';

  refs.backdropRef.insertAdjacentHTML('beforeend', memberCards);
  addEventListenerToModal();
}

refs.footerBtnRef.addEventListener('click', handleFooterBtnClick);
