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

function selectImg(eve) {
  eve.preventDefault();
  if (eve.target.nodeName !== "IMG") {
    return;
  }
  const a = document.querySelector(".gallery__item");
  const eveHref = a.href;

  const imadgsAlt = eve.target.alt;
  const imadgsSrc = eve.target.src;

  const lightbox = new SimpleLightbox(
    ".gallery a",
    `
      <a href="${imadgsSrc}">
        <img src="${eveHref}" alt="${imadgsAlt}" title="${imadgsAlt}" />
      </a>
    `
  );

  // var lightbox = $(".gallery a").simpleLightbox(
  //   `
  //   <a href="${imadgsSrc}">
  //     // <img src="${eveHref}" alt="${imadgsAlt}" title="${imadgsAlt}" />
  //     //{" "}
  //   </a>
  //   `
  // );

  // lightbox.next();
}
