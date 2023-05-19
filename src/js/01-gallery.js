import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');
const list = document.querySelector('.gallery');
list.style.listStyle = 'none';

const li = galleryItems
  .map(item => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`;
  })
  .join('\n');

galleryList.insertAdjacentHTML('afterbegin', li);

const gallery = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});
