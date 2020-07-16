import React from 'react';
import ScrollToElement from './ScrollToElement';
import '../styles/Navigation.css';
import logoBamar from '../images/logoBamar.png';

const navList = [
  {name: 'Home', id: 'header'},
  {name: 'O nas', id: 'aboutUs'},
  {name: 'Usługi', id: 'services'},
  {name: 'Galeria', id: 'gallery'},
  {name: 'Referencje', id: 'references'},
  {name: 'Kontakt', id: 'contact'},
];

const handleClick = (e) => {
  e.target.classList.toggle('activeBurger');
  document.querySelector('.navList').classList.toggle('active');
};

function Navigation() {
  return (
    <nav className='navContainer'>
      <img className='navLogo' src={logoBamar} alt='logoBamar' />
      <div className='navBurger' onClick={handleClick}>
        <div className='navBurgerLine'></div>
      </div>
      <ul className='navList'>
        {navList.map((navItem, index) => (
          <ScrollToElement
            type='li'
            key={index}
            className='navItem'
            name={navItem.name}
            id={navItem.id}
          />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
