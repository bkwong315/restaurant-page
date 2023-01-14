import './HomePage.scss';

const HomePage = (() => {
  let homePage = document.createElement('div');
  let heading = document.createElement('h2');
  let desc = document.createElement('p');
  let hoursHeading = document.createElement('h2');
  let hoursText = document.createElement('p');
  let locationHeading = document.createElement('h2');
  let locationText = document.createElement('p');

  homePage.classList.add('home-page');

  heading.textContent = 'Welcome';
  desc.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
  mollit anim id est laborum.`;

  hoursText.setAttribute('style', 'white-space: pre-line;');

  hoursHeading.textContent = 'Hours';
  hoursText.textContent = `Sun: 10am-11pm
  Mon: 9am-9pm
  Tue: 9am-9pm
  Wed: 9am-9pm
  Thurs: 9am-9pm
  Fri: 9am-9pm
  Sat: 10am-11pm`;

  locationHeading.textContent = 'Location';
  locationText.textContent = `9561 Armstrong St. South Lyon, MI 48178`;

  homePage.appendChild(heading);
  homePage.appendChild(desc);
  homePage.appendChild(hoursHeading);
  homePage.appendChild(hoursText);
  homePage.appendChild(locationHeading);
  homePage.appendChild(locationText);

  return homePage;
})();

export default HomePage;
