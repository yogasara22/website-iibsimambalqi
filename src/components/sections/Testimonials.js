import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Fauzi',
      role: 'Orang Tua Santri',
      content: 'Alhamdulillah, anak saya mengalami perubahan yang sangat positif setelah belajar di pesantren ini. Tidak hanya hafalan Al-Quran yang bertambah, tapi juga akhlaknya semakin baik.',
      avatar: '/images/testimonials/avatar-1.jpg'
    },
    {
      name: 'Siti Aminah',
      role: 'Alumni Pesantren',
      content: 'Pesantren ini memberikan bekal ilmu agama dan akademik yang sangat bermanfaat. Saya bisa melanjutkan kuliah di universitas ternama berkat pendidikan yang saya dapatkan di sini.',
      avatar: '/images/testimonials/avatar-2.jpg'
    },
    {
      name: 'Hasan Basri',
      role: 'Tokoh Masyarakat',
      content: 'Kehadiran pesantren ini sangat berdampak positif bagi masyarakat sekitar. Para santri aktif dalam kegiatan sosial dan menjadi teladan bagi pemuda di lingkungan kami.',
      avatar: '/images/testimonials/avatar-3.jpg'
    }
  ];

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
        
        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-200">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg flex items-center justify-center text-white border-4 border-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <div className="p-8 pt-12">
                {/* Content */}
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/100x100/10b981/ffffff?text=${testimonial.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.role}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;