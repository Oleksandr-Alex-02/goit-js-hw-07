import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

divGallery.addEventListener("click", selectImg);

// відкритя слайдера!!!

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

// рейдінг галереї!!!

function galereaImag(galleryItems) {
  return galleryItems
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
}

const renderImg = galereaImag(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", renderImg);

// Закритя слайдера кнопкой escape!!!

divGallery.addEventListener("click", dhdh);

function dhdh() {
  document.addEventListener("keydown", escape);
}

function escape(eve) {
  if (eve.code !== "Escape") {
    return;
  }

  const modal = document.querySelector(".basicLightbox");

  if (modal) {
    modal.classList.remove("basicLightbox--visible");
    setTimeout(() => {
      modal.remove();
    }, 250);
  }
}
