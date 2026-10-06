import { useState } from 'react';
import './ImageSlider.css';

const slideImageUrls = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=80',
];

export const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide - 1 + slideImageUrls.length) % slideImageUrls.length,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slideImageUrls.length);
  };

  return (
    <section
      className="home-slider"
      role="region"
      aria-label="Featured images"
      aria-roledescription="carousel"
    >
      <div className="slide-content" aria-live="polite">
        {slideImageUrls[activeSlide] ? (
          <img
            className="slide-image"
            src={slideImageUrls[activeSlide]}
            alt={`Featured image ${activeSlide + 1}`}
          />
        ) : (
          <div className="slide-placeholder">
            <span>Image {activeSlide + 1}</span>
            <p>Add an image URL in the <code>slideImageUrls</code> array in <code>src/components/ImageSlider.tsx</code>.</p>
          </div>
        )}
      </div>

      <button
        className="slider-arrow slider-arrow-previous"
        type="button"
        onClick={showPreviousSlide}
        aria-label="Show previous image"
      >
        &#8249;
      </button>
      <button
        className="slider-arrow slider-arrow-next"
        type="button"
        onClick={showNextSlide}
        aria-label="Show next image"
      >
        &#8250;
      </button>

      <div className="slider-indicators" role="group" aria-label="Choose an image">
        {slideImageUrls.map((_, index) => (
          <button
            key={index}
            className={`slider-indicator${index === activeSlide ? ' is-active' : ''}`}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
};