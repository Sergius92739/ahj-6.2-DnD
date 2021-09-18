import Gallery from './Gallery';
import Image from './Image';

export default class FormHandler {
  constructor() {
    this.input = document.querySelector('.input');
    this.label = document.querySelector('.label');
    this.img = new Image();
    this.container = new Gallery(document.querySelector('.gallery__row.row'));

    this.onChange = this.onChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  toAppoint() {
    this.input.addEventListener('change', this.onChange);
    this.label.addEventListener('dragover', (evt) => evt.preventDefault());
    this.label.addEventListener('drop', this.onDrop);
  }

  onDrop(evt) {
    evt.preventDefault();
    const files = Array.from(evt.dataTransfer.files);
    this.fileHandler(files);
  }

  onChange(evt) {
    evt.preventDefault();
    const files = Array.from(evt.currentTarget.files);
    this.fileHandler(files);
    this.input.value = '';
  }

  fileHandler(files) {
    files.forEach((e) => {
      const url = URL.createObjectURL(e);
      const image = this.img.toCreat(url);
      image.onload = () => {
        this.container.toLoad();
        const elem = this.container.gallery.lastElementChild.querySelector('.absolute');
        elem.appendChild(image);
        URL.revokeObjectURL(image.src);
      };
      image.onerror = (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      };
    });
  }

  showErrorMes(errorEl, text) {
    this.getErrorMes(errorEl, text);
    this.timerID = setTimeout(() => {
      this.removeErrorMes(errorEl);
      this.timerID = null;
    }, 3000);
  }
}
