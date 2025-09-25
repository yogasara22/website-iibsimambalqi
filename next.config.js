/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Konfigurasi eksperimental lainnya jika diperlukan
  },
  output: 'export',
  distDir: 'out',
  reactStrictMode: false, // Disable untuk static export
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/news': { page: '/news' },
      '/news/2023-08-15-penerimaan-santri-baru': { page: '/news/[slug]', query: { slug: '2023-08-15-penerimaan-santri-baru' } },
      '/news/2023-09-10-prestasi-lomba-tahfidz': { page: '/news/[slug]', query: { slug: '2023-09-10-prestasi-lomba-tahfidz' } },
      '/news/2023-10-20-kunjungan-studi-ke-universitas': { page: '/news/[slug]', query: { slug: '2023-10-20-kunjungan-studi-ke-universitas' } },
    };
  },
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
};

module.exports = nextConfig;
