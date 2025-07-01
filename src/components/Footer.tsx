"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

export default function Footer() {
  return (
    <div className="grid min-h-50 w-full bg-black grid-cols-1 grid-rows-3 md:grid-cols-5 md:grid-rows-1 p-10">
        <div className="flex flex-col row-1 md:col-1 md:row-1 ">
            <div className="flex flex-col text-white m-auto h-full">
                <img className="w-50 h-50 justify-center m-auto" src="logo-t.png"></img>
            </div>
        </div>
        
        <div className="flex flex-col row-2 mt-10 md:col-2 md:row-1">
            <div className="flex flex-col text-white h-full m-auto">
                <h1 className={`${bebasNeue.className} text-4xl mb-5`}>Quick Links</h1>
                <ul>
                    <a href="/#home"><li>Home</li></a>
                    <a href="/#packages"><li>Packages</li></a>
                    <a href="/#plans"><li>Plans</li></a>
                    <a href="/#contact"><li>Contact Us</li></a>
                    <a href="/privacy"><li>Privacy Policy</li></a>
                </ul>
            </div>
        </div>

        <div className="flex flex-col row-3 mt-10 md:col-3 md:row-1">
            <div className="flex flex-col text-white m-auto h-full m-auto">
                <h1 className={`${bebasNeue.className} text-4xl mb-5 text-center`}>Contact Us</h1>
                <ul>
                    <li><a href="tel:+19097660042">(909) 766-0042</a></li>
                    <li><a href="mailto:freshflowmobileautospa@gmail.com">freshflowmobileautospa@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
