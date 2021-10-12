import React, { useState } from "react";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";
import FormFour from "./FormFour";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const slides = [
    <FormOne nextSlide={nextSlide} key={0} />,
    <FormTwo nextSlide={nextSlide} prevSlide={prevSlide} key={1} />,
    <FormThree nextSlide={nextSlide} prevSlide={prevSlide} key={2} />,
    <FormFour prevSlide={prevSlide} key={3} />,
  ];

  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center w-full py-8 bg-nav">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                {slide}
              </div>
            )}
          </div>
        );
      })}
      <style jsx>
        {`
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
