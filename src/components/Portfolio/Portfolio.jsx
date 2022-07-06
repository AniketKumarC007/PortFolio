import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Blog from "../../img/Blog.png";
import Gmeet from "../../img/gmeet.png";
import chat from "../../img/chat.png";
import xyz from "../../img/xyz.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Blog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gmeet} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xyz} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
