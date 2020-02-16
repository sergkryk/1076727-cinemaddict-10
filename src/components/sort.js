import AbstractComponent from './abstract-component';

export const SortType = {
  RATING: `by rating`,
  DATE: `by date`,
  DEFAULT: `by default`,
};

const createSortItemsMarkup = () => {
  return `<li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort ${SortType.DEFAULT}</a></li>
          <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort ${SortType.DATE}</a></li>
          <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort ${SortType.RATING}</a></li>`;
};

export default class NavigationComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<ul class="sort">
            ${createSortItemsMarkup()}
            </ul>`;
  }
}
