"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { clientsData } from "@/data/clientsData";
import "swiper/css";
import "swiper/css/pagination";

export default function ClientSwiper() {
  return (
    <div>
      <Swiper
        loop
        speed={600}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView="auto"
        pagination={{ clickable: true, el: ".custom-pagination" }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 40 },
          480: { slidesPerView: 3, spaceBetween: 60 },
          640: { slidesPerView: 4, spaceBetween: 80 },
          992: { slidesPerView: 6, spaceBetween: 120 },
        }}
        modules={[Autoplay, Pagination]}
      >
        {clientsData.map((src, i) => (
          <SwiperSlide key={i}>
            <Image src={src} alt={`client-${i}`} width={120} height={60} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-6 flex justify-center"></div>
    </div>
  );
}
