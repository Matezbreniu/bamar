import React from 'react';
import '../styles/Reference.css';

const Reference = (props) => {
  const {name, description} = props.reference;
  return (
    <div className='reference'>
      <h3 className='referenceName'>{name}</h3>
      <p className='referenceDescription'>{description}</p>
    </div>
  );
};

export default Reference;
