import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SITE_NAME } from '../../lib/constants';

const Hero = () => {
  const slides = [
    {
      img: '/images/hero/video/giat-rafting.mp4',
      badge: 'Giat Rafting',
      caption: 'Giat Rafting',
    },
    {
      img: '/images/hero/slider-2.jpeg',
      badge: 'Mari Tumbuh Bersama',
      caption: 'Mari Tumbuh Bersama',
    },
    {
      img: '/images/hero/video/parenting-seru.mp4',
      badge: 'Parenting Seru',
      caption: 'Parenting Seru',
    },
  ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [progress, setProgress] = useState(0);

  // Autoplay dengan progress, dapat dipause saat hover/fokus
  useEffect(() => {
    if (paused) return;
    const duration = 4500; // ms
    const stepMs = 100;
    const steps = duration / stepMs;
    let tick = 0;
    const id = setInterval(() => {
      tick++;
      setProgress(Math.min(100, (tick / steps) * 100));
      if (tick >= steps) {
        setActive((prev) => (prev + 1) % slides.length);
        tick = 0;
        setProgress(0);
      }
    }, stepMs);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background Image with Overlay - Hidden on mobile, visible on tablet */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 mix-blend-multiply"></div>
        <img 
          src="/images/hero/hero-bg.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Mobile Beautiful Background with Illustrations */}
      <div className="absolute inset-0 z-0 md:hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.08]">
          {/* Top Islamic pattern */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-500/10 to-transparent">
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-primary-300 rounded-full opacity-40"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-2 border-secondary-300 rounded-full opacity-30"></div>
            <div className="absolute top-12 left-1/3 w-8 h-8 bg-primary-200 rounded-full opacity-50"></div>
          </div>
          
          {/* Middle decorative elements */}
          <div className="absolute top-1/3 left-0 w-full h-full">
            <div className="absolute left-[-50px] top-20 w-24 h-24 border border-primary-200 rounded-full opacity-30 rotate-12"></div>
            <div className="absolute right-[-30px] top-40 w-20 h-20 border border-secondary-200 rounded-full opacity-25 rotate-45"></div>
            <div className="absolute left-4 bottom-32 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-40"></div>
          </div>
          
          {/* Bottom pattern */}
          <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-secondary-500/5 to-transparent">
            <div className="absolute bottom-8 right-4 w-20 h-20 border-2 border-secondary-200 rounded-lg rotate-12 opacity-30"></div>
            <div className="absolute bottom-16 left-6 w-14 h-14 bg-secondary-100 rounded-lg rotate-45 opacity-35"></div>
          </div>
        </div>
        
        {/* Soft glow effects */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-secondary-300 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-300 rounded-full filter blur-2xl"></div>
        </div>
      </div>
      
      {/* Desktop Decorative Elements - Hidden on mobile, visible on tablet */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 opacity-30 hidden md:block">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-primary-300 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-secondary-400 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-8 md:pt-24 lg:pt-24">
        <div className="flex flex-col md:flex-row lg:flex-row items-center">
          {/* Text Content with responsive colors */}
          <div className="w-full md:w-3/5 lg:w-3/5 text-gray-900 md:text-white lg:text-white mb-8 md:mb-0 lg:mb-0 md:pr-8 lg:pr-8 hero-content">
            {/* Improved Badge for Mobile and Tablet */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 md:bg-white/10 lg:bg-white/10 backdrop-blur-sm text-white md:text-white lg:text-white text-xs font-medium mb-4 md:mb-4 lg:mb-4 border border-transparent md:border-white/20 lg:border-white/20 shadow-lg md:shadow-none lg:shadow-none">
              <svg className="w-3 h-3 mr-1.5 text-yellow-300 md:text-white lg:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              International Islamic Boarding School
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3 lg:mb-3 leading-tight">
              Selamat Datang di{' '}
              <span className="text-primary-500 md:text-primary-200 lg:text-primary-200">
                {SITE_NAME}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl mb-4 md:mb-6 lg:mb-6 text-gray-600 md:text-white/90 lg:text-white/90 leading-relaxed max-w-3xl">
              Membentuk generasi Qur'ani yang berakhlak mulia, berwawasan luas, dan siap menghadapi tantangan global
            </p>
            
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row flex-wrap gap-2 md:gap-2 lg:gap-3 hero-buttons">
              <a
                href="#programs"
                className="group bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 md:py-1.5 md:px-4 lg:py-2 lg:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-600/50 flex items-center justify-center w-full sm:w-auto md:w-auto lg:w-auto text-xs md:text-xs lg:text-sm"
              >
                <span>Program Unggulan</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://wa.me/6285183141854"
                className="group bg-white hover:bg-gray-50 text-primary-700 font-medium py-2 px-4 md:py-1.5 md:px-4 lg:py-2 lg:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-white/50 flex items-center justify-center w-full sm:w-auto md:w-auto lg:w-auto border border-primary-200 text-xs md:text-xs lg:text-sm"
              >
                <span>Daftar Sekarang</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Desktop & Tablet Image Section - Hidden on mobile */}
          <div className="w-full md:w-2/5 lg:w-2/5 relative mt-4 md:mt-0 lg:mt-0 max-w-sm mx-auto md:max-w-xs lg:max-w-sm hidden md:block lg:block">
            {/* Frame utama dengan efek glass morphism */}
            <div className="relative z-20 bg-white/30 backdrop-blur-md p-2 md:p-3 lg:p-3 pb-6 md:pb-8 lg:pb-8 rounded-xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Pola dekoratif di belakang gambar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/30 to-transparent z-0"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-300/40 rounded-full -mr-8 -mt-8 z-0"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-secondary-300/40 rounded-full -ml-6 -mb-6 z-0"></div>

              {/* Gambar dengan efek bayangan dalam + carousel geser */}
              <div
                role="region"
                aria-label="Hero portrait carousel"
                tabIndex={0}
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-white/60 ring-1 ring-white/30 bg-white/10 backdrop-blur-lg px-2 md:px-3 pt-4 pb-16"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                onTouchStart={(e) => setTouchStartX(e.changedTouches[0]?.clientX ?? null)}
                onTouchEnd={(e) => {
                  const endX = e.changedTouches[0]?.clientX;
                  if (touchStartX == null || endX == null) return;
                  const dx = endX - touchStartX;
                  const threshold = 40;
                  if (dx > threshold) {
                    prevSlide();
                  } else if (dx < -threshold) {
                    nextSlide();
                  }
                  setTouchStartX(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') nextSlide();
                  else if (e.key === 'ArrowLeft') prevSlide();
                  else if (e.key === ' ') setPaused((p) => !p);
                }}
              >
                {/* Track dengan aspek potret agar konten tidak terpotong */}
                <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                  >
                    {slides.map((s, i) => (
                      <div key={i} className="min-w-full h-full">
                        {(() => {
                          const isVideo = !!s.video || (s.img && s.img.toLowerCase().endsWith('.mp4'));
                          const src = s.video ?? (isVideo ? s.img : s.img);
                          if (isVideo) {
                            return (
                              <video
                                src={src}
                                className="w-full h-full object-contain bg-black"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                              />
                            );
                          }
                          return (
                            <img
                              src={src}
                              alt={s.badge}
                              className="w-full h-full object-contain bg-black"
                            />
                          );
                        })()}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge overlay */}
                <div className="absolute top-4 right-4 bg-primary-500/90 text-white text-xs font-medium py-0.5 px-2 rounded-full shadow-lg backdrop-blur-sm">
                  {slides[active].badge}
                </div>

                {/* Arrow Navigation dipindah ke luar frame */}
              
                {/* Indikator dots elegan dan lebih kecil */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Slide ${i + 1}`}
                      aria-current={i === active}
                      onClick={() => {
                        setActive(i);
                        setProgress(0);
                      }}
                      className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all ${
                        i === active
                          ? 'bg-primary-500 shadow-md scale-110 ring-2 ring-white/70'
                          : 'bg-white/50 hover:bg-white/70 ring-1 ring-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Progress bar autoplay */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div
                    className="h-1 bg-primary-500 transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Caption dengan efek glass */}
              <div className="mt-2 mb-4 bg-white/60 backdrop-blur-sm p-1.5 rounded-lg border border-white/50">
                <p className="text-primary-800 text-xs font-medium text-center">{slides[active].caption}</p>
              </div>
            </div>

            {/* Arrow Navigation di luar frame agar tidak menutupi konten */}
            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={prevSlide}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-30 h-16 w-16 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-primary-600/90 hover:bg-primary-600 text-white shadow-2xl border border-white/40 ring-2 ring-white/40 backdrop-blur-md transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300/60"
            >
              <HiChevronLeft size={44} className="pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Berikutnya"
              onClick={nextSlide}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-30 h-16 w-16 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-primary-600/90 hover:bg-primary-600 text-white shadow-2xl border border-white/40 ring-2 ring-white/40 backdrop-blur-md transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300/60"
            >
              <HiChevronRight size={44} className="pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" aria-hidden="true" />
            </button>

            {/* Elemen dekoratif di sekitar frame */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-400/70 rounded-full filter blur-md z-10 pointer-events-none"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-300/70 rounded-full filter blur-md z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 bg-white rounded-full shadow-lg z-10 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/3 -left-3 w-5 h-5 bg-primary-200 rounded-full shadow-lg z-10 animate-pulse delay-300 pointer-events-none"></div>
          </div>

          {/* Mobile Simple Image Section - Only visible on mobile */}
          <div className="w-full max-w-xs mx-auto mt-8 md:hidden">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-white/50 transform hover:scale-105 transition-all duration-500">
              {/* Decorative elements behind card */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-25"></div>
              
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 p-1 shadow-inner">
                  <img 
                    src="/images/hero/hero-santri.png" 
                    alt="Santri Pesantren" 
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-medium shadow-lg">
                    <svg className="w-3 h-3 mr-1.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Santri Berprestasi
                  </div>
                  <p className="mt-2 text-xs text-gray-700 font-medium leading-relaxed">Pendidikan karakter & akademik yang seimbang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop & Tablet Scroll Down Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:flex lg:flex scroll-indicator">
          <a href="#about" className="text-white flex flex-col items-center">
            <span className="text-sm mb-2">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;