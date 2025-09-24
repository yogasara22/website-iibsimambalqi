import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      name: 'Asrama Nyaman',
      description: 'Asrama terpisah untuk santri putra dan putri dengan fasilitas lengkap dan lingkungan yang nyaman untuk mendukung kehidupan sehari-hari.',
      image: '/images/facilities/asrama.jpg',
      icon: '🏠',
      features: ['AC & WiFi', 'Kamar Mandi Dalam', 'Area Belajar']
    },
    {
      name: 'Masjid',
      description: 'Masjid sebagai pusat kegiatan ibadah dan pembelajaran Al-Qur\'an dengan kapasitas besar dan arsitektur yang indah.',
      image: '/images/facilities/masjid.jpg',
      icon: '🕌',
      features: ['Kapasitas 500+', 'Sound System', 'Perpustakaan']
    },
    {
      name: 'Kelas Belajar',
      description: 'Kelas belajar yang nyaman dirancang khusus untuk mendukung pembelajaran santri dengan teknologi modern.',
      image: '/images/facilities/kelas.jpg',
      icon: '📚',
      features: ['Proyektor HD', 'AC & Ventilasi', 'Meja Ergonomis']
    },
    {
      name: 'Laboratorium',
      description: 'Laboratorium sains, komputer, dan bahasa untuk mendukung pembelajaran praktis santri dengan peralatan terkini.',
      image: '/images/facilities/sample-laboratorium.png',
      icon: '🔬',
      features: ['Lab Komputer', 'Lab Sains', 'Lab Bahasa']
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 scroll-mt-10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <span className="mr-2">✨</span>
            Fasilitas Terbaik Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Fasilitas Unggulan
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai fasilitas modern yang dirancang khusus untuk mendukung 
            kegiatan belajar, ibadah, dan pengembangan diri santri secara optimal.
          </p>
        </div>
        
        {/* Enhanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container with Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition duration-700 transform group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/600x400/10b981/ffffff?text=${facility.name.replace(' ', '+')}`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                
                {/* Features Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <div className="flex items-center text-xs text-gray-700 font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {facility.features.length} Fitur
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {facility.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {facility.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Fitur Unggulan:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 group-hover:bg-primary-100 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span>Kunjungi Fasilitas Kami</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;