import React, { useEffect, useState } from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Tahfidz Al-Qur'an",
      description: "Program unggulan dengan metode menghafal Al-Qur'an yang efektif dan menyenangkan untuk membentuk generasi Qur'ani",
      icon: "quran",
      color: "green",
      features: ["30 Juz", "Metode Terbaru", "Bimbingan Intensif"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Pendidikan Formal",
      description: "Kurikulum nasional dan internasional dengan pendekatan pembelajaran modern yang terintegrasi",
      icon: "academic",
      color: "green",
      features: ["Kurikulum 2013", "Cambridge", "Teknologi Digital"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Bahasa Arab & Inggris",
      description: "Penguasaan bahasa internasional untuk menghadapi era global dengan metode komunikatif",
      icon: "language",
      color: "green",
      features: ["Native Speaker", "Conversation", "Sertifikasi"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Pengembangan Karakter",
      description: "Pembentukan akhlak mulia dan kepemimpinan berdasarkan nilai-nilai Islam yang komprehensif",
      icon: "character",
      color: "green",
      features: ["Leadership", "Public Speaking", "Soft Skills"],
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const getIcon = (iconName, color) => {
    const colorClasses = {
      green: 'text-white bg-gradient-to-br from-green-500 to-emerald-600'
    };
    
    const iconClass = `p-4 rounded-2xl ${colorClasses[color]} mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300`;
    
    switch(iconName) {
      case 'quran':
        return (
          <div className={iconClass}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        );
      case 'academic':
        return (
          <div className={iconClass}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
        );
      case 'language':
        return (
          <div className={iconClass}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
        );
      case 'character':
        return (
          <div className={iconClass}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const openModal = (program) => {
    setSelected(program);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-secondary-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <span className="mr-2">🎯</span>
            Keunggulan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Program Unggulan
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai program unggulan yang dirancang untuk mengembangkan 
            potensi santri secara komprehensif dengan pendekatan modern dan terintegrasi
          </p>
        </div>
        
        {/* Enhanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => openModal(program)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openModal(program);
              }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Top Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.gradient}`}></div>
              
              <div className="p-8 flex flex-col items-center text-center relative">
                {/* Icon with enhanced styling */}
                <div className="relative mb-6">
                  {getIcon(program.icon, program.color)}
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-2xl opacity-20 blur-xl transform group-hover:scale-125 transition-transform duration-500`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {program.description}
                </p>
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-600 border-2 border-gray-100">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Program */}
        {open && selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            {/* Modal Card */}
            <div
              className="relative z-10 w-full max-w-2xl mx-4 md:mx-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header dengan gradient sesuai program */}
              <div className={`relative p-6 bg-gradient-to-r ${selected.gradient} text-white`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3 shadow">
                      Program Unggulan
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold drop-shadow-sm">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Tutup"
                    onClick={closeModal}
                    className="ml-4 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white hover:bg-red-50 text-red-600 ring-2 ring-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                    autoFocus
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selected.description}
                </p>

                {/* Feature chips */}
                {selected.features && selected.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Fitur Utama</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.features.map((f, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium border border-primary-200 shadow-sm"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/6285183141854"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-semibold shadow hover:bg-primary-700 transition"
                  >
                    Daftar Sekarang
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-700 text-sm font-semibold shadow border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Section
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span>Daftar Sekarang</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Programs;