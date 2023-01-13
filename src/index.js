import './styles/style.scss';

const App = () => {
  let appContainer = document.createElement('div');
  let bgBlur = document.createElement('div');

  appContainer.classList.add('app');
  bgBlur.classList.add('bg-blur');

  appContainer.appendChild(bgBlur);

  return appContainer;
};

console.log(App());

document.querySelector('body').appendChild(App());
