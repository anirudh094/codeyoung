import React from "react";
import "../../CSS/carousel.css";
import { Carousel } from "rsuite";

function CarouselBanner() {
  return (
    <>
      <div className="carousel-body">
        <Carousel autoplay className="custom-slider">
          <img src="https://demoscheduling.s3.ap-south-1.amazonaws.com/promotionsBanner/_P6_D_wWdh-Shailendra%20Dhakad%27s%20Article%20in%20the%20TOI" alt="logo-bannner" />
          <img src="https://demoscheduling.s3.amazonaws.com/promotionsBanner/yEEcim-8bt-All%20About%20Olympiad%20exmas" alt="logo-bannner" />
          <img src="https://demoscheduling.s3.ap-south-1.amazonaws.com/promotionsBanner/YSwnU3Ci-7-Sandbox%20Explore" alt="logo-bannner" />
        </Carousel>
      </div>
    </>
  );
}

export default CarouselBanner;
