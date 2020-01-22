import AbstractComponent from './abstract-component';

const getProfileTitle = (moviesNumber) => {
  let title = `Newbie`;

  if (moviesNumber >= 5 && moviesNumber <= 10) {
    title = `Amateur`;
  }
  if (moviesNumber > 10 && moviesNumber <= 15) {
    title = `Expert`;
  }
  if (moviesNumber > 15) {
    title = `Guru`;
  }
  return title;
};


export default class ProfileComponent extends AbstractComponent {
  constructor(moviesNumber) {
    super();
    this.moviesNumber = moviesNumber;

  }

  getTemplate() {
    return `<section class="header__profile profile">
    <p class="profile__rating">Movie ${getProfileTitle(this.moviesNumber)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
    `;
  }
}
