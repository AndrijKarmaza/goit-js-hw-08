// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');

const marcupGallery = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend', marcupGallery);
gallery.addEventListener('click', onImageClick);

let modal = new SimpleLightbox('.gallery a', 
    {captionsData: 'alt', captionDelay: 250, fadeSpeed: 250,
    scrollZoom: false, disableRightClick: true});

function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;        
    }
    
    modal.on('show.simplelightbox');
}