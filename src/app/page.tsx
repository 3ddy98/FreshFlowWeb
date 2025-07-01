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
import PackagesSection from '@/components/packages_section';



export const metadata: Metadata = {
  title: 'Fresh Flow Mobile Auto Spa | Premium Mobile Car Detailing in Inland Empire',
  description: 'Professional mobile car detailing services in Orange County, Riverside County, and San Bernardino County. Book your premium car wash and detailing service today!',
  keywords: 'mobile car detailing, car wash, auto detailing, mobile car wash, Inland Empire, Orange County, Riverside County, San Bernardino County',
  openGraph: {
    title: 'Fresh Flow Mobile Auto Spa | Premium Mobile Car Detailing',
    description: 'Professional mobile car detailing services in Orange County, Riverside County, and San Bernardino County. Book your premium car wash and detailing service today!',
    url: 'https://www.freshflowmobilewash.com',
    siteName: 'Fresh Flow Mobile Auto Spa',
    images: [
      {
        url: 'https://www.freshflowmobilewash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fresh Flow Mobile Auto Spa - Premium Mobile Car Detailing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Flow Mobile Auto Spa | Premium Mobile Car Detailing',
    description: 'Professional mobile car detailing services in Orange County, Riverside County, and San Bernardino County.',
    images: ['https://www.freshflowmobilewash.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Analytics/>
      <SpeedInsights/>
      <Script id="ld-json" type="application/ld+json" strategy="worker">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Fresh Flow Mobile Auto Spa",
            "image": "https://www.freshflowmobilewash.com/boy.png",
            "url": "https://www.freshflowmobilewash.com",
            "telephone": "+1-909-766-0042",
            "email": "freshflowautospa@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jurupa Valley",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Orange County, Riverside County, San Bernardino County, and surrounding areas"
            },
            "description": "Premium mobile auto detailing and car buffing services in the Inland Empire. Professional car wash and detailing at your location.",
            "priceRange": "$$",
            "openingHours": "Mo-Su 08:00-18:00",
            "sameAs": [
              "https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3",
              "https://www.instagram.com/freshflowmobileautospa/",
              "https://www.facebook.com/freshflowmobileautospa"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "72",
              "priceCurrency": "USD",
              "url": "https://www.freshflowmobilewash.com"
            }
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
      <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <main className="flex flex-col">
        <Navbar />
        <h1 className="sr-only">Fresh Flow Mobile Auto Spa – Premium Mobile Car Detailing Services in Inland Empire</h1>
        <section id="home" className="relative w-full min-h-[120vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0" aria-label="Hero Section">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url(./img/m.jpg)] bg-cover bg-center" role="presentation">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" role="presentation"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-white space-y-8">
                {/* Logo */}
                <div className="mb-8 flex justify-center md:justify-start">
                  <Image 
                    src="/logo-t.png" 
                    alt="Fresh Flow Mobile Auto Spa Logo - Premium Mobile Car Detailing" 
                    width={400} 
                    height={400} 
                    className="mt-20"
                    priority
                    loading="eager"
                  />
                </div>

                {/* Main Heading */}
                <h2 className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-7xl leading-tight`}>
                  Premium Mobile Detailing at Your Doorstep
                </h2>

                {/* Benefits */}
                <div className="space-y-4" role="list" aria-label="Service Benefits">
                  <div className="flex items-center gap-3 text-xl" role="listitem">
                    <div className="bg-cyan-500/20 p-2 rounded-lg" aria-hidden="true">
                      <svg className="h-6 w-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Professional Service</span>
                  </div>
                  <div className="flex items-center gap-3 text-xl" role="listitem">
                    <div className="bg-cyan-500/20 p-2 rounded-lg" aria-hidden="true">
                      <svg className="h-6 w-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Convenient Mobile</span>
                  </div>
                  <div className="flex items-center gap-3 text-xl" role="listitem">
                    <div className="bg-cyan-500/20 p-2 rounded-lg" aria-hidden="true">
                      <svg className="h-6 w-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>5-Star Rated</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-4 pt-4">
                  <Image 
                    src="/yelp-stars.png" 
                    alt="Yelp 5 Star Rating - Fresh Flow Mobile Auto Spa" 
                    width={120} 
                    height={24} 
                    className="h-8 w-auto"
                    quality={100}
                    priority
                  />
                  <span className="text-lg text-white/90">Perfect 5-Star Rating on Yelp</span>
                </div>
              </div>

              {/* Right Column - CTAs */}
              <div className="space-y-8">
                {/* Primary CTA */}
                <ConversionLinkButton
                  url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services"
                  value={75}
                  className={`${bebasNeue.className} w-full bg-gradient-to-b from-purple-800 to-orange-400 p-6 text-3xl text-white cursor-pointer transition duration-300 hover:scale-105 rounded-xl shadow-lg text-center block`}
                  aria-label="Book your car detailing service now"
                >
                  Book Your Detail Now!
                </ConversionLinkButton>

                {/* Secondary CTA */}
                <a 
                  href="tel:+19097660042" 
                  className={`${bebasNeue.className} w-full bg-white/10 backdrop-blur-sm p-6 text-2xl text-white cursor-pointer transition duration-300 hover:scale-105 rounded-xl border border-white/20 text-center block`}
                  aria-label="Call Fresh Flow Mobile Auto Spa"
                >
                  Text or Call: (909) 766-0042 
                </a>

                {/* Service Area */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Service Areas</h3>
                  <p className="text-white/90">
                    Orange County, Riverside County, San Bernardino County, and surrounding areas!
                  </p>
                </div>
              </div>
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
        
        {/* Photo Gallery Section */}
        <section id="gallery" className="w-full bg-[url(./img/car-gallery.jpg)] bg-cover bg-center py-20 px-4 md:px-8 relative">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" role="presentation"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-white mb-4`}>Our Work</h2>
              <p className="text-xl text-white/80">See the results of our premium detailing services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/1_.jpg"
                  alt="Car detailing before and after - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gallery Item 2 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/2.jpg"
                  alt="Interior detailing results - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gallery Item 3 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/3.jpg"
                  alt="Paint correction and polishing - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gallery Item 4 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/4.jpg"
                  alt="Wheel and tire detailing - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gallery Item 5 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/5.jpg"
                  alt="Headlight restoration - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gallery Item 6 */}
              <div className="relative rounded-xl aspect-square">
                <Image
                  src="/gallery/6.jpg"
                  alt="Ceramic coating application - Fresh Flow Mobile Auto Spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <ConversionLinkButton
                url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services"
                value={75}
                className={`${bebasNeue.className} inline-block bg-gradient-to-b from-purple-800 to-orange-400 px-8 py-4 text-2xl text-white cursor-pointer transition duration-300 hover:scale-105 rounded-xl shadow-lg`}
              >
                Book Your Detail Now!
              </ConversionLinkButton>
            </div>
          </div>
        </section>

        <PackagesSection>
        </PackagesSection>

        <section id="plans" className="w-full bg-black text-white py-20 px-6 bg-[url(./img/ford.jpg)] bg-cover bg-fixed">
          <div className="max-w-7xl mx-auto">
            <div className='bg-black/75 p-8 rounded-2xl mb-12 text-center'>
              <h2 className={`${bebasNeue.className} text-5xl md:text-6xl font-bold mb-6`}>Keep it Fresh!</h2>
              <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
                Our exclusive maintenance program keeps your vehicle looking fresh and ensures your paint stays protected—no more damage from harsh automatic tunnel car washes!
              </p>
              <div className="flex flex-col md:flex-row  justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Premium Service</span>
                </div>
              </div>
            </div>

            {/* Common Features Section */}
            <div className="bg-black/75 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-center md:text-left">Included Exterior Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      pH Neutral Soap Cannon Spray Down
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Scratch Free Hand Wash
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Premium HVLP Spray On Tire Dressing
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Exterior Bug and Sap Elimination
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-center md:text-left">Included Interior Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Door Jam Cleaning
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Streak Free Window Cleaning
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Full Interior Vacuum
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Floor Matts Air Pressure Blow Down
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Dash and Console Wipe Down
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plan Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 px-4">
              <div className="md:hidden flex justify-center mt-4 mb-2 w-full">
                <div className="flex items-center gap-2 text-white text-sm opacity-80 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4" />
                  </svg>
                </div>
              </div>

              {/* Monthly Plan */}
              <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/ITZ4FRFUK7RYO5ZDIZFY3TAV" value={68} className="flex group shrink-0 snap-center w-full md:w-auto">
                <div className="bg-gradient-to-b from-gray-900 to-white rounded-2xl shadow-xl flex flex-col relative cursor-pointer transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl p-8 pt-16 pb-20 w-full md:min-w-[400px] min-h-[400px] content-center justify-center">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                    Save 10%
                  </div>
                  <h3 className={`${bebasNeue.className} text-4xl font-bold mb-2 text-center`}>Monthly</h3>
                  <p className='text-center text-xl text-white-600 mb-6'>1 Visit Per Month</p>
                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <p className="text-sm text-white-600">Compact</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$59</span>
                        <span className="text-lg text-white-600">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $6</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white-600">Sedan</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$68</span>
                        <span className="text-lg text-white-600">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $7</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white-600">SUV</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$77</span>
                        <span className="text-lg text-white-600">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $8</span>
                    </div>
                  </div>
                  <div className="text-center text-gray-600">
                    <p className="text-sm">Flexible scheduling</p>
                    <p className="text-sm">Cancel anytime</p>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl md:text-2xl w-full max-w-[280px] text-center font-bold justify-center"><p>Click to Join Now!</p></div>
                  </div>
                </div>
              </ConversionLinkButton>

              {/* Biweekly Plan */}
              <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/OZME3WZ2SQIO3CHDQ6HO6V4I" value={128} className="flex group shrink-0 snap-center w-full md:w-auto">
                <div className="bg-gradient-to-b to-cyan-500 from-black rounded-2xl shadow-xl flex flex-col relative cursor-pointer transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl p-8 pt-16 pb-20 w-full md:min-w-[400px] min-h-[400px] content-center justify-center">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full font-bold shadow-lg">
                    Save 15%
                  </div>
                  <h3 className={`${bebasNeue.className} text-4xl font-bold mb-2 text-center`}>Bi-weekly</h3>
                  <p className='text-center text-xl text-white/80 mb-6'>2 Visits Per Month</p>
                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <p className="text-sm text-white/80">Compact</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$111</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $19</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/80">Sedan</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$128</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $22</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/80">SUV</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$145</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $25</span>
                    </div>
                  </div>
                  <div className="text-center text-white/80">
                    <p className="text-sm">Flexible scheduling</p>
                    <p className="text-sm">Cancel anytime</p>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl md:text-2xl w-full max-w-[280px] text-center font-bold justify-center"><p>Click to Join Now!</p></div>
                  </div>
                </div>
              </ConversionLinkButton>

              {/* Weekly Plan */}
              <ConversionLinkButton url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/JDN2HNJXZAHAKVGCSVYAZKP3" value={225} className="flex group shrink-0 snap-center w-full md:w-auto">
                <div className="bg-gradient-to-b from-black to-purple-500 rounded-2xl shadow-xl flex flex-col relative cursor-pointer transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl p-8 pt-16 pb-20 w-full md:min-w-[400px] min-h-[400px] content-center justify-center">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                    Save 25%
                  </div>
                  <h3 className={`${bebasNeue.className} text-4xl font-bold mb-2 text-center`}>Weekly</h3>
                  <p className='text-center text-xl text-white/80 mb-6'>4 Visits Per Month</p>
                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <p className="text-sm text-white/80">Compact</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$195</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $65</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/80">Sedan</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$225</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $75</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/80">SUV</p>
                      <div className="text-3xl font-bold">
                        <span className="text-4xl">$255</span>
                        <span className="text-lg text-white/80">/mo</span>
                      </div>
                      <span className="text-sm text-green-400">Save $85</span>
                    </div>
                  </div>
                  <div className="text-center text-white/80">
                    <p className="text-sm">Flexible scheduling</p>
                    <p className="text-sm">Cancel anytime</p>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl md:text-2xl w-full max-w-[280px] text-center font-bold justify-center"><p>Click to Join Now!</p></div>
                  </div>
                </div>
              </ConversionLinkButton>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full bg-[url(./img/wheel-rag.jpg)] bg-cover bg-center py-20 px-4 md:px-6 relative">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <h2 className={`${bebasNeue.className} text-4xl md:text-6xl font-bold mb-8 text-center text-white`}>Contact Us</h2>
              
              {/* Service Area */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-white">Service Areas</span>
                </div>
                <p className="text-lg md:text-xl text-white/90">
                  Orange County, Riverside County, San Bernardino County, and surrounding areas!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a href="mailto:freshflowautospa@gmail.com" 
                   className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl group">
                  <div className="bg-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email Us</p>
                    <p className="text-white font-medium">freshflowautospa@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+19097660042" 
                   className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl group">
                  <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call or Text</p>
                    <p className="text-white font-medium">(909) 766-0042</p>
                  </div>
                </a>
              </div>

              {/* Social Media & Reviews */}
              <div className="space-y-6">
                <div className="flex justify-center gap-6">
                  <a href="https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-colors group">
                    <FontAwesomeIcon icon={faYelp} className="text-2xl text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.instagram.com/freshflowmobileautospa/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-colors group">
                    <FontAwesomeIcon icon={faInstagramSquare} className="text-2xl text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.facebook.com/freshflowautospa" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors group">
                    <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className={`${bebasNeue.className} text-2xl md:text-3xl text-white`}>Perfect 5 Stars on Yelp!</div>
                  <img src="/yelp-stars.png" alt="Yelp 5 Star Rating" className="h-8 md:h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 block md:hidden h-20 text-center bg-gradient-to-r from-black to-purple-500 text-white text-2xl px-6 py-3 shadow-lg m-auto justify-center w-full">
          <ConversionLinkButton
            url="https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services"
            value={75}
            className="flex h-20 text-center bg-gradient-to-r from-black to-purple-500 text-white text-2xl px-6 py-3 shadow-lg m-auto justify-center"
          >
            Book Now
          </ConversionLinkButton>
        </div>
      </main>
    </>
  );
}

