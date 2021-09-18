export default class Gallery {
  constructor(container) {
    this.gallery = container;
  }

  static get markUp() {
    return `<div class="row__item">
              <div class="absolute">
                <button class="row-item__delete">&#10006;</button>
              </div>
            </div>`;
  }

  toLoad() {
    this.gallery.insertAdjacentHTML('beforeend', Gallery.markUp);
  }

  toAppoint() {
    this.gallery.addEventListener('click', (event) => {
      if (event.target.className === 'row-item__delete') {
        event.target.closest('.row__item').remove();
      }
      if (event.target.className === 'row-item__img') {
        event.target.closest('.absolute').classList.toggle('zoom');
      }
    });
  }
}
