import { addToQueued } from './addToQueued';

function libraryQueue() {
  const buttons = document.querySelectorAll('.button');
  const cards = document.querySelectorAll('.movie-card');
  const wrapper = document.querySelector('.wrapper');

  // перебираю коллекцию buttons
  //   buttons.forEach(button => {
  //     button.addEventListener('click', () => {
  //       const currentCategory = button.dataset.filter;
  //       filter(currentCategory, cards);
  //     });
  //   });

  // Event delegation
  // Вешаем обработчик событий на родительский div с классом "wrapper" (я его добавила),
  //     и обрабатываем события, которые активируются на дочерних элементах button.
  function handleClick(e) {
    console.log('click', e.target);
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const currentCategory = e.target.dataset.filter;
    filter(currentCategory, cards);
  }
  wrapper.addEventListener('click', handleClick);

  //   пробегаемся по карточкам и на свойство ontransitionend вешаем функцию
  cards.forEach(card => {
    card.ontransitionend = function () {
      if (card.classList.contains('anime')) {
        card.classList.add('hide');
      }
    };
  });
}

// функция, которая принимает категорию, по которой мы фильтруем
// и items - это набор карточек фильма, которые нужно профильтровать
// то есть содержит ли конкретный item ту категорию, которую мы передали в category

function filter(category, items) {
  items.forEach(item => {
    const isItemFiltered = !item.classList.contains(category);
    const isShowAllLibrary = category.toLowerCase() === 'myLibrary';
    if (isItemFiltered && !isShowAllLibrary) {
      item.classList.add('anime');
    } else {
      item.classList.remove('hide');
      item.classList.remove('anime');
    }
  });
}

// export function getQueue() {
//   showLoader();
//   let arrayOfStrings = JSON.parse(localStorage.getItem('movieQueued'));
//   if (arrayOfStrings === null || arrayOfStrings.length === 0) {
//     hideLoader();
//     queueEmptyHandler();
//     return;
//   }
//   renderFromLocalStorage(arrayOfStrings);
//   hideLoader();
//   btnQueue.classList.add('btn-active-page');
//   btnWatched.classList.remove('btn-active-page');
// }

const addToQueued = new addToQueued();
const queueStore = addToQueued.addToQueuedLocalStorage();
// libraryQueue();
export { libraryQueue };
