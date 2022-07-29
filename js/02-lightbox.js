import { galleryItems } from "./gallery-items.js";

const divGallery = document.querySelector(".gallery");

divGallery.addEventListener("click", selectImg);

function galereaImag(galleryItems) {
  const array = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");

  return array;
}

const nevImags = galereaImag(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", nevImags);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  sourceAttr: "href",
});

lightbox.next();

function selectImg(eve) {
  eve.preventDefault();
  if (eve.target.nodeName !== "IMG") {
    return;
  }
}
