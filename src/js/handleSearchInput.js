import { debounce } from 'debounce';
import { fetchSearchByKeyword } from './API/searchByKeyword';
import { refs } from './getRefs';

async function handleSearchInput(e) {
  e.preventDefault();
  const q = e.target.value.trim();
  const data = await loadMovies(q);
  console.log('DATA.RESULTS FROM HANDLE SEARCH INPUT: ' + JSON.stringify(data.results));


  const makeColorPickerOptions =data => {
    return data.results.map(option => {
      const buttonEl = document.createElement('button');
      buttonEl.type = 'button';
      buttonEl.classList.add('color-picker__option');
      buttonEl.textContent = option.title;
  
      return buttonEl;
    });
  };
  
  const elements = makeColorPickerOptions(fetchSearchByKeyword(q));
  refs.containerMovies.append(...elements);

}

refs.searchInputRef.addEventListener('input', debounce(handleSearchInput, 500));

async function loadMovies(q) {
  const dataFromAPI = await fetchSearchByKeyword(q);
  console.log('DATA.RESULTS FROM HANDLE SEARCH INPUT LOAD MOVIES: ' + JSON)
  return dataFromAPI.data;
}

