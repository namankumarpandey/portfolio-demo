"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function PortfolioDetails() {
  const paginationRef = useRef(null);

  return (
    <section id="portfolio-details" className="py-15 px-0">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: IMAGE SLIDER */}
          <div className="px-12 mt-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 4000 }}
              pagination={{
                clickable: true,
                el: paginationRef.current,  // put dots here
              }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              className="w-full h-full"
            >
              {[
                "/assets/img/portfolio/app-1.jpg",
                "/assets/img/portfolio/product-1.jpg",
                "/assets/img/portfolio/branding-1.jpg",
                "/assets/img/portfolio/books-1.jpg",
              ].map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={src}
                    width={900}
                    height={600}
                    alt="Portfolio image"
                    className="rounded-lg w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ALWAYS SHOW DOTS HERE */}
            <div
              ref={paginationRef}
              className="flex justify-center mt-4"
            ></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg p-8 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">
                Project information
              </h2>

              <ul className="space-y-3 text-gray-700 text-[15px]">
                <li><strong>Category:</strong> Web design</li>
                <li><strong>Client:</strong> ASU Company</li>
                <li><strong>Project date:</strong> 01 March, 2020</li>
                <li><strong>Project URL:</strong> www.example.com</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 leading-snug">
                Exercitationem repudiandae officiis neque suscipit
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Autem ipsum nam porro corporis rerum...
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
