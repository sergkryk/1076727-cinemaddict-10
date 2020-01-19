import AbstractComponent from './abstract-component';

export default class FilmsSectionComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<section class="films"></section>`;
  }
}
