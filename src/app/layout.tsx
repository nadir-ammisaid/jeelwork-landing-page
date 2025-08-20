import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CriticalStyles from './criticalStyles'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#5359a7',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jeelwork.com'),
  title: {
    default: 'Jeelwork Algérie - Trouvez des jobbers de confiance partout en Algérie',
    template: '%s | Jeelwork Algérie'
  },
  description: 'Plateforme de mise en relation avec des jobbers qualifiés dans les 58 wilayas. Électricité, plomberie, peinture, maçonnerie et plus. Service rapide et fiable.',
  keywords: ['artisan algérie', 'plombier algérie', 'électricien algérie', 'bricolage algérie', 'dépannage algérie', 'réparation maison algérie', 'services à domicile algérie', 'Jeelwork'],
  authors: [{ name: 'Jeelwork' }],
  creator: 'Jeelwork',
  publisher: 'Jeelwork',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Jeelwork Algérie - Jobbers de confiance',
    description: "Trouvez rapidement un professionnel près de chez vous dans toute l'Algérie",
    url: 'https://www.jeelwork.com',
    siteName: 'Jeelwork',
    images: [
      {
        url: '/images/landingPagePreview.avif',
        width: 1200,
        height: 600,
        alt: 'Jeelwork - Des jobbers pour tous vos besoins',
      }
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeelwork Algérie',
    description: 'Trouvez des jobbers de confiance partout en Algérie',
    images: ['/images/landingPagePreview.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.jeelwork.com',
    languages: {
      'fr-DZ': 'https://www.jeelwork.com',
      'ar-DZ': 'https://www.jeelwork.com/ar/',
    },
  },
  category: 'Services',
  classification: 'Services à domicile',
  verification: {
    google: 'votre-code-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        {/* SEO: meta description */}
        <meta
          name="description"
          content="Plateforme de mise en relation avec des jobbers qualifiés dans les 58 wilayas. Électricité, plomberie, peinture, maçonnerie et plus. Service rapide et fiable."
        />

        {/* Resource hints to warm up connections earlier */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />


        {/* Inline critical CSS to avoid render-blocking */}
        <CriticalStyles />

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data (JSON-LD) for SEO */}
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jeelwork Algérie",
              "description": "Plateforme de mise en relation avec des jobbers qualifiés",
              "url": "https://www.jeelwork.com",
              "logo": "https://www.jeelwork.com/images/jeelWorkLogo.webp",
              "image": "https://www.jeelwork.com/images/artisanat.avif",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DZ",
                "addressRegion": "Algérie"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.0339",
                "longitude": "1.6596"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Algérie"
              },
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "1250"
              },
              "potentialAction": {
                "@type": "DownloadAction",
                "target": {
                  "@type": "SoftwareApplication",
                  "name": "Jeelwork",
                  "operatingSystem": "Android",
                  "applicationCategory": "BusinessApplication",
                  "url": "https://play.google.com/store/apps/details?id=com.jeeltech.jeelwork"
                }
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics loaded in the background */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
