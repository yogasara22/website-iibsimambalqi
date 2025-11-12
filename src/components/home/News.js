import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../../lib/utils';

export default function News({ news }) {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Berita Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi terbaru seputar kegiatan dan prestasi santri di Pesantren IIBS Imam Balqi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/news/${item.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={item.featured_image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 h-56 sm:h-52 md:h-56 flex flex-col">
                  <div className="text-sm text-gray-600 mb-2">{formatDate(item.date)}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-700 line-clamp-2 sm:line-clamp-2 md:line-clamp-2 mb-3 flex-grow">{item.excerpt}</p>
                  <div className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center mt-auto">
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/news" className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300">
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}