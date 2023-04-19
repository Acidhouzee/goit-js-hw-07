import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const list = galleryItems
  .map((img, index) => `<li class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" alt="${img.description}"></a></li>`)
  .join("");

const item = document.querySelectorAll('li');
gallery.insertAdjacentHTML("afterbegin", list);

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});