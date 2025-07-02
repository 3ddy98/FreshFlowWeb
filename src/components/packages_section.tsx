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
  },
    {
      id: 'basic',
      title: 'Clay & Wax',
      subtitle: 'Essential Clean',
      description: 'Keep your vehicle looking fresh with our basic wash and wax service!',
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
    },
    {
      id: 'interior-detail',
      title: 'Interior Detail',
      subtitle: 'Deep Interior Clean',
      description: 'Transform your vehicle\'s interior with our comprehensive cleaning service!',
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
    },
    {
      id: 'premium-detail',
      title: 'Premium Detail',
      subtitle: 'Enhanced Care',
      description: 'Comprehensive cleaning and protection for your vehicle.',
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
    },
    {
      id: 'stage2',
      title: 'Performance Detail',
      subtitle: 'Quality Care',
      description: 'Make that factory paint pop!',
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
    },
    {
      id: 'stage3',
      title: 'Showroom Detail',
      subtitle: 'Turn Heads.',
      description: 'Museum worthy.',
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
    },
    {
      id: 'one-step',
      title: 'One Step Polish',
      subtitle: 'Quick Enhancement',
      description: 'Light paint correction and enhancement in a single step.',
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
    },
    {
      id: 'two-step',
      title: 'Two Step Polish',
      subtitle: 'Deep Correction',
      description: 'Complete paint correction for maximum results.',
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
    },
    {
      id: 'engine',
      title: 'Engine Bay Cleaning',
      subtitle: 'Spotless Engine',
      description: 'Professional engine bay cleaning and detailing.',
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
    }
  ];
  
  
  function CollapsibleCard({ pkg }: { pkg: any }) {
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Check if we're on desktop on mount and when window resizes
    useEffect(() => {
      const checkDesktop = () => {
        setIsDesktop(window.innerWidth >= 768); // 768px is the md breakpoint
      };
      
      checkDesktop();
      window.addEventListener('resize', checkDesktop);
      
      return () => window.removeEventListener('resize', checkDesktop);
    }, []);

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
        onClick={() => startTransition(() => setOpen(!open))}
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
                      <span className="mr-2">✅</span> {f.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index} className="text-yellow-300">{part}</strong> : part
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Interior</h4>
                <ul className="space-y-2 text-sm">
                  {pkg.features_interior.map((f: string, i: number) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✅</span> {f.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index} className="text-yellow-300">{part}</strong> : part
                      )}
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
                    {pkg.prices.flat ? (
                      <p className="text-lg font-bold text-white">{pkg.prices.flat}</p>
                    ) : (
                      <>
                        <p className="text-lg font-bold text-white">Compact: {pkg.prices.compact}</p>
                        <p className="text-lg font-bold text-white">Sedan: {pkg.prices.midsize}</p>
                        <p className="text-lg font-bold text-white">SUV: {pkg.prices.suv}</p>
                      </>
                    )}
                  </div>
                </div>
                <ConversionLinkButton url={pkg.url} value={parseFloat(pkg.prices.midsize.replace('$', '').replace('*', ''))}>
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
      { key: 'detail', label: 'Packages', data: detailPackages }
    ];
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
      <section id="packages" className="py-12 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('car-wash-1.jpg')" }}>
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className={`${bebasNeue.className} text-6xl text-white bg-black/60 inline-block px-6 py-2 rounded-xl`}>
          Services
          </h2>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {detailPackages.map(pkg => (
            <CollapsibleCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    );
  }
  