import Navbar from './components/Navbar/Navbar';

import './styles/style.scss';

const App = (() => {
  let appContainer = document.createElement('div');

  appContainer.classList.add('app');

  appContainer.appendChild(Navbar);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
