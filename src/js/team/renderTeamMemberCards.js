export function renderTeamMemberCard({ name, github, linkedin, telegram = '', role, img }) {
  const markup = `<div class="team-member js-close-modal">
                    <img src="${img}" alt="${name}" class="team-member__img">
                    
                    <h3 class="team-member__title">${name}</h3>
                    <p lang="en" class="team-member__text">${role}</p>
                    <ul class="team-social list">
                        <li class="team-social__item">
                            <a href="${telegram}" class="team-social__link">
                                <svg class="team-social__icon">
                                    <use href="/images/icons.svg#icon-telegram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="team-social__item">
                            <a href="${github}" class="team-social__link link">
                                <svg class="team-social__icon">
                                    <use href="/images/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="team-social__item">
                            <a href="${linkedin}" class="team-social__link link">
                                <svg class="team-social__icon">
                                    <use href="/images/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>`;
  return markup;
}
