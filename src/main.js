// import API from './api';

import ProfileComponent from './components/profile';
import NavigationComponent from './components/main-nav';
import StatsComponent from './components/stats';
import SortComponent from './components/sort';
import FilmsSectionComponent from './components/films-section';
import FilmsListComponent from './components/films-list';
import FilmCardComponent from './components/film-card';
import ShowMoreButtonComponent from './components/show-more-button';
import FilmsExtraComponent from './components/films-extra';

import {renderElement} from './utils/render';
import {taskCount, ExtraHeadings} from './const';

import {generateFilters} from './mock/filter';

// const AUTHORIZATION = `Basic dXNl91BwYXJzd29yZAo=`;
// const END_POINT = `https://htmlacademy-es-10.appspot.com/cinemaddict`;

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);

const profileComponent = new ProfileComponent();
renderElement(siteHeader, profileComponent);

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

const filmCardContainer = filmsListComponent.getElement().querySelector(`.films-list__container`);

for (let i = 0; i < taskCount; i++) {
  renderElement(filmCardContainer, new FilmCardComponent());
}

const showMoreButtonComponent = new ShowMoreButtonComponent();
renderElement(filmsListComponent.getElement(), showMoreButtonComponent);

const filmsSection = filmsSectionComponent.getElement();

const filmsExtraRateComponent = new FilmsExtraComponent(ExtraHeadings.RATE);
renderElement(filmsSection, filmsExtraRateComponent);

const filmsExtraCommentComponent = new FilmsExtraComponent(ExtraHeadings.COMMENT);
renderElement(filmsSection, filmsExtraCommentComponent);

for (let i = 0; i < taskCount - 3; i++) {
  renderElement(filmsExtraRateComponent.getElement().querySelector(`.films-list__container`), new FilmCardComponent());
}

for (let i = 0; i < taskCount - 3; i++) {
  renderElement(filmsExtraCommentComponent.getElement().querySelector(`.films-list__container`), new FilmCardComponent());
}

// const api = new API(END_POINT, AUTHORIZATION);
// api.getFilms();

