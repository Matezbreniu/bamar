import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/ContactItem.css';

const ContactItem = (props) => {
  return (
    <div className='contactItem'>
      <FontAwesomeIcon className='contactIcon' icon={props.icon} />
      <span className='contactDescription'>{props.description}</span>
    </div>
  );
};

export default ContactItem;
