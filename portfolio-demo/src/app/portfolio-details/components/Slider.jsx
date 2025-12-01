"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ images }) {
  return (
    <div>
      <Swiper
        loop={true}
        speed={600}
        autoplay={{ delay: 5000 }}
        slidesPerView="auto"
        pagination={{ el: ".custom-pagination", clickable: true }}
        modules={[Pagination, Autoplay]}
        className="portfolio-slider"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <Image
              src={src}
              width={900}
              height={600}
              alt="Portfolio image"
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
}
