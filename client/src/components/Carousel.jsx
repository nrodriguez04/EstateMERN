import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3000ms = 3s

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel_slide ${currentIndex === index ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
