import React, { useState, useEffect, useRef } from 'react';

export default function Slidewrapper({ children, interval = 3000 }) {
  const slides = React.Children.toArray(children);
  const total = slides.length;

  // Clone last + first for smooth infinite loop
  const extendedSlides = [
    slides[total - 1], // clone of last
    ...slides,
    slides[0],         // clone of first
  ];

  const [current, setCurrent] = useState(1); // start at first original
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => c + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Handle edge resets after transition
  const handleTransitionEnd = () => {
    if (current === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrent(1); // back to real first slide
    } else if (current === 0) {
      setIsTransitioning(false);
      setCurrent(total); // back to real last slide
    }
  };

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 20); // allow DOM to render non-transition jump
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex w-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Optional: Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)}
            className={`w-3 h-3 rounded-full ${
              current === index + 1 ? 'bg-green-600' : 'bg-gray-300'
            } transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
