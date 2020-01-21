import AbstractComponent from './abstract-component';
import {SortOptions} from '../const';

const createSortItemsMarkup = (element) => {
  if (element === `default`) {
    return `<li><a href="#" class="sort__button sort__button--active">Sort by ${element}</a></li>`;
  }

  return `<li><a href="#" class="sort__button">Sort by ${element}</a></li>`;
};

export default class NavigationComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<ul class="sort">
              ${SortOptions.map((element) => createSortItemsMarkup(element)).join(`\n`)}
            </ul>`;
  }
}
