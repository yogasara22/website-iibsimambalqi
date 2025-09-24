import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import Facilities from '../components/sections/Facilities';
import Gallery from '../components/sections/Gallery';
import News from '../components/sections/News';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import { getAllContent } from '../lib/api';

export default function Home({ latestNews }) {
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
      <News news={latestNews} />
      <Testimonials />
      <Contact />
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