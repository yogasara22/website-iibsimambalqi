import React from 'react';

const extracurricularActivities = [
  {
    id: 1,
    title: 'Renang',
    description: 'Mengembangkan keterampilan berenang dan ketahanan fisik dalam lingkungan yang aman dan menyenangkan.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-white">
        <path d="M21 12c-4.764 0-5-3.5-9-3.5s-4.236 3.5-9 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8.5C7.764 8.5 8 12 12 12s4.236-3.5 9-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 15.5c4.764 0 5-3.5 9-3.5s4.236 3.5 9 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5l-2 2M19 9l-2-2M5 19l2-2M5 15l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-green-400 to-emerald-600'
  },
  {
    id: 2,
    title: 'Berkuda',
    description: 'Belajar menunggang kuda dan merawat hewan, mengembangkan keberanian dan tanggung jawab.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-white">
        <path d="M21 4h-5l-5 5-3-3-8 7 3 3 5-5 3 3 4-4h4l2-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 4l-2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16v4M16 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Memanah',
    description: 'Melatih fokus, kesabaran, dan ketepatan melalui olahraga memanah yang merupakan sunnah Rasulullah.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20L4 4M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-emerald-500 to-green-700'
  },
  {
    id: 5,
    title: 'Startup',
    description: 'Belajar tentang inovasi, pengembangan produk, dan kewirausahaan digital untuk era modern.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-teal-400 to-green-600'
  },
  {
    id: 6,
    title: 'Entrepreneur',
    description: 'Mengembangkan jiwa wirausaha dan keterampilan bisnis praktis sejak dini.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-green-600 to-emerald-700'
  },
  {
    id: 7,
    title: 'Leadership',
    description: 'Membangun karakter kepemimpinan, kemampuan organisasi, dan keterampilan komunikasi efektif.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'from-emerald-600 to-green-800'
  }
];

// Filter to only include the 6 requested activities
const filteredActivities = extracurricularActivities.filter(
  activity => activity.id !== 4 // Remove Karya Ilmiah
);

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <span className="mr-2">🎯</span>
            Ekstrakurikuler Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Ekstrakurikuler
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mengembangkan bakat dan potensi santri melalui berbagai kegiatan ekstrakurikuler yang mendukung 
            perkembangan fisik, mental, dan spiritual.
          </p>
        </div>

        {/* Clean Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Top Accent */}
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{activity.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{activity.description}</p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center justify-center px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg group-hover:bg-green-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Selengkapnya
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
