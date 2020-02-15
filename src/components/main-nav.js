import AbstractComponent from './abstract-component';
import {generateFilters} from '../mock/filter';

const navClass = `main-navigation__item`;
const activeNavClass = `main-navigation__item main-navigation__item--active`;

const createFilterMarkup = (filter) => {
  const {name, count, url, isActive} = filter;

  return `<a href="${url}" class="${isActive ? activeNavClass : navClass}">${name}
            ${count ? createCounterMarkup(count) : ``}
          </a>`;
};

const createCounterMarkup = (count) => {
  return `<span class="main-navigation__item-count">${count}</span>`;
};

export default class NavigationComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<nav class="main-navigation">
      ${generateFilters().map((it) => createFilterMarkup(it)).join(`\n`)}
    </nav>`;
  }
}
