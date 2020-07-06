import React from 'react';
import '../styles/Gallery.css';

const imagesList = [
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
  {src: '', alt: ''},
];

const Gallery = () => {
  return (
    <section className='gallery'>
      {imagesList.map((image, index) => (
        <div key={index} className='galleryImageContainer'>
          <img className='galleryImage' src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
