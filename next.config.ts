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
  
  // ✅ AJOUT: Optimisations expérimentales
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'], // Si vous utilisez des icônes
  },

  // ✅ AJOUT: Configuration webpack pour réduire la taille des bundles
  webpack: (config: import('webpack').Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      if (!config.optimization) {
        config.optimization = {};
      }
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context
                ? module.context.match(/[\\/]node_modules[\\/](.*?)([[\\/]|$)/)?.[1]
                : undefined;
              return `npm.${packageName?.replace('@', '')}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  
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
        // ... reste des headers existants ...
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