"use client";

import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import Lightbox from "./Lightbox";
import { portfolioItems } from "../../data/portfolioData";

export default function Cards({ activeTab }) {
  const [filteredData, setFilteredData] = useState(portfolioItems);

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter portfolio items
  useEffect(() => {
    setFilteredData(
      activeTab === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeTab)
    );
  }, [activeTab]);

  // Open lightbox grouped by category
  const openLightbox = (item) => {
    const sameCategory = portfolioItems.filter(
      (el) => el.category === item.category
    );
    const index = sameCategory.findIndex((el) => el.id === item.id);

    setLightboxItems(sameCategory);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((i) => (i + 1) % lightboxItems.length);

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? lightboxItems.length - 1 : i - 1));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <CardItem key={item.id} item={item} openLightbox={openLightbox} />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
