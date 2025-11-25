"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function PortfolioDetails() {
  return (
    <section id="portfolio-details" className="py-15 px-0">
      <div className="mx-auto px-3">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-10">
          {/* LEFT SIDE - IMAGE SLIDER */}
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              className="portfolio-slider"
            >
              {[
                "/assets/img/portfolio/app-1.jpg",
                "/assets/img/portfolio/product-1.jpg",
                "/assets/img/portfolio/branding-1.jpg",
                "/assets/img/portfolio/books-1.jpg",
              ].map((src, i) => (
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

            {/* PAGINATION (always below image like Bootstrap) */}
            <div className="custom-pagination flex justify-center mt-4"></div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            {/* PROJECT INFO */}
            <div className="bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] p-7.5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Project information
              </h3>
              <ul className="space-y-3 text-gray-700 text-[15px]">
                <li>
                  <strong>Category:</strong> Web design
                </li>
                <li>
                  <strong>Client:</strong> ASU Company
                </li>
                <li>
                  <strong>Project date:</strong> 01 March, 2020
                </li>
                <li>
                  <strong>Project URL:</strong>{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    www.example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* TITLE + DESCRIPTION */}
            <div className="pt-7.5">
              <h2 className="text-[26px] font-bold mb-5 leading-[1.2]">
                Exercitationem repudiandae officiis neque suscipit
              </h2>

              <p className=" leading-relaxed mt-0 mb-4 p-0 text-[color-mix(in_srgb,var(--default-color),transparent_30%)]">
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
