import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { ProductBrand, FOUR_PRODUCTS } from '../data/websiteContent';

interface VideoHeroBannerProps {
  onSelectBrand: (brandId: string) => void;
  onOpenBrandDetails: (brand: ProductBrand) => void;
  onRequestQuote: (brandName?: string) => void;
}

interface VideoSlide {
  id: string;
  brandId: 'lapp' | 'eaton' | 'mennekes' | 'partex';
  productName: string;
  categoryTag: string;
  quoteTitle: string;
  quoteBody: string;
  sublines: string;
  videoSrc: string;
  poster: string;
  logo: string;
  origin: string;
}

const VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 'lapp',
    brandId: 'lapp',
    productName: 'LAPP',
    categoryTag: 'Cables, Glands & Industrial Connectivity',
    quoteTitle: 'The World Benchmark in Industrial Cables & Connection Technology',
    quoteBody: '“Reliability in every core. Powering continuous-motion automation, robotics, and extreme industrial environments with zero failure tolerance.”',
    sublines: 'ÖLFLEX® Flexible Power & Control · UNITRONIC® Data · ETHERLINE® Cat6/7 · SKINTOP® Glands',
    videoSrc: '/videos/video_lapp.mp4',
    poster: '/src/assets/images/product_lapp_cables_1792987894896.jpg',
    logo: '/images/lapp.png',
    origin: 'Stuttgart, Germany'
  },
  {
    id: 'eaton',
    brandId: 'eaton',
    productName: 'EATON',
    categoryTag: 'Moeller Series Switchgear & Motor Control',
    quoteTitle: 'Precision Engineering for Uninterrupted Industrial Power Control',
    quoteBody: '“Ensuring machine safety, intelligent motor protection, and energy control for India’s high-precision manufacturing lines.”',
    sublines: 'PKZM0 & PKE Motor-Protective Breakers · DILM Power Contactors · NZM MCCB · RMQ-Titan Pilot Devices',
    videoSrc: '/videos/video_eaton.mp4',
    poster: '/src/assets/images/product_eaton_switchgear_1792987895288.jpg',
    logo: '/images/eaton.png',
    origin: 'Cleveland, USA / Bonn, Germany'
  },
  {
    id: 'mennekes',
    brandId: 'mennekes',
    productName: 'MENNEKES',
    categoryTag: 'Industrial CEE Plugs, Sockets & Receptacles',
    quoteTitle: 'Global Benchmark for Heavy-Duty Plugs & Receptacle Combinations',
    quoteBody: '“Built for the harshest industrial conditions where mechanical abuse, water, chemicals, and dust cannot compromise power delivery.”',
    sublines: 'PowerTOP® Xtra 16A–125A · AMAXX® Receptacle Combinations · EverGUM® Solid Rubber Enclosures',
    videoSrc: '/videos/video_mennekes.mp4',
    poster: '/src/assets/images/product_mennekes_plugs_1792987895718.jpg',
    logo: '/images/mennekes.png',
    origin: 'Kirchhundem, Germany'
  },
  {
    id: 'partex',
    brandId: 'partex',
    productName: 'PARTEX',
    categoryTag: 'Industrial Wire, Cable & Panel Marking Systems',
    quoteTitle: 'Pioneering Wire, Cable & Terminal Block Identification',
    quoteBody: '“Clear identification saves lives, accelerates plant commissioning, and ensures strict compliance with IEC 60204-1 cabinet standards.”',
    sublines: 'PA/PC Identification Sleeves · Flame-Retardant Heat Shrink · 316 Acid-Proof Stainless Steel Tags · ProMark Printers',
    videoSrc: '/videos/video_partex.mp4',
    poster: '/src/assets/images/product_partex_marking_1792987896251.jpg',
    logo: '/images/partex.svg',
    origin: 'Gullspang, Sweden'
  }
];

const CYCLE_DURATION_MS = 60000; // 1 minute per video as requested

