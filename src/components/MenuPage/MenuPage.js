import './MenuPage.scss';
import vegOmeletImg from './imgs/veg-omelet.jpg';
import clubSandwichImg from './imgs/club-sandwich.jpg';

import MenuItem from './MenuItem';

const MenuPage = (() => {
  const MenuPage = document.createElement('div');
  const heading = document.createElement('h2');
  const vegOmelet = MenuItem(
    'Vegetable Omelet',
    vegOmeletImg,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '$8.99'
  );
  const clubSandwich = MenuItem(
    'Club Sandwich',
    clubSandwichImg,
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    '$9.99'
  );

  heading.textContent = 'Menu';

  MenuPage.classList.add('menu-page');

  MenuPage.appendChild(heading);
  MenuPage.appendChild(vegOmelet);
  MenuPage.appendChild(clubSandwich);

  return MenuPage;
})();

export default MenuPage;
