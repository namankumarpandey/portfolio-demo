"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3.75 px-0 flex items-center bg-white relative">
      <div className="flex items-center w-full px-3 font-normal text-base justify-between">
        {/* Logo / Title */}
        <a className="flex text-black">
          <h1>MyPortfolio</h1>
        </a>

        {/* Menu Icon (always rendered but visually toggled) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-[32px] leading-0 cursor-pointer z-998 text-[#5b5b5b] hover:text-(--nav-hover-color) transition-colors ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 bottom-0 right-0 w-[300px] bg-[#f5f5f5] transition-transform duration-300 z-997 overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="py-2.5">
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">Home</a>
          </li>
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">About</a>
          </li>
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">Services</a>
          </li>
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">Portfolio</a>
          </li>
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">Dropdown</a>
          </li>
          <li>
            <a className="flex items-center justify-between py-2.5 px-5 text-[#5b5b5b]">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Close (X) Button */}
      <button
        onClick={() => setIsOpen(false)}
        className={`fixed top-5 right-[310px] text-[#5b5b5b] hover:text-(--nav-hover-color) text-[32px] cursor-pointer z-999 border border- rounded-full bg-white p-1 transition-all ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      {/* Overlay (click to close sidebar) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-996"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
