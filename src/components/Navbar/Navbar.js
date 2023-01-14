import './Navbar.scss';

const navbar = (() => {
  let navbar = document.createElement('div');
  let heading = document.createElement('h2');
  let linksList = document.createElement('div');

  let homeLink = document.createElement('a');
  let menuLink = document.createElement('a');
  let contactLink = document.createElement('a');

  navbar.classList.add('navbar');
  linksList.classList.add('links-list');

  heading.textContent = 'Fine Lantern Place';
  homeLink.textContent = 'Home';
  menuLink.textContent = 'Menu';
  contactLink.textContent = 'Contact';

  linksList.appendChild(homeLink);
  linksList.appendChild(menuLink);
  linksList.appendChild(contactLink);

  navbar.appendChild(heading);
  navbar.appendChild(linksList);

  return navbar;
})();

export default navbar;
