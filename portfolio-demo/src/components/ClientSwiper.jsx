"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ClientSwiper() {
  const clients = [
    "/assets/img/clients/client-1.png",
    "/assets/img/clients/client-2.png",
    "/assets/img/clients/client-3.png",
    "/assets/img/clients/client-4.png",
    "/assets/img/clients/client-5.png",
    "/assets/img/clients/client-6.png",
    "/assets/img/clients/client-7.png",
    "/assets/img/clients/client-8.png",
  ];

  return (
    <Swiper
      loop={true}
      speed={600}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 40 },
        480: { slidesPerView: 3, spaceBetween: 60 },
        640: { slidesPerView: 4, spaceBetween: 80 },
        992: { slidesPerView: 6, spaceBetween: 120 },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {clients.map((src, i) => (
        <SwiperSlide key={i} className="flex items-center justify-center">
          <Image
            src={src}
            alt={`client-${i}`}
            width={120}
            height={60}
            className="object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
