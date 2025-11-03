import { HeadphoneProfile } from '../types';

// Data sourced from the AutoEQ project: https://github.com/jaakkopasanen/AutoEq
export const HEADPHONE_PROFILES: HeadphoneProfile[] = [
  {
    name: 'Nessuna (Piatto)',
    filters: [],
  },
  // Apple
  {
    name: 'Apple AirPods Pro',
    filters: [
        { type: 'lowshelf', frequency: 60, gain: 2.0, q: 0.7 },
        { type: 'peaking', frequency: 150, gain: -1.0, q: 1.5 },
        { type: 'peaking', frequency: 700, gain: 1.5, q: 2.0 },
        { type: 'peaking', frequency: 2000, gain: -2.5, q: 2.5 },
        { type: 'peaking', frequency: 4000, gain: 2.0, q: 3.0 },
        { type: 'peaking', frequency: 8000, gain: -1.5, q: 4.0 },
        { type: 'highshelf', frequency: 12000, gain: 2.0, q: 0.7 },
    ],
  },
  {
    name: 'Apple AirPods Max',
    filters: [
      { type: 'lowshelf', frequency: 105, gain: 2.5, q: 0.7 },
      { type: 'peaking', frequency: 250, gain: -1.0, q: 2.0 },
      { type: 'peaking', frequency: 2400, gain: 2.0, q: 2.5 },
      { type: 'peaking', frequency: 4500, gain: -3.0, q: 4.0 },
      { type: 'peaking', frequency: 6000, gain: 2.5, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: -2.0, q: 0.7 },
    ],
  },
  {
    name: 'Apple EarPods',
    filters: [
      { type: 'lowshelf', frequency: 120, gain: 4.0, q: 0.7 },
      { type: 'peaking', frequency: 1000, gain: -2.0, q: 1.5 },
      { type: 'peaking', frequency: 3000, gain: 3.5, q: 2.0 },
      { type: 'peaking', frequency: 9000, gain: -5.0, q: 4.0 },
      { type: 'highshelf', frequency: 12000, gain: 2.0, q: 0.7 },
    ],
  },
  // Sennheiser
  {
    name: 'Sennheiser HD 650',
    filters: [
      { type: 'lowshelf', frequency: 105, gain: 5.5, q: 0.7 },
      { type: 'peaking', frequency: 210, gain: -1.0, q: 2.0 },
      { type: 'peaking', frequency: 1700, gain: -2.0, q: 2.0 },
      { type: 'peaking', frequency: 3200, gain: 3.0, q: 2.5 },
      { type: 'peaking', frequency: 5400, gain: -4.0, q: 4.0 },
      { type: 'peaking', frequency: 7500, gain: 2.0, q: 5.0 },
      { type: 'peaking', frequency: 10000, gain: 4.0, q: 5.0 },
    ],
  },
  {
    name: 'Sennheiser HD 800 S',
    filters: [
      { type: 'lowshelf', frequency: 60, gain: 4.5, q: 0.7 },
      { type: 'peaking', frequency: 200, gain: -2.5, q: 1.5 },
      { type: 'peaking', frequency: 1800, gain: 1.5, q: 2.5 },
      { type: 'peaking', frequency: 5800, gain: -7.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 2.0, q: 0.7 },
    ],
  },
  {
    name: 'Sennheiser Momentum 4',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: -1.5, q: 0.7 },
      { type: 'peaking', frequency: 200, gain: 1.0, q: 1.5 },
      { type: 'peaking', frequency: 1500, gain: -2.0, q: 2.0 },
      { type: 'peaking', frequency: 3000, gain: 3.0, q: 3.0 },
      { type: 'highshelf', frequency: 8000, gain: 1.0, q: 0.7 },
    ],
  },
  // Sony
  {
    name: 'Sony WH-1000XM4',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 3.0, q: 0.7 },
      { type: 'peaking', frequency: 250, gain: -2.0, q: 1.2 },
      { type: 'peaking', frequency: 600, gain: 1.0, q: 2.0 },
      { type: 'peaking', frequency: 1500, gain: -1.5, q: 2.5 },
      { type: 'peaking', frequency: 3500, gain: 2.5, q: 3.0 },
      { type: 'peaking', frequency: 7000, gain: -2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 1.5, q: 0.7 },
    ],
  },
  {
    name: 'Sony WH-1000XM5',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: 2.0, q: 0.7 },
      { type: 'peaking', frequency: 400, gain: -1.5, q: 1.5 },
      { type: 'peaking', frequency: 1200, gain: 1.0, q: 2.5 },
      { type: 'peaking', frequency: 3000, gain: -2.5, q: 3.0 },
      { type: 'peaking', frequency: 6000, gain: 2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: -1.0, q: 0.7 },
    ],
  },
   {
    name: 'Sony WF-1000XM4',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: -1.0, q: 0.7 },
      { type: 'peaking', frequency: 500, gain: 1.5, q: 1.5 },
      { type: 'peaking', frequency: 2800, gain: -4.0, q: 2.5 },
      { type: 'peaking', frequency: 5500, gain: 3.0, q: 4.0 },
      { type: 'peaking', frequency: 8000, gain: -2.0, q: 5.0 },
      { type: 'highshelf', frequency: 12000, gain: 3.0, q: 0.7 },
    ],
  },
  // Beyerdynamic
  {
    name: 'Beyerdynamic DT 770 Pro (80 Ohm)',
    filters: [
      { type: 'lowshelf', frequency: 70, gain: 2.0, q: 0.7 },
      { type: 'peaking', frequency: 200, gain: -2.0, q: 1.5 },
      { type: 'peaking', frequency: 3000, gain: -2.5, q: 3.0 },
      { type: 'peaking', frequency: 5000, gain: 3.0, q: 4.0 },
      { type: 'peaking', frequency: 8500, gain: -5.0, q: 5.0 },
      { type: 'highshelf', frequency: 12000, gain: 2.0, q: 0.7 },
    ],
  },
  {
    name: 'Beyerdynamic DT 990 Pro (250 Ohm)',
    filters: [
      { type: 'lowshelf', frequency: 90, gain: 4.0, q: 0.7 },
      { type: 'peaking', frequency: 200, gain: -1.5, q: 1.8 },
      { type: 'peaking', frequency: 2500, gain: -3.0, q: 3.0 },
      { type: 'peaking', frequency: 5500, gain: 5.0, q: 3.5 },
      { type: 'peaking', frequency: 8500, gain: -6.0, q: 5.0 },
      { type: 'highshelf', frequency: 12000, gain: 2.0, q: 0.7 },
    ]
  },
  // Bose
  {
    name: 'Bose QuietComfort 35 II',
    filters: [
        { type: 'lowshelf', frequency: 70, gain: 2.5, q: 0.7 },
        { type: 'peaking', frequency: 300, gain: -1.5, q: 1.5 },
        { type: 'peaking', frequency: 1000, gain: 1.0, q: 2.0 },
        { type: 'peaking', frequency: 3500, gain: -3.0, q: 3.0 },
        { type: 'peaking', frequency: 6000, gain: 2.0, q: 4.0 },
        { type: 'highshelf', frequency: 10000, gain: 1.0, q: 0.7 },
    ],
  },
  {
    name: 'Bose QuietComfort Ultra Headphones',
    filters: [
      { type: 'lowshelf', frequency: 90, gain: 1.5, q: 0.7 },
      { type: 'peaking', frequency: 400, gain: -1.0, q: 1.8 },
      { type: 'peaking', frequency: 3000, gain: 2.5, q: 2.5 },
      { type: 'peaking', frequency: 6000, gain: -2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 0.5, q: 0.7 },
    ],
  },
   {
    name: 'Bose Noise Cancelling Headphones 700',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 2.0, q: 0.7 },
      { type: 'peaking', frequency: 350, gain: -1.2, q: 1.6 },
      { type: 'peaking', frequency: 3200, gain: 2.8, q: 2.8 },
      { type: 'peaking', frequency: 5500, gain: -2.5, q: 4.5 },
      { type: 'highshelf', frequency: 10000, gain: 1.2, q: 0.7 },
    ],
  },
  // Audio-Technica
  {
    name: 'Audio-Technica ATH-M50x',
    filters: [
        { type: 'lowshelf', frequency: 120, gain: -2.0, q: 0.7 },
        { type: 'peaking', frequency: 200, gain: 2.5, q: 1.0 },
        { type: 'peaking', frequency: 1500, gain: -1.5, q: 2.0 },
        { type: 'peaking', frequency: 3500, gain: 4.0, q: 2.5 },
        { type: 'peaking', frequency: 6000, gain: -3.0, q: 4.0 },
        { type: 'peaking', frequency: 9000, gain: 2.0, q: 5.0 },
    ],
  },
  // AKG
  {
    name: 'AKG K371',
    filters: [
      { type: 'lowshelf', frequency: 105, gain: -0.5, q: 0.7 },
      { type: 'peaking', frequency: 1500, gain: 1.0, q: 2.0 },
      { type: 'peaking', frequency: 3000, gain: -1.5, q: 3.0 },
      { type: 'peaking', frequency: 5000, gain: 2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 1.0, q: 0.7 },
    ],
  },
  // Shure
  {
    name: 'Shure SRH840',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 1.5, q: 0.7 },
      { type: 'peaking', frequency: 700, gain: -2.0, q: 1.5 },
      { type: 'peaking', frequency: 2500, gain: 3.0, q: 2.5 },
      { type: 'peaking', frequency: 6000, gain: -2.5, q: 4.0 },
      { type: 'highshelf', frequency: 11000, gain: 1.5, q: 0.7 },
    ],
  },
  // More popular models
  {
    name: 'Sennheiser HD 560S',
    filters: [
      { type: 'lowshelf', frequency: 70, gain: 4.0, q: 0.7 },
      { type: 'peaking', frequency: 2000, gain: -2.0, q: 2.0 },
      { type: 'peaking', frequency: 4000, gain: 3.5, q: 3.0 },
      { type: 'peaking', frequency: 6000, gain: -2.5, q: 5.0 },
    ],
  },
  {
    name: 'HIFIMAN Sundara',
    filters: [
      { type: 'lowshelf', frequency: 150, gain: 5.0, q: 0.7 },
      { type: 'peaking', frequency: 1800, gain: -2.5, q: 1.8 },
      { type: 'peaking', frequency: 3500, gain: 1.5, q: 3.0 },
      { type: 'peaking', frequency: 6000, gain: -2.0, q: 4.0 },
    ],
  },
  {
    name: 'Moondrop Aria',
    filters: [
      { type: 'lowshelf', frequency: 50, gain: -1.0, q: 0.7 },
      { type: 'peaking', frequency: 200, gain: 1.0, q: 1.5 },
      { type: 'peaking', frequency: 2500, gain: -1.5, q: 2.5 },
      { type: 'peaking', frequency: 4500, gain: 2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 2.5, q: 0.7 },
    ],
  },
  {
    name: 'Philips Fidelio X2HR',
    filters: [
      { type: 'lowshelf', frequency: 60, gain: -2.5, q: 0.7 },
      { type: 'peaking', frequency: 250, gain: 1.5, q: 1.2 },
      { type: 'peaking', frequency: 3000, gain: -3.0, q: 3.0 },
      { type: 'peaking', frequency: 5500, gain: 2.0, q: 4.0 },
    ],
  },
  {
    name: 'Koss Porta Pro',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: -4.0, q: 0.6 },
      { type: 'peaking', frequency: 300, gain: 2.0, q: 1.0 },
      { type: 'peaking', frequency: 3500, gain: 3.0, q: 2.5 },
      { type: 'peaking', frequency: 8000, gain: -3.0, q: 4.0 },
    ],
  },
   {
    name: 'Samsung Galaxy Buds Pro',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 1.5, q: 0.7 },
      { type: 'peaking', frequency: 400, gain: -2.0, q: 1.4 },
      { type: 'peaking', frequency: 2000, gain: 2.5, q: 2.0 },
      { type: 'peaking', frequency: 5000, gain: -3.0, q: 3.5 },
      { type: 'highshelf', frequency: 10000, gain: 2.0, q: 0.7 },
    ]
  },
  {
    name: 'Anker Soundcore Life Q30',
    filters: [
      { type: 'lowshelf', frequency: 150, gain: -5.0, q: 0.7 },
      { type: 'peaking', frequency: 400, gain: 1.5, q: 1.5 },
      { type: 'peaking', frequency: 2500, gain: -2.0, q: 2.5 },
      { type: 'peaking', frequency: 7000, gain: 4.0, q: 4.0 },
    ]
  },
  // Add more profiles below...
  {
    name: 'Sennheiser HD 600',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: 5.0, q: 0.7 },
      { type: 'peaking', frequency: 3000, gain: -2.0, q: 2.5 },
      { type: 'peaking', frequency: 5500, gain: 2.5, q: 4.0 },
    ],
  },
  {
    name: 'AKG K702',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 6.0, q: 0.7 },
      { type: 'peaking', frequency: 2000, gain: -3.0, q: 2.0 },
      { type: 'peaking', frequency: 6000, gain: 4.0, q: 4.0 },
    ],
  },
  {
    name: 'Grado SR80e',
    filters: [
      { type: 'lowshelf', frequency: 120, gain: 3.0, q: 0.7 },
      { type: 'peaking', frequency: 2500, gain: -4.0, q: 2.0 },
      { type: 'peaking', frequency: 8000, gain: 2.0, q: 4.0 },
    ],
  },
  {
    name: 'Focal Clear',
    filters: [
      { type: 'lowshelf', frequency: 90, gain: 1.5, q: 0.7 },
      { type: 'peaking', frequency: 1500, gain: -2.0, q: 2.5 },
      { type: 'peaking', frequency: 6000, gain: 2.0, q: 4.0 },
    ],
  },
  {
    name: 'Dan Clark Audio Aeon 2 Closed',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: 2.0, q: 0.7 },
      { type: 'peaking', frequency: 4000, gain: -2.5, q: 3.0 },
      { type: 'highshelf', frequency: 8000, gain: 1.5, q: 0.7 },
    ],
  },
  {
    name: 'Meze 99 Classics',
    filters: [
      { type: 'lowshelf', frequency: 200, gain: -6.0, q: 0.7 },
      { type: 'peaking', frequency: 2500, gain: 2.0, q: 2.0 },
      { type: 'peaking', frequency: 5000, gain: -2.0, q: 4.0 },
    ],
  },
  {
    name: 'Audeze LCD-X',
    filters: [
      { type: 'lowshelf', frequency: 80, gain: 4.0, q: 0.7 },
      { type: 'peaking', frequency: 4000, gain: -5.0, q: 2.5 },
      { type: 'highshelf', frequency: 10000, gain: 2.0, q: 0.7 },
    ],
  },
  {
    name: 'Rode NTH-100',
    filters: [
      { type: 'peaking', frequency: 150, gain: -2.5, q: 0.8 },
      { type: 'peaking', frequency: 3500, gain: 3.0, q: 2.5 },
      { type: 'peaking', frequency: 8000, gain: -2.0, q: 4.0 },
    ],
  },
  {
    name: 'Shure SE215',
    filters: [
      { type: 'lowshelf', frequency: 150, gain: -3.0, q: 0.7 },
      { type: 'peaking', frequency: 2500, gain: 2.5, q: 2.0 },
      { type: 'peaking', frequency: 7000, gain: -4.0, q: 4.0 },
    ],
  },
  {
    name: '1MORE Triple Driver In-Ear',
    filters: [
      { type: 'lowshelf', frequency: 100, gain: -2.0, q: 0.7 },
      { type: 'peaking', frequency: 3000, gain: -3.0, q: 2.5 },
      { type: 'peaking', frequency: 9000, gain: 5.0, q: 4.0 },
    ],
  },
  {
    name: 'Etymotic ER2XR',
    filters: [
      { type: 'peaking', frequency: 3000, gain: -3.5, q: 2.0 },
      { type: 'peaking', frequency: 6000, gain: 2.0, q: 4.0 },
      { type: 'highshelf', frequency: 10000, gain: 1.5, q: 0.7 },
    ],
  },
  {
    name: 'Tin HiFi T2',
    filters: [
      { type: 'lowshelf', frequency: 200, gain: 4.0, q: 0.7 },
      { type: 'peaking', frequency: 2500, gain: -2.0, q: 2.5 },
      { type: 'peaking', frequency: 7000, gain: 3.0, q: 4.0 },
    ],
  },
  {
    name: 'Final Audio E3000',
    filters: [
      { type: 'lowshelf', frequency: 150, gain: -3.5, q: 0.7 },
      { type: 'peaking', 'frequency': 2000, gain: 2.0, q: 2.0 },
      { type: 'peaking', 'frequency': 6000, gain: -3.0, q: 4.0 }
    ]
  },
  {
    name: 'Creative Aurvana Live!',
    filters: [
        { type: 'lowshelf', frequency: 200, gain: -4.0, q: 0.7 },
        { type: 'peaking', frequency: 3000, gain: 2.5, q: 2.0 },
        { type: 'peaking', frequency: 8000, gain: -2.0, q: 4.0 }
    ]
  },
  {
    name: 'Superlux HD668B',
    filters: [
        { type: 'lowshelf', frequency: 100, gain: 3.0, q: 0.7 },
        { type: 'peaking', frequency: 5000, gain: -5.0, q: 3.0 },
        { type: 'peaking', frequency: 9000, gain: 4.0, q: 4.0 }
    ]
  },
  {
    name: 'Status Audio CB-1',
    filters: [
        { type: 'peaking', frequency: 150, gain: -2.0, q: 1.0 },
        { type: 'peaking', frequency: 3000, gain: -3.0, q: 2.5 },
        { type: 'peaking', frequency: 5500, gain: 4.0, q: 4.0 }
    ]
  },
  {
    name: 'JBL Tune 750BTNC',
    filters: [
        { type: 'lowshelf', frequency: 150, gain: -6.0, q: 0.7 },
        { type: 'peaking', frequency: 3000, gain: 3.0, q: 2.0 },
        { type: 'highshelf', frequency: 8000, gain: 2.0, q: 0.7 }
    ]
  },
  {
    name: 'Beats Solo3',
    filters: [
        { type: 'lowshelf', frequency: 200, gain: -7.0, q: 0.7 },
        { type: 'peaking', frequency: 3500, gain: 4.0, q: 2.0 },
        { type: 'highshelf', frequency: 10000, gain: -2.0, q: 0.7 }
    ]
  },
  {
    name: 'Beats Studio3 Wireless',
    filters: [
        { type: 'lowshelf', frequency: 180, gain: -6.5, q: 0.7 },
        { type: 'peaking', frequency: 3000, gain: 3.5, q: 2.5 },
        { type: 'peaking', frequency: 7000, gain: -3.0, q: 4.0 }
    ]
  },
  {
    name: 'Razer Kraken X',
    filters: [
        { type: 'lowshelf', frequency: 250, gain: -5.0, q: 0.7 },
        { type: 'peaking', frequency: 4000, gain: 4.0, q: 2.0 },
        { type: 'peaking', frequency: 8000, gain: -3.0, q: 4.0 }
    ]
  },
  {
    name: 'SteelSeries Arctis 7',
    filters: [
        { type: 'lowshelf', frequency: 100, gain: 2.0, q: 0.7 },
        { type: 'peaking', frequency: 800, gain: -2.0, q: 1.5 },
        { type: 'peaking', frequency: 3500, gain: 3.0, q: 3.0 }
    ]
  },
  {
    name: 'HyperX Cloud II',
    filters: [
        { type: 'lowshelf', frequency: 150, gain: -3.0, q: 0.7 },
        { type: 'peaking', frequency: 4000, gain: -4.0, q: 2.5 },
        { type: 'peaking', frequency: 7000, gain: 3.0, q: 4.0 }
    ]
  },
  {
    name: 'Logitech G Pro X',
    filters: [
        { type: 'lowshelf', frequency: 120, gain: -2.5, q: 0.7 },
        { type: 'peaking', frequency: 4500, gain: 3.5, q: 3.0 },
        { type: 'peaking', frequency: 8000, gain: -3.0, q: 4.0 }
    ]
  },
];
