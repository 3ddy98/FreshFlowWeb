import { Montserrat } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagramSquare, faFacebookSquare, faYelp} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div>
      <div className="grid fixed w-full min-h-20 max-h-30 text-black bg-white grid-cols-15 grid-rows-1 justify-center content-center">
        <div className="col-1 m-auto">
          <h1><a href="#home">Home</a></h1>
        </div>
        <div className="col-2 m-auto">
          <h1><a href="#packages">Packages</a></h1>
        </div>
        <div className="col-3 m-auto">
          <h1><a href="#contact">Contact Us</a></h1>
        </div>
      </div>
      <div className="grid w-full min-h-200 max-h-300 grid-cols-7 grid-rows-7 content-center bg-[url(./img/wheel-rag.jpg)] bg-center bg-cover" id="home">
      <div className="col-start-4 row-start-2 row-span-2 justify-center content-center ">
        <img className="size-30 margin-auto h-50 w-50 m-auto" src="boy.png"></img>
      </div>
        
      <div className="col-start-1 col-end-8 row-4 justify-center content-center m-auto --font-montserrat">
          <h1 className="text-center text-5xl ">Fresh Flow Car Mobile Auto Spa</h1>
        </div>
        <div className="col-start-1 col-end-8 row-5 justify-center content-center">
          <h1 className="text-center text-2xl">Mobile Car Wash and Detailing</h1>
        </div>
        <div className=" col-start-3 col-end-6 row-6 justify-center content-center"><a href="https://app.squareup.com/appointments/book/huuxb13bg1wbt4/LEEDGNVTD70K2/start"><button className="block auto-w bg-cyan-500 w-3/4 h-3/4 m-auto text-4xl cursor-pointer z-1">Book Now!</button></a></div>
      </div>

      <div className="grid w-full min-h-150 grid-cols-10 grid-rows-10 bg-[url(./img/car-wash-1.jpg)]" id="packages">
        <div className="col-start-2 col-end-10 row-2 justify-center content-center">
          <h1 className="text-black text-8xl content-center text-center m-10 text-white">Packages</h1>
        </div>
        <div className="flex col-start-3 col-end-5 row-3 justify-center content-center bg-white ">
          <h1 className="text-black text-5xl content-center text-center">Basic</h1>
        </div>
        <div className="flex col-start-5 col-end-7 row-3 justify-center content-center bg-white ">
          <h1 className="text-black text-5xl content-center text-center">Premium</h1>
        </div>
        <div className="grid col-start-7 col-end-9 row-3 justify-center content-center bg-white ">
          <h1 className="text-black text-5xl content-center text-center">Deluxe</h1>
        </div>

        <div className="grid col-start-3 col-end-5 row-start-4 row-span-5 bg-linear-10 from-white to-gray-900">
          <div className="grid grid-cols-1 grid-rows-10 content-center justify-center p-5 text-2xl text-white">
            <p>Exterior Hand Wash</p>
            <p>Exterior Tire Shine</p>
            <p>Interior Vacuum</p>
            <p>Interior Plastic Shine</p>
            <p>Interior Aroma</p>
          </div>
        </div>
        <div className="grid col-start-3 col-end-5 row-start-9 content-center justify-center bg-white text-black ">
          <p className="text-8xl">$50</p>
        </div>
        <div className="grid col-start-5 col-end-7 row-start-4 row-span-5  bg-linear-10 from-orange-500 to-cyan-500">
          <div className="grid grid-cols-1 grid-rows-12 p-5 w-1/1 text-2xl text-white">
            <p>Exterior Hand Wash</p>
            <p>Exterior Tire Shine</p>
            <p>Exterior Plastic Revive</p>
            <p>Exterior Bug Elimination</p>
            <p>Interior Vacuum</p>
            <p>Interior Plastic Shine</p>
            <p>Seat Cleaning</p>
            <p>Detailed Panel Gaps Cleaning</p>
            <p>Interior Aroma</p>
          </div>
        </div>
        <div className="grid col-start-5 col-end-7 row-start-9 content-center justify-center bg-[#F67721] text-white ">
          <p className="text-8xl text-center">$140</p>
        </div>
        <div className="grid col-start-7 col-end-9 row-start-4 row-span-5 bg-linear-10 from-black to-purple-500">
          <div className="grid grid-cols-1 grid-rows-17 p-5 w-1/1 text-2xl text-white">
            <p>Exterior Detailed  Hand Wash</p>
            <p>Exterior Detailed Wheel Wash</p>
            <p>Exterior Tire Shine</p>
            <p>Exterior Plastic Revive</p>
            <p>Exterior Bug Elimination</p>
            <p>Exterior Paint Decontamination</p>
            <p>Exterior Wax</p>
            <p>Interior Detailed Vacuum</p>
            <p>Interior Plastic Shine</p>
            <p>Interior Seat Cleaning</p>
            <p>Interior Seat Stain Removal</p>
            <p>Interior Pet Hair Removal</p>
            <p>Detailed Panel Gaps Cleaning</p>
            <p>Interior Aroma</p>
          </div>
        </div>
        <div className="grid col-start-7 col-end-9 row-start-9 content-center justify-center bg-black text-purple-300">
          <p className="text-8xl text-center">$200</p>
        </div>
      </div>
      <div className="grid w-full min-h-50 max-h-300 grid-cols-10 grid-rows-9 text-white bg-[url(./img/porsche.jpg)] bg-center bg-cover" id="contact">
        <div className="col-start-3 col-end-9 row-start-2 row-span-7 backdrop-blur-sm"></div>
        <div className="col-start-2 col-end-10 row-3 justify-center content-center z-1">
          <h1 className=" text-8xl content-center text-center ">Contact Us</h1>
        </div>
        <div className="col-start-2 col-end-10 row-4 content-center justify-center z-1"><p className="text-3xl text-center">☎️<a href="tel:+16263912351">(626) 391-2351</a></p></div>
        <div className="col-start-2 col-end-10 row-5 content-center justify-center z-1"><p className="text-3xl text-center">📧 <a href="mailto:freshflowautospa@gmail.com">freshflowautospa@gmail.com</a></p></div>
        <div className="col-start-2 col-end-10 row-6 content-center justify-center z-1"><p className="text-3xl text-center">📍Service Areas: Mira Loma, Corona, Chino, Riverside, San Bernardino</p></div>
        <div className="col-start-2 col-end-10 row-7 content-center justify-center z-1 m-auto">
        </div>
      </div>
    </div>
  );
}


