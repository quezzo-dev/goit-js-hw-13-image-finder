import './sass/main.scss';
import ImageMarkup from './templates/imageMarkup.hbs';
import ImageApiService from './js/apiService';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.search-btn'),
  galleryContainer: document.querySelector('.gallery'),
};

const imgApi = new ImageApiService();

refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  clearImageGallery();
  imgApi.query = e.currentTarget.elements.query.value;
  imgApi.resetPage();
  imgApi.fetchImage().then(appendImgMarkup);
}

function onLoadMore() {
  imgApi.fetchImage().then(appendImgMarkup);
}

function appendImgMarkup(hits) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', ImageMarkup(hits));
}

function clearImageGallery() {
  refs.galleryContainer.innerHTML = '';
}
