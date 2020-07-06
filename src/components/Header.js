import React from 'react';
import ScrollToElement from './ScrollToElement';
import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='headerContainer'>
        <h1 className='headerTitle'>BAMAR</h1>
        <h2 className='headerDescription'>Centrum Sportu i Edukacji</h2>
        <ScrollToElement
          type='button'
          id='services'
          className='headerBtn'
          name='nasza oferta'
        />
      </div>
    </header>
  );
}
export default Header;
