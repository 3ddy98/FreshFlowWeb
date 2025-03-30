import { Montserrat } from "next/font/google";
import {Metadata} from 'next';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagramSquare, faFacebookSquare, faYelp} from '@fortawesome/free-brands-svg-icons'
import Script from "next/script"

export const metadata:Metadata = {
  title:'Fresh Flow Mobile Auto Spa',
  description:'Mobile Auto Detailing Service offering a full range of detailing services.'
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid flex-row fixed w-[100%] grid-cols-3 grid-rows-1 min-h-20 max-h-30 text-black bg-black text-white z-1 ">
        <div className="col-1 m-auto max-w-20">
          <h1><a href="#home">Home</a></h1>
        </div>
        <div className="col-2 m-auto max-w-20">
          <h1><a href="#packages">Packages</a></h1>
        </div>
        <div className="col-3 m-auto max-w-30">
          <h1><a href="#contact">Contact Us</a></h1>
        </div>
      </div>
      <div className="flex w-full @container">
        <div className="grid w-full min-h-200 max-h-300 grid-cols-7 grid-rows-7 content-center bg-[url(./img/wheel-rag.jpg)] bg-center bg-cover" id="home">
        <div className="col-start-2 col-end-7 md:col-start-4 md:col-end-5  row-start-2 md:row-start-2 row-span-2 justify-center content-center ">
          <img className="size-30 margin-auto h-50 w-50 md:h-50 md:w-50 m-auto" src="boy.png"></img>
        </div>
          
        <div className="col-start-1 col-end-8 row-4 justify-center content-center m-auto --font-montserrat text-white">
            <h1 className="text-center text-3xl md:text-5xl">Fresh Flow Mobile Auto Spa</h1>
          </div>
          <div className="col-start-1 col-end-8 row-5 justify-center content-center">
            <h1 className="text-center text-md md:text-2xl">Mobile Car Wash and Detailing</h1>
          </div>
          <div className=" col-start-2 md:col-start-3 col-end-7 md:col-end-6 row-6 justify-center content-center"><a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"><button className="block auto-w bg-linear-10 from-black to-purple-500 m-auto p-10 text-4xl cursor-pointer z-1" >Book Now!</button></a></div>
        </div>
      </div>
      
      <div className="flex w-full @container">
        <div className="grid w-full h-500 md:h-500 grid-cols-10 grid-rows-52 md:gap-x-5 md:grid-rows-10 bg-[url(./img/car-wash-1.jpg)]" id="packages">
          <div className="flex col-start-2 col-end-10 row-1 row-span-2 justify-center content-center">
            <h1 className="text-4xl md:text-8xl content-center text-center m-auto text-white bg-black p-2 md:p-10">Packages</h1>
          </div>
          <div className="flex col-start-2 col-end-10 row-3 md:col-start-3  md:col-end-5 md:row-3 justify-center content-center bg-black ">
            <h1 className="text-3xl md:text-7xl content-center text-center">Standard</h1>
          </div>
          <div className="flex col-start-2 col-end-10 row-15 md:col-start-5  md:col-end-7  md:row-3 justify-center content-center bg-black ">
            <h1 className="text-3xl md:text-7xl content-center text-center">Premium</h1>
          </div>
          <div className="grid col-start-2 col-end-10 row-33 md:col-start-7 md:col-end-9 md:row-3 justify-center content-center bg-black ">
            <h1 className=" text-3xl md:text-7xl content-center text-center">Deluxe</h1>
          </div>

          <div className="flex col-start-2 col-end-10 row-4 row-span-9 md:col-start-3  md:col-end-5 md:row-start-4 md:row-span-5 bg-linear-10 from-white to-gray-900">
            <div className="grid grid-cols-1 grid-rows-17 p-5 w-1/1 text-1xl md:text-2xl text-white content-center justify-center">
              <div className="row-1 m-auto"><p>Exterior Hand Wash</p></div>
              <div className="row-2 m-auto"><p>Exterior Tire Shine</p></div>
              <div className="row-3 m-auto"><p>Interior Vacuum</p></div>
              <div className="row-4 m-auto"><p>Interior Aroma</p></div>
            </div>
          </div>
          <div className="grid col-start-2 col-end-10 row-13 md:col-start-3  md:col-end-5 md:row-start-9 content-center justify-center bg-white text-black ">
            <p className="text-3xl md:text-6xl m-auto">$75</p>
          </div>
          <div className="flex col-start-2 col-end-10 row-16 row-span-15 md:col-start-5 md:col-end-7 md:row-start-4 md:row-span-5  bg-linear-10 from-orange-500 to-cyan-500">
            <div className="grid grid-cols-1 grid-rows-17 p-5 w-1/1 text-1xl md:text-2xl text-white content-center justify-center">
              <div className="row-1 m-auto"><p>Exterior Hand Wash</p></div>
              <div className="row-2 m-auto"><p>Exterior Tire Shine</p></div>
              <div className="row-3 m-auto"><p>Exterior Plastic Revive</p></div>
              <div className="row-4 m-auto"><p>Exterior Bug Elimination</p></div>
              <div className="row-5 m-auto"><p>Interior Vacuum</p></div>
              <div className="row-6 m-auto"><p>Interior Plastic Shine</p></div>
              <div className="row-7 m-auto"><p>Seat Cleaning (No-Stains)</p></div>
              <div className="row-8 m-auto"><p>Detailed Plastics Cleaning</p></div>
              <div className="row-9 m-auto"><p>Long Lasting Interior Aroma</p></div>
            </div>
          </div>
          <div className="flex col-start-2 col-end-10 row-31 md:col-start-5 md:col-end-7 md:row-start-9 content-center justify-center bg-[#F67721] text-white ">
            <p className=" text-3xl md:text-6xl m-auto">$120-$250</p>
          </div>
          <div className="flex col-start-2 col-end-10 row-34 row-span-15 md:col-start-7 md:col-end-9 md:row-start-4 md:row-span-5 bg-linear-10 from-black to-purple-500">
            <div className="grid grid-cols-1 grid-rows-17 p-5 w-1/1 text-1xl md:text-2xl text-white">
              <div className="row-1 m-auto"><p>Exterior Detailed Wheel Wash</p></div>
              <div className="row-2 m-auto"><p>Exterior Tire Shine</p></div>
              <div className="row-3 m-auto"><p>Exterior Plastic Revive</p></div>
              <div className="row-4 m-auto"><p>Exterior Bug Elimination</p></div>
              <div className="row-5 m-auto"><p>Exterior Paint Decontamination</p></div>
              <div className="row-6 m-auto"><p>Exterior Wax</p></div>
              <div className="row-7 m-auto"><p>Exterior Ceramic Coating*</p></div>
              <div className="row-8 m-auto"><p>Interior Detailed Vacuum</p></div>
              <div className="row-9 m-auto"><p>Interior Plastic Shine</p></div>
              <div className="row-10 m-auto"><p>Interior Seat Cleaning</p></div>
              <div className="row-11 m-auto"><p>Interior Seat Stain Removal</p></div>
              <div className="row-12 m-auto"><p>Interior Pet Hair Removal</p></div>
              <div className="row-13 m-auto"><p>Detailed Interior Plastics Cleaning</p></div>
              <div className="row-14 m-auto"><p>Long Lasting Interior Aroma</p></div>
              <div className="row-15 m-auto"><p>Leather Seat Protection</p></div>
            </div>
          </div>
          <div className="flex col-start-2 col-end-10 row-49 md:col-start-7 md:col-end-9 md:row-start-9 content-center justify-center bg-black text-purple-300">
            <p className="text-3xl md:text-6xl m-auto">$350-$1500</p>
          </div>
          <div className="flex col-start-2 col-end-10 row-51 md:row-10">
            <p className="text-center m-auto md:text-4xl bg-black md:p-10">Final Prices Upon Vehicle Inspection</p>
          </div>
        </div>
      </div>
      
      <div className="grid w-full min-h-50 max-h-300 grid-cols-11 grid-rows-12 text-white bg-[url(./img/porsche.jpg)] bg-center bg-cover" id="contact">
        <div className="col-start-2 md:col-start-1 col-end-11 md:col-start-3 md:col-end-10 row-start-2 row-span-9 backdrop-blur-sm"></div>
        <div className="col-start-3 col-end-10 row-3 justify-center content-center z-1">
          <h1 className=" text-3xl md:text-8xl content-center text-center ">Contact Us</h1>
        </div>
        <div className="col-start-3 col-end-10 row-4 content-center justify-center z-1"><p className="text-md md:text-3xl text-center">☎️<a href="tel:+16263912351">(626) 391-2351</a></p></div>
        <div className="col-start-3 col-end-10 row-5 content-center justify-center z-1"><p className="text-md md:text-3xl text-center">📧 <a href="mailto:freshflowautospa@gmail.com">freshflowautospa@gmail.com</a></p></div>
        <div className="col-start-3 col-end-10 row-6 content-center justify-center z-1"><p className="text-md md:text-3xl text-center">📍Service Areas: Mira Loma, Corona, Chino, Riverside, San Bernardino</p></div>
        <div className="col-start-4 col-span-1  row-8 content-center justify-center z-1"><a href="https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3"><img src="Yelp.png" className="h-10 h-10 md:h-20 md:h-20 m-auto"></img></a></div>
        <div className="col-start-6 col-span-1  row-8 content-center justify-center z-1"><a href="https://www.instagram.com/freshflowmobileautospa/"><img src="insta.png" className="h-10 h-10 md:h-20 md:h-20 m-auto"></img></a></div>
        <div className="col-start-8 col-span-1  row-8 content-center justify-center z-1"><a href="https://www.instagram.com/freshflowmobileautospa/"><img src="facebook.png" className="h-10 h-10 md:h-20 md:h-20 m-auto"></img></a></div>
        <div className="col-start-2 col-end-10 row-7 content-center justify-center z-1 m-auto">
        </div>
      </div>
    </div>
  );
}


