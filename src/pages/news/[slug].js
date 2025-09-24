import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/common/Layout';
import { getContentBySlug, getAllContent } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { formatDate } from '../../lib/utils';

export default function NewsDetail({ post, morePosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }
  
  // Extract headings from content for table of contents
  const extractHeadings = () => {
    if (!post.content) return [];
    
    const headings = [];
    const regex = /<h2[^>]*>(.*?)<\/h2>/g;
    let match;
    
    while ((match = regex.exec(post.content)) !== null) {
      headings.push({
        id: `section-${headings.length + 1}`,
        text: match[1].replace(/<[^>]*>/g, '') // Remove any HTML tags inside heading
      });
    }
    
    return headings;
  };
  
  // Get headings for table of contents
  const headings = extractHeadings();
  
  // Function to handle social media sharing
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;
  
  const handleShare = (platform) => {
    let shareLink = '';
    
    switch(platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`;
        break;
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      default:
        return;
    }
    
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  return (
    <Layout>
      <Head>
        <title>{post.title} | IIBS Imam Balqi</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featured_image} />
      </Head>

      {/* Hero section with improved spacing */}
      <div className="bg-primary-50 pt-24 pb-12 md:pt-32 md:pb-16 mt-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 bg-primary-200/20 w-64 h-64 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 bg-primary-300/10 w-48 h-48 rounded-full -ml-24 -mb-24"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb navigation */}
          <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-primary-600 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Beranda
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link href="/news" className="ml-1 text-gray-600 hover:text-primary-600 md:ml-2">Berita</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="ml-1 text-primary-600 font-medium md:ml-2 truncate max-w-[150px] md:max-w-xs">
                    {post.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-900 mb-6 leading-tight">{post.title}</h1>
            
            {/* Author and date info with improved styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-gray-600 mb-8 bg-white/50 backdrop-blur-sm py-3 px-6 rounded-full shadow-sm">
              <span className="mr-6 flex items-center mb-2 sm:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{post.author}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured image with enhanced styling */}
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <Image 
              src={post.featured_image} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              style={{ objectFit: 'cover' }}
              priority
              fetchpriority="high"
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-primary-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Daftar Isi
            </h3>
            <nav className="toc">
              <ul className="space-y-2 text-sm">
                {post.content.match(/<h2[^>]*>(.*?)<\/h2>/g)?.map((match, index) => {
                  const title = match.replace(/<\/?h2[^>]*>/g, '');
                  const anchor = `section-${index + 1}`;
                  return (
                    <li key={index} className="hover:text-primary-600 transition-colors duration-200">
                      <a 
                        href={`#${anchor}`} 
                        className="flex items-center py-1 border-l-2 border-gray-200 hover:border-primary-500 pl-3"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(anchor);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <span className="w-6 text-primary-500 font-medium">{index + 1}.</span>
                        <span>{title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Content with improved typography and styling */}
          <div className="prose prose-lg max-w-none 
            prose-headings:text-primary-800 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-b prose-h2:border-primary-100 prose-h2:pb-2
            prose-h3:text-xl prose-h3:md:text-2xl prose-h3:text-primary-700
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline prose-a:hover:text-primary-700
            prose-li:text-gray-700 prose-li:mb-2
            prose-ul:my-4 prose-ul:pl-5 prose-ol:pl-5
            prose-strong:text-primary-900 prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-primary-300 prose-blockquote:bg-primary-50 prose-blockquote:p-4 prose-blockquote:italic prose-blockquote:text-gray-700
            prose-img:rounded-lg prose-img:shadow-md">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags and Share buttons */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                {/* Tags section */}
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share buttons */}
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Bagikan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300"
                      aria-label="Share to Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden sm:inline">Facebook</span>
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full transition-all duration-300"
                      aria-label="Share to Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span className="hidden sm:inline">Twitter</span>
                    </button>
                    <button 
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300"
                      aria-label="Share to WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M21.105 4.893c-1.738-1.74-4.052-2.696-6.51-2.696-5.071 0-9.194 4.124-9.194 9.194 0 1.621.422 3.205 1.222 4.596L4.5 21l5.096-1.336a9.155 9.155 0 004.398 1.12h.004c5.07 0 9.194-4.124 9.194-9.194 0-2.458-.956-4.771-2.695-6.51l-.392-.187zm-6.51 14.147h-.003a7.61 7.61 0 01-3.874-1.062l-.278-.166-2.88.756.77-2.816-.182-.29a7.643 7.643 0 01-1.173-4.076c0-4.218 3.433-7.651 7.654-7.651 2.045 0 3.97.797 5.417 2.245a7.634 7.634 0 012.245 5.417c0 4.221-3.433 7.654-7.654 7.654l-.042-.011zm4.208-5.731c-.23-.115-1.363-.673-1.574-.75-.211-.077-.366-.115-.52.115-.154.23-.597.75-.732.904-.135.154-.27.173-.5.058-.23-.115-.973-.359-1.854-1.144-.685-.61-1.148-1.364-1.283-1.594-.135-.23-.014-.354.101-.47.104-.102.231-.265.347-.397.115-.134.154-.23.23-.384.077-.154.039-.288-.019-.403-.058-.115-.52-1.254-.713-1.716-.187-.453-.379-.393-.52-.4-.135-.007-.289-.007-.443-.007-.154 0-.404.058-.616.288-.212.23-.809.79-.809 1.928 0 1.14.828 2.24.943 2.394.116.154 1.63 2.49 3.949 3.49.553.238.984.381 1.32.489.554.175 1.058.15 1.457.09.445-.066 1.363-.557 1.555-1.095.192-.538.192-1 .134-1.095-.058-.096-.212-.154-.443-.27l.002.003z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Berita Lainnya</h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Temukan informasi dan berita terbaru lainnya dari IIBS Imam Balqi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {morePosts.map((post) => (
                <div key={post.slug} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Link href={`/news/${post.slug}`} className="block h-full">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        fetchpriority="auto"
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(post.date)}
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                        <span>Baca selengkapnya</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/news" className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                <span>Lihat Semua Berita</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getContentBySlug('news', params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'featured_image',
    'excerpt',
    'tags',
  ]);
  
  const content = await markdownToHtml(post.content || '');

  // Get more posts, excluding the current one
  const morePosts = getAllContent('news', [
    'title',
    'date',
    'slug',
    'author',
    'featured_image',
    'excerpt',
  ])
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  // Konversi tanggal ke string untuk menghindari error serialisasi
  const serializedPost = {
    ...post,
    date: post.date instanceof Date ? post.date.toISOString() : post.date,
    content
  };

  const serializedMorePosts = morePosts.map(post => ({
    ...post,
    date: post.date instanceof Date ? post.date.toISOString() : post.date
  }));

  return {
    props: {
      post: serializedPost,
      morePosts: serializedMorePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllContent('news', ['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}