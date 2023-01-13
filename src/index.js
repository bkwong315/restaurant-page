import './styles/style.scss';

const App = () => {
  let appContainer = document.createElement('div');

  appContainer.classList.add('app');

  return appContainer;
};

console.log(App());

document.querySelector('body').appendChild(App());
