"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonialsData } from "@/data/testimonialsData";
import Image from "next/image";
import { BsQuote, BsStarFill } from "react-icons/bs";
import React from "react";

export default function TestimonialsCards() {
  return (
    <>
      <div className="px-3 text-center tablet:max-w-[540px] desktop:max-w-[720px] huge:max-w-[960px] mx-auto">
        <Swiper
          loop
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          className="pb-2!"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                className="w-30 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-[20px] mt-2.5 mb-1.25">
                {item.title}
              </h3>
              <h4 className="text-sm mb-[15px] text-gray-500">
                {item.designation}
              </h4>
              {/* Stars */}
              <div className="mb-[15px]">
                <BsStarFill className="inline-block text-yellow-500 text-xl mx-px " />
                <BsStarFill className="inline-block text-yellow-500 text-xl mx-px " />
                <BsStarFill className="inline-block text-yellow-500 text-xl mx-px " />
                <BsStarFill className="inline-block text-yellow-500 text-xl mx-px " />
                <BsStarFill className="inline-block text-yellow-500 text-xl mx-px " />
              </div>
              <p className="italic mb-[15px] mx-auto huge:w-[80%] font-normal text-base">
                <BsQuote className="inline-block text-2xl text-gray-500 relative -left-1.25" />
                <span>{item.description}</span>
                <BsQuote className="inline-block text-2xl text-gray-500 rotate-180 relative -right-1.25 top-2.5" />
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