export const VideoHeroBanner: React.FC<VideoHeroBannerProps> = ({
  onSelectBrand,
  onOpenBrandDetails,
  onRequestQuote,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentSlide = VIDEO_SLIDES[currentIndex];

  // Handle 1 minute timer with continuous smooth progress bar
  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    let intervalId: NodeJS.Timeout;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % VIDEO_SLIDES.length);
        startTimeRef.current = Date.now();
        setProgress(0);
      }, CYCLE_DURATION_MS);

      // Animation frame loop for progress bar
      const updateProgress = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const currentProgress = Math.min((elapsed / CYCLE_DURATION_MS) * 100, 100);
        setProgress(currentProgress);
        requestRef.current = requestAnimationFrame(updateProgress);
      };
      requestRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      clearInterval(intervalId);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Ensure current active video is playing
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Autoplay may be restricted until interaction
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? VIDEO_SLIDES.length - 1 : prev - 1));
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEO_SLIDES.length);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleSelectSlide = (idx: number) => {
    setCurrentIndex(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const fullBrandData = FOUR_PRODUCTS.find((p) => p.id === currentSlide.brandId) || FOUR_PRODUCTS[0];

  return (
    <div id="video-banner" className="relative w-full overflow-hidden bg-slate-950 text-white select-none">
      {/* Video Container - Full Width */}
      <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[680px]">
        {VIDEO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full Width Background HTML5 Video */}
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={slide.videoSrc}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.03]"
              />

              {/* Multi-layered cinematic gradient scrim for ultra-high text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
            </div>
          );
        })}

        {/* Content Overlaid on Playing Video */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-between py-8 sm:py-12">
          {/* Top Bar inside Video: Brand Origin Tag & Auto-Cycle Progress Indicator */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-md border border-white/20 text-xs font-semibold text-white tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Featured Product · {currentSlide.productName}</span>
              </div>
              <span className="hidden sm:inline text-xs text-slate-300 font-medium">
                {currentSlide.origin}
              </span>
            </div>

            {/* 1-Minute Cycle Progress Pill & Controls */}
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
              <span className="hidden md:inline font-mono tabular-nums text-[11px] text-amber-400 font-semibold">
                60s Cycle
              </span>
              <div className="w-16 sm:w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:text-white transition-colors text-slate-400"
                title={isPaused ? 'Resume 1-minute auto scroll' : 'Pause auto scroll'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Center Copy: Product Name, Inspiring Quote & Lines */}
          <div className="max-w-3xl my-auto py-4">
            {/* Brand Logo & Product Badge */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 sm:h-12 px-3 py-1.5 bg-white rounded-lg shadow-md border border-white/20 flex items-center shrink-0">
                <img
                  src={currentSlide.logo}
                  alt={currentSlide.productName}
                  className="max-h-7 sm:max-h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-400">
                {currentSlide.categoryTag}
              </div>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-4">
              {currentSlide.quoteTitle}
            </h1>

            {/* Inspiring Quote Lines */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-light italic leading-relaxed mb-4 max-w-2xl border-l-2 border-amber-500 pl-4">
              {currentSlide.quoteBody}
            </p>

            {/* Sublines & Key Specifications */}
            <div className="text-xs sm:text-sm text-slate-300 font-medium mb-8 leading-snug flex items-center gap-2">
              <span className="text-amber-400 font-bold">›</span>
              <span>{currentSlide.sublines}</span>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onRequestQuote(currentSlide.productName)}
                className="px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg transition-all shadow-lg flex items-center gap-2"
              >
                <span>Request {currentSlide.productName} Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBrandDetails(fullBrandData)}
                className="px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>View Technical Specs</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => onSelectBrand(currentSlide.brandId)}
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4 py-2 px-1 transition-colors"
              >
                Jump to Catalog
              </button>
            </div>
          </div>

          {/* Bottom Controls: The 4 Product Selectors & Navigation Arrows */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* The 4 Product Switcher Tabs */}
            <div className="grid grid-cols-4 gap-2 w-full sm:w-auto">
              {VIDEO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`px-3 py-2 rounded-lg text-left transition-all border ${
                      isActive
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold leading-none">{slide.productName}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-1 hidden md:block">
                      {slide.brandId === 'lapp' && 'Cables & Glands'}
                      {slide.brandId === 'eaton' && 'Switchgear'}
                      {slide.brandId === 'mennekes' && 'CEE Plugs'}
                      {slide.brandId === 'partex' && 'Wire Marking'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Chevrons */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400 font-mono mr-2">
                0{currentIndex + 1} / 0{VIDEO_SLIDES.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous video"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next video"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
