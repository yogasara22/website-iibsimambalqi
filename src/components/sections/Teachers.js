import React from 'react';

const Teachers = () => {
  const teachers = [
    { name: 'Ustadz Muhammad Bilal, S.Kom., M.Sc', role: 'Pengajar Mapel Adabul Mufrod', avatar: '/images/pengajar/ust-bilal.jpg' },
    { name: 'Ustadz Drs. Ahmad Wahyudi', role: 'Pengajar Mapel Siroh Nabawiyyah', avatar: '/images/pengajar/ust-ahmad.jpg' },
    { name: 'Ustadz M. Erfan Bahrudin, Lc. M.H', role: 'Pengajar Mapel Arabic', avatar: '/images/pengajar/ust-erfan.jpg' },
    { name: 'Ustadzah Dewi Indasyah, S.Pd.', role: 'Pengajar Mapel English', avatar: '/images/pengajar/ustadzah-dewi.jpg' },
  ];

  return (
    <section id="teachers" className="py-20 bg-gray-50 relative overflow-hidden scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            <span className="mr-2">👨‍🏫</span>
            Profil Pengajar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Tenaga Pengajar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Berpengalaman dan berdedikasi dalam mendampingi santri menuju kesuksesan dunia dan akhirat.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
          {teachers.map((t, idx) => (
            <div key={idx} className="group bg-white rounded-3xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden p-6 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-green-100 mr-4">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/100x100/10b981/ffffff?text=${t.name.charAt(0)}`; }} />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-800 group-hover:text-green-600">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;