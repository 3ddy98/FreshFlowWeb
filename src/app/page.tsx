import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import InstagramEmbed from "@/components/InstagramEmbed";

import { Montserrat } from "next/font/google";
import { Metadata } from 'next';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faYelp } from '@fortawesome/free-brands-svg-icons';
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: 'Fresh Flow Mobile Auto Spa | Jurupa Valley Mobile Car Detailing',
  description: 'Fresh Flow Mobile Auto Spa provides premium mobile car detailing in Jurupa Valley and surrounding cities including Corona, Riverside, and Ontario.'
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.freshflowmobilewash.com/" />
        <meta property="og:title" content="Fresh Flow Mobile Auto Spa" />
        <meta property="og:description" content="Premium mobile car detailing in Jurupa Valley and beyond." />
        <meta property="og:image" content="https://www.freshflowmobilewash.com/og-image.jpg" />
        <meta property="og:url" content="https://www.freshflowmobilewash.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script id="ld-json" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Fresh Flow Mobile Auto Spa",
            "image": "https://www.freshflowmobilewash.com/boy.png",
            "url": "https://www.freshflowmobilewash.com",
            "telephone": "+1-626-391-2351",
            "email": "freshflowautospa@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jurupa Valley",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Jurupa Valley, Riverside, Ontario, and surrounding areas"
            },
            "description": "Mobile auto detailing and car buffing in Jurupa Valley and surrounding cities. Book today!"
          }
        `}
      </Script>
      <Script async src="https://www.instagram.com/embed.js"></Script>
      <main className="flex flex-col">
        <Navbar />
        <h1 className="sr-only">Fresh Flow Mobile Auto Spa – Premium Mobile Detailing in Jurupa Valley, CA</h1>
        <section id="home" className="flex w-full @container mt-20">
          <div className="grid w-full min-h-200 max-h-300 grid-cols-7 grid-rows-4 content-center bg-[url(./img/wheel-rag.jpg)] bg-center bg-cover">
            <div className="col-start-2 col-end-7 md:col-start-4 md:col-end-5 row-start-2 justify-center content-center">
              <Image src="/boy.png" alt="Fresh Flow Auto Spa Logo" width={200} height={200} className="m-auto" />
            </div>
            <div className="col-start-2 md:col-start-3 col-end-7 md:col-end-6 row-3 justify-center content-center">
              <a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start" target="_blank" rel="noopener noreferrer">
                <button className="block w-full bg-gradient-to-r from-black to-purple-500 m-auto p-10 text-4xl text-white cursor-pointer z-1 transition duration-300 hover:scale-105">Book Now!</button>
              </a>
            </div>
          </div>
        </section>
        
      <section id="packages" className="w-full @container">
        <div className="flex flex-col items-center justify-center w-full py-20 bg-[url(./img/car-wash-1.jpg)] bg-cover bg-center">
          <h2 className="text-4xl md:text-8xl text-white backdrop-blur-sm bg-black/60 px-6 py-4 mb-10 rounded-xl shadow-lg">Packages</h2>

          <div className="flex flex-wrap justify-center gap-6 px-4 md:px-20 w-full max-w-screen-xl">
            <div className="w-full sm:w-[80%] md:w-[30%] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-white to-gray-900 text-white p-8 flex flex-col justify-between">
              <h3 className="text-3xl md:text-5xl font-bold text-center mb-6">Standard</h3>
              <ul className="space-y-2 text-center text-lg">
                <li>Exterior Hand Wash</li>
                <li>Exterior Tire Shine</li>
                <li>Interior Vacuum</li>
                <li>Interior Aroma</li>
              </ul>
              <div className="flex justify-center mt-8">
                <a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start" target="_blank" rel="noopener noreferrer">
                  <p className="text-3xl md:text-5xl text-black bg-white px-6 py-3 rounded-full font-bold cursor-pointer transition duration-300 hover:scale-105">$75</p>
                </a>
              </div>
            </div>

            <div className="w-full sm:w-[80%] md:w-[30%] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-orange-500 to-cyan-500 text-white p-8 flex flex-col justify-between">
              <h3 className="text-3xl md:text-5xl font-bold text-center mb-6">Premium</h3>
              <ul className="space-y-2 text-center text-lg">
                <li>Exterior Hand Wash</li>
                <li>Exterior Tire Shine</li>
                <li>Exterior Plastic Revive</li>
                <li>Exterior Bug Elimination</li>
                <li>Interior Vacuum</li>
                <li>Interior Plastic Shine</li>
                <li>Seat Cleaning (No-Stains)</li>
                <li>Detailed Plastics Cleaning</li>
                <li>Long Lasting Interior Aroma</li>
              </ul>
              <div className="flex justify-center mt-8">
                <a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start" target="_blank" rel="noopener noreferrer">
                  <p className="text-3xl md:text-5xl bg-[#F67721] px-6 py-3 rounded-full font-bold cursor-pointer transition duration-300 hover:scale-105">$120-$250</p>
                </a>
              </div>
            </div>

            <div className="w-full sm:w-[80%] md:w-[30%] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-black to-purple-500 text-white p-8 flex flex-col justify-between">
              <h3 className="text-3xl md:text-5xl font-bold text-center mb-6">Deluxe</h3>
              <ul className="space-y-2 text-center text-lg">
                <li>Exterior Detailed Wheel Wash</li>
                <li>Exterior Tire Shine</li>
                <li>Exterior Plastic Revive</li>
                <li>Exterior Bug Elimination</li>
                <li>Exterior Paint Decontamination</li>
                <li>Exterior Wax</li>
                <li>Exterior Ceramic Coating*</li>
                <li>Interior Detailed Vacuum</li>
                <li>Interior Plastic Shine</li>
                <li>Interior Seat Cleaning</li>
                <li>Interior Seat Stain Removal</li>
                <li>Interior Pet Hair Removal</li>
                <li>Detailed Interior Plastics Cleaning</li>
                <li>Long Lasting Interior Aroma</li>
                <li>Leather Seat Protection</li>
              </ul>
              <div className="flex justify-center mt-8">
                <a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start" target="_blank" rel="noopener noreferrer">
                  <p className="text-3xl md:text-5xl text-purple-300 px-6 py-3 rounded-full font-bold cursor-pointer bg-black transition duration-300 hover:scale-105">INQUIRE</p>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-white text-2xl md:text-4xl backdrop-blur-sm bg-black/60 px-6 py-4 mt-14 rounded-xl shadow-lg">Final Prices Upon Vehicle Inspection</p>
        </div>
      </section>

      <section id="contact" className="w-full bg-[url(./img/porsche.jpg)] bg-cover bg-center py-20 px-6">
        <div className="backdrop-blur-sm bg-black/60 max-w-4xl mx-auto rounded-3xl p-10 shadow-2xl text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4 text-xl md:text-2xl">
            <p>☎️ <a href="tel:+16263912351" className="hover:underline">(626) 391-2351</a></p>
            <p>📧 <a href="mailto:freshflowautospa@gmail.com" className="hover:underline text-sm md:text-2xl">freshflowautospa@gmail.com</a></p>
            <p>📍 Serving Jurupa Valley, Corona, Eastvale, Chino, Ontario, Fontana, Pomona, Riverside, San Bernardino, and nearby areas!</p>
          </div>
          <div className="flex justify-center gap-10 mt-8">
            <a href="https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYelp} className="text-5xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/freshflowmobileautospa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} className="text-5xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/freshflowmobileautospa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} className="text-5xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <InstagramEmbed />
      </section>
    </main>
    </>
  );
}
