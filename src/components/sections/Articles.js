import React from 'react';

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-white relative overflow-hidden scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <span className="mr-2">📚</span>
            Pojok Baca
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
            Artikel Terbaru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kumpulan artikel dan tulisan inspiratif seputar pendidikan, keislaman, dan kegiatan pesantren.</p>
        </div>

        {/* Placeholder cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary-100 to-green-100" />
              <div className="p-5">
                <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 font-semibold mb-2">Artikel</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Judul Artikel {i}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">Deskripsi singkat artikel sebagai placeholder. Konten asli akan ditambahkan kemudian.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;