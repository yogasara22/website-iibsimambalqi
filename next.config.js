/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Konfigurasi eksperimental lainnya jika diperlukan
  },
  output: 'export',
  reactStrictMode: false, // Disable untuk static export
  trailingSlash: true,
  distDir: 'out',
  generateEtags: false,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'via.placeholder.com', 'placehold.co'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    // Ignore fs module untuk browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    return config;
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Custom path mapping untuk static export
    const pathMap = {
      '/': { page: '/' },
      '/news': { page: '/news' },
      // Dynamic routes perlu didefinisikan secara eksplisit
    };
    
    // Jika ada file berita, tambahkan ke path map
    try {
      const fs = require('fs');
      const path = require('path');
      const newsDir = path.join(process.cwd(), 'content', 'news');
      
      if (fs.existsSync(newsDir)) {
        const newsFiles = fs.readdirSync(newsDir).filter(file => file.endsWith('.md'));
        
        newsFiles.forEach(file => {
          const slug = file.replace('.md', '');
          pathMap[`/news/${slug}`] = { 
            page: '/news/[slug]', 
            query: { slug } 
          };
        });
      }
    } catch (error) {
      console.log('Warning: Could not read news directory during export');
    }
    
    return pathMap;
  },
};

module.exports = nextConfig;