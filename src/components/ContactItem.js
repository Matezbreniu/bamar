import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/ContactItem.css';

const ContactItem = (props) => {
  return (
    <p className='contactItem'>
      <span className='contactSpan'>
        <FontAwesomeIcon className='contactIcon' icon={props.icon} />
        <span className='contactDescription'>{props.description}</span>
      </span>
    </p>
  );
};

export default ContactItem;
