import './ContactPage.scss';

const ContactPage = (() => {
  const contactPage = document.createElement('div');
  const heading = document.createElement('h2');
  let hoursHeading = document.createElement('h2');
  let hoursText = document.createElement('p');
  let locationHeading = document.createElement('h2');
  let locationText = document.createElement('p');
  let emailText = document.createElement('p');

  contactPage.classList.add('contact-page');

  heading.textContent = 'Contact Us!';

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

  emailText.textContent =
    'For any questions or inquries, please email us at finelanternplace@gmail.com';

  contactPage.appendChild(heading);
  contactPage.appendChild(hoursHeading);
  contactPage.appendChild(hoursText);
  contactPage.appendChild(locationHeading);
  contactPage.appendChild(locationText);
  contactPage.appendChild(emailText);

  return contactPage;
})();

export default ContactPage;
