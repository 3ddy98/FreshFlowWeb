import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Main, NextScript } from "next/document";
import Script from "next/script";
import {GoogleAnalytics} from '@next/third-parties/google'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets:['latin'],
  preload:true
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fresh Flow Mobile Auto Spa | Premium Mobile Car Detailing",
    template: "%s | Fresh Flow Mobile Auto Spa"
  },
  description: "Professional mobile car detailing services in the Inland Empire. 5-star rated mobile car wash and detailing at your location.",
  keywords: "mobile car detailing, car wash, auto detailing, Inland Empire, Jurupa Valley, Corona, Ontario, Chino",
  authors: [{ name: "Fresh Flow Mobile Auto Spa" }],
  creator: "Fresh Flow Mobile Auto Spa",
  publisher: "Fresh Flow Mobile Auto Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.freshflowmobilewash.com'),
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.freshflowmobilewash.com',
    siteName: 'Fresh Flow Mobile Auto Spa',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@freshflowautospa',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/img/m.jpg" />
        <link rel="preload" as="image" href="/car-wash-1.jpg" />
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//assets.mailerlite.com" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased w-full`}
      >
        {/* MailerLite Universal Script */}
        <Script
          id="mailerlite-universal"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            `
          }}
        />
        
        {/* MailerLite Account Setup and Popup Trigger */}
        <Script
          id="mailerlite-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Wait for MailerLite to be available
              function setupMailerLite() {
                if (typeof ml !== 'undefined') {
                  ml('account', '1635202');
                  
                  // Show popup after a delay
                  setTimeout(function() {
                    ml('show', 'RFPFOU');
                  }, 2000);
                } else {
                  setTimeout(setupMailerLite, 500);
                }
              }
              
              // Start setup process
              setupMailerLite();
            `
          }}
        />
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

