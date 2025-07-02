"use client";

import { useState, useTransition } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-xl border-b border-white/10 bg-gradient-to-r from-black/90 via-gray-900/90 to-black/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <a
          href="/"
          className="flex items-center gap-3 group text-white"
        >
          <Image
            src="/logo-t.png"
            alt="Fresh Flow Mobile Auto Spa Logo"
            width={40}
            height={40}
            className="rounded-lg drop-shadow-md transition-transform group-hover:scale-110"
            priority
          />
          <span className={`${bebasNeue.className} text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide hover:text-purple-400 transition-colors text-white`}>Fresh Flow Auto Spa</span>
        </a>
        {!isMenuOpen && (
          <button
            className="md:hidden text-white text-3xl p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            aria-label="Open menu"
            onClick={() => startTransition(() => setIsMenuOpen(true))}
          >
            <FaBars />
          </button>
        )}
        <div className="hidden md:flex space-x-8 text-lg items-center text-white">
          <a href="/#packages" className="text-white hover:text-purple-400 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Services</a>
          <a href="/ceramic-studio" className="text-white hover:text-purple-400 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Ceramic Studio</a>
          <a href="/#plans" className="text-white hover:text-purple-400 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Keep It Fresh</a>
          <a href="/#contact" className="text-white hover:text-purple-400 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-md border border-purple-700 text-white"
          >
            Book Now
          </a>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ transitionProperty: 'opacity' }}
        onClick={() => startTransition(() => setIsMenuOpen(false))}
      >
        {isMenuOpen && (
          <button
            className="absolute top-4 right-4 text-white text-3xl p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 z-50"
            aria-label="Close menu"
            onClick={() => startTransition(() => setIsMenuOpen(false))}
          >
            <FaTimes />
          </button>
        )}
        <div
          className={`absolute top-0 left-0 w-full bg-gradient-to-b from-black/95 via-gray-900/95 to-black/90 shadow-2xl border-b border-white/10 rounded-b-2xl p-8 pt-24 flex flex-col space-y-6 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-20'}`}
          style={{ transitionProperty: 'transform' }}
          onClick={e => e.stopPropagation()}
        >
          <a href="/#packages" className="text-2xl py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white" onClick={() => startTransition(() => setIsMenuOpen(false))}>Services</a>
          <a href="/ceramic-studio" className="text-2xl py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white" onClick={() => startTransition(() => setIsMenuOpen(false))}>Ceramic Studio</a>
          <a href="/#plans" className="text-2xl py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white" onClick={() => startTransition(() => setIsMenuOpen(false))}>Keep It Fresh</a>
          <a href="/#contact" className="text-2xl py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white" onClick={() => startTransition(() => setIsMenuOpen(false))}>Contact</a>
          <a
            href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-md border border-purple-700 text-white text-center mt-4"
            onClick={() => startTransition(() => setIsMenuOpen(false))}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
