import React from 'react';
import '../styles/Service.css';

const Service = (props) => {
  return (
    <div className='serviceContainer'>
      {props.icon ? (
        <div className='serviceIconContainer'>
          <props.icon className='serviceIcon' />
        </div>
      ) : null}
      <h4 className='serviceTitle'>{props.name}</h4>
    </div>
  );
};

export default Service;
