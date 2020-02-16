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

    this._currenSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return `<ul class="sort">
            ${createSortItemsMarkup()}
            </ul>`;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType, evt);
    });
  }
}
