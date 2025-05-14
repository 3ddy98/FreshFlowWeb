'use client'
import { use, useState } from 'react';
import { Bebas_Neue } from "next/font/google";
import ConversionLinkButton from './conversion_button';

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
      price: '$50*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/NXZZR64TJ7YOSR7URBKKGZDJ',
      features: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
      ],
      gradient: 'from-gray-900 to-white',
      bgImage: 'headlight-wash.jpg',
    },
    {
      id: 'int',
      title: 'Express Interior',
      subtitle: 'Fresh & Clean',
      description: 'Keep your interior new and free of smells.',
      price: '$50*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/D4GO7ZWEGLLFUDKPOZ5J5GUB',
      features: [
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
      title: 'Express Full Service',
      subtitle: 'Complete Care',
      description: "Want a detail but don't have time? This is for you!",
      price: '$80*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/AG44KA3CIGXRHNVAWJRZW2TS',
      features: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
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
      description: 'New interior, clean exterior!',
      price: '$249*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/6IZHIK7MXKU2X5QXCLWOL2XB',
      features: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Clay Bar Decontamination',
        'Spot Polish',
        'Carnauba Wax Application',
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
      title: 'Stage 2: Full Polish',
      subtitle: 'Premium Care',
      description: 'The real deal.',
      price: '$449*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/YQK6Q3J5ZO5UJNKZ4PKQMOZT',
      features: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Clay Bar Decontamination',
        'Premium One‑Step Polish',
        'Carnauba Wax Application',
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
      description: 'The Ultimate Result and Protection',
      price: '$649*',
      url: 'https://book.squareup.com/appointments/0kjif6lij1e6j4/location/LEEDGNVTD70K2/services/26OZ5ZYNQTUG57BRSKQKEOGS',
      features: [
        'pH Neutral Soap Cannon Spray Down',
        'Scratch‑Free Hand Wash',
        'Premium HVLP Spray On Tire Dressing',
        'Exterior Bug and Sap Elimination',
        'Engine Bay Cleaning',
        'Clay Exterior Decontamination',
        'Two‑Step Polish',
        '9+ Years Protection Advanced Ceramic',
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
    return (
      <div
        className={`w-full max-w-sm mx-auto bg-gradient-to-b ${pkg.gradient} text-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 relative ${
          open ? 'min-h-[40rem]' : 'h-60'
        }`}
        style={{
          backgroundImage: !open ? `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${pkg.bgImage})` : undefined,
          backgroundSize: !open ? 'cover' : undefined,
          backgroundPosition: !open ? 'center' : undefined,
        }}
      >
        <div
          className="flex justify-between items-center px-6 py-4 cursor-pointer"
          onClick={() => setOpen(!open)}
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
            <ul className="mt-4 space-y-2 px-6 text-sm pb-24">
              {pkg.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">✅</span> {f}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between gap-4 bg-gradient-to-t">
              <p className="text-xl font-bold bg-white text-black px-4 py-2 rounded-full whitespace-nowrap">Only {pkg.price}!</p>
              <ConversionLinkButton url={pkg.url}>
                <span className="px-4 py-2 bg-black bg-opacity-75 rounded-full whitespace-nowrap text-2xl bg-yellow-500 font-bold">Book Now!</span>
              </ConversionLinkButton>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default function PackagesSection() {
    const tabs = [
      { key: 'express', label: 'Express Packages', data: expressPackages },
      { key: 'detail', label: 'Detail Packages', data: detailPackages },
    ];
    const [activeTab, setActiveTab] = useState('express');
  
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
              className={`px-4 py-2 rounded-full transition ${
                activeTab === t.key
                  ? 'bg-white text-black'
                  : 'bg-black bg-opacity-50 text-white'
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
  