import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

import './styles/style.scss';

const App = (() => {
  let appContainer = document.createElement('div');

  appContainer.classList.add('app');

  appContainer.appendChild(Navbar);
  appContainer.appendChild(HomePage);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
