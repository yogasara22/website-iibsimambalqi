import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sheira Ramadhani Ani W.',
      role: 'Santri',
      content: 'Alhamdulillah saya senang bersekolah disini karena ustadz, ustadzah, dan teman-teman disini sangat baik. Di IIBS Imam Balqi Pare juga mengajarkan kita untuk menjadi pribadi yang baik dan tangguh, serta mengajarkan kita untuk peduli dengan satu sama lain. Semoga IIBS Imam Balqi Pare dapat menjadi pedoman bagi masyarakat, dan melahirkan generasi yang bisa mengembangkan potensi mereka masing-masing.',
      avatar: '/images/testimonials/Sheila.webp'
    },
    {
      name: 'Sheila Ramadhani Ani W.',
      role: 'Santri',
      content: 'IIBS Imam Balqi Pare telah mengajarkan saya arti sejati kesabaran, ketekunan, dan keikhlasan. Saya sangat berterima kasih atas pengalaman berharga dan kenangan indah selama menjadi santri disini. IIBS Imam Balqi Pare juga telah membentuk saya menjadi pribadi yang lebih baik, sabar, dan peduli dengan sesama. Selain itu, lingkungan sekolah yang kondusif dan suportif mendukung saya untuk bertumbuh dan berkembang dengan baik. Harapan saya, semoga IIBS Imam Balqi Pare terus menjadi tempat yang mencetak generasi yang berakhlak mulia dan berilmu. Semoga terus menjadi lembaga pendidikan yang mencipta generasi rabbani, cerdas, dan berakhlak mulia.',
      avatar: '/images/testimonials/Sheira.webp'
    }
  ];

  // Video testimonials data (YouTube) + Instagram Reel
  const videoTestimonials = [
    {
      name: 'Ust. M. Erfan Bahrudin, Lc. M.H',
      role: 'Ustadz',
      youtubeId: 'hrHGD13J8d0',
      description: 'Alhamdulillah saat ini saya berada di Masjid Nabawi yang mulia. Yang mana pada momen kali ini saya ingin bersyukur kepada Allah SWT dan saya ucapkan terima kasih yang sangat besar kepada jajaran pengurus IIBS Imam Balqi yang telah memberikan hadiah yang sitimewa untuk bisa melaksanakan ibadah umroh pada tahun ini. Alhamdulillah dengan hadiah ini, kami berharap Allah SWT memberikan pahala yang sangat besar dan menerima segala ibadah kami beserta pengurus IIBS Imam Balqi Pare Kediri. Saya juga berharap semoga Allah SWT slelau memberikan taufik-Nya, bimbingan, dan kebaikan-kebaikan kepada para guru, santri, beserta santriwati di IIBS Imam Balqi.'
    }
  ];

  // Modal Video State & Handlers
  const [videoOpen, setVideoOpen] = useState(false);
  // activeVideo: { type: 'youtube'|'instagram', id: string }
  const [activeVideo, setActiveVideo] = useState(null);

  const openYouTube = (ytId) => {
    setActiveVideo({ type: 'youtube', id: ytId });
    setVideoOpen(true);
  };
  const openInstagram = (reelCode) => {
    setActiveVideo({ type: 'instagram', id: reelCode });
    setVideoOpen(true);
  };
  const closeVideo = () => {
    setVideoOpen(false);
    // kecilkan jeda agar iframe unload
    setTimeout(() => setActiveVideo(null), 150);
  };

  // ESC untuk menutup modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeVideo();
    };
    if (videoOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [videoOpen]);

  return (
    <section id="testimonials" className="py-24 bg-gray-100 relative overflow-hidden scroll-mt-10">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-primary-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-emerald-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-green-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-green-300 rounded-full opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-primary-300 rounded-full opacity-20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            <span className="mr-2">💬</span>
            Kata Mereka
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Testimoni
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengarkan pengalaman dan cerita inspiratif dari para orang tua, alumni, 
            dan masyarakat yang telah merasakan dampak positif pesantren
          </p>
        </div>
        
        {/* Unified Grid: Testimoni Foto + Video (YouTube + Instagram) */}
        {(() => {
          const unifiedItems = [
            ...testimonials.map((t) => ({ kind: 'text', ...t })),
            ...videoTestimonials.map((v) => ({ kind: 'video', ...v })),
          ];
          return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {unifiedItems.map((item, idx) => {
                const isYouTube = item.kind === 'video';
                const isInstagram = item.kind === 'instagram';
                const isVideo = isYouTube || isInstagram;
                const thumb = isYouTube
                  ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                  : isInstagram
                  ? `https://via.placeholder.com/800x450/E1306C/ffffff?text=Instagram+Reel`
                  : item.avatar;
                return (
                  <div key={`unified-${idx}`} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-200 hover:ring-1 hover:ring-green-200 h-full flex flex-col">
                    {/* Card Glow & Accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>

                    {/* Media Section (seragam untuk foto & video) */}
                    <div className="relative h-40 md:h-44 overflow-hidden">
                      <img
                        src={thumb}
                        alt={isVideo ? (item.title || 'Video') : item.name}
                        className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          const text = encodeURIComponent(isYouTube ? (item.title || 'Video') : item.name);
                          e.target.src = `https://via.placeholder.com/800x450/10b981/ffffff?text=${text}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      {/* Play Button untuk Video */}
                      {isYouTube && (
                        <button
                          type="button"
                          aria-label={`Putar video ${item.title || 'Video'}`}
                          onClick={() => openYouTube(item.youtubeId)}
                          className={`absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl ring-2 ring-white/80 flex items-center justify-center transition bg-white/90 text-green-600 hover:ring-green-300 hover:bg-green-50`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6 flex-1">
                      {isVideo ? (
                        <>
                          <h4 className="font-bold text-base md:text-lg text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">{item.title}</h4>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.description}</p>
                        </>
                      ) : (
                        <p className="text-gray-700 italic mb-5 leading-relaxed text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300 line-clamp-3">"{item.content}"</p>
                      )}

                      <div className="flex items-center">
                        {!isVideo && (
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-4 ring-3 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                              <img 
                                src={item.avatar} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = `https://via.placeholder.com/100x100/10b981/ffffff?text=${item.name.charAt(0)}`;
                                }}
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-green-600 transition-colors duration-300">{item.name}</h3>
                          <p className="text-xs text-gray-600 font-medium">{item.role}</p>
                          {!isVideo && (
                            <div className="flex items-center mt-2 space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>

      {/* Video Modal (YouTube atau Instagram) */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pemutar Video Testimoni"
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeVideo}
          ></div>
          {/* Modal Card */}
          <div className="relative z-[110] w-[92%] max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Video Testimoni</div>
              <button
                type="button"
                onClick={closeVideo}
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white text-red-600 ring-2 ring-red-300 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 shadow"
                aria-label="Tutup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black">
            {activeVideo && activeVideo.type === 'youtube' && (
              <iframe
                title="Video Testimoni YouTube"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {activeVideo && activeVideo.type === 'instagram' && (
              <iframe
                title="Video Testimoni Instagram"
                width="100%"
                height="100%"
                src={`https://www.instagram.com/reel/${activeVideo.id}/embed`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    )}
  </section>
);
};

export default Testimonials;