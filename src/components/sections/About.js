import React from 'react';
import { SITE_NAME } from '../../lib/constants';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full opacity-10 blur-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-primary-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <span className="mr-2">🏛️</span>
            Mengenal Lebih Dekat
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
            Tentang {SITE_NAME}
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full mx-3"></div>
            <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lembaga pendidikan Islam terdepan yang mengintegrasikan nilai-nilai spiritual 
            dengan pendidikan modern untuk membentuk generasi yang unggul
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Left Content Section */}
          <div className="space-y-8 order-1 lg:order-1">
            {/* Welcome Message Card */}
            <div className="group relative bg-gradient-to-br from-white via-green-50/30 to-primary-50/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 overflow-hidden transform hover:-translate-y-2">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-green-500"></div>
              
              <div className="relative">
                {/* Welcome Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-green-500 rounded-3xl mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Selamat Datang
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Bergabunglah dengan keluarga besar {SITE_NAME} dan rasakan pengalaman pendidikan Islam yang transformatif dan berkarakter.
                </p>
                
                {/* Key Features */}
                <div className="space-y-4">
                  {[
                    { icon: '🎓', text: 'Pendidikan Berkualitas Internasional' },
                    { icon: '🕌', text: 'Lingkungan Islami yang Kondusif' },
                    { icon: '👥', text: 'Komunitas Santri yang Solid' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-primary-100 rounded-2xl flex items-center justify-center">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Soft Image Section */}
            <div className="relative group">
              {/* Soft Background Decorations */}
              <div className="absolute -inset-8 bg-gradient-to-br from-green-100/40 via-primary-50/30 to-emerald-100/40 rounded-[3rem] blur-2xl opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-tl from-primary-100/30 via-green-50/40 to-primary-100/30 rounded-[2.5rem] blur-xl opacity-50"></div>
              <div className="absolute -inset-4 bg-white/20 rounded-[2rem] backdrop-blur-sm"></div>
              
              {/* Floating Soft Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-200 to-primary-200 rounded-full opacity-40 blur-sm animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary-200 to-emerald-200 rounded-full opacity-30 blur-sm animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 -right-8 w-6 h-6 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full opacity-35 blur-sm animate-float" style={{animationDelay: '4s'}}></div>
              
              {/* Main Image Container with Soft Design */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-green-100/50 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-green-200/30 bg-white/10 backdrop-blur-sm border border-white/20">
                {/* Soft Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-green-50/10 pointer-events-none"></div>
                
                <img 
                  src="/images/abouts/about-pesantren.webp" 
                  alt="Pesantren" 
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105 filter brightness-105 contrast-95"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400?text=Pesantren+Image';
                  }}
                />
                
                {/* Soft Corner Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-50/30 to-transparent rounded-tr-3xl"></div>
              </div>
              
              {/* Soft Reflection Effect */}
              <div className="absolute -bottom-8 left-4 right-4 h-8 bg-gradient-to-b from-green-100/20 to-transparent rounded-b-[2rem] blur-sm opacity-40"></div>
            </div>

            {/* Stats Section - Moved here */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: '500+', label: 'Santri Aktif', icon: '👥' },
                { number: '50+', label: 'Tenaga Pengajar', icon: '👨‍🏫' },
                { number: '10+', label: 'Program Unggulan', icon: '📚' },
                { number: '5+', label: 'Tahun Pengalaman', icon: '🏆' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Right Content Section */}
          <div className="space-y-8 order-2 lg:order-2">
            {/* Visi Card */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-green-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-green-500 rounded-2xl mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Visi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi Lembaga Pendidikan Islam berbasis Iman dan Adab, Mandiri, Cakap dan Unggul yang mampu bersaing secara Global dalam menghadapi tantangan zaman.
                </p>
              </div>
            </div>
            
            {/* Misi Card */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-green-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-green-500 rounded-2xl mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Misi
                </h3>
                  <ul className="space-y-3">
                    {[
                      "Menjadi Lembaga Pendidikan Islam yang memadukan kurikulum pendidikan nasional, internasional dan pesantren.",
                      "Menjadi Lembaga studi Al-Qur'an dan kitab para ulama bersanad secara sistematis berbasis iman dan adab sebagai dasar pembelajaran.",
                      "Mencetak anak bangsa yang mandiri, tangguh, cakap dan mampu menjadi teladan berakhlakul karimah yang siap menghadapi perkembangan zaman.",
                      "Menjadi Lembaga Pendidikan Islam yang kredibel dan berkualitas dalam menyediakan sistem pembelajaran aktif, menyenangkan dan bermutu tinggi pada penguasaan Imtaq dan Iptek."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
            
            {/* Tujuan Card */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-green-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-green-500 rounded-2xl mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Tujuan
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mencetak para penghafal Al-Qur'an bersanad yang mandiri mampu bersaing Global dalam perkembangan Imtaq dan Iptek.",
                    "Menyediakan kurikulum Lembaga Pendidikan Islam yang komprehensif untuk mendidik santri unggul dalam prestasi akademik maupun agama.",
                    "Sebagai tempat menempa kecerdasan, kemandirian, kecakapan, keberanian dan kedisiplinan.",
                    "Memfasilitasi santri dalam penguasaan bahasa asing, inggris dan arab sebagai bahasa pengantar pendidikan dan keahlian dalam berbahasa."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default About;