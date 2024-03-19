import "./Carousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide key={1}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={4}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={5}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={6}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={7}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={8}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </SwiperSlide>
        <SwiperSlide key={9}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
