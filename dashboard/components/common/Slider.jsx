"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/login.png" width={500} height={400} alt="hi" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/login.png" width={500} height={400} alt="hi" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/login.png" width={500} height={400} alt="hi" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
