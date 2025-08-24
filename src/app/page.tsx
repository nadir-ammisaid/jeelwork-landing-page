import { default as nextDynamic } from 'next/dynamic'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

// ✅ ÉTAPE 3: Lazy loading compatible Next.js 15 - Sans ssr: false
const ServicesSection = nextDynamic(() => import('../components/ServicesSection'), {
  loading: () => <div style={{ height: '400px', background: '#f8f9fa' }} />
})

const HowItWorksSection = nextDynamic(() => import('../components/HowItWorksSection'), {
  loading: () => <div style={{ height: '500px', background: '#fff' }} />
})

const DownloadSection = nextDynamic(() => import('../components/DownloadSection'), {
  loading: () => <div style={{ height: '400px', background: '#f8f9fa' }} />
})

const CTASection = nextDynamic(() => import('../components/CTASection'), {
  loading: () => <div style={{ height: '300px', background: '#6366f1' }} />
})

const Footer = nextDynamic(() => import('../components/Footer'), {
  loading: () => <div style={{ height: '400px', background: '#1f2937' }} />
})

const RecentJobbersSection = nextDynamic(() => import('../components/RecentJobbersSection'), {
  loading: () => <div style={{ height: '400px', background: '#fff' }} />
})

// Lazy loading des composants lourds (below the fold)
const TestimonialsSection = nextDynamic(() => import('../components/TestimonialsSection'), {
  loading: () => <div style={{ height: '400px', background: '#f8f9fa' }} />
})

const FAQSection = nextDynamic(() => import('../components/FAQSection'), {
  loading: () => <div style={{ height: '500px', background: 'linear-gradient(135deg, #6366f1 0%, #e2e8f0 100%)' }} />
})

const AreasServedSection = nextDynamic(() => import('../components/AreasServedSection'), {
  loading: () => <div style={{ height: '300px', background: '#fff' }} />
})

export const dynamic = 'force-static';

export const revalidate = 7200;

export default function Home() {
  return (
    <>
      {/* Seuls Header et Hero chargent immédiatement (above-the-fold) */}
      <Header />
      <main>
        <HeroSection />
        {/* Tout le reste charge en lazy (below-the-fold) */}
        <ServicesSection />
        <RecentJobbersSection />
        <HowItWorksSection />
        <DownloadSection />
        <TestimonialsSection />
        <FAQSection/>
        <AreasServedSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}