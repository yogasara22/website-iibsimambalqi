import React from 'react';
import { CONTACT_INFO } from '../../lib/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white scroll-mt-10 relative overflow-hidden">
      {/* Floating Elements & Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-green-100/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-50/40 to-blue-50/40 rounded-full blur-md animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-50/30 to-green-50/30 rounded-full blur-sm animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-10 w-8 h-8 border border-green-200/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-16 w-6 h-6 border border-blue-200/30 rotate-12 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/30 rounded-full mb-4">
            <span className="text-sm font-medium text-green-700">Hubungi Kami</span>
          </div>
          
          {/* Main Title with gradient */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-green-700 to-blue-600 bg-clip-text text-transparent">
            Hubungi Kami
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <div className="mx-3 flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut tentang program pendidikan di pesantren kami.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="relative">
            {/* Card with subtle effects */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Informasi Kontak</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start group/item hover:bg-green-50/50 p-3 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Alamat</p>
                      <p className="text-gray-600">{CONTACT_INFO?.address || 'Jl. Lamtana 2B Kampung Inggris Pare Kediri'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Telepon</p>
                      <p className="text-gray-600">{CONTACT_INFO?.phone || '+62 851 8314 1854'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:bg-green-50/50 p-3 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <span className="text-lg">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Email</p>
                      <p className="text-gray-600">{CONTACT_INFO?.email || 'info@iibsimambalqi.com'}</p>
                    </div>
                  </div>
                </div>
                
                {/* Operating Hours Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">🕒</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">Jam Operasional</h4>
                  </div>
                  <div className="space-y-2 ml-13">
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium text-gray-800">08.00 - 16.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-medium text-gray-800">08.00 - 12.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <span className="text-gray-600">Minggu</span>
                      <span className="font-medium text-red-500">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="relative">
            {/* Form card with glass morphism */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Kirim Pesan</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700 group-focus-within:text-green-600 transition-colors duration-200">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300 hover:bg-white/70 placeholder-gray-400"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors duration-200">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 hover:bg-white/70 placeholder-gray-400"
                        placeholder="contoh@email.com"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-green-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700 group-focus-within:text-green-600 transition-colors duration-200">
                      Pesan
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300 hover:bg-white/70 placeholder-gray-400 resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] relative overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center">
                        <span className="mr-2">Kirim Pesan</span>
                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;