'use client'
import { use, useState, useEffect, Suspense, useTransition } from 'react';
import { Bebas_Neue } from "next/font/google";
import ConversionLinkButton from './conversion_button';
import { useSearchParams } from 'next/navigation';

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue"
  });

const detailPackages = [
  {
    id: 'stage1',
    title: 'Premium Mobile Wash',
    subtitle: 'Essential Care',
    description: 'Refreshed and ready for the road!',
    originalPrice: '$94',
    prices: {
      compact: '$65*',
      midsize: '$75*',
      suv: '$85*'
    },
    url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/JNGPBG3S4EMIYRIGK724237E',
    features_exterior: [
      'pH Neutral Soap Cannon Spray Down',
      'Scratch‑Free Hand Wash',
      'Premium HVLP Spray On Tire Dressing',
      'Exterior Bug and Sap Elimination',
      'Spray-On Protector Wax'
    ],
    features_interior: [
      'Door Jam Cleaning',
      'Streak‑Free Window Cleaning',
      'Interior Vacuum',
      'Interior Console,Dash,Door, and Seat Wipe-Down',
      'Aroma Application (Optional)',
    ],
    gradient: 'from-gray-900 to-white',
    bgImage: 'stage1-detail.jpg',
    popular: false,
    savings: '$9',
    duration: '1-2 hours',
    difficulty: 'Basic',
  },
    {
      id: 'basic',
      title: 'Clay & Wax',
      subtitle: 'Essential Clean',
      description: 'Keep your vehicle looking fresh with our basic wash and wax service!',
      originalPrice: '$143',
      prices: {
        compact: '$109*',
        midsize: '$119*',
        suv: '$129*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/2SVSPDUF5SFK7VB5YB3BUR7Q',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        '**Clay Bar Decontamination**',
        '**Carnauba Wax Application**',
      ],
      features_interior: [],
      gradient: 'from-gray-800 to-gray-400',
      bgImage: 'clay.png',
      popular: false,
      savings: '$14',
      duration: '2-3 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 'interior-detail',
      title: 'Interior Detail',
      subtitle: 'Deep Interior Clean',
      description: 'Transform your vehicle\'s interior with our comprehensive cleaning service!',
      originalPrice: '$221',
      prices: {
        compact: '$149*',
        midsize: '$175*',
        suv: '$199*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/H52YPHICKR63YEXK5YBJXUDG',
      features_exterior: [],
      features_interior: [
        '**Deep Carpet & Upholstery Cleaning**',
        '**Leather Conditioning & Protection**',
        '**Dashboard & Console Detail**',
        '**Air Vent & Crevice Cleaning**',
        '**Odor Elimination Treatment**',
        '**UV Protection Application**',
        '**Trunk Cleaning**',
        '**Steam Cleaning of Hard Surfaces**',
        'Long Lasting Interior Aroma Application'
      ],
      gradient: 'from-green-800 to-green-400',
      bgImage: 'mercedes-interior.jpg',
      popular: false,
      savings: '$22',
      duration: '3-4 hours',
      difficulty: 'Advanced',
    },
    {
      id: 'premium-detail',
      title: 'Premium Detail',
      subtitle: 'Enhanced Care',
      description: 'Comprehensive cleaning and protection for your vehicle.',
      originalPrice: '$332',
      prices: {
        compact: '$199*',
        midsize: '$249*',
        suv: '$299*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/EXTH47DWVQ3SJ3FD6N3CRR6V',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Clay Bar Decontamination',
        'Carnauba Wax Application',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Interior Plastic UV‑Protection Layer Application',
        '**Doors, Seat Rails, Console, and Dash In-Detail Cleaning**',
        'Long Lasting Interior Aroma Application',
        '**Carpet, Floor Matts, and Seat Shampoo and Steam Clean**',
      ],
      gradient: 'from-black to-blue-500',
      bgImage: 'premium.png',
      popular: true,
      savings: '$33',
      duration: '4-5 hours',
      difficulty: 'Advanced',
    },
    {
      id: 'stage2',
      title: 'Performance Detail',
      subtitle: 'Quality Care',
      description: 'Make that factory paint pop!',
      originalPrice: '$443',
      prices: {
        compact: '$299*',
        midsize: '$349*',
        suv: '$399*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/YQK6Q3J5ZO5UJNKZ4PKQMOZT',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Clay Bar Decontamination',
        '**Premium One‑Step Polish**',
        'Carnauba Wax Application',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Interior Plastic UV‑Protection Layer Application',
        'Doors, Seat Rails, Console, and Dash In-Detail Cleaning',
        'Long Lasting Interior Aroma Application',
        'Carpet, Floor Matts, and Seat Shampoo and Steam Clean',
      ],
      gradient: 'from-black to-cyan-500',
      bgImage: 'stage2-detail.jpg',
      popular: false,
      savings: '$44',
      duration: '5-6 hours',
      difficulty: 'Expert',
    },
    {
      id: 'stage3',
      title: 'Showroom Detail',
      subtitle: 'Turn Heads.',
      description: 'Museum worthy.',
      originalPrice: '$777',
      prices: {
        compact: '$599*',
        midsize: '$649*',
        suv: '$699*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/26OZ5ZYNQTUG57BRSKQKEOGS',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        '**Engine Bay Cleaning**',
        'Clay Exterior Decontamination',
        '**Two‑Step Polish Paint Correction**',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Interior Plastic UV‑Protection Layer Application',
        'Doors, Seat Rails, Console, Dash and Vent Cleaning',
        'Long Lasting Interior Aroma Application',
        'Carpet,Floor Matts, and Seat Shampoo and Steam Clean',
      ],
      gradient: 'from-black to-purple-500',
      bgImage: 'showroom.png',
      popular: false,
      savings: '$78',
      duration: '6-8 hours',
      difficulty: 'Expert',
    },
    {
      id: 'one-step',
      title: 'One Step Polish',
      subtitle: 'Quick Enhancement',
      description: 'Light paint correction and enhancement in a single step.',
      originalPrice: '$332',
      prices: {
        compact: '$199*',
        midsize: '$249*',
        suv: '$299*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/USLIPMXU2J5U35GAVU6K7X7U',
      features_exterior: [
        '**Paint Assessment**',
        '**Light Scratch Removal**',
        '**Swirl Mark Reduction**',
        '**Single-Step Polish**',
        '**Paint Enhancement**',
        '**Final Inspection**',
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Clay Bar Decontamination',
        'Carnauba Wax Application'
      ],
      features_interior: [],
      gradient: 'from-indigo-900 to-indigo-500',
      bgImage: 'onestep.png',
      popular: false,
      savings: '$33',
      duration: '3-4 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 'two-step',
      title: 'Two Step Polish',
      subtitle: 'Deep Correction',
      description: 'Complete paint correction for maximum results.',
      originalPrice: '$554',
      prices: {
        compact: '$399*',
        midsize: '$449*',
        suv: '$499*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/5VJ7GI73H4WO6IFXEEMK3UCK',
      features_exterior: [
        '**Deep Scratch Removal**',
        '**Complete Swirl Mark Elimination**',
        '**Two-Step Correction Process**',
        '**Final Inspection & Quality Check**',
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Clay Bar Decontamination',
        'Carnauba Wax Application'
      ],
      features_interior: [],
      gradient: 'from-violet-900 to-violet-500',
      bgImage: 'swirl.png',
      popular: false,
      savings: '$55',
      duration: '5-6 hours',
      difficulty: 'Expert',
    },
    {
      id: 'engine',
      title: 'Engine Bay Cleaning',
      subtitle: 'Spotless Engine',
      description: 'Professional engine bay cleaning and detailing.',
      originalPrice: '$177',
      prices: {
        compact: '$119*',
        midsize: '$139*',
        suv: '$159*'
      },
      url: 'https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services/LDBLHODBA3FB7GOLKY3PFQCW',
      features_exterior: [
        'Engine Bay Degreasing',
        'Safe Steam Cleaning',
        'Plastic & Rubber Dressing',
        'Final Inspection & Quality Check'
      ],
      features_interior: [],
      gradient: 'from-orange-900 to-orange-500',
      bgImage: 'engine.png',
      popular: false,
      savings: '$18',
      duration: '1-2 hours',
      difficulty: 'Intermediate',
    }
  ];

function PackageCard({ pkg }: { pkg: any }) {
  const [isHovered, setIsHovered] = useState(false);

    return (
    <div 
      className={`relative bg-gradient-to-b ${pkg.gradient} rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full ${
        pkg.popular ? 'ring-4 ring-yellow-400 ring-opacity-50 scale-105' : ''
      } ${isHovered ? 'scale-105 shadow-2xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
          ⭐ MOST POPULAR
        </div>
      )}

      {/* Content Container */}
      <div className="p-6 text-white flex flex-col h-full">
        {/* Header */}
        <div className="flex-shrink-0">
          <h3 className={`${bebasNeue.className} text-2xl font-bold mb-2`}>{pkg.title}</h3>
          <p className="text-sm opacity-80 mb-3">{pkg.subtitle}</p>
          <p className="text-sm mb-4">{pkg.description}</p>
        </div>
        
        {/* Pricing */}
        <div className="flex-shrink-0 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm opacity-80">Starting at</span>
            <span className="text-sm line-through opacity-60">{pkg.originalPrice}</span>
          </div>
          <div className="text-2xl font-bold">
            {pkg.prices.midsize}
          </div>
          <div className="text-xs opacity-80 mt-1">
            Compact: {pkg.prices.compact} | SUV: {pkg.prices.suv}
          </div>
        </div>

        {/* Service Info */}
        <div className="flex-shrink-0 flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{pkg.difficulty}</span>
          </div>
        </div>

        {/* All Features - Flex grow to fill space */}
        <div className="flex-grow mb-6">
          {pkg.features_exterior.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Exterior Features:</h4>
              <div className="space-y-1">
                {pkg.features_exterior.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-xs">
                    <span className="mr-2">✅</span>
                    <span>{feature.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="text-yellow-300">{part}</strong> : part
                    )}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {pkg.features_interior.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Interior Features:</h4>
              <div className="space-y-1">
                {pkg.features_interior.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-xs">
                    <span className="mr-2">✅</span>
                    <span>{feature.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="text-yellow-300">{part}</strong> : part
                    )}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button - Fixed at bottom */}
        <div className="flex-shrink-0">
          <ConversionLinkButton 
            url={pkg.url} 
            value={parseFloat(pkg.prices.midsize.replace('$', '').replace('*', ''))}
            className="w-full"
          >
            <div className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-xl py-3 text-center font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 hover:scale-105">
              BOOK NOW
            </div>
          </ConversionLinkButton>
        </div>
      </div>
    </div>
  );
}


  
  export default function PackagesSection() {
    return (
      <Suspense fallback={<div className="py-12 text-center text-white">Loading packages...</div>}>
        <PackagesSectionContent />
      </Suspense>
    );
  }
  
  function PackagesSectionContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('detail');
  
    // Handle URL parameters for tab switching
    useEffect(() => {
      const tab = searchParams.get('tab');
      if (tab === 'detail') {
        setActiveTab(tab);
      }
    }, [searchParams]);
  
    return (
      <section id="packages" className="py-20 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('car-wash-1.jpg')" }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Use Code SUMMERFLOW25 to Save 10%
            </div>
            
            <h2 className={`${bebasNeue.className} text-5xl md:text-7xl text-white mb-4`}>
              Our Services
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose from our premium mobile detailing packages. Professional service, guaranteed results, and we come to you!
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">★</div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">50+</div>
                </div>
                <span className="text-white/90 text-sm">Happy Customers This Month</span>
              </div>
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {detailPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>



          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-black/80 to-purple-900/80 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <h3 className={`${bebasNeue.className} text-3xl md:text-4xl text-white mb-4`}>
                Ready to Transform Your Vehicle?
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Book your appointment today and experience the difference professional mobile detailing makes!
              </p>
              <ConversionLinkButton
                url="https://book.squareup.com/appointments/huuxb13bg1wbt4/location/LEEDGNVTD70K2/services"
                value={75}
                className={`${bebasNeue.className} inline-block bg-gradient-to-b from-purple-800 to-orange-400 px-8 py-4 text-2xl text-white cursor-pointer transition duration-300 hover:scale-105 rounded-xl shadow-lg border-2 border-white/20 hover:border-white/40`}
              >
                BOOK YOUR DETAIL NOW!
              </ConversionLinkButton>
            </div>
          </div>
        </div>
      </section>
    );
  }
  