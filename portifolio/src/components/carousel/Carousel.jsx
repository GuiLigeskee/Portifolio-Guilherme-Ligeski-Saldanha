import "./Carousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Icons
import TypeScript from "../../assets/typescript.svg";
import JavaScript from "../../assets/javascript-logo.svg";
import React from "../../assets/react-logo.svg";
import Redux from "../../assets/redux-logo.svg";
import Nodejs from "../../assets/nodejs-logo.svg";
import Mongodb from "../../assets/mongodb-logo.svg";
import Html from "../../assets/html-logo.svg";
import Css from "../../assets/css-logo.svg";
import CLogo from "../../assets/c-logo.svg";
import Python from "../../assets/python-logo.svg";
import Git from "../../assets/git-logo.svg";

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={TypeScript} alt="typescript" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JavaScript} alt="javascript" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={React} alt="react" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Redux} alt="redux" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Nodejs} alt="nodejs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mongodb} alt="mongodb" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Git} alt="git" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Html} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Css} alt="css" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CLogo} alt="c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Python} alt="python" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
