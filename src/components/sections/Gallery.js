import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImage = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Mencegah scroll saat popup terbuka
  };
  
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden scroll-mt-10">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200 rounded-full opacity-10 blur-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-primary-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-emerald-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-green-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            <span className="mr-2">📸</span>
            Dokumentasi Kegiatan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Galeri Kegiatan
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dokumentasi berbagai kegiatan dan momen berharga di pesantren yang menggambarkan 
            kehidupan santri dan proses pembelajaran yang dinamis
          </p>
        </div>
        
        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div 
              key={item} 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 bg-white border border-gray-100"
              onClick={() => openImage(item)}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              
              <div className="relative p-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={`/images/gallery/gallery-${item}.webp`} 
                    alt={`Gallery Image ${item}`}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-all duration-500 transform group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x300/10b981/ffffff?text=Gallery+${item}`;
                    }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Image Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Foto {item}
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="pt-4 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-xl font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                      Kegiatan Pesantren
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span>Lihat Lebih Banyak Foto</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Image Popup/Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close Button */}
            <div 
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 cursor-pointer hover:bg-white transition-all duration-300 shadow-lg z-10 transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            
            {/* Image Container */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={`/images/gallery/gallery-${selectedImage}.webp`} 
                alt={`Gallery Image ${selectedImage}`}
                className="max-h-[80vh] max-w-full mx-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/800x600/10b981/ffffff?text=Gallery+${selectedImage}`;
                }}
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Kegiatan Pesantren</h3>
                    <p className="text-sm opacity-90">Dokumentasi kegiatan santri</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    {selectedImage} dari 8
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            {selectedImage > 1 && (
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  openImage(selectedImage - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {selectedImage < 8 && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  openImage(selectedImage + 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;