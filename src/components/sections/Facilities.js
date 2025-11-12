import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      name: 'Asrama Nyaman',
      description: 'Asrama terpisah untuk santri putra dan putri dengan fasilitas lengkap dan lingkungan yang nyaman untuk mendukung kehidupan sehari-hari.',
      image: '/images/facilities/asrama.webp',
      icon: '🏠',
      features: ['AC & WiFi', 'Kamar Mandi Dalam', 'Area Belajar'],
      tier: 'unggulan'
    },
    {
      name: 'Masjid',
      description: 'Masjid sebagai pusat kegiatan ibadah dan pembelajaran Al-Qur\'an dengan kapasitas besar dan arsitektur yang indah.',
      image: '/images/facilities/masjid.webp',
      icon: '🕌',
      features: ['Kapasitas 500+', 'Sound System', 'Perpustakaan'],
      tier: 'unggulan'
    }
  ];

  const extracurriculars = [
    {
      name: 'Rafting',
      description: 'Olahraga yang menyenangkan dan mengembangkan keterampilan fisik dan kesejahteraan.',
      image: '/images/facilities/rafting.webp',
      icon: '🏊',
      features: ['Olahraga', 'Keterampilan Fisik', 'Kesejahteraan'],
      tier: 'biasa'
    },
    {
      name: 'Musik',
      description: 'Belajar musik dengan berbagai instrumen dan pengalaman yang mendalam.',
      image: '/images/facilities/music.webp',
      icon: '🎵',
      features: ['Biola', 'Gitar', 'Bass', 'Drum'],
      tier: 'biasa'
    },
    {
      name: 'Robotik',
      description: 'Belajar membuat robot dan mengembangkan keterampilan teknologi.',
      image: '/images/facilities/robotik.webp',
      icon: '🤖',
      features: ['Machine Learning', 'Programming'],
    },
    {
      name: 'Berkuda',
      description: 'Belajar menunggang kuda dan merawat hewan, mengembangkan keberanian dan tanggung jawab.',
      image: '/images/facilities/berkuda.webp',
      icon: '🐎',
      features: ['Menunggang', 'Perawatan Kuda'],
    }
  ];

  const featuredFacilities = facilities.filter(f => f.tier === 'unggulan');
  const regularFacilities = facilities.filter(f => f.tier === 'biasa');
  const allItems = [
    ...featuredFacilities.map((f) => ({ ...f, kind: 'featured' })),
    ...regularFacilities.map((f) => ({ ...f, kind: 'regular' })),
    ...extracurriculars.map((e) => ({ ...e, kind: 'extracurricular' })),
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
        
        {/* Unified Grid: 12 kolom, items-stretch agar tinggi kartu seragam (lebih rapih & kompak) */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {allItems.map((item, index) => {
            const isFeatured = item.kind === 'featured';
            const isExtracurricular = item.kind === 'extracurricular';
            const placeholderColor = isFeatured
              ? '10b981' // green
              : isExtracurricular
              ? 'f59e0b' // amber
              : '60a5fa'; // blue
            const maxChips = isFeatured ? 3 : 2;

            return (
              <div
                key={`card-${item.kind}-${index}`}
                className={`${isFeatured ? 'col-span-12 md:col-span-12 lg:col-span-6 rounded-2xl shadow-lg' : 'col-span-12 md:col-span-6 lg:col-span-3 rounded-xl shadow'} group relative bg-white overflow-hidden hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1.5 border border-gray-100 h-full flex flex-col`}
              >
                <div className={`absolute inset-0 ${isFeatured ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10' : 'bg-gradient-to-r from-primary-500/5 to-secondary-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>
                <div className={`relative ${isFeatured ? 'h-72' : 'h-48'} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition ${isFeatured ? 'duration-500 transform group-hover:scale-105' : 'duration-400 transform group-hover:scale-105'}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/${isFeatured ? '800x500' : '600x360'}/${placeholderColor}/ffffff?text=${(item.name || '').replace(' ', '+')}`;
                    }}
                  />
                  <div className={`absolute inset-0 ${isFeatured ? 'bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80' : 'bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90'}`}></div>
                  <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full ${isFeatured ? 'bg-amber-400 text-amber-900' : isExtracurricular ? 'bg-secondary-100 text-secondary-700' : 'bg-primary-100 text-primary-700'} text-[11px] font-bold shadow`}>{isFeatured ? 'Unggulan' : isExtracurricular ? 'Ekstrakurikuler' : 'Fasilitas'}</div>
                  <div className={`absolute top-3 right-3 ${isFeatured ? 'w-14 h-14 rounded-2xl text-xl' : 'w-9 h-9 rounded-xl text-lg'} bg-white/90 backdrop-blur-sm flex items-center justify-center shadow`}>{item.icon}</div>
                </div>
                <div className={`${isFeatured ? 'p-6' : 'p-3.5'} flex-1`}> 
                  <h3 className={`${isFeatured ? 'text-xl md:text-2xl' : 'text-base'} font-bold text-gray-800 mb-1.5 group-hover:text-primary-600`}>{item.name}</h3>
                  <p className={`${isFeatured ? 'text-gray-700 leading-relaxed mb-4 line-clamp-3' : 'text-gray-600 text-sm leading-relaxed mb-2.5 line-clamp-2'}`}>{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features?.slice(0, maxChips).map((feature, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center ${isFeatured ? 'px-2.5 py-1 text-[11px]' : 'px-2 py-0.5 text-[10.5px]'} rounded-full font-medium ${isExtracurricular ? 'bg-secondary-50 text-secondary-700 border border-secondary-100' : 'bg-primary-50 text-primary-700 border border-primary-100'}`}
                      >
                        <span className={`${isExtracurricular ? 'bg-secondary-500' : 'bg-primary-500'} w-1.5 h-1.5 rounded-full mr-1.5`}></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Facilities;