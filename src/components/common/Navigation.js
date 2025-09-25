import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ mobile = false, scrolled = false }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  const navItems = [
    { label: 'Beranda', path: '/', id: 'home', icon: 'home' },
    { label: 'Tentang', path: '/#about', id: 'about', icon: 'info' },
    { label: 'Program', path: '/#programs', id: 'programs', icon: 'book' },
    { label: 'Fasilitas', path: '/#facilities', id: 'facilities', icon: 'building' },
    { label: 'Galeri', path: '/#gallery', id: 'gallery', icon: 'image' },
    { label: 'Kontak', path: '/#contact', id: 'contact', icon: 'phone' },
  ];
  
  // Mengatasi hydration error dengan memastikan rendering client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  const navClasses = mobile
    ? 'flex flex-col space-y-2'
    : 'flex items-center space-x-1 md:space-x-2 flex-wrap justify-center md:justify-start';

  // Fungsi untuk mendapatkan class untuk mobile
  const getMobileClasses = (isActive) => {
    return `flex items-center space-x-3 px-4 py-3 rounded-lg ${
      isActive
        ? 'bg-primary-100 text-primary-700 font-medium'
        : 'text-primary-800 hover:bg-primary-50 hover:text-primary-600'
    } transition duration-200 ease-in-out text-base`;
  };

  // Fungsi untuk mendapatkan class untuk desktop
  const getDesktopClasses = (isActive) => {
    return `px-3 py-2 rounded-full font-medium ${
      isActive
        ? 'bg-primary-600 text-white'
        : 'text-white hover:bg-white/20 hover:text-white'
    } transition-all duration-200 ease-in-out text-sm`;
  };

  // Fungsi untuk mendapatkan class setelah client-side rendering
  const getClientSideClasses = (path) => {
    const isActive = router.asPath === path;
    
    if (mobile) {
      return getMobileClasses(isActive);
    }
    
    if (isActive) {
      return `px-3 py-2 rounded-full font-medium bg-primary-600 text-white transition-all duration-200 ease-in-out text-sm`;
    }
    
    return scrolled
      ? `px-3 py-2 rounded-full font-medium text-primary-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 ease-in-out text-sm`
      : `px-3 py-2 rounded-full font-medium text-white hover:bg-white/20 hover:text-white transition-all duration-200 ease-in-out text-sm`;
  };

  const getIcon = (iconName) => {
    const iconClasses = "w-5 h-5";
    
    switch(iconName) {
      case 'home':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
      case 'info':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      case 'book':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
      case 'building':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
      case 'image':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
      case 'newspaper':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>;
      case 'phone':
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
      default:
        return null;
    }
  };

  // Fungsi untuk mendapatkan class untuk link
  const linkClasses = (path) => {
    // Pada server-side rendering, gunakan class yang konsisten
    if (!mounted) {
      const isActive = router.asPath === path;
      return mobile ? getMobileClasses(isActive) : getDesktopClasses(isActive);
    }
    
    // Pada client-side rendering, gunakan class yang lebih dinamis
    return getClientSideClasses(path);
  };

  return (
    <nav className={navClasses}>
      {navItems.map((item) => (
        <Link href={item.path} key={item.path} passHref>
          <a className={linkClasses(item.path)}>
            {mobile ? (
              <div className="flex items-center">
                <span className="text-primary-500">{getIcon(item.icon)}</span>
                <span className="ml-3">{item.label}</span>
              </div>
            ) : (
              <span>{item.label}</span>
            )}
          </a>
        </Link>
      ))}
      
      {!mobile && (
        <a 
          href="https://wa.me/6285183141854" 
          className={`ml-2 px-4 py-2 rounded-full font-medium bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out text-sm flex items-center`}
        >
          <span>Daftar Sekarang</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </nav>
  );
};

export default Navigation;