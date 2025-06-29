"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-black/60 bg-opacity-90 text-white z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
        <a
          href="/#home"
          className={`${bebasNeue.className} text-3xl md:text-4xl hover:text-purple-400 transition-colors`}
        >
          Fresh Flow Mobile Auto Spa
        </a>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-50 text-lg content-cente md:min-w-150">
          <a href="/#packages" className="hover:text-purple-400 transition-colors m-auto">Services</a>
          <a href="/ceramic-studio" className="hover:text-purple-400 transition-colors m-auto">Ceramic Studio</a>
          <a href="/#plans" className="hover:text-purple-400 transition-colors m-auto">Maintenance</a>
          <a href="/#contact" className="hover:text-purple-400 transition-colors m-auto">Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Book Now
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <a href="/#packages" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="/#plans" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Maintenance</a>
          <a href="/#contact" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
