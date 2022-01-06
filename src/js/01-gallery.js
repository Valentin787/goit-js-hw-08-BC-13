 // Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const refs = {
  galleryRef: document.querySelector(".gallery"),
};

const gallery = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" data-actions alt="${description}" />
</a>`
})

refs.galleryRef.insertAdjacentHTML("afterbegin", gallery);

const lightbox = new SimpleLightbox('.gallery a', {

    captionsData: "alt",
    captionDelay: 250,
  })


