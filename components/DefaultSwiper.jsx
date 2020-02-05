import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './DefaultSwiper.scss';
import Link from 'next/link';

const CoverflowEffect = ({ title, imageMapList }) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="DefaultSwiper">
      <div className="title">{title}</div>
      <div className="slide">
        <Swiper {...params}>
          {imageMapList.map(item => (
            <div key={item.src}>
              <Link href="/book/[itemId]" as={`/book/227133741`}>
                <img src={item.src} />
              </Link>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CoverflowEffect;
