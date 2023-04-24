import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const list = galleryItems
  .map((img) => `<li class="gallery__item"><a class="gallery__link" href="${img.preview}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"></a></li>`)
  .join("");

const item = document.querySelectorAll('li');
gallery.insertAdjacentHTML("afterbegin", list);

function createModal(src) {
  return basicLightbox.create(`
      <div class="modal">
          <img src="${src}">
      </div>
  `);
};

gallery.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) return;
    if (!evt.target.dataset.source) return;
    const modal = createModal(evt.target.dataset.source);
    modal.show();
});