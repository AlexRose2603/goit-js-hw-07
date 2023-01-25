import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

function createImgItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
        </a>
        </div>`
    )
    .join("");
}
const preventRedirection = document.querySelector(".gallery");
// preventRedirection.addEventListener("click", onClick);
// function onClick(event) {
//   event.preventDefault();
// }
const addGalleryMarkup = createImgItem(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;

// galleryEl.addEventListener("click", onImageClick);
// function onImageClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// galleryEl.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     close.simplelightbox();
//   }
// });
