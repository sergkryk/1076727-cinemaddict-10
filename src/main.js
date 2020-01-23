// import API from './api';

import ProfileComponent from './components/profile';
import NavigationComponent from './components/main-nav';
import StatsComponent from './components/stats';
import SortComponent from './components/sort';
import FilmsSectionComponent from './components/films-section';
import FilmsListComponent from './components/films-list';
import CardComponent from './components/card';
import CardDetailedComponent from './components/card-detailed';
import ShowMoreButtonComponent from './components/show-more-button';
import FilmsExtraComponent from './components/films-extra';

import {renderElement, removeElement} from './utils/render';
import {CARDS_NUMBER, ExtraHeadings} from './const';

import {generateFilters} from './mock/filter';
import {returnMovieCards} from './mock/movie-card';
// import CardDetailedComponent from './components/card-detailed';

const CARDS_NUMBER_BY_START = 5;
const CARDS_NUMBER_BY_CLICK_MORE = 5;
// const AUTHORIZATION = `Basic dXNl91BwYXJzd29yZAo=`;
// const END_POINT = `https://htmlacademy-es-10.appspot.com/cinemaddict`;

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);

const navComponent = new NavigationComponent(generateFilters());
renderElement(siteMain, navComponent);

const statsComponent = new StatsComponent();
renderElement(navComponent.getElement(), statsComponent);

const sortComponent = new SortComponent();
renderElement(siteMain, sortComponent);

const filmsSectionComponent = new FilmsSectionComponent();
renderElement(siteMain, filmsSectionComponent);

const filmsListComponent = new FilmsListComponent();
renderElement(filmsSectionComponent.getElement(), filmsListComponent);

const movieCards = returnMovieCards(CARDS_NUMBER);

const profileComponent = new ProfileComponent(movieCards.filter((element) => element.isWatched).length);
renderElement(siteHeader, profileComponent);

const filmCardContainer = filmsListComponent.getElement().querySelector(`.films-list__container`);

let cardsToShow = CARDS_NUMBER_BY_START;

const renderMovieCards = (cardsArray) => {
  cardsArray.forEach((cardElement) => {
    const card = new CardComponent(cardElement);
    const cardDetailed = new CardDetailedComponent();

    const onEscPressRemove = (evt) => {
      if (evt.keyCode === 27) {
        removeElement(cardDetailed);
        document.removeEventListener(`keydown`, onEscPressRemove);
      }
    };

    card.getElement().addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `IMG` || evt.target.tagName === `A` || evt.target.tagName === `H3`) {
        renderElement(filmCardContainer, cardDetailed);
        cardDetailed.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
          removeElement(cardDetailed);
        });
        document.addEventListener(`keydown`, onEscPressRemove);
      }
    });

    renderElement(filmCardContainer, card);
  });
};

renderMovieCards(movieCards.slice(0, cardsToShow));

const showMoreButtonComponent = new ShowMoreButtonComponent();
renderElement(filmsListComponent.getElement(), showMoreButtonComponent);

showMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevCardsNumber = cardsToShow;
  cardsToShow = cardsToShow + CARDS_NUMBER_BY_CLICK_MORE;

  renderMovieCards(movieCards.slice(prevCardsNumber, cardsToShow));

  if (cardsToShow >= movieCards.length) {
    showMoreButtonComponent.getElement().remove();
  }
});

const filmsSection = filmsSectionComponent.getElement();

const filmsExtraRateComponent = new FilmsExtraComponent(ExtraHeadings.RATE);
renderElement(filmsSection, filmsExtraRateComponent);

const filmsExtraCommentComponent = new FilmsExtraComponent(ExtraHeadings.COMMENT);
renderElement(filmsSection, filmsExtraCommentComponent);

movieCards
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 2)
  .map((element) => renderElement(filmsExtraRateComponent.getElement().querySelector(`.films-list__container`), new CardComponent(element)))
;

movieCards
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, 2)
  .map((element) => renderElement(filmsExtraCommentComponent.getElement().querySelector(`.films-list__container`), new CardComponent(element)))
;

const footerCounter = document.querySelector(`.footer__statistics`);
footerCounter.innerHTML = `<p>${movieCards.length} movies inside</p>`;

// const api = new API(END_POINT, AUTHORIZATION);
// api.getFilms();

