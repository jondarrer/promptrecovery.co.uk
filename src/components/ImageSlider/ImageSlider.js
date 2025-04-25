import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getSlideStyle = (index) => {
    return {
      transform: `translateX(${100 * (index - currentIndex)}%)`,
      transition: "transform 0.5s ease-in-out",
    };
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>

      <div className="slider-track">
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-slide"
            style={getSlideStyle(index)}
          >
            <img
              src={image}
              alt={`Team member ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>

      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
