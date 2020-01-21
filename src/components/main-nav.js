import AbstractComponent from './abstract-component';

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
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return `<nav class="main-navigation">
      ${this._filters.map((it) => createFilterMarkup(it)).join(`\n`)}
    </nav>`;
  }
}
