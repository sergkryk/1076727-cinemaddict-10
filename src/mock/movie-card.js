import {getRandomNumber, getRandomBoolean} from '../utils/utils';

const posters = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`
];

const titles = [
  `Made for each other`,
  `Popeye meets Sindbad`,
  `Sagebrush trail`,
  `Santa Claus conquers the martians`,
  `The dance of Life`,
  `The Great Flamarion`,
  `The Man with the Golden Arm`
];

const genres = [
  `Action`,
  `Love Story`,
  `Western`,
  `Musical`,
  `Thriller`,
  `Horror`,
  `Comedy`
];

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const comments = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRating = () => {
  return `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
};

const getPoster = () => {
  return posters[Math.floor(Math.random() * posters.length)];
};

const getTitle = () => {
  return titles[Math.floor(Math.random() * titles.length)];
};

const getGenre = () => {
  return genres[Math.floor(Math.random() * genres.length)];
};

const getComments = () => {
  return comments.filter(() => getRandomBoolean()).map((element, i) => i);
};

const getRandomPastDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomNumber(0, 30000) * -1;

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateMovieCard = () => {
  return {
    poster: getPoster(),
    title: getTitle(),
    rating: getRating(),
    date: getRandomPastDate(),
    duration: getRandomNumber(60, 180),
    genre: getGenre(),
    description: description.filter(() => getRandomBoolean()).slice(0, 3),
    comments: getComments(),
    isFavorite: getRandomBoolean(),
    isWatched: getRandomBoolean(),
    isScheduled: getRandomBoolean()
  };
};

export const returnMovieCards = (count) => {
  return [...Array(count)]
    .map(() => generateMovieCard());
};

