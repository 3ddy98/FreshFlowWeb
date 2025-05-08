import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import InstagramEmbed from "@/components/InstagramEmbed";
import { Bebas_Neue } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Metadata } from 'next';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faYelp } from '@fortawesome/free-brands-svg-icons';
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import ConversionLinkButton from '@/components/conversion_button';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'Fresh Flow Mobile Auto Spa | Jurupa Valley Mobile Car Detailing',
  description: 'Fresh Flow Mobile Auto Spa provides premium mobile car detailing in Jurupa Valley and surrounding cities including Corona, Riverside, and Ontario.'
};
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

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
      <Analytics/>
      <SpeedInsights/>
      <Script id="ld-json" type="Application/ld+json">
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16936450849"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16936450849');
        `}
      </Script>
      <Script async src="https://www.instagram.com/embed.js"></Script>
      <main className="flex flex-col">
        <Navbar />
        <h1 className="sr-only">Fresh Flow Mobile Auto Spa – Premium Mobile Detailing in Jurupa Valley, CA</h1>
        <section id="home" className="flex w-full @container mt-20">
          <div className="grid w-full max-w-screen max-h-200 grid-cols-7 grid-rows-11 content-center bg-[url(./img/m.jpg)] bg-center bg-cover">
            <div className="col-start-2 col-end-7 md:col-start-4 md:col-end-5 row-start-2 justify-center content-center">
              <Image src="/boy.png" alt="Fresh Flow Auto Spa Logo" width={200} height={200} className="m-auto" />
            </div>
            <div className={`${bebasNeue.className} col-start-1 col-end-8 md:col-start-2 md:col-end-7 justify-center content-center row-5 m-auto text-center text-3xl md:text-3xl lg:text-5xl backdrop-blur-sm bg-black/60 px-10 md:py-2 text-white justify-center m-auto`}><h1>The Best Mobile Detailing Service in the Inland Empire</h1></div>
            <div className="col-start-1 col-end-8 md:col-start-1 md:col-end-8 justify-center content-center row-6 m-auto text-center text-1xl md:text-1xl lg:text-2xl backdrop-blur-sm bg-black/60 px-10 md:py-2 text-white justify-center m-auto"><h1>Why look anywhere else? Just go with the Flow!</h1></div>
            <div className="col-start-2 md:col-start-3 col-end-7 md:col-end-6 row-7 justify-center content-center">
                <a href="tel:+16263912351" className={`${bebasNeue.className} m-auto justify-center flex w-full bg-gradient-to-b to-cyan-500 from-black m-auto p-5 text-2xl text-white cursor-pointer z-1 transition duration-300 hover:scale-105`}>Call or Text: (626) 391-2351</a>
            </div>
            <div className="col-start-2 md:col-start-3 col-end-7 md:col-end-6 row-10 flex justify-center content-center z-2">
              <a href="#packages" className="animate-bounce bg-black/50 backdrop-blur-sm text-white rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full bg-black text-white py-20 px-6 bg-[url(./img/interior.jpg)] bg-cover bg-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 backdrop-blur-sm bg-black/50 py-4 rounded-xl">
              What Customers Say on <span className="text-red-500">Yelp</span>
            </h2>
            <div className="flex justify-center items-center mb-6">
              <img src="/Yelp.png" alt="Yelp Logo" className="h-10 mr-4" />
              <img src="/yelp-stars.png" alt="Yelp Stars" className="h-10" />
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {/* Testimonial Card 1 */}
              <div className="bg-white text-black rounded-xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <p className="text-xl italic mb-4">"They did a great job deep cleaning my car inside out. Appreciate their hard work in ensuring the car was sparkling, and they took their time cleaning."</p>
                <p className="font-bold text-lg">— Aya H. • Fountain Valley, CA</p>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white text-black rounded-xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <p className="text-xl italic mb-4">"My man showed up at the crack of dawn at my request. Did an excellent job on three cars. Very hard worker. The cars look great."</p>
                <p className="font-bold text-lg">— Robert G. • Rancho Cucamonga, CA</p>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-white text-black rounded-xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <p className="text-xl italic mb-4">"Exceeded my expectations! Edward and his partner were able to get all the stains out of my seats and roof that my kids had left. My car looks brand new. Definitely recommend!"</p>
                <p className="font-bold text-lg">— Debbie S. • Jurupa Valley, CA</p>
              </div>

            </div>

            <div className="mt-12">
              <a
                href="https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white text-xl px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition"
              >
                See All Yelp Reviews
              </a>
            </div>
          </div>
        </section>
        
        <section id="packages" className="w-full @container">
          <div className="flex flex-col items-center justify-center w-full py-20 bg-[url(./img/car-wash-1.jpg)] bg-cover bg-center p-6">
            <h2 className={`${bebasNeue.className} mt-10 text-4xl md:text-8xl text-white  px-6 py-2 mb-10 shadow-lg bg-black/75 w-[100%]`}>Express Packages</h2>
              <div className="flex overflow-x-auto gap-6 w-full scrollbar-hide px-4 md:flex-wrap md:justify-center snap-x snap-mandatory scroll-smooth">
                <div className="md:hidden flex justify-center mt-4 mb-2 w-full">
                  <div className="flex items-center gap-2 text-white text-sm opacity-80 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ animation: 'swipeX 1.2s ease-in-out infinite' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4" />
                    </svg>
                    <span className='text-2xl bg-white rounded-full text-black px-3'>Swipe</span>
                  </div>
                </div>
                <div className="overflow-hidden shadow-xl bg-gradient-to-b from-yellow-200 to-yellow-900 text-whitep-8 md:p-10 flex flex-col relative  cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[850px] md:min-h-[900px] md:h-[1100px] w-[300px] md:w-[400px] min-w-[200px] text-white justify-center">
                  <h1 className={`${bebasNeue.className} text-center text-5xl md:text-7xl`}>Express Packages</h1>
                </div>
                {/* Quick Wash */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/NXZZR64TJ7YOSR7URBKKGZDJ" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b from-gray-900 to-white text-white p-8 md:p-10 flex flex-col relative  cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[850px] md:min-h-[900px] md:h-[1100px] w-[300px] md:w-[400px] min-w-[200px]">
                    <h3 className="text-3xl md:text-6xl font-bold text-center mb-10">Express Exterior</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>Protect your paint with a gentle hand wash.</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                    <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-3xl text-black bg-white px-6 py-3 rounded-full font-bold transition duration-300">$50*</p>
                    </div>
                  </div>
                </ConversionLinkButton>

                {/* Factory Reset */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/D4GO7ZWEGLLFUDKPOZ5J5GUB" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b to-cyan-500 from-black text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[850px] md:min-h-[900px] md:h-[1100px] w-[300px] md:w-[400px] min-w-[300px]">
                    <h3 className="text-3xl md:text-6xl font-bold text-center mb-10">Express Interior</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>Keep your interior new and free of smells.</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                    <h1 className='text-2xl font-bold'>Interior</h1>
                      <li>✅ Door Jam Cleaning</li>
                      <li>✅ Streak Free Window Cleaning</li>
                      <li>✅ Full Interior Vacuum</li>
                      <li>✅ Floor Matts Air Pressure Blow Down</li>
                      <li>✅ Dash and Console Wipe Down</li>
                      <li>✅ Aroma Application </li>
                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-4xl bg-cyan-500 px-6 py-3 rounded-full font-bold transition duration-300">$50*</p>
                    </div>
                  </div>
                </ConversionLinkButton>

                
                {/* Showroom */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/AG44KA3CIGXRHNVAWJRZW2TS" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b from-black to-purple-500 text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[850px] md:min-h-[900px] md:h-[1100px] w-[300px] md:w-[400px] min-w-[300px]">
                    <h3 className="text-3xl md:text-6xl font-bold text-center mb-6">Express Full Service</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>It's Basically a Detail but Faster!</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                      <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                      <h1 className='text-2xl font-bold'>Interior</h1>
                      <li>✅ Door Jam Cleaning</li>
                      <li>✅ Streak Free Window Cleaning</li>
                      <li>✅ Full Interior Vacuum</li>
                      <li>✅ Floor Matts Air Pressure Blow Down</li>
                      <li>✅Dash and Console Wipe Down</li>

                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-4xl text-purple-300 px-6 py-3 rounded-full font-bold bg-black transition duration-300">$80*</p>
                    </div>
                  </div>
                </ConversionLinkButton>
              </div>
            <h2 className={`${bebasNeue.className} mt-10 text-4xl md:text-8xl text-white px-6 py-2 mb-10 shadow-lg bg-black/75 w-[100%]`}>Detail Packages</h2>
            <div className='w-[100%]'>
              <div className="flex overflow-x-auto gap-6 w-full scrollbar-hide px-4 md:flex-wrap md:justify-center snap-x snap-mandatory scroll-smooth">
              <div className="md:hidden flex justify-center mt-4 mb-2 w-full">
                  <div className="flex items-center gap-2 text-white text-sm opacity-80 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ animation: 'swipeX 1.2s ease-in-out infinite' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4" />
                    </svg>
                    <span className='text-2xl bg-white rounded-full text-black px-3'>Swipe</span>
                  </div>
                </div>

                <div className="overflow-hidden shadow-xl bg-gradient-to-b from-yellow-200 to-yellow-900 text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[1200px] md:min-h-[900px] w-[300px] md:w-[400px] h-[500px] md:h-[1300px] min-w-[300px] justify-center">
                  <h1 className={`${bebasNeue.className} text-center text-5xl md:text-7xl`}>Full Service Packages</h1>
                </div>
                {/* Quick Wash */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/6IZHIK7MXKU2X5QXCLWOL2XB" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b from-gray-900 to-white text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[1200px] md:min-h-[900px] w-[300px] md:w-[400px] h-[500px] md:h-[1300px] min-w-[300px]">
                    <h3 className="text-3xl md:text-6xl md:text-5xl font-bold text-center mb-10">Stage 1</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>New interior, clean exterior!</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                    <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                      <li className='font-bold'>✅ Clay Bar Decontamination</li>
                      <li className='font-bold'>✅ Spot Polish</li>
                      <li className='font-bold'>✅ Carnauba Wax Application</li>
                      <h1 className='text-2xl font-bold'>Interior</h1>
                      <li>✅ Door Jam Cleaning</li>
                      <li>✅ Streak Free Window Cleaning</li>
                      <li>✅ Full Interior Vacuum</li>
                      <li>✅ Interior Plastic UV-Protection Layer Application</li>
                      <li>✅ Doors, Seat Rails, Console, Dash and Vent Cleaning</li>
                      <li>✅ Long Lasting Interior Aroma Application</li>
                      <li>✅ Floor Matt Shampoo and Steam Clean</li>
                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-4xl text-black bg-white px-6 py-3 rounded-full font-bold transition duration-300">$249*</p>
                    </div>
                  </div>
                </ConversionLinkButton>

                {/* Factory Reset */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/YQK6Q3J5ZO5UJNKZ4PKQMOZT" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b to-cyan-500 from-black text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[1200px] md:min-h-[900px] w-[300px] md:w-[400px] md:h-[1300px] min-w-[300px]">
                    <h3 className="text-3xl md:text-6xl md:text-5xl font-bold text-center mb-10">Stage 2</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>The detail experience you will never forget!</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                      <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                      <li className='font-bold'>✅ Clay Bar Decontamination</li>
                      <li className='font-bold'>✅ Premium Full Vehicle One-Step Polish</li>
                      <li className='font-bold'>✅ Carnauba Wax Application</li>
                      <h1 className='text-2xl font-bold'>Interior</h1>
                      <li>✅ Door Jam Cleaning</li>
                      <li>✅ Streak Free Window Cleaning</li>
                      <li>✅ Full Interior Vacuum</li>
                      <li>✅ Interior Plastic UV-Protection Layer Application</li>
                      <li>✅ Doors, Seat Rails, Console, Dash and Vent Cleaning</li>
                      <li>✅ Long Lasting Interior Aroma Application</li>
                      <li>✅ Carpet, Matt, and Seat Shampoo and Steam</li>

                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-4xl bg-cyan-500 px-6 py-3 rounded-full font-bold transition duration-300">$449*</p>
                    </div>
                  </div>
                </ConversionLinkButton>

                
                {/* Showroom */}
                <ConversionLinkButton url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/26OZ5ZYNQTUG57BRSKQKEOGS" className="snap-start shrink-0 group">
                  <div className="overflow-hidden shadow-xl bg-gradient-to-b from-black to-purple-500 text-white p-8 md:p-15 flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl min-h-[1200px] w-[300px] md:w-[400px] md:min-h-[1000px] md:h-[1300px] min-w-[300px]">
                    <h3 className="text-3xl md:text-6xl font-bold text-center mb-6">Stage 3</h3>
                    <p className={`${bebasNeue.className} text-center text-2xl md:text-4xl bg-black p-2`}>The Ultimate Result and Protection</p>
                    <ul className="space-y-2 md:text-lg pt-10">
                    <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                      <li className='font-bold'>✅ Engine Bay Cleaning</li>
                      <li className='font-bold'>✅ Clay Exterior Decontamination</li>
                      <li className='font-bold'>✅ Two-Step Polish</li>
                      <li className='font-bold'>✅ 9+ Years Protection Advanced Ceramic</li>
                      <h1 className='text-2xl font-bold'>Interior</h1>
                      <li>✅ Door Jam Cleaning</li>
                      <li>✅ Streak Free Window Cleaning</li>
                      <li>✅ Full Interior Vacuum</li>
                      <li>✅ Interior Plastic UV-Protection Layer Application</li>
                      <li>✅ Doors, Seat Rails, Console, Dash and Vent Cleaning</li>
                      <li>✅ Long Lasting Interior Aroma Application</li>
                      <li>✅ Carpet, Matt, and Seat Shampoo and Steam</li>

                    </ul>
                    <div className="absolute bottom-8 left-0 w-full flex justify-center">
                      <p className="text-3xl md:text-4xl text-purple-300 px-6 py-3 rounded-full font-bold bg-black transition duration-300">$649*</p>
                    </div>
                  </div>
                </ConversionLinkButton>
              </div>

              
              <p className="text-center text-white text-2xl md:text-4xl backdrop-blur-sm bg-black/60 px-6 py-4 mt-14 rounded-xl shadow-lg">
                * Final Prices Upon Vehicle Inspection
              </p>
            </div>
          </div>
      </section>

      <section id="plans" className="w-full bg-black text-white py-20 px-6 bg-[url(./img/ford.jpg)] bg-cover">
        <div className=" mx-auto text-center">
          <div className='bg-black/75 p-2 mb-10'>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Keep it Fresh!</h2>
            <p className="text-xl md:text-2xl mb-10">
              Our exclusive maintenance program keeps your vehicle looking fresh and ensures your paint stays protected—no more damage from harsh automatic tunnel car washes!
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-10 w-full scrollbar-hide px-4 md:flex-wrap md:justify-center snap-x snap-mandatory scroll-smooth w-[100%] whitespace-nowrap">
        <div className="md:hidden flex justify-center mt-4 mb-2 w-full">
        <div className="flex items-center gap-2 text-white text-sm opacity-80 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ animation: 'swipeX 1.2s ease-in-out infinite' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4" />
          </svg>
          <span className='text-2xl bg-white rounded-full text-black px-3'>Swipe</span>
        </div>
      </div>
          {/* Monthly Plan */}
          <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/ITZ4FRFUK7RYO5ZDIZFY3TAV" className="flex group shrink-0 snap-center">
            <div className="bg-gradient-to-b from-gray-900 to-white md:p-6 shadow-xl flex flex-col relative  mb-10 cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl p-6 h-[700px] min-h-[200px] md:min-h-[900px] min-w-[300px]">
              <div className='min-h-[1000px]'>
                <h3 className={`${bebasNeue.className} text-3xl font-bold mb-4 text-center`}>Monthly</h3>
                <p className='text-center text-2xl bg-black mb-4'>1 Visit Per Month</p>
                <ul className="space-y-2 md:text-lg p-2">
                  <h1 className='text-2xl font-bold'>Exterior</h1>
                  <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                  <h1 className='text-2xl font-bold'>Interior</h1>
                  <li>✅ Door Jam Cleaning</li>
                  <li>✅ Streak Free Window Cleaning</li>
                  <li>✅ Full Interior Vacuum</li>
                  <li>✅ Floor Matts Air Pressure Blow Down</li>
                  <li>✅Dash and Console Wipe Down</li>
                </ul>
                <p className='text-white text-2xl text-center mt-10 bg-cyan-500 absolute p-2 w-full bottom-20 left-0 flex justify-center'>Save 10%!</p>
              </div>
              <p className="text-2xl mt-6 text-center text-black absolute bottom-8 left-0 w-full flex justify-center font-bold">$72/mo</p>
            </div>
          </ConversionLinkButton>

          {/* Biweekly Plan */}
          <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/OZME3WZ2SQIO3CHDQ6HO6V4I" className="flex group shrink-0 snap-center">
            <div className="bg-gradient-to-b to-cyan-500 from-black md:p-6 shadow-xl flex flex-col relative  mb-10 cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl p-6 h-[700px] min-h-[200px] md:min-h-[900px] min-w-[300px]">
              <div>
                <h3 className={`${bebasNeue.className} text-3xl font-bold mb-4 text-center`}>Bi-weekly</h3>
                <p className='text-center text-2xl bg-black mb-4'>2 Visits Per Month</p>
                <ul className="space-y-2 md:text-lg p-2">
                <h1 className='text-2xl font-bold'>Exterior</h1>
                <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                  <h1 className='text-2xl font-bold'>Interior</h1>
                  <li>✅ Door Jam Cleaning</li>
                  <li>✅ Streak Free Window Cleaning</li>
                  <li>✅ Full Interior Vacuum</li>
                  <li>✅ Floor Matts Air Pressure Blow Down</li>
                  <li>✅Dash and Console Wipe Down</li>
                </ul>
                <p className='text-white text-2xl text-center mt-10 bg-cyan-500 absolute p-2 w-full bottom-20 left-0 flex justify-center'>Save 15%!</p>
              </div>
              <p className="text-2xl mt-6 text-center absolute bottom-8 left-0 w-full flex justify-center">$136/mo</p>
            </div>
          </ConversionLinkButton>

          {/* Weekly Plan */}
          <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/JDN2HNJXZAHAKVGCSVYAZKP3" className="flex group shrink-0 snap-center">
            <div className="bg-gradient-to-b from-black to-purple-500 md:p-6 shadow-xl flex flex-col relative cursor-pointer transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl p-6 h-[700px] min-h-[200px] md:min-h-[900px] min-w-[300px]">
              <div>
                <h3 className={`${bebasNeue.className} text-3xl font-bold mb-4 text-center`}>Weekly</h3>
                <p className='text-center text-2xl bg-black mb-4'>4 Visits Per Month</p>
                <ul className="space-y-2 text-lg p-2">
                <h1 className='text-2xl font-bold'>Exterior</h1>
                      <li>✅ pH Neutral Soap Cannon Spray Down</li>
                      <li>✅ Scratch Free Hand Wash</li>
                      <li>✅ Premium HVLP Spray On Tire Dressing</li>
                      <li>✅ Exterior Bug and Sap Elimination</li>
                  <h1 className='text-2xl font-bold'>Interior</h1>
                  <li>✅ Door Jam Cleaning</li>
                  <li>✅ Streak Free Window Cleaning</li>
                  <li>✅ Full Interior Vacuum</li>
                  <li>✅ Floor Matts Air Pressure Blow Down</li>
                  <li>✅Dash and Console Wipe Down</li>
                </ul>
                <p className='text-white text-2xl text-center mt-10 bg-cyan-500 absolute p-2 w-full bottom-20 left-0 flex justify-center font-bold'>Save 25%!</p>
              </div>
              <p className="text-4xl font-bold mt-6 text-center absolute bottom-8 left-0 w-full flex justify-center">$224/mo</p>
            </div>
          </ConversionLinkButton>
        </div>
      </section>

      <section id="contact" className="w-full bg-[url(./img/wheel-rag.jpg)] bg-cover bg-center py-20 px-6">
        <div className="flex flex-col min-h-175 backdrop-blur-sm bg-black/60 max-w-4xl mx-auto  p-10 shadow-2xl text-white text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-6xl font-bold mb-8`}>Contact Us</h2>
          <div className="space-y-4 text-xl md:text-2xl">
            <p>📍 Serving Jurupa Valley, Corona, Eastvale, Chino, Ontario, Fontana, Pomona, Riverside, San Bernardino, and nearby areas!</p>
            <p>📧 <a href="mailto:freshflowautospa@gmail.com" className="hover:underline text-sm md:text-2xl">freshflowautospa@gmail.com</a></p>
            <p>☎️ <a href="tel:+16263912351" className="hover:underline">(626) 391-2351</a></p>
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
          <div className='h-10 md:h-20 flex justify-center  m-auto flex-row justify-center content-center row-6 m-auto text-center text-2xl lg:text-4xl px-10 md:py-2 text-white justify-center'>
            <div className='justify-center m-auto mr-10'><h1 className={`${bebasNeue.className} text-1xl md:text-4xl text-center`}>Perfect 5 Stars on Yelp!</h1></div>
            <img src="yelp-stars.png"></img></div>
        </div>
      </section>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 block md:hidden h-20 text-center bg-gradient-to-r from-black to-purple-500 text-white text-2xl px-6 py-3 shadow-lg m-auto justify-center w-full">
        <ConversionLinkButton
          url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services"
          className="flex h-20 text-center bg-gradient-to-r from-black to-purple-500 text-white text-2xl px-6 py-3 shadow-lg m-auto justify-center"
        >
          Book Now
        </ConversionLinkButton>
      </div>
    </main>
    </>
  );
}

