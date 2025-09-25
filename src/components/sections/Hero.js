import React from 'react';
import { SITE_NAME } from '../../lib/constants';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background Image with Overlay - Hidden on mobile, visible on tablet */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 mix-blend-multiply"></div>
        <img 
          src="/images/hero/hero-bg.jpg" 
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
            <div className="relative z-20 bg-white/30 backdrop-blur-md p-2 md:p-3 lg:p-3 rounded-xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Pola dekoratif di belakang gambar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/30 to-transparent z-0"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-300/40 rounded-full -mr-8 -mt-8 z-0"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-secondary-300/40 rounded-full -ml-6 -mb-6 z-0"></div>
              
              {/* Gambar dengan efek bayangan dalam */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-inner border border-white">
                <img 
                  src="/images/hero/hero-santri.png" 
                  alt="Santri Pesantren" 
                  className="w-full h-auto rounded transform hover:scale-105 transition-all duration-700 filter brightness-105"
                />
                
                {/* Badge overlay */}
                <div className="absolute top-2 right-2 bg-primary-500/90 text-white text-xs font-medium py-0.5 px-2 rounded-full shadow-lg backdrop-blur-sm">
                  Santri Berprestasi
                </div>
              </div>
              
              {/* Caption dengan efek glass */}
              <div className="mt-2 bg-white/60 backdrop-blur-sm p-1.5 rounded-lg border border-white/50">
                <p className="text-primary-800 text-xs font-medium text-center">Pendidikan karakter dan akademik yang seimbang</p>
              </div>
            </div>
            
            {/* Elemen dekoratif di sekitar frame */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-400/70 rounded-full filter blur-md z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-300/70 rounded-full filter blur-md z-10"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full shadow-lg z-30 animate-pulse"></div>
            <div className="absolute bottom-1/3 -left-3 w-5 h-5 bg-primary-200 rounded-full shadow-lg z-30 animate-pulse delay-300"></div>
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