import AbstractComponent from './abstract-component';
import {getRandomNumber} from '../utils/utils';

export default class FilmCardComponent extends AbstractComponent {
  constructor(movie) {
    super();
    this._movie = movie;
  }

  getTemplate() {
    const {poster, title, rating, date, genre, description, comments} = this._movie;

    return `<article class="film-card">
              <h3 class="film-card__title">${title}</h3>
              <p class="film-card__rating">${rating}</p>
              <p class="film-card__info">
                <span class="film-card__year">${date.getFullYear()}</span>
                <span class="film-card__duration">${getRandomNumber(1, 2)}H:${getRandomNumber(1, 30)}M</span>
                <span class="film-card__genre">${genre}</span>
              </p>
              <img src="${poster}" alt="${title}" class="film-card__poster">
              <p class="film-card__description">${description}</p>
              <a class="film-card__comments">${comments.length} comments</a>
              <form class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
              </form>
            </article>`;
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
