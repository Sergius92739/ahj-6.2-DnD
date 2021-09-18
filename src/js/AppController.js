import FormHandler from './FormHandler';

export default class AppController {
  constructor() {
    this.formHandler = new FormHandler();
  }

  init() {
    this.formHandler.toAppoint();
    this.formHandler.container.toAppoint();
  }
}
