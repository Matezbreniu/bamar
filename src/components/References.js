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
      name: 'Wrocławski Klub Koszykówki',
      description:
        'Podczas wykonywania swoich obowiązków pan Bartosz wykazywał się profesjonalizmem, cierpliwością, otwartością oraz wyrozumiałością. Starannie tłumaczył każde ćwiczenie, dopasowując do poziomu sportowego każdego z uczestników. Był także dla nich wsparciem poza boiskiem, udzielając porad koszykarskich do dalszego rozwoju. Poprzez swoje zaangażowanie i doświadczenie był dużym wsparciem w kwestiach organizacyjnych, mimo że nie były one objęte umową. Z przyjemnością stwierdzam, że jest osobą godną polecenia.',
    },
    {
      name: 'Przedszkole nr 77 Poznań - Koraliki',
      description:
        'Z Panem Bartoszem Sikorskim - założycielem Firmy BAMAR nasze Przedszkole współpracuje już od trzech lat i na pewno będziemy kontynuowali naszą współpracę w kolejnych latach. Wszystkie zajęcia prowadzone na trenie naszej placówki cieszą się ogromnym powodzeniem wśród dzieci i rodziców. Wysoko oceniają je również moi nauczyciele, którzy uczestniczą w zajęciach wraz z dziećmi. Z całą odpowiedzialnością polecam zajęcia prowadzone przez Pana Bartosza Sikorskiego oraz jego instruktorów.',
    },
    {
      name: 'Przedszkole publiczne "Naszych Dzieci"',
      description:
        'Firma "Bamar" sumiennie i terminowo wywiązuje się z obowiązków jej działania charakteryzują się elastycznością i profesjonalizmem powierzonych zadań. Duże doświadczenie i wysokie kwalifikacje pracowników przełożyły się ma efekty, które całkowicie spełniły nasze oczekiwania jako placówki jak i rodziców powierzających nam swoje dzieci. Nasza współpraca przebiega sprawnie i na wysokim poziomie świadczonych usług. Dlatego z całym przekonaniem rekomendujemy firmę "Bamar" jako specjalistę w swojej branży oraz rzetelnego i godnego partnera biznesowego.',
    },
  ];
  referencesContainer;
  referencesContainerWidth = 0;
  referenceWidth = 0;
  positionFromLeft = 0;
  touchStartX = 0;
  touchMoveX = 0;

  checkSwipeDirection = () => {
    if (this.touchMoveX > 50) {
      return 1;
    } else if (this.touchMoveX < -50) {
      return -1;
    } else {
      return 0;
    }
  };

  handleTouchStart = (e) => {
    this.setVariables();
    this.touchStartX = e.touches[0].clientX;
  };
  handleTouchMove = (e) => {
    this.touchMoveX = this.touchStartX - e.touches[0].clientX;
    if (this.touchMoveX % 15 === 0) {
      this.positionFromLeft =
        -this.state.actualReference * this.referenceWidth - this.touchMoveX;
    }
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
    this.positionFromLeft = -actualReference * this.referenceWidth;
    this.referencesContainer.style.transform = `translateX(${this.positionFromLeft}px)`;
    this.setState({
      actualReference,
    });
  };

  handleClick = (e) => {
    this.setVariables();
    const className = e.target.className;
    const index = parseInt(e.target.getAttribute('index'));
    let actualReference;
    if (className === 'referencesSwiperCircle') {
      actualReference = index;
    } else {
      actualReference = this.state.actualReference + index;
      if (
        actualReference < 0 ||
        actualReference > this.referencesList.length - 1
      ) {
        actualReference = this.state.actualReference;
      }
    }

    this.setState({
      actualReference,
    });
  };

  setVariables = () => {
    const referencesContainer = document.querySelector('.referencesContainer');
    const containerWidth = parseFloat(
      window.getComputedStyle(referencesContainer).width
    );
    const width = containerWidth / this.referencesList.length;
    this.referencesContainer = referencesContainer;
    this.referencesContainerWidth = containerWidth;
    this.referenceWidth = width;
  };

  componentDidMount() {
    this.setVariables();
  }

  render() {
    return (
      <section className='references'>
        <div className='wrapper'>
          <h2 className='referencesTitle title'>Referencje</h2>
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
            {this.referencesList.map((referenceItem, index) => (
              <Reference key={index} reference={referenceItem} />
            ))}
          </div>
          <div className='referencesSwiper'>
            <Left
              onClick={this.handleClick}
              className='referencesArrow'
              index={-1}
            />
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
            <Right
              onClick={this.handleClick}
              className='referencesArrow'
              index={1}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default References;
