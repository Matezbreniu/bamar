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

  setActiveSection = (trigger) => {
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

  componentDidMount() {
    this.setActiveSection('header');
    this.setActiveSection('aboutUs');
    this.setActiveSection('services');
    this.setActiveSection('gallery');
    this.setActiveSection('contact');
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
