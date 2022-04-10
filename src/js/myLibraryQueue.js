function libraryQueue() {
  const buttons = document.querySelectorAll('.button');
  const cards = document.querySelectorAll('.movie-card');

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

  // перебираю коллекцию buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });

  //   пробегаемся по карточкам и на свойство ontransitionend вешаем функцию
  cards.forEach(card => {
    card.ontransitionend = function () {
      if (card.classList.contains('anime')) {
        card.classList.add('hide');
      }
    };
  });
}
libraryQueue();
export { libraryQueue };
