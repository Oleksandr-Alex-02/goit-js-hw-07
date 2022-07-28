import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

divGallery.addEventListener("click", selectImg);

function selectImg(eve) {
  eve.preventDefault();
  if (eve.target.nodeName !== "IMG") {
    return;
  }
  const imadgs = eve.target.dataset.source;
  const imadgsAlt = eve.target.src;

  const arr = `<img
    class="gallery__image"
    src="${imadgsAlt}"
    alt=""
    title="Beautiful Image"
  />`;
}

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

const arr = galereaImag(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", arr);
