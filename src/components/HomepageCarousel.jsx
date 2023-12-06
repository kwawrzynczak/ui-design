import { Carousel } from 'flowbite-react';
import React, { useState } from 'react';

const images = [
  'https://flowbite.com/docs/images/carousel/carousel-1.svg',
  'https://flowbite.com/docs/images/carousel/carousel-2.svg',
  'https://flowbite.com/docs/images/carousel/carousel-3.svg',
  'https://flowbite.com/docs/images/carousel/carousel-4.svg',
  'https://flowbite.com/docs/images/carousel/carousel-5.svg',
];

const HomepageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <div className="flex flex-col items-center ">
      <div className="h-[300px] w-2/3 sm:h-[350px] lg:h-[400px] xl:w-[950px] 2xl:h-[500px]">
        <p className="text-center text-lg font-semibold tracking-wider text-white">
          Atrakcja {currentSlide} z {images.length}
        </p>
        <Carousel slide={false} onSlideChange={(index) => setCurrentSlide(index + 1)}>
          {images.map((image, index) => (
            <img key={index} src={image} alt="..." />
          ))}
        </Carousel>
      </div>
      ;
    </div>
  );
};
export default HomepageCarousel;
