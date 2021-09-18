export default class Image {
  /* constructor(src) {
    this.src = src;
  } */

  toCreat(src) {
    this.src = src;
    const img = document.createElement('img');
    img.src = this.src;
    img.className = 'row-item__img';
    return img;
  }
}
