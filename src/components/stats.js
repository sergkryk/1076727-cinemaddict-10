import AbstractComponent from './abstract-component';

export default class StatsComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a> `;
  }
}
