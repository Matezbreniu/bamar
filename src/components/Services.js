import React from 'react';
import Service from './Service';
import '../styles/Services.css';

import {ReactComponent as Basketball} from '../icons/basketball.svg';
import {ReactComponent as Football} from '../icons/football.svg';
import {ReactComponent as Karate} from '../icons/karate.svg';
import {ReactComponent as Chess} from '../icons/chess.svg';
import {ReactComponent as Dance} from '../icons/dance.svg';
import {ReactComponent as Ballet} from '../icons/ballet.svg';
import {ReactComponent as Hippies} from '../icons/hippies.svg';
import {ReactComponent as BasketballPlayer} from '../icons/basketballPlayer.svg';

const servicesListForKinderGarten = [
  {name: 'Koszykówka', icon: Basketball},
  {name: 'Piłka nożna', icon: Football},
  {name: 'Karate', icon: Karate},
  {name: 'Szachy', icon: Chess},
  {name: 'Taniec nowoczesny', icon: Dance},
  {name: 'Balet', icon: Ballet},
  {
    name:
      'Wychodząć na przeciw Waszym potrzebom mamy możliwość zorganizowania zajęć o każdej tematyce!',
  },
];
const servicesListForOthers = [
  {name: 'Nauka tańca weselnego', icon: Hippies},
  {name: 'Indywidualne treningi koszykówki', icon: BasketballPlayer},
];

const Services = () => {
  return (
    <section className='services'>
      <div className='wrapper'>
        <h2 className='servicesTitle title'>Zakres usług</h2>
        <h3 className='servicesTitle'>Oferta dla przedszkoli</h3>
        <div className='servicesList'>
          {servicesListForKinderGarten.map((service, index) => (
            <Service key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
        <h3 className='servicesTitle'>Oferta dodatkowa</h3>
        <div className='servicesList'>
          {servicesListForOthers.map((service, index) => (
            <Service key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
