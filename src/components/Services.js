import React from 'react';
import Service from './Service';
import '../styles/Services.css';

import {ReactComponent as Basketball} from '../icons/basketball.svg';
import {ReactComponent as Football} from '../icons/football.svg';
import {ReactComponent as Karate} from '../icons/karate.svg';
import {ReactComponent as Chess} from '../icons/chess.svg';
import {ReactComponent as Hippies} from '../icons/hippies.svg';
import {ReactComponent as Ballet} from '../icons/ballet.svg';

const servicesList = [
  {name: 'Koszykówka', icon: Basketball},
  {name: 'Piłka nożna', icon: Football},
  {name: 'Karate', icon: Karate},
  {name: 'Szachy', icon: Chess},
  {name: 'Taniec nowoczesny', icon: Hippies},
  {name: 'Balet', icon: Ballet},
];

const Services = () => {
  return (
    <section className='services'>
      <div className='wrapper'>
        <h2 className='servicesTitle title'>Zakres usług</h2>
        <div className='servicesList'>
          {servicesList.map((service, index) => (
            <Service key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
