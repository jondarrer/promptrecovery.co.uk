'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './image-slider.module.css';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const getSlideStyle = (index) => {
    return {
      transform: `translateX(${100 * (index - currentIndex)}%)`,
      transition: 'transform 0.5s ease-in-out',
    };
  };

  return (
    <div className={styles['slider-container']}>
      <button className={[styles['slider-button'], styles['prev']].join(' ')} onClick={prevSlide}>
        &lt;
      </button>

      <div className={styles['slider-track']}>
        {images.map((image, index) => (
          <div key={index} className={styles['slider-slide']} style={getSlideStyle(index)}>
            <Image src={image} alt={`Team member ${index + 1}`} className={styles['slider-image']} />
          </div>
        ))}
      </div>

      <button className={[styles['slider-button'], styles['next']].join(' ')} onClick={nextSlide}>
        &gt;
      </button>

      <div className={styles['slider-dots']}>
        {images.map((_, index) => (
          <span
            key={index}
            className={[styles['slider-dot'], index === currentIndex ? styles['active'] : '']}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
