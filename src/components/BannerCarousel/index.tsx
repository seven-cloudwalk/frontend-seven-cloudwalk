import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Banner1 from "../../assets/Images/banner1.png";
import Banner2 from "../../assets/Images/banner2.png";
import Banner3 from "../../assets/Images/banner3.png";
import * as S from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

export const BannerCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      pagination={{clickable: true}}
      autoplay={{delay: 4500}}
      navigation
    >
      <SwiperSlide>
        <S.Banner src={Banner1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <S.Banner src={Banner2} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <S.Banner src={Banner3} alt="Banner 1" />
      </SwiperSlide>
    </Swiper>
  );
};
