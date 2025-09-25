import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import Facilities from '../components/sections/Facilities';
import Gallery from '../components/sections/Gallery';
import Extracurricular from '../components/sections/Extracurricular';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout
      title="Pesantren Imam Balqi - Pendidikan Islam Berkualitas"
      description="Pesantren Imam Balqi menyediakan pendidikan Islam berkualitas dengan program tahfidz Quran dan pendidikan formal terintegrasi."
    >
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Extracurricular />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
    }
  };
}