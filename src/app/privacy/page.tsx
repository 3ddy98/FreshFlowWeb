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

export default function PrivacyLayout(){
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
        <div className='flex flex-col w-full min-h-[100vh] bg-[url(./img/porsche.jpg)] bg-cover'>
          <h1 className={`${bebasNeue.className} text-6xl text-white mt-50 text-center`}>Privacy Policy</h1>
          <div className='bg-white m-auto w-100 h-100 overflow-y-scroll min-w-[80vw] p-10'>
            <p>
            Privacy Policy
Effective Date: 04/08/2025<br></br>

Fresh Flow Mobile Auto Spa (“we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you provide when visiting our website or using our services.<br></br>

<br></br>1. Information We Collect<br></br>
We may collect the following types of information:<br></br>

Personal Information: Name, phone number, email address, physical address (for service bookings).<br></br>

Usage Information: IP address, browser type, pages visited, and other analytics data.<br></br>

Payment Information: If applicable, secure payment details are collected via trusted third-party payment processors.<br></br>

<br></br>2. How We Use Your Information<br></br>
We use your information to:<br></br>

Schedule and confirm detailing appointments.<br></br>

Respond to inquiries or provide customer support.<br></br>

Improve our services and website experience.<br></br>

Send updates, promotions, or service reminders (if opted in).<br></br>

<br></br>3. Sharing Your Information<br></br>
We do not sell or rent your personal information. We may share your data with:<br></br>

Service providers that help operate our business (e.g. payment processors, booking platforms).<br></br>

Legal authorities if required by law.<br></br>

<br></br>4. Cookies and Tracking<br></br>
Our website may use cookies to improve your browsing experience. You can disable cookies through your browser settings.<br></br>

<br></br>5. Data Security<br></br>
We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.<br></br>

<br></br>6. Your Rights<br></br>
You may request access to, correction of, or deletion of your personal data by contacting us directly.<br></br>

<br></br>7. Contact Us<br></br>
If you have any questions about this Privacy Policy, please contact us at:<br></br>

Fresh Flow Mobile Auto Spa<br></br>
Email: freshflowmobileautospa@gmail.com<br></br>
Phone: (626)391-2351<br></br>
            </p>
          </div>
        </div>
    </main>
    </>
  );
}

