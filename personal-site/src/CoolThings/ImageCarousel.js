import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "/Users/achyutpatel/Documents/GitHub/personal-web-repo/personal-site/src/Images/image1.jpg";
import image2 from "/Users/achyutpatel/Documents/GitHub/personal-web-repo/personal-site/src/Images/image1.jpg";
import image3 from "/Users/achyutpatel/Documents/GitHub/personal-web-repo/personal-site/src/Images/image1.jpg";
import image4 from "/Users/achyutpatel/Documents/GitHub/personal-web-repo/personal-site/src/Images/image1.jpg";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="Image 1" /> {/* Use imported images */}
      </div>
      <div>
        <img src={image2} alt="Image 2" /> {/* Use imported images */}
      </div>
      <div>
        <img src={image3} alt="Image 3" /> {/* Use imported images */}
      </div>
      <div>
        <img src={image4} alt="Image 4" /> {/* Use imported images */}
      </div>
      {/* Add more images here */}
    </Slider>
  );
}

export default ImageCarousel;
