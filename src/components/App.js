import React, {Component} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/App.css';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class App extends Component {
  state = {};

  setAnimationForTitles = () => {
    const titles = document.querySelectorAll('.title');
    gsap.set(titles, {x: 300, opacity: 0});
    titles.forEach((title) => {
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 70%',
          end: '+=100px',
        },
        x: 0,
        opacity: 1,
      });
    });
  };

  setAnimationForServices = () => {
    const serviceContainers = document.querySelectorAll('.serviceContainer');
    gsap.set(serviceContainers, {opacity: 0, scale: 0});
    serviceContainers.forEach((serviceContainer, index) => {
      const timeDelay = index * 0.3;
      gsap.to(serviceContainer, {
        scrollTrigger: {
          trigger: serviceContainer,
          start: 'bottom 70%',
          end: '+=100',
        },
        opacity: 1,
        scale: 1,
        delay: timeDelay,
      });
    });
  };

  setAnimationForContact = () => {
    const contactSpan = document.querySelectorAll('.contactSpan');
    gsap.set(contactSpan, {y: 100});
    gsap.to(contactSpan, {
      scrollTrigger: {
        trigger: contactSpan,
        start: 'bottom 70%',
        end: '+=100',
      },
      y: 0,
    });
  };

  setHandlerForActiveSection = (trigger) => {
    const navHeight = document.querySelector('.navLogo').offsetHeight;
    ScrollTrigger.create({
      trigger: `.${trigger}`,
      start: `top +${navHeight + 1} top`,
      end: `bottom +${navHeight} top `,
      onToggle: ({isActive}) => {
        if (isActive) {
          document.getElementById(trigger).classList.add('activeSection');
        } else {
          document.getElementById(trigger).classList.remove('activeSection');
        }
      },
    });
  };

  setHandlersForAllSections = () => {
    this.setHandlerForActiveSection('header');
    this.setHandlerForActiveSection('aboutUs');
    this.setHandlerForActiveSection('services');
    this.setHandlerForActiveSection('gallery');
    this.setHandlerForActiveSection('references');
    this.setHandlerForActiveSection('contact');
  };

  componentDidMount() {
    this.setAnimationForTitles();
    this.setAnimationForServices();
    this.setAnimationForContact();
    this.setHandlersForAllSections();
    window.addEventListener('resize', this.setHandlersForAllSections);
  }
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
