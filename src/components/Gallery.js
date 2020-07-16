import React, {Component} from 'react';

import '../styles/Gallery.css';

import gallery1 from '../images/gallery/gallery1.jpg';
import gallery2 from '../images/gallery/gallery2.jpg';
import gallery3 from '../images/gallery/gallery3.jpg';
import gallery4 from '../images/gallery/gallery4.jpg';

const imagesList = [
  {src: gallery1, alt: ''},
  {src: gallery2, alt: ''},
  {src: gallery3, alt: ''},
  {src: gallery4, alt: ''},
];

class Gallery extends Component {
  state = {
    height: 300,
  };

  setContainerWidth = () => {
    const galleryContainerWidth = document.querySelector(
      '.galleryImageContainer'
    ).clientWidth;
    const height = (galleryContainerWidth / 16) * 9;
    this.setState({
      height,
    });
  };

  componentDidMount() {
    this.setContainerWidth();
    window.addEventListener('resize', this.setContainerWidth);
  }
  render() {
    return (
      <section className='gallery'>
        {imagesList.map((image, index) => (
          <div
            key={index}
            style={{height: `${this.state.height}px`}}
            className='galleryImageContainer'
          >
            <img className='galleryImage' src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
    );
  }
}

export default Gallery;
