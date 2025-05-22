'use client'
import { use, useState, useEffect, Suspense } from 'react';
import { Bebas_Neue } from "next/font/google";
import ConversionLinkButton from './conversion_button';
import { useSearchParams } from 'next/navigation';

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue"
  });

const expressPackages = [
    {
      id: 'ext',
      title: 'Express Exterior',
      subtitle: 'Quick & Efficient',
      description: 'Protect your paint with a gentle hand wash.',
      prices: {
        compact: '$45*',
        midsize: '$50*',
        suv: '$60*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/NXZZR64TJ7YOSR7URBKKGZDJ',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
      ],
      features_interior: [],
      gradient: 'from-gray-900 to-white',
      bgImage: 'headlight-wash.jpg',
    },
    {
      id: 'int',
      title: 'Express Interior',
      subtitle: 'Fresh & Clean',
      description: 'Keep your interior new and free of smells.',
      prices: {
        compact: '$45*',
        midsize: '$50*',
        suv: '$60*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/D4GO7ZWEGLLFUDKPOZ5J5GUB',
      features_exterior: [],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Floor Matts Air Pressure Blow Down',
        'Dash and Console Wipe Down',
        'Aroma Application',
      ],
      gradient: 'from-black to-cyan-500',
      bgImage: 'mercedes-interior.jpg',
    },
    {
      id: 'full',
      title: 'Express Detail',
      subtitle: 'Complete Care',
      description: "Want a detail but don't have time? This is for you!",
      prices: {
        compact: '$70*',
        midsize: '$80*',
        suv: '$95*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/AG44KA3CIGXRHNVAWJRZW2TS',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Floor Matts Air Pressure Blow Down',
        'Dash and Console Wipe Down',
      ],
      gradient: 'from-black to-purple-500',
      bgImage: 'vacuum-vehicle.jpg',
    },
  ];
  
  const detailPackages = [
    {
      id: 'stage1',
      title: 'Stage 1 : Vehicle Reset',
      subtitle: 'Essential Care',
      description: 'Reset your vehicle\'s interior to its original condition!',
      prices: {
        compact: '$199*',
        midsize: '$225*',
        suv: '$249*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/6IZHIK7MXKU2X5QXCLWOL2XB',
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
        'Doors, Seat Rails, Console, Dash and Vent Cleaning',
        'Long Lasting Interior Aroma Application',
        'Floor Matt Shampoo and Steam Clean',
      ],
      gradient: 'from-gray-900 to-white',
      bgImage: 'stage1-detail.jpg',
    },
    {
      id: 'stage2',
      title: 'Stage 2: One Step Polish',
      subtitle: 'Premium Care',
      description: 'Eliminate those swirls and scratches with a single step polish and wax.',
      prices: {
        compact: '$299*',
        midsize: '$325*',
        suv: '$349*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/YQK6Q3J5ZO5UJNKZ4PKQMOZT',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Clay Bar Decontamination',
        'Premium One‑Step Polish',
        'Carnauba Wax Application',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Interior Plastic UV‑Protection Layer Application',
        'Doors, Seat Rails, Console, Dash and Vent Cleaning',
        'Long Lasting Interior Aroma Application',
        'Carpet, Matt, and Seat Shampoo and Steam',
      ],
      gradient: 'from-black to-cyan-500',
      bgImage: 'stage2-detail.jpg',
    },
    {
      id: 'stage3',
      title: 'Stage 3: Ceramic',
      subtitle: 'Ultimate Care',
      description: 'Mirror like shine and 9+ years of protection. You WILL turn heads.',
      prices: {
        compact: '$650*',
        midsize: '$700*',
        suv: '$750*'
      },
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/26OZ5ZYNQTUG57BRSKQKEOGS',
      features_exterior: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Engine Bay Cleaning',
        'Clay Exterior Decontamination',
        'Two‑Step Polish',
        '9+ Years Protection Advanced Ceramic',
      ],
      features_interior: [
        'Door Jam Cleaning',
        'Streak‑Free Window Cleaning',
        'Full Interior Vacuum',
        'Interior Plastic UV‑Protection Layer Application',
        'Doors, Seat Rails, Console, Dash and Vent Cleaning',
        'Long Lasting Interior Aroma Application',
        'Carpet, Matt, and Seat Shampoo and Steam',
      ],
      gradient: 'from-black to-purple-500',
      bgImage: 'stage3-detail.jpg',
    },
  ];
  
  
  function CollapsibleCard({ pkg }: { pkg: any }) {
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if we're on desktop on mount and when window resizes
    useEffect(() => {
      const checkDesktop = () => {
        setIsDesktop(window.innerWidth >= 768); // 768px is the md breakpoint
      };
      
      checkDesktop();
      window.addEventListener('resize', checkDesktop);
      
      return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Set initial state based on screen size
    useEffect(() => {
      setOpen(isDesktop);
    }, [isDesktop]);

    return (
      <div
        className={`w-full max-w-sm mx-auto bg-gradient-to-b ${pkg.gradient} text-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 relative cursor-pointer ${
          open ? 'min-h-[60rem] md:min-h-[55rem]' : 'h-70'
        }`}
        style={{
          backgroundImage: !open ? `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${pkg.bgImage})` : undefined,
          backgroundSize: !open ? 'cover' : undefined,
          backgroundPosition: !open ? 'center' : undefined,
        }}
        onClick={() => setOpen(!open)}
      >
        <div
          className="flex justify-between items-center px-6 py-4"
        >
          <div>
            <h3 className="text-2xl font-bold">{pkg.title}</h3>
            <p className="text-sm opacity-80">{pkg.subtitle}</p>
          </div>
          <span className="text-xl transform transition-transform" style={{ rotate: open ? '180deg' : '0deg' }}>
            ▼
          </span>
        </div>
  
        {open && (
          <>
            <div className="px-6 py-4 border-b border-white/20">
              <p className="text-lg">{pkg.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4">
              <div>
                <h4 className="text-xl font-bold mb-2">Exterior</h4>
                <ul className="space-y-2 text-sm">
                  {pkg.features_exterior.map((f: string, i: number) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✅</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Interior</h4>
                <ul className="space-y-2 text-sm">
                  {pkg.features_interior.map((f: string, i: number) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✅</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex flex-col gap-4 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm opacity-80">Starting at</span>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-white">Compact: {pkg.prices.compact}</p>
                    <p className="text-lg font-bold text-white">Midsize: {pkg.prices.midsize}</p>
                    <p className="text-lg font-bold text-white">SUV: {pkg.prices.suv}</p>
                  </div>
                </div>
                <ConversionLinkButton url={pkg.url}>
                  <span className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-full whitespace-nowrap text-xl font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">Book Now!</span>
                </ConversionLinkButton>
              </div>
              <div className="text-sm text-white/80 text-center">
                *Price may vary based on vehicle condition
              </div>
            </div>
          </>
        )}
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
    const tabs = [
      { key: 'express', label: 'Express Packages', data: expressPackages },
      { key: 'detail', label: 'Detail Packages', data: detailPackages },
    ];
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('express');
  
    // Handle URL parameters for tab switching
    useEffect(() => {
      const tab = searchParams.get('tab');
      if (tab === 'express' || tab === 'detail') {
        setActiveTab(tab);
      }
    }, [searchParams]);
  
    return (
      <section id="packages" className="py-12 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('car-wash-1.jpg')" }}>
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className={`${bebasNeue.className} text-6xl text-white bg-black/60 inline-block px-6 py-2 rounded-xl`}>
            {tabs.find(t => t.key === activeTab)?.label ?? 'Packages'}
          </h2>
        </div>
  
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-semibold ${
                activeTab === t.key
                  ? 'bg-gradient-to-r from-purple-800 to-orange-400 text-white font-bold shadow-lg scale-105'
                  : 'bg-black/50 text-white hover:bg-black/70'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {tabs.find(t => t.key === activeTab)?.data.map(pkg => (
            <CollapsibleCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    );
  }
  