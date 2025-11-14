"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cards() {
  // Active tab state
  const [activeTab, setActiveTab] = useState("All");

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "App 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-1.jpg",
      category: "App",
    },
    {
      id: 2,
      title: "Product 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-1.jpg",
      category: "Product",
      link: "/portfolio-details",
    },
    {
      id: 3,
      title: "Branding 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-1.jpg",
      category: "Branding",
      link: "/branding",
    },
    {
      id: 4,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/books-1.jpg",
      category: "Books",
    },
    {
      id: 5,
      title: "App 2",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-2.jpg",
      category: "App",
    },
    {
      id: 6,
      title: "Product 2",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-2.jpg",
      category: "Product",
    },
    {
      id: 7,
      title: "Branding 2",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-2.jpg",
      category: "Branding",
    },
    {
      id: 8,
      title: "Books 2",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/books-2.jpg",
      category: "Books",
    },
    {
      id: 9,
      title: "App 3",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-3.jpg",
      category: "App",
    },
    {
      id: 10,
      title: "Product 3",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-3.jpg",
      category: "Product",
    },
    {
      id: 11,
      title: "Branding 3",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-3.jpg",
      category: "Branding",
    },
    {
      id: 12,
      title: "Books 3",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/books-3.jpg",
      category: "Books",
    },
  ];

  // Filtered data
  const [filteredData, setFilteredData] = useState(portfolioItems);

  // Update on tab change
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredData(portfolioItems);
    } else {
      setFilteredData(
        portfolioItems.filter((item) => item.category === activeTab)
      );
    }
  }, [activeTab]);

  return (
    <section>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mt-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg"
          >
            {/* Portfolio Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-lg font-semibold">{item.title}</h4>
              <p className="text-white/80 inline-block text-center text-sm font-normal mb-4 mt-0">
                {item.desc}
              </p>

              {/* Links */}
              <div className="flex space-x-3">
                {/* Lightbox Link */}
                <a
                  href={item.img}
                  title={item.title}
                  data-gallery="portfolio-gallery-app"
                  className="items-center justify-center text-white hover:text-black transition"
                >
                  <i className="bi bi-zoom-in text-xl"></i>
                </a>

                {/* Details Page Link */}
                <Link
                  href={item?.link || ""}
                  title="More Details"
                  className="items-center justify-center text-white hover:text-black transition"
                >
                  <i className="bi bi-link-45deg text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
