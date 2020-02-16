import CardComponent from '../components/card';
import CardDetailedComponent from '../components/card-detailed';
import NavigationComponent from '../components/main-nav';
import SortComponent from '../components/sort';
import StatsComponent from '../components/stats';
import FilmsSectionComponent from '../components/films-section';
import FilmsListComponent from '../components/films-list';
import FilmsExtraComponent from '../components/films-extra';
import ProfileComponent from '../components/profile';
import NoCardsComponent from '../components/no-cards';
import ShowMoreButtonComponent from '../components/show-more-button';

import {renderElement, removeElement} from '../utils/render';
import {ExtraHeadings} from '../const';

const CARDS_NUMBER_BY_START = 5;
const CARDS_NUMBER_BY_CLICK_MORE = 5;

const renderCard = (element, container) => {
  const card = new CardComponent(element);
  const cardDetailed = new CardDetailedComponent();

  const onEscPressRemove = (evt) => {
    if (evt.keyCode === 27) {
      removeElement(cardDetailed);
      document.removeEventListener(`keydown`, onEscPressRemove);
    }
  };

  card.setClickHandler((evt) => {
    if (evt.target.tagName === `IMG` || evt.target.tagName === `A` || evt.target.tagName === `H3`) {
      renderElement(container, cardDetailed);
      cardDetailed.setCloseButtonClickHandler(() => {
        removeElement(cardDetailed);
      });
      document.addEventListener(`keydown`, onEscPressRemove);
    }
  });

  renderElement(container, card);
};

const renderCards = (cards, container) => {
  cards.forEach((card) => {
    renderCard(card, container);
  });
};

const renderTopRated = (container, cards) => {
  const topRated = new FilmsExtraComponent(ExtraHeadings.RATE);
  renderElement(container, topRated);
  renderCards(cards.slice().sort((a, b) => b.rating - a.rating).slice(0, 2), topRated.getElement().querySelector(`.films-list__container`));
};

const renderMostCommented = (container, cards) => {
  const mostCommented = new FilmsExtraComponent(ExtraHeadings.COMMENT);
  renderElement(container, mostCommented);
  renderCards(cards.slice().sort((a, b) => b.comments.length - a.comments.length).slice(0, 2), mostCommented.getElement().querySelector(`.films-list__container`));
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._extraComponent = null;

    this._navComponent = new NavigationComponent();
    this._sortComponent = new SortComponent();
    this._statsComponent = new StatsComponent();
    this._filmsSectionComponent = new FilmsSectionComponent();
    this._filmsListComponent = new FilmsListComponent();
    this._noCardsComponent = new NoCardsComponent();
    this._profileComponent = new ProfileComponent();
    this._showMoreButton = new ShowMoreButtonComponent();
  }

  render(cards) {
    const renderLoadMoreButton = () => {
      if (cardsToShow >= cards.length) {
        return;
      }

      renderElement(this._filmsListComponent.getElement(), this._showMoreButton);
      this._showMoreButton.setClickHandler(() => {
        const prevCardsNumber = cardsToShow;
        cardsToShow = cardsToShow + CARDS_NUMBER_BY_CLICK_MORE;

        renderCards(cards.slice(prevCardsNumber, cardsToShow), cardsContainer);

        if (cardsToShow >= cards.length) {
          removeElement(this._showMoreButton);
        }
      });
    };

    renderElement(this._container, this._navComponent);
    renderElement(this._navComponent.getElement(), this._statsComponent);
    renderElement(this._container, this._sortComponent);
    renderElement(document.querySelector(`.header`), this._profileComponent);

    if (cards.length <= 0) {
      renderElement(this._container, this._noCardsComponent);
      return;
    }

    renderElement(this._container, this._filmsSectionComponent);
    renderElement(this._filmsSectionComponent.getElement(), this._filmsListComponent);

    const cardsContainer = this._filmsListComponent.getElement().querySelector(`.films-list__container`);
    let cardsToShow = CARDS_NUMBER_BY_START;
    renderCards(cards.slice(0, cardsToShow), cardsContainer);

    renderElement(this._filmsListComponent.getElement(), this._showMoreButton);
    this._showMoreButton.setClickHandler(() => {
      const prevCardsNumber = cardsToShow;
      cardsToShow = cardsToShow + CARDS_NUMBER_BY_CLICK_MORE;

      renderCards(cards.slice(prevCardsNumber, cardsToShow), cardsContainer);

      if (cardsToShow >= cards.length) {
        removeElement(this._showMoreButton);
      }
    });

    renderTopRated(this._filmsSectionComponent.getElement(), cards);
    renderMostCommented(this._filmsSectionComponent.getElement(), cards);
  }

}
