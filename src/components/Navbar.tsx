"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
        <a href="#home" className="text-xl font-bold hover:text-purple-400 transition-colors">Fresh Flow Mobile Auto Spa</a>
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#packages" className="hover:text-purple-400 transition-colors">Packages</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >Book Now</a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <a href="#packages" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Packages</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >Book Now</a>
        </div>
      )}
    </nav>
  );
}