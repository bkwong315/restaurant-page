import './MenuItem.scss';

const MenuItem = (name, imgSrc, desc, price) => {
  const menuItem = document.createElement('div');
  const itemName = document.createElement('h4');
  const itemImg = document.createElement('img');
  const itemDesc = document.createElement('p');
  const itemPrice = document.createElement('p');

  itemName.textContent = name;
  itemImg.src = imgSrc;
  itemDesc.textContent = desc;
  itemPrice.textContent = price;

  menuItem.classList.add('menu-item');

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemDesc);
  menuItem.appendChild(itemPrice);

  return menuItem;
};

export default MenuItem;
