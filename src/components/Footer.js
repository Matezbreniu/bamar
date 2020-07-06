import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerAttribute'>
        Icons made by{' '}
        <a
          className='footerAttributeLink'
          href='https://www.flaticon.com/authors/freepik'
          title='Freepik'
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          className='footerAttributeLink'
          href='https://www.flaticon.com/'
          title='Flaticon'
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
