import { fetchTrending } from './API/searchByKeyword';
import { renderCardMovie } from './render-card';
import { creatingAnArrayOfGenres } from './creatingAnArrayOfGenres';
import { refs } from './getRefs';

export class Pagination {
  #currentPage = 1;
  constructor({ initialPage = 1, total = 1, onChange }) {
    this.#currentPage = initialPage;
    this.total = total;
    this.onChange = onChange;
  }

  get currentPage() {
    return this.#currentPage;
  }

  set currentPage(value) {
    this.#currentPage = value;

    if (this.onChange) {
      this.onChange(value);
    }
  }

  nextPage() {
    if (this.currentPage === this.total) {
      return;
    }

    this.currentPage += 1;
  }

  prevPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage -= 1;
  }
}

const handlePageChange = currentPage => {
  fetchTrending(currentPage).then(movie => {
    const results = movie.results;

    const movieCard = results.map(result => {
      let date = result.release_date.slice(0, 4);
      const arrGenres = creatingAnArrayOfGenres(result);
      return renderCardMovie(result, arrGenres, date);
    });
    refs.containerMovies.innerHTML = '';
    refs.containerMovies.append(...movieCard);
  });
};

const moviePagination = new Pagination({
  total: 100,
  onChange(value) {
    handlePageChange(value);
    refs.currentPage.textContent = value;
  },
});

refs.nextPage.addEventListener('click', () => {
  moviePagination.nextPage();
});

refs.prevPage.addEventListener('click', () => {
  moviePagination.prevPage();
});
