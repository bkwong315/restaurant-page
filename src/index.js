import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import MenuPage from './components/MenuPage/MenuPage';

import './styles/style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let contentContainer = document.createElement('div');

  appContainer.classList.add('app');
  contentContainer.classList.add('content-container');

  appContainer.appendChild(Navbar);
  appContainer.appendChild(contentContainer);

  contentContainer.appendChild(HomePage);
  contentContainer.appendChild(ContactPage);
  contentContainer.appendChild(MenuPage);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
