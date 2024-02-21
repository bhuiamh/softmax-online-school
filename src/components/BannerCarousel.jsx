import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BannerCarousel = () => {
  return (
    <div className="relative shadow-base-content shadow-md mb-10">
      <Carousel
        className="pt-[80px]"
        autoPlay
        transitionTime={1000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        centerSlidePercentage={true}
        stopOnHover={true}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
        <div>
          <img src="banner/banner1.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
