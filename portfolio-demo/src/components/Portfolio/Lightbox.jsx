"use client";
import Image from "next/image";

export default function Lightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1200 bg-black/90 flex flex-col">
      {/* IMAGE */}
      <div className="relative mx-auto h-[85vh] w-full max-w-[814px]">
        <Image
          src={items[currentIndex].img}
          alt="lightbox"
          fill
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="text-black text-xl bg-white py-[22px] px-5 w-full max-w-[814px] mx-auto h-[15vh]">
        <h4 className="mb-[19px]">{items[currentIndex].title}</h4>
      </div>

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-4 right-3 w-[35px] h-[35px] bg-black/70 text-white rounded text-3xl"
      >
        ✕
      </button>

      {/* PREV */}
      {currentIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-[30px] top-[45%] w-10 h-[50px] text-white text-4xl bg-black/70 rounded"
        >
          ❮
        </button>
      )}

      {/* NEXT */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-[30px] top-[45%] w-10 h-[50px] text-white text-4xl bg-black/70 rounded"
        >
          ❯
        </button>
      )}
    </div>
  );
}
