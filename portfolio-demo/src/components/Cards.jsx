"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cards({ activeTab }) {
  const portfolioItems = [
    {
      id: 1,
      title: "App 1",
      category: "App",
      img: "/assets/img/portfolio/app-1.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 2,
      title: "Product 1",
      category: "Product",
      img: "/assets/img/portfolio/product-1.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 3,
      title: "Branding 1",
      category: "Branding",
      img: "/assets/img/portfolio/branding-1.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 4,
      title: "Books 1",
      category: "Books",
      img: "/assets/img/portfolio/books-1.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 5,
      title: "App 2",
      category: "App",
      img: "/assets/img/portfolio/app-2.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 6,
      title: "Product 2",
      category: "Product",
      img: "/assets/img/portfolio/product-2.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 7,
      title: "Branding 2",
      category: "Branding",
      img: "/assets/img/portfolio/branding-2.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 8,
      title: "Books 2",
      category: "Books",
      img: "/assets/img/portfolio/Books-2.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 9,
      title: "App 3",
      category: "App",
      img: "/assets/img/portfolio/app-3.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 10,
      title: "Product 3",
      category: "Product",
      img: "/assets/img/portfolio/product-3.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 11,
      title: "Branding 3",
      category: "Branding",
      img: "/assets/img/portfolio/branding-3.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
    {
      id: 12,
      title: "Books 3",
      category: "Books",
      img: "/assets/img/portfolio/books-3.jpg",
      desc: "Lorem ipsum",
      link: "/portfolio-details",
    },
  ];

  const [filteredData, setFilteredData] = useState(portfolioItems);

  // Lightbox States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredData(portfolioItems);
    } else {
      setFilteredData(
        portfolioItems.filter((item) => item.category === activeTab)
      );
    }
  }, [activeTab]);

  // Open Lightbox
  const openLightbox = (item) => {
    const sameCategoryItems = portfolioItems.filter(
      (el) => el.category === item.category
    );

    const index = sameCategoryItems.findIndex((el) => el.id === item.id);

    setLightboxItems(sameCategoryItems);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Next/ Previous
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % lightboxItems.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? lightboxItems - 1 : prev - 1));

  // Close Lightbox
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="relative group overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h4 className="text-white text-lg font-semibold">{item.title}</h4>
              <p className="text-white/80 text-sm mb-3">{item.desc}</p>

              <div className="flex gap-4">
                {/* open lightbox when clicked */}
                <button
                  onClick={() => openLightbox(item)}
                  className="text-white text-xl"
                >
                  <i className="bi bi-zoom-in"></i>
                </button>
                <Link href={item.link} className="text-white text-xl">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-1200 bg-black/90">
          <div className="flex flex-col w-full">
            {/* Image Wrapper */}
            <div className="relative mx-auto h-[85vh] w-full max-w-[814px]">
              {/* Image */}
              <Image
                src={lightboxItems[currentIndex].img}
                alt="lightbox"
                fill
                className="object-cover"
              />
            </div>

            {/* Title Bar */}
            <div className="text-black text-xl bg-white py-[22px] px-5 w-full max-w-[814px] mx-auto h-[15vh]">
              <h4 className="mb-[19px]">{lightboxItems[currentIndex].title}</h4>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-[15px] right-2.5 w-[35px] h-[35px] rounded text-white text-3xl
            bg-black/75 desktop:bg-[rgba(0,0,0,0.32)]
"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* PREVIOUS ARROW */}
          {currentIndex > 0 && (
            <button
              className="absolute left-[30px] w-10 h-[50px] rounded text-white text-4xl -top-full desktop:top-[45%]
              bg-black/75 desktop:bg-[rgba(0,0,0,0.32)]
"
              onClick={prevImage}
            >
              ❮
            </button>
          )}

          {/* Next Arrow */}
          {currentIndex < lightboxItems.length - 1 && (
            <button
              className="absolute right-[30px] w-10 h-[50px] rounded text-white text-4xl -top-full desktop:top-[45%]
              bg-black/75 desktop:bg-[rgba(0,0,0,0.32)]"
              onClick={nextImage}
            >
              ❯
            </button>
          )}
        </div>
      )}
    </>
  );
}
