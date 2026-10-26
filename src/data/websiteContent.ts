export interface ProductBrand {
  id: 'lapp' | 'eaton' | 'mennekes' | 'partex';
  name: string;
  tagline: string;
  country: string;
  logo: string;
  image: string;
  description: string;
  categories: {
    title: string;
    items: string[];
  }[];
  keyHighlights: string[];
}

export const FOUR_PRODUCTS: ProductBrand[] = [
  {
    id: 'lapp',
    name: 'LAPP',
    tagline: 'World-Leading Industrial Cables, Connectors & Accessories',
    country: 'Stuttgart, Germany',
    logo: '/images/lapp.png',
    image: '/images/product_lapp_cables_1792987894896.jpg',
    description: 'Lapp Cables produces world-class cables, wires, and conductors engineered for demanding industrial automation, mechanical engineering, and plant manufacturing.',
    categories: [
      {
        title: 'ÖLFLEX® Flexible Power & Control',
        items: [
          'ÖLFLEX® Classic 110 & 110 CY Shielded',
          'ÖLFLEX® 400 P & 540 P Abrasion-Resistant',
          'ÖLFLEX® Heat Temperature-Resistant (-190°C to +260°C)',
          'ÖLFLEX® Servo & Continuous Flex Drag Chain'
        ]
      },
      {
        title: 'UNITRONIC® Data & Communication',
        items: [
          'UNITRONIC® LiYCY Shielded Data Transmission',
          'UNITRONIC® BUS Profibus & DeviceNet',
          'Twisted Pair Industrial Signal Cables',
          'High-Shielding RS485 & RS422 Formats'
        ]
      },
      {
        title: 'ETHERLINE® Industrial Ethernet',
        items: [
          'Cat.5e, Cat.6, Cat.6A, Cat.7 Industrial Ethernet',
          'PROFINET® Type A, B, and C Continuous Motion',
          'Modbus & Field Foundation Instrumentation Cables',
          'EtherCAT® & Industrial Real-time Protocols'
        ]
      },
      {
        title: 'SKINTOP®, EPIC® & SILVYN®',
        items: [
          'SKINTOP® Nickel-Plated Brass & Polyamide Cable Glands',
          'EPIC® Heavy-Duty Rectangular & Circular Connectors',
          'SILVYN® Flexible Protective Conduits & Conduit Glands',
          'HITRONIC® Fiber Optic Industrial Solutions'
        ]
      }
    ],
    keyHighlights: [
      'UL, CSA, CE, RoHS, VDE international certifications',
      'Oil-resistant, flame-retardant, and continuous drag chain ratings',
      'Single-core multi-strand (Uniplus) to multi-core hybrid formats'
    ]
  },
  {
    id: 'eaton',
    name: 'EATON',
    tagline: 'Moeller Series Industrial Switchgears & Intelligent Motor Control',
    country: 'Cleveland, USA / Bonn, Germany',
    logo: '/images/eaton.png',
    image: '/images/product_eaton_switchgear_1792987895288.jpg',
    description: 'Eaton produces a broad range of high-reliability switchgears and motor-protective equipment, engineered to ensure uninterrupted uptime, safety, and energy control for Indian industry.',
    categories: [
      {
        title: 'Motor-Protective Circuit-Breakers',
        items: [
          'PKZM0 & PKZM4 Motor-Protective Breakers (up to 65A)',
          'PKE Modular Electronic Motor-Protection with Wide Range',
          'Short-Circuit Breaking Capacity up to 150 kA',
          'Overload Protection & Phase-Failure Sensitivity'
        ]
      },
      {
        title: 'DILM Contactors & Overload Relays',
        items: [
          'DILM Power Contactors from 7A up to 1600A',
          'DILA Contactor Relays & Auxiliary Blocks',
          'ZB Thermal & ZEB Electronic Overload Relays',
          'Electronically Controlled DC Drive Actuation'
        ]
      },
      {
        title: 'Circuit-Breakers & Disconnectors',
        items: [
          'NZM Molded Case Circuit Breakers (MCCB) up to 1600A',
          'FAZ Miniature Circuit Breakers (MCB) 10kA & 15kA',
          'P-Switch Switch-Disconnectors & T-Cam Switches',
          'Compact Isolators, ELCB, and RCCB Earth-Leakage Protection'
        ]
      },
      {
        title: 'Control, Pilot & Automation Devices',
        items: [
          'RMQ-Titan® Pilot Devices, Pushbuttons & Emergency Stops',
          'SL Signal Towers & Palm/Foot Switches',
          'EasyE4 Control Relays & SmartWire-DT Communication',
          'MCS Pressure Switches & LS Position Switches'
        ]
      }
    ],
    keyHighlights: [
      'Moeller series German engineering precision',
      'SmartWire-DT intelligent panel communication system',
      'Comprehensive Type-2 coordination for zero-damage motor restarts'
    ]
  },
  {
    id: 'mennekes',
    name: 'MENNEKES',
    tagline: 'World-Renowned Industrial CEE Plugs, Sockets & Receptacle Combinations',
    country: 'Kirchhundem, Germany',
    logo: '/images/mennekes.png',
    image: '/images/product_mennekes_plugs_1792987895718.jpg',
    description: 'MENNEKES is the global benchmark for industrial plugs, sockets, and heavy-duty power distribution systems, engineered for extreme mechanical resilience, dust, water, and chemical resistance.',
    categories: [
      {
        title: 'CEE Plugs & Sockets',
        items: [
          'PowerTOP® Xtra 16A, 32A, 63A, 125A High-Performance Plugs',
          'ProTOP & Quick-Connect Screwless Connection Terminals',
          'IP44 Splashproof & IP67 Watertight Heavy Industrial Housings',
          'Wall-Mounted & Panel-Mounted Angled Receptacles'
        ]
      },
      {
        title: 'AMAXX® Receptacle Combinations',
        items: [
          'Modular Enclosures in AMAPLAST® & AMELAN® Plastic',
          'Integrated MCB & RCD Window Windows for Instant Status',
          'Pre-wired & Tested Factory Assemblies for Quick Site Mounting',
          'Chemical Resistant & Food Processing Stainless Hardware'
        ]
      },
      {
        title: 'EverGUM® Solid Rubber Enclosures',
        items: [
          'Heavy-Duty Solid Rubber Mobile Distribution Units',
          'Extreme Impact Resistance for Construction & Shipyards',
          'Immune to Acids, Alkalis, and Harsh Mechanical Abuse',
          'Ergonomic Carrying Handles & Recessed Sockets'
        ]
      },
      {
        title: 'Industrial Ethernet & Special Solutions',
        items: [
          'CEE Connectors with Integrated RJ45 Ethernet Jacks',
          'DUO Mechanical Interlocked Switched Sockets',
          'Shore-to-Ship & Container Reefer Sockets (32A 440V)',
          'Custom Configured Distribution Solutions for Machine Bays'
        ]
      }
    ],
    keyHighlights: [
      'X-CONTACT® technology for effortless insertion with minimal contact resistance',
      'Self-cleaning contacts & corrosion-proof brass pins',
      'Standard-setting safety interlocks preventing arc generation'
    ]
  },
  {
    id: 'partex',
    name: 'PARTEX',
    tagline: 'Global Leader in Industrial Wire, Cable & Panel Marking Systems',
    country: 'Gullspang, Sweden',
    logo: '/images/partex.svg',
    image: '/images/product_partex_marking_1792987896251.jpg',
    description: 'Partex Marking Systems is the undisputed pioneer in wire and cable identification, cable marking sleeves, stainless steel tags, and thermal printing systems for industrial control cabinets.',
    categories: [
      {
        title: 'Cable & Wire Identification Sleeves',
        items: [
          'PA Closed Multi-Character & Single Character Wire Markers',
          'PC Open Snap-On Cable Markers for Existing Wiring',
          'Halogen-Free ZEROHALEN™ Flame Retardant Sleeves',
          'Pre-Printed & Chevron-Cut Interlocking Alignment Systems'
        ]
      },
      {
        title: 'Heat Shrink & Printable Tubes',
        items: [
          'PO/POZ Printable Oval Profile Markers',
          'PHZ Zero-Halogen Flame-Retardant Heat Shrink Sleeves',
          '2:1 and 3:1 Shrink Ratio Diesel & Chemical Resistant Sleeving',
          'Thermal Transfer Ribbons for High Durability Markings'
        ]
      },
      {
        title: 'Stainless Steel Marking for Harsh Environments',
        items: [
          'PKS Embossed 316 Acid-Proof Stainless Steel Marker Plates',
          'Stainless Steel Cable Ties & Buckles (Coated & Uncoated)',
          'Extreme Offshore, Underground & High-Temperature Durability',
          'Chemical, UV, and Fireproof Identification'
        ]
      },
      {
        title: 'Component & Panel Marking Equipment',
        items: [
          'ProMark T-1000 & EOS Portable Industrial Cable Printers',
          'Terminal Block Markers Compatible with Major DIN Rails',
          'Engraved Adhesive Equipment Nameplates & Pushbutton Legends',
          'WinSign Marking Software for Automated Panel Schedule Import'
        ]
      }
    ],
    keyHighlights: [
      'High-contrast legibility complying with IEC 60204-1 cabinet standards',
      'Zero-Halogen & military standard flammability ratings',
      'Over 75 years of specialized Swedish marking engineering'
    ]
  }
];

