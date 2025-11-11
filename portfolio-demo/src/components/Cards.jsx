import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Cards() {
  const portfolioItems = [
    {
      id: 1,
      title: "App 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-1.jpg",
    },
    {
      id: 2,
      title: "Product 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-1.jpg",
    },
    {
      id: 3,
      title: "Branding 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-1.jpg",
    },
    {
      id: 4,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/books-1.jpg",
    },
    {
      id: 5,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-2.jpg",
    },
    {
      id: 6,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-2.jpg",
    },
    {
      id: 7,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-2.jpg",
    },
    {
      id: 8,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/books-2.jpg",
    },
    {
      id: 9,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/app-3.jpg",
    },
    {
      id: 10,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/product-3.jpg",
    },
    {
      id: 11,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-3.jpg",
    },
    {
      id: 12,
      title: "Books 1",
      desc: "Lorem ipsum",
      img: "/assets/img/portfolio/branding-2.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mt-6">
      {portfolioItems.map((item) => (
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
            <p className="text-white text-sm mb-3">{item.desc}</p>

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
                href="/portfolio-details"
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
  );
}
