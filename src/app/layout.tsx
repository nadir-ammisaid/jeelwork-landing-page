import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6366f1',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jeelwork.com'),
  title: 'Jeelwork Algérie - Trouvez des jobbers de confiance partout en Algérie',
  description: 'Plateforme de mise en relation avec des jobbers qualifiés dans les 58 wilayas. Électricité, plomberie, peinture, maçonnerie et plus. Service rapide et fiable.',
  keywords: 'artisan algérie, plombier algérie, électricien algérie, bricolage algérie, dépannage algérie, réparation maison algérie, services à domicile algérie, Jeelwork',
  authors: [{ name: 'Jeelwork' }],
  creator: 'Jeelwork',
  publisher: 'Jeelwork',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Jeelwork Algérie - Jobbers de confiance',
    description: 'Trouvez rapidement un professionnel près de chez vous dans toute l\'Algérie',
    url: 'https://jeelwork.com',
    siteName: 'Jeelwork',
    images: [
      {
        url: '../../public/images/landingPagePreview.jpg',
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
    images: ['../../public/images/landingPagePreview.jpg'],
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
    canonical: 'https://jeelwork.com',
    languages: {
      'fr-DZ': 'https://jeelwork.com',
      'ar-DZ': 'https://jeelwork.com/ar/',
    },
  },
  category: 'Services',
  classification: 'Services à domicile',
  verification: {
    google: 'votre-code-google', // À ajouter après vérification Google sur https://search.google.com/search-console
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jeelwork Algérie",
              "description": "Plateforme de mise en relation avec des jobbers qualifiés",
              "url": "https://jeelwork.com",
              "logo": "https://jeelwork.com/images/jeelWorkLogo.webp",
              "image": "https://jeelwork.com/images/artisanat.jpg",
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
        
        {/* Google Analytics - Remplacez GA_MEASUREMENT_ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
