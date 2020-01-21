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
import {returnMovieCards} from './mock/movie-card';

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

const movieCards = returnMovieCards(20);

movieCards.map((element) => renderElement(filmCardContainer, new FilmCardComponent(element)));

const showMoreButtonComponent = new ShowMoreButtonComponent();
renderElement(filmsListComponent.getElement(), showMoreButtonComponent);

const filmsSection = filmsSectionComponent.getElement();

const filmsExtraRateComponent = new FilmsExtraComponent(ExtraHeadings.RATE);
renderElement(filmsSection, filmsExtraRateComponent);

const filmsExtraCommentComponent = new FilmsExtraComponent(ExtraHeadings.COMMENT);
renderElement(filmsSection, filmsExtraCommentComponent);

movieCards
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 2)
  .map((element) => renderElement(filmsExtraRateComponent.getElement().querySelector(`.films-list__container`), new FilmCardComponent(element)))
;

movieCards
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, 2)
  .map((element) => renderElement(filmsExtraCommentComponent.getElement().querySelector(`.films-list__container`), new FilmCardComponent(element)))
;


// const api = new API(END_POINT, AUTHORIZATION);
// api.getFilms();

