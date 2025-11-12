import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../../lib/utils';

const News = ({ news }) => {
  // Fallback data jika data dari CMS belum tersedia
  const newsItems = news || [
    {
      title: 'Penerimaan Santri Baru Tahun Ajaran 2023/2024',
      date: '2023-03-15',
      excerpt: 'Pesantren Imam Balqi membuka pendaftaran santri baru untuk tahun ajaran 2023/2024. Segera daftarkan putra-putri Anda!',
      slug: 'penerimaan-santri-baru',
      featured_image: '/images/news/news-1.jpg'
    },
    {
      title: 'Prestasi Membanggakan di Kompetisi Tahfidz Nasional',
      date: '2023-02-10',
      excerpt: 'Alhamdulillah, santri-santri kami berhasil meraih juara dalam Kompetisi Tahfidz Quran tingkat Nasional.',
      slug: 'prestasi-kompetisi-tahfidz',
      featured_image: '/images/news/news-2.jpg'
    },
    {
      title: 'Kunjungan Menteri Agama ke Pesantren',
      date: '2023-01-25',
      excerpt: 'Pesantren Imam Balqi mendapat kehormatan dikunjungi oleh Bapak Menteri Agama dalam rangka program pengembangan pesantren.',
      slug: 'kunjungan-menteri-agama',
      featured_image: '/images/news/news-3.jpg'
    }
  ];

  const displayNews = news || newsItems;

  return (
    <section id="news" className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden scroll-mt-10">
      {/* Enhanced Background Decorations - Different from Gallery */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200 rounded-full opacity-10 blur-2xl"></div>
        
        {/* Floating Elements with different colors */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-indigo-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-10 w-8 h-8 border border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-16 w-6 h-6 border border-indigo-300/30 rotate-12 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            <span className="mr-2">📰</span>
            Pojok Baca
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Berita Terbaru
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di pesantren 
            yang selalu memberikan inspirasi dan pembelajaran berharga
          </p>
        </div>
        
        {/* Enhanced News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayNews.map((item, index) => (
            <div key={item.slug || index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              
              {/* Image Container */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                {item.featured_image ? (
                  <Image 
                    src={item.featured_image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    fetchpriority="auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x300/10b981/ffffff?text=News+${index + 1}`;
                    }}
                  />
                ) : (
                  <img 
                    src={`/images/news/news-${index + 1}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x300/10b981/ffffff?text=News+${index + 1}`;
                    }}
                  />
                )}
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {formatDate ? formatDate(item.date) : item.date}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                  Berita
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-500 font-medium">{formatDate ? formatDate(item.date) : item.date}</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Link 
                  href={`/news/${item.slug}`} 
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group-hover:translate-x-1 transform"
                >
                  Baca selengkapnya
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <Link href="/news" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span>Lihat Semua Berita</span>
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;