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

  const instance = basicLightbox.create(
    `
    <img src="${imadgs}" alt="${imadgsAlt}" width="800" height="600">
    `
  );

  instance.show();
}

function galereaImag(galleryItems) {
  const array = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");

  return array;
}

const arr = galereaImag(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", arr);
