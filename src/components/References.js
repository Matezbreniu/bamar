import React, {Component} from 'react';
import Reference from './Reference';
import '../styles/References.css';
import {ReactComponent as Left} from '../icons/left.svg';
import {ReactComponent as Right} from '../icons/right.svg';

class References extends Component {
  state = {
    actualReference: 0,
  };

  referencesList = [
    {
      name: 'Przedszkole nr 77 Poznań - Koraliki',
      img: '',
      description:
        'Z Panem Bartoszem Sikorskim - założycielem Firmy BAMAR nasze Przedszkole współpracuje już od trzech lat i na pewno będziemy kontynuowali naszą współpracę w kolejnych latach. Wszystkie zajęcia prowadzone na trenie naszej placówki cieszą się ogromnym powodzeniem wśród dzieci i rodziców. ',
    },
    {
      name: 'Przedszkole nr 77 Poznań - Koraliki',
      img: '',
      description:
        'Z Panem Bartoszem Sikorskim - założycielem Firmy BAMAR nasze Przedszkole współpracuje już od trzech lat i na pewno będziemy kontynuowali naszą współpracę w kolejnych latach. Wszystkie zajęcia prowadzone na trenie naszej placówki cieszą się ogromnym powodzeniem wśród dzieci i rodziców. ',
    },
    {
      name: 'Przedszkole nr 77 Poznań - Koraliki',
      img: '',
      description:
        'Z Panem Bartoszem Sikorskim - założycielem Firmy BAMAR nasze Przedszkole współpracuje już od trzech lat i na pewno będziemy kontynuowali naszą współpracę w kolejnych latach. Wszystkie zajęcia prowadzone na trenie naszej placówki cieszą się ogromnym powodzeniem wśród dzieci i rodziców. ',
    },
  ];
  referencesContainer;
  referencesContainerWidth = 0;
  referenceWidth = 0;
  positionFromLeft = 0;
  touchStartX = 0;
  touchMoveX = 0;

  checkSwipeDirection = () => {
    const touchLength = this.touchMoveX;
    if (touchLength > 50) {
      return 1;
    } else if (touchLength < -50) {
      return -1;
    } else {
      return 0;
    }
  };

  handleTouchStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
  };
  handleTouchMove = (e) => {
    const touchStart = this.touchStartX;
    const touchClientX = e.touches[0].clientX;
    const touchMoveX = touchStart - touchClientX;
    let positionFromLeft = this.positionFromLeft;
    if (touchMoveX % 10 === 0) {
      positionFromLeft =
        -this.state.actualReference * this.referenceWidth - touchMoveX;
    }
    this.touchMoveX = touchMoveX;
    this.positionFromLeft = positionFromLeft;
    this.referencesContainer.style.transform = `translateX(${this.positionFromLeft}px)`;
  };
  handleTouchEnd = () => {
    const swipeDirection = this.checkSwipeDirection();
    let actualReference = this.state.actualReference + swipeDirection;
    if (
      actualReference > this.referencesList.length - 1 ||
      actualReference < 0
    ) {
      actualReference = this.state.actualReference;
    }
    const positionFromLeft = -actualReference * this.referenceWidth;
    this.positionFromLeft = positionFromLeft;
    this.referencesContainer.style.transform = `translateX(${this.positionFromLeft}px)`;
    this.setState({
      actualReference,
    });
  };
  handleClick = (e) => {
    const actualReference = parseInt(e.target.getAttribute('index'));
    const positionFromLeft = actualReference * this.referenceWidth * -1;
    this.positionFromLeft = positionFromLeft;
    this.setState({
      actualReference,
    });
  };

  componentDidMount() {
    const referencesContainer = document.querySelector('.referencesContainer');

    const containerWidth = parseFloat(
      window.getComputedStyle(referencesContainer).width
    );
    const containerHeight = parseFloat(
      window.getComputedStyle(referencesContainer).height
    );
    const arrows = document.querySelectorAll('.referencesArrow');
    arrows.forEach((arrow) => {
      arrow.style.height = containerHeight;
    });
    const width = containerWidth / this.referencesList.length;
    this.referencesContainer = referencesContainer;
    this.referencesContainerWidth = containerWidth;
    this.referenceWidth = width;
  }

  render() {
    return (
      <section className='references'>
        <div className='wrapper'>
          <div className='title'>Referencje</div>
          <div
            className='referencesContainer'
            style={{
              transform: `translateX(${
                -this.state.actualReference * this.referenceWidth
              }px)`,
            }}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            {/* <Left
              className='referencesArrow'
              id='arrowLeft'
              style={{height: this.referencesContainerHeight}}
            /> */}
            {this.referencesList.map((referenceItem, index) => (
              <Reference key={index} reference={referenceItem} />
            ))}
            {/* <Right
              className='referencesArrow'
              id='arrowRight'
              style={{height: this.referencesContainerHeight}}
            /> */}
          </div>
          <div className='referencesSwiper'>
            {this.referencesList.map((item, index) => (
              <div
                onClick={this.handleClick}
                key={index}
                index={index}
                className='referencesSwiperCircle'
              >
                {this.state.actualReference === index && (
                  <div className='referencesSwiperCircleActive'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default References;
