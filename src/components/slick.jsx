import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <img src="your-image-1.jpg" alt="Slide 1" />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img src="your-image-2.jpg" alt="Slide 2" />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img src="your-image-3.jpg" alt="Slide 3" />
      </div>
      <div>
        <h3>Slide 4</h3>
        <img src="your-image-3.jpg" alt="Slide 3" />
      </div>
      <div>
        <h3>Slide 5</h3>
        <img src="your-image-3.jpg" alt="Slide 3" />
      </div>
      <div>
        <h3>Slide 6</h3>
        <img src="your-image-3.jpg" alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
};

export default SlickCarousel;
