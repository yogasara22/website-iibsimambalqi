/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Konfigurasi eksperimental lainnya jika diperlukan
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true, // Tambahkan ini untuk kompatibilitas Netlify
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
    unoptimized: true, // Ini akan memperbaiki warning fetchPriority
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;