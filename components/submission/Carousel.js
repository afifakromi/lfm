import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const slides = [
    <FormOne nextSlide={nextSlide} prevSlide={prevSlide} key={0} />,
    <FormTwo nextSlide={nextSlide} prevSlide={prevSlide} key={1} />,
  ];

  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center w-full py-8 bg-blue-300">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="relative flex flex-col items-center justify-center bg-red-400 item">
                {slide}
              </div>
            )}
          </div>
        );
      })}
      <style jsx>
        {`
          .item {
            width: 100%;
            height: 100%;
          }

          .slide {
            width: 100%;
            opacity: 0;
            transition-duration: 1s ease;
          }

          .slide.active {
            width: 100%;
            opacity: 1;
            transition-duration: 1s;
          }
        `}
      </style>
    </section>
  );
};

export default Carousel;
