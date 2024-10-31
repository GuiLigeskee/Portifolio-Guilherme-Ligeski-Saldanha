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
import Mysql from "../../assets/MySQL.svg";
import Express from "../../assets/Express.svg";
import GCP from "../../assets/GoogleCloud.svg";
import Postman from "../../assets/Postman.svg";
import WordPress from "../../assets/WordPress.svg";

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
          <p>TypeScript</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={JavaScript} alt="javascript" />
          <p>JavaScript</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Nodejs} alt="nodejs" />
          <p>Node</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={React} alt="react" />
          <p>React</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Redux} alt="redux" />
          <p>Redux</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Express} alt="express" />
          <p>express</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mongodb} alt="mongodb" />
          <p>Mongo DB</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mysql} alt="mysql" />
          <p>MySQL</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Git} alt="git" />
          <p>Git</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Html} alt="html" />
          <p>HTML</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Css} alt="css" />
          <p>CSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CLogo} alt="c" />
          <p>C</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Python} alt="python" />
          <p>Python</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={GCP} alt="GoogleCloud" />
          <p>GoogleCloud</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Postman} alt="postman" />
          <p>Postman</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={WordPress} alt="wordPress" />
          <p>WordPress</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
