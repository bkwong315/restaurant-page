import navbar from './components/navbar/navbar';

import './styles/style.scss';

const App = (() => {
  let appContainer = document.createElement('div');

  appContainer.classList.add('app');

  appContainer.appendChild(navbar);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
