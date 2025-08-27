/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  compiler: {
    removeConsole: isProd,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 430, 768, 1024, 1200],
    imageSizes: [24, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: isProd ? 60 * 60 * 24 * 365 : 0,
  },
  
  compress: true,
  
  async headers() {
    if (isProd) {
      return [
        {
          source: '/images/:path*',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/_next/image(.*)',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://www.google.com; frame-ancestors 'none';",
            },
            // Temporairement commenté pour tester si cela résout le problème 401 avec Googlebot
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
            // Temporairement commenté pour tester si cela résout le problème 401 avec Googlebot
            { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          ],
        },
      ];
    }
    return [
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
      { source: '/_next/image(.*)', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
    ];
  },
};

module.exports = nextConfig;