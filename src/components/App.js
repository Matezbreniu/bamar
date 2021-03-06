import React, {Component} from 'react';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import Navigation from './Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Cookies from './Cookies';

import '../styles/App.css';

gsap.registerPlugin(ScrollTrigger);

class App extends Component {
  state = {};

  setAnimationForHeader = () => {
    const headerItems = document.querySelectorAll('.headerContainer *');
    gsap.set(headerItems, {y: 300, opacity: 0});
    headerItems.forEach((item, index) => {
      const delay = 1 + 0.3 * index;
      gsap.to(item, {y: 0, opacity: 1, delay: delay});
    });
  };

  setAnimationForTitles = () => {
    const titles = document.querySelectorAll('.title');
    gsap.set(titles, {x: 300, opacity: 0});
    titles.forEach((title) => {
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: '+=100px',
        },
        ease: 'back.out(1.7)',
        x: 0,
        opacity: 1,
        duration: 1,
      });
    });
  };

  setAnimationForBenefitsList = () => {
    gsap.set('.aboutUsBenefit', {
      x: -200,
      opacity: 0,
    });
    gsap.to('.aboutUsBenefit', {
      scrollTrigger: {
        trigger: '.aboutUsBenefit',
        start: 'bottom 80%',
      },
      opacity: 1,
      x: 0,
      stagger: 0.3,
    });
  };

  setAnimationForServices = () => {
    const serviceContainers = document.querySelectorAll('.serviceContainer');
    gsap.set(serviceContainers, {opacity: 0, scale: 0});
    serviceContainers.forEach((serviceContainer) => {
      gsap.to(serviceContainer, {
        scrollTrigger: {
          trigger: serviceContainer,
          start: 'bottom 80%',
          end: '+=100',
        },
        ease: 'bounce.out',
        opacity: 1,
        scale: 1,
        duration: 1,
      });
    });
  };

  setAnimationForContact = () => {
    gsap.set('.contactSpan', {y: 100});
    gsap.to('.contactSpan', {
      scrollTrigger: {
        trigger: '.contactSpan',
        start: 'bottom 80%',
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
  turnOffMenu = () => {
    document.querySelector('.navBurger').classList.remove('activeBurger');
    document.querySelector('.navList').classList.remove('active');
  };

  componentDidMount() {
    this.setAnimationForHeader();
    this.setAnimationForTitles();
    this.setAnimationForServices();
    this.setAnimationForContact();
    this.setHandlersForAllSections();
    this.setAnimationForBenefitsList();
    window.addEventListener('resize', this.setHandlersForAllSections);
    window.addEventListener('resize', this.turnOffMenu);
  }
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Header />
        <Main />
        <Footer />
        <Cookies />
      </div>
    );
  }
}

export default App;
