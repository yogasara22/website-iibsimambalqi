import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import Facilities from '../components/sections/Facilities';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import News from '../components/sections/News';
import Teachers from '../components/sections/Teachers';
import { getAllContent } from '../lib/api';

export default function Home({ latestNews }) {
  return (
    <Layout
      title="Pesantren Imam Balqi - Pendidikan Islam Berkualitas"
      description="Pesantren Imam Balqi menyediakan pendidikan Islam berkualitas dengan program tahfidz Quran dan pendidikan formal terintegrasi."
    >
      {/* Section 1: Hero */}
      <Hero />
      {/* Section 2: Program Unggulan */}
      <Programs />
      {/* Section 3: Fasilitas & Ekstrakulikuler (digabung dalam Facilities) */}
      <Facilities />
      {/* Section 4: Tentang Kami */}
      <About />
      {/* Section 5: Kontak */}
      <Contact />
      {/* Section 6: Gallery */}
      <Gallery />
      {/* Section 7: Pojok Baca (Artikel) */}
      <News news={latestNews} />
      {/* Section 8: Testimoni Foto dan Video */}
      <Testimonials />
      {/* Section 9: Profile Pengajar */}
      <Teachers />
    </Layout>
  );
}

export async function getStaticProps() {
  // Ambil 3 berita terbaru
  const latestNews = getAllContent('news', [
    'title',
    'date',
    'slug',
    'author',
    'featured_image',
    'excerpt',
  ]).slice(0, 3);

  // Konversi tanggal ke string untuk menghindari error serialisasi
  const serializedNews = latestNews.map(post => ({
    ...post,
    date: post.date instanceof Date ? post.date.toISOString() : post.date
  }));

  return {
    props: {
      latestNews: serializedNews,
    }
  };
}