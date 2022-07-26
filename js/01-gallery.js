import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

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
console.log(arr);

divGallery.insertAdjacentHTML("afterbegin", arr);
