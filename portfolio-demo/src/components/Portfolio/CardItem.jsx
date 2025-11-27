"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardItem({ item, openLightbox }) {
  return (
    <div className="relative group overflow-hidden">
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
          <button onClick={() => openLightbox(item)} className="text-white text-xl">
            <i className="bi bi-zoom-in"></i>
          </button>

          <Link href={item.link} className="text-white text-xl">
            <i className="bi bi-link-45deg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
