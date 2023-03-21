import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGallery(arr) {
  return arr
    .map(
      (i) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${i.original}">
            <img class="gallery__image" src="${i.preview}" alt="${i.description}" />
          </a>
        </li>
        `
    )
    .join("");
}

gallery.innerHTML = createGallery(galleryItems);

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
    <img src="${e.target.closest("a").href}">
    `);

    instance.show();

    function closeInst(ev) {
      if (ev.code === "Escape") {
        instance.close();
        window.removeEventListener(closeInst);
      }
    }

    window.addEventListener("keydown", closeInst);
  }
});
