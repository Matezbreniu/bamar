import React from 'react';
import '../styles/Reference.css';

const Reference = (props) => {
  const {name, img, description} = props.reference;
  return (
    <div className='reference'>
      <h3 className='referenceName'>{name}</h3>
      <img className='referenceImg' src={img} alt={name} />
      <p className='referenceDescription'>{description}</p>
    </div>
  );
};

export default Reference;
