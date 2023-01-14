import './MenuPage.scss';
import vegOmeletImg from './imgs/veg-omelet.jpg';

import MenuItem from './MenuItem';

const MenuPage = (() => {
  const MenuPage = document.createElement('div');
  const heading = document.createElement('h2');
  const vegOmelet = MenuItem(
    'Vegetable Omelet',
    vegOmeletImg,
    'Fluffy omelet made from fresh pasteurized eggs filled with shiitake mushrooms, snow peas, bell peppers, and green onions.',
    '$10.99'
  );

  heading.textContent = 'Menu';

  MenuPage.classList.add('menu-page');

  MenuPage.appendChild(heading);
  MenuPage.appendChild(vegOmelet);

  return MenuPage;
})();

export default MenuPage;
