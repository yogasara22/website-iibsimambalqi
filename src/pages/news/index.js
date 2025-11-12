import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/common/Layout';
import { getAllPosts } from '../../lib/posts';
import { formatDate } from '../../lib/utils';

export default function NewsIndex({ allPosts, allTags }) {
  const [activeTag, setActiveTag] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Filter posts based on active tag
  const filteredPosts = useMemo(() => {
    if (activeTag === 'all') return allPosts;
    return allPosts.filter(post => post.tags && post.tags.includes(activeTag));
  }, [allPosts, activeTag]);
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Reset to first page when changing tag filter
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  return (
    <Layout>
      <Head>
        <title>Berita | IIBS Imam Balqi</title>
        <meta name="description" content="Berita terbaru dari Pesantren IIBS Imam Balqi" />
      </Head>

      <div className="bg-gradient-to-b from-primary-50 to-white py-20 mt-10 relative overflow-hidden">
        {/* Ilustrasi background */}
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Elemen dekoratif - Lingkaran */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full -mr-20 -mt-20 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full -ml-40 -mb-40 opacity-20"></div>
        
        {/* Elemen dekoratif - Garis dan Titik */}
        <div className="absolute top-1/4 left-10 w-20 h-1 bg-primary-400 opacity-30 transform rotate-45"></div>
        <div className="absolute top-1/4 left-16 w-3 h-3 bg-primary-500 opacity-40 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-1 bg-primary-400 opacity-30 transform -rotate-45"></div>
        <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-primary-500 opacity-40 rounded-full"></div>
        
        {/* Elemen dekoratif - Ikon */}
        <div className="absolute top-1/2 left-1/4 text-primary-300 opacity-20 transform -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-primary-300 opacity-20 transform rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4">Berita Terbaru</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Dapatkan informasi terbaru seputar kegiatan dan prestasi santri di Pesantren IIBS Imam Balqi Pare Kediri
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Tags */}
          <div className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Filter Berita
            </h2>
            <div className="flex flex-wrap gap-3">
              <button 
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTag === 'all' ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTag('all')}
              >
                Semua
              </button>
              {allTags.map(tag => (
                <button 
                  key={tag}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTag === tag ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results summary */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Menampilkan <span className="font-medium text-primary-700">{currentPosts.length}</span> dari <span className="font-medium text-primary-700">{filteredPosts.length}</span> berita
              {activeTag !== 'all' && <span> dengan tag <span className="font-medium text-primary-700">"{activeTag}"</span></span>}
            </p>
            
            <div className="text-sm text-gray-500">
              Halaman {currentPage} dari {totalPages}
            </div>
          </div>
          
          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.length > 0 ? currentPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="relative h-52 w-full">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                    fetchpriority="auto"
                  />
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.tags[0]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                  <Link href={`/news/${post.slug}`} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center group">
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )) : (
              <div className="col-span-3 py-16 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5M5 14h5m5 0h5" />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Tidak ada berita ditemukan</h3>
                <p className="text-gray-500">Tidak ada berita yang sesuai dengan filter yang dipilih</p>
                <button 
                  onClick={() => setActiveTag('all')} 
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Tampilkan semua berita
                </button>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`mr-2 p-2 rounded-md ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-label="Previous page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === number
                          ? 'bg-primary-600 text-white font-medium'
                          : 'text-gray-700 hover:bg-primary-50'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`ml-2 p-2 rounded-md ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-label="Next page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const posts = getAllPosts();
    
    // Konversi tanggal ke string untuk menghindari error serialisasi
    const serializedPosts = posts.map(post => ({
      ...post,
      date: post.date instanceof Date ? post.date.toISOString() : post.date
    }));
    
    // Ekstrak hanya tag pertama (yang muncul di badge) dari setiap post
    const allTags = Array.from(
      new Set(
        serializedPosts
          .map(post => post.tags && post.tags.length > 0 ? post.tags[0] : null)
          .filter(Boolean)
      )
    );

    return {
      props: { 
        allPosts: serializedPosts,
        allTags
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps for news index:', error);
    return {
      props: {
        allPosts: [],
        allTags: []
      }
    };
  }
}