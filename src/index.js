import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import MenuPage from './components/MenuPage/MenuPage';

import './styles/style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let contentContainer = document.createElement('div');

  const displayPage = (page) => {
    let elementToDisplay;

    if (page === 'menu') {
      elementToDisplay = MenuPage;
    } else if (page === 'contact') {
      elementToDisplay = ContactPage;
    } else {
      elementToDisplay = HomePage;
    }

    contentContainer.replaceChildren(elementToDisplay);
  };

  appContainer.classList.add('app');
  contentContainer.classList.add('content-container');

  appContainer.appendChild(Navbar(displayPage));
  appContainer.appendChild(contentContainer);

  contentContainer.appendChild(HomePage);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
