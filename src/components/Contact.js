import React from 'react';
import ContactItem from './ContactItem';
import '../styles/Contact.css';

import {faPhone, faMapMarkerAlt, faAt} from '@fortawesome/free-solid-svg-icons';

const contactList = [
  {icon: faAt, description: 'bamar.centrumsportu@gmail.com'},
  {icon: faPhone, description: '+48 510 087 244'},
  {
    icon: faMapMarkerAlt,
    description: 'ul. Poetów 2/13 62-023 Koninko',
  },
];

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='contactTitle title'>Odezwij się do nas</h2>
      <div className='wrapper'>
        <h3 className='contactCompany'>"BAMAR" Centrum Sportu i Edukacji</h3>
        {contactList.map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            description={contact.description}
          />
        ))}
      </div>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.382491067724!2d17.01328811594727!3d52.30906155959232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704576b303e9d87%3A0x23a3be29e22d01fe!2sPoet%C3%B3w%202%2C%2062-023%20Koninko!5e0!3m2!1spl!2spl!4v1593625604013!5m2!1spl!2spl'
        className='contactMap'
        title='map'
        frameBorder='0'
        allowFullScreen={true}
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </section>
  );
};

export default Contact;
