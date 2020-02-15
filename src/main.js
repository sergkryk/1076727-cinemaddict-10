import PageController from './controllers/page-controller';
import {CARDS_NUMBER} from './const';
import {returnMovieCards} from './mock/movie-card';


// const AUTHORIZATION = `Basic dXNl91BwYXJzd29yZAo=`;
// const END_POINT = `https://htmlacademy-es-10.appspot.com/cinemaddict`;

const siteMain = document.querySelector(`.main`);
const movieCards = returnMovieCards(CARDS_NUMBER);

const pageController = new PageController(siteMain);
pageController.render(movieCards);

const footerCounter = document.querySelector(`.footer__statistics`);
footerCounter.innerHTML = `<p>${movieCards.length} movies inside</p>`;