export const COMPANY_INFO = {
  name: 'Siddhi Kabel Corporation Private Limited',
  shortName: 'Siddhi Kabel',
  tagline: 'Dependable Electrical Solutions for your Industrial Requirements',
  kicker: 'We are Siddhi Kabel',
  headline: 'Transforming Indian Industry With Innovative Products',
  aboutExcerpt: 'Siddhi Kabel Corporation Private Limited is one of the leading and reliable suppliers of world-class Industrial Electrical, Automation & Safety Products. Established in the year 2008 by professionals with experience of more than 15 years in providing solutions for various needs of high quality Industrial electrical, automation and safety products.',
  fullAbout: 'We at Siddhi Kabel specialize in providing solutions for High quality industrial products. Our primary focus is to service the needs of our customers for high quality products and services. With more than 15 years of experience in the industrial Electrical field and association with leading national and multinational customers & suppliers, Siddhi Kabel offers superior quality products coupled with best technical support.',
  yearsExperience: '15+',
  yearsPresence: '25+',
  segmentsCovered: '10+',
  customersServed: '500+',
  address: 'No. 3, 1st Main Road, 1st Block, Banashankari 3rd Stage, Bangalore, Karnataka - 560085, India',
  phone1: '+91 96200 00947',
  phone2: '+91 98860 58511',
  landline: '+91 80 26720440',
  email: 'info@siddhikabel.com',
  email2: 'guru@siddhikabel.com',
  emailSales: 'sales@siddhikabel.com',
  cin: 'U32106KA2008PTC047982'
};

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'One Trusted Source',
    description: 'One trusted source for complete solutions in electrical, safety, energy, and automation products & services.'
  },
  {
    number: '02',
    title: 'World-Class Brands',
    description: 'Direct partnerships with world-renowned German, European and international manufacturers: LAPP, EATON, MENNEKES, and PARTEX.'
  },
  {
    number: '03',
    title: 'Industrial & Commercial Range',
    description: 'Comprehensive product range suited for heavy industrial, commercial infrastructure, and high-precision automation applications.'
  },
  {
    number: '04',
    title: 'Technically Skilled Team',
    description: 'Our dedicated team provides rigorous technical selection support, specification cross-referencing, and engineered solutions.'
  },
  {
    number: '05',
    title: '25+ Years of Industry Presence',
    description: 'Over two decades of proven experience serving machine tools, pharmaceuticals, process industries, automotive, and power sectors.'
  },
  {
    number: '06',
    title: 'Customer-Specific Inventory',
    description: 'Well-planned, dedicated buffer inventory combined with a reliable large network ensuring timely, prompt dispatches.'
  },
  {
    number: '07',
    title: 'Complete Statutory Compliance',
    description: 'Strict adherence to statutory, tax, and GST standards for seamless, transparent B2B and institutional procurement.'
  },
  {
    number: '08',
    title: 'Ethical Business Practices',
    description: 'Transparent commercial engagements built on enduring long-term trust, genuine origin certification, and zero compromise on quality.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Toyota Kirloskar', logo: '/images/toyota.png' },
  { name: 'Tata Motors', logo: '/images/tata-motors.png' },
  { name: 'TVS Motor', logo: '/images/tvs.png' },
  { name: 'Bharat Electronics (BEL)', logo: '/images/bel.png' },
  { name: 'BEML Limited', logo: '/images/beml.png' },
  { name: 'SKF Bearings', logo: '/images/skf.png' },
  { name: 'Rittal Enclosures', logo: '/images/rittal.png' },
  { name: 'Kennametal', logo: '/images/kennametal.png' },
  { name: 'GE Transportation', logo: '/images/ge-transportation.png' }
];
