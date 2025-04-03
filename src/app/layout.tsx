import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Main, NextScript } from "next/document";
import Script from "next/script";
import {GoogleAnalytics} from '@next/third-parties/google'
import Head from 'next/head';

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
  title: "Fresh Flow Mobile Auto Spa",
  description: "Mobile Auto Detailing Servicing Jurupa Valley and Surrounding Areas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Fresh Flow Mobile Auto Spa</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Head>
        <title>Fresh Flow Auto Spa | Mobile Car Detailing in Jurupa Valley</title>
        <meta name="description" content="Get your car looking brand new with Fresh Flow Auto Spa. Mobile detailing services in Jurupa Valley, Corona, Riverside & more." />
        <meta name="keywords" content="car detailing, mobile car wash, Jurupa Valley, auto spa, ceramic coating, interior cleaning" />
        <meta name="author" content="Fresh Flow Auto Spa" />
        <meta property="og:title" content="Fresh Flow Auto Spa | Mobile Car Detailing" />
        <meta property="og:description" content="Top-tier mobile car detailing in Jurupa Valley and nearby cities. Book online today!" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://freshflowautospa.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
