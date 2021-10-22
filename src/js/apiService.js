const options = '23988775-fe34227dea44092583bc60426';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImage() {
    // if (this.searchQuery === '') {
    //   alert('Введите что-то в поле!');
    // }
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=6&key=${options}`;

    return fetch(URL)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
