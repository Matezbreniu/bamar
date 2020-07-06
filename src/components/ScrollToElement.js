import React from 'react';

const handleClick = (e) => {
  //scrollToElement
  const className = `.${e.target.id}`;
  const clickedElement = document.querySelector(className);
  const navHeight = document.querySelector('.navLogo').offsetHeight;
  const offsetTop = clickedElement.offsetTop - navHeight;
  window.scrollTo(0, offsetTop);
  //turnOffBurger
  const burger = document.querySelector('.activeBurger');
  const navList = document.querySelector('.navList');
  if (burger) {
    burger.classList.remove('activeBurger');
    navList.classList.remove('active');
  }
};

const ScrollToElement = (props) => {
  return (
    <>
      {props.type === 'li' && (
        <li onClick={handleClick} className={props.className} id={props.id}>
          {props.name}
        </li>
      )}
      {props.type === 'button' && (
        <button onClick={handleClick} className={props.className} id={props.id}>
          {props.name}
        </button>
      )}
    </>
  );
};

export default ScrollToElement;
