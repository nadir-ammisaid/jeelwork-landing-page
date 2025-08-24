/** @type {import('next').NextConfig} */
// Build environment flag
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // ✅ ÉTAPE 1 & 4: Optimisations JavaScript et compilation moderne
  compiler: {
    removeConsole: isProd, // Supprime console.log en production
  },
  // swcMinify est activé par défaut dans Next.js 15
  
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    // Tailles alignées sur tes breakpoints et le cap 1200px du hero
    deviceSizes: [360, 430, 768, 1024, 1200],
    // Tailles pour icônes/visuels non full-width (ajuste si besoin)
    imageSizes: [24, 32, 48, 64, 96, 128, 256],
    // Long cache en prod, désactivé en dev
    minimumCacheTTL: isProd ? 60 * 60 * 24 * 365 : 0,
  },
  
  // HTTP compression
  compress: true,
  
  // Custom HTTP headers
  async headers() {
    if (isProd) {
      // Production headers
      return [
        // Long cache for static images in /public/images
        {
          source: '/images/:path*',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        // Long cache for Next.js image optimizer responses
        {
          source: '/_next/image(.*)',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        // Security headers and general policies
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';",
            },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
            { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          ],
        },
      ];
    }
    // Development headers (no caching to ease asset updates)
    return [
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
      { source: '/_next/image(.*)', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
    ];
  },
};

module.exports = nextConfig;