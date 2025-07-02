'use client';

import { Bebas_Neue } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function CeramicStudio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          <div className="absolute inset-0 bg-[url('/stage3-detail.jpg')] bg-cover bg-center opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { left: '10%', top: '20%', delay: '0s', duration: '4s' },
            { left: '20%', top: '80%', delay: '1s', duration: '5s' },
            { left: '30%', top: '40%', delay: '2s', duration: '3s' },
            { left: '40%', top: '60%', delay: '0.5s', duration: '6s' },
            { left: '50%', top: '10%', delay: '1.5s', duration: '4s' },
            { left: '60%', top: '70%', delay: '0.8s', duration: '5s' },
            { left: '70%', top: '30%', delay: '2.5s', duration: '3s' },
            { left: '80%', top: '90%', delay: '1.2s', duration: '4s' },
            { left: '90%', top: '50%', delay: '0.3s', duration: '6s' },
            { left: '15%', top: '85%', delay: '1.8s', duration: '5s' },
            { left: '25%', top: '15%', delay: '0.7s', duration: '4s' },
            { left: '35%', top: '75%', delay: '2.2s', duration: '3s' },
            { left: '45%', top: '25%', delay: '1.1s', duration: '6s' },
            { left: '55%', top: '65%', delay: '0.4s', duration: '5s' },
            { left: '65%', top: '35%', delay: '1.9s', duration: '4s' },
            { left: '75%', top: '95%', delay: '0.6s', duration: '3s' },
            { left: '85%', top: '5%', delay: '2.1s', duration: '6s' },
            { left: '95%', top: '45%', delay: '1.3s', duration: '5s' },
            { left: '5%', top: '55%', delay: '0.9s', duration: '4s' },
            { left: '12%', top: '95%', delay: '2.3s', duration: '3s' }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Coming Soon Badge */}
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
            🚀 Coming Soon
          </div>
          
          {/* Main Title */}
          <h1 className={`${bebasNeue.className} text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse`}>
            CERAMIC STUDIO
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of automotive protection with our state-of-the-art ceramic coating technology
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Protection</h3>
              <p className="text-white/70">Advanced ceramic coatings that last for years</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Expert Technology</h3>
              <p className="text-white/70">Cutting-edge application techniques and materials</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
              <p className="text-white/70">Certified technicians with years of experience</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Notified When We Launch
            </button>
            <p className="text-white/60 text-sm">
              Be the first to know when our ceramic studio opens
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <h2 className={`${bebasNeue.className} text-4xl md:text-5xl font-bold`}>
                Why Choose Ceramic Coating?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Long-Lasting Protection</h3>
                    <p className="text-white/70">Our ceramic coatings provide years of protection against UV rays, chemical stains, and environmental contaminants.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Appearance</h3>
                    <p className="text-white/70">Experience a deeper, more vibrant color with improved gloss and shine that lasts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easy Maintenance</h3>
                    <p className="text-white/70">Enjoy easier cleaning and maintenance with hydrophobic properties that repel water and dirt.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/stage3-detail.jpg"
                  alt="Ceramic coating application"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl font-bold mb-6`}>
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Follow us on social media for updates and behind-the-scenes content
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/freshflowmobileautospa/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <span className="text-2xl">📸</span>
            </a>
            <a href="https://www.facebook.com/freshflowautospa" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <span className="text-2xl">📘</span>
            </a>
            <a href="https://www.yelp.com/biz/fresh-flow-mobile-auto-spa-mira-loma-3" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-red-500 hover:bg-red-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <span className="text-2xl">⭐</span>
            </a>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 