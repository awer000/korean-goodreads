import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./DefaultSwiper.scss";
import { imageMapList } from "../mock/swiperMock";

const CoverflowEffect = ({ title }) => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  };
  return (
    <div className="DefaultSwiper">
      <div className="title">{title}</div>
      <div className="slide">
        <Swiper {...params}>
          {imageMapList.map(item => (
            <img
              key={item.src}
              src={item.src}
              style={{
                backgroundSize: "cover"
              }}
            />
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CoverflowEffect;
