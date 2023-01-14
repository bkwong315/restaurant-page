import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';

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

  return appContainer;
})();

document.querySelector('body').appendChild(App);
