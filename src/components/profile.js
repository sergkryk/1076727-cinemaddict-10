import AbstractComponent from './abstract-component';

const getProfileTitle = (moviesNumber) => {
  let title = `Newbie`
  if (moviesNumber >= 10 && moviesNumber <= 20) {
    title = `Amateur`
  }
  if (moviesNumber > 20 && moviesNumber <= 30) {
    title = `Expert`
  }
  if (moviesNumber > 30) {
    title = `Guru`
  }
  return title;
};


export default class ProfileComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<section class="header__profile profile">
    <p class="profile__rating">Movie ${getProfileTitle(55)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
    `;
  }
}
