import { useState, useEffect } from 'react';

const useActiveSection = (sections, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Cek apakah di bagian atas halaman (home)
      if (scrollPosition < window.innerHeight / 2) {
        setActiveSection('/');
        return;
      }

      // Cek section mana yang sedang aktif
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const topPosition = rect.top + window.scrollY;
        const bottomPosition = topPosition + rect.height;

        if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
          setActiveSection(section.path);
          return;
        }
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    
    // Panggil sekali untuk set initial state
    handleScroll();

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, offset]);

  return activeSection;
};

export default useActiveSection;