import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/responsive.css';
import { initSmoothScroll } from '../lib/smoothScroll';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;