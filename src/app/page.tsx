import { default as nextDynamic } from 'next/dynamic'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import DownloadSection from '../components/DownloadSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import RecentJobbersSection from '../components/RecentJobbersSection'

// Lazy loading des composants lourds (below the fold) - compatible Next.js 15
const TestimonialsSection = nextDynamic(() => import('../components/TestimonialsSection'), {
  loading: () => <div style={{ height: '400px' }} /> // placeholder pour éviter le layout shift
})
const FAQSection = nextDynamic(() => import('../components/FAQSection'), {
  loading: () => <div style={{ height: '500px' }} />
})
const AreasServedSection = nextDynamic(() => import('../components/AreasServedSection'), {
  loading: () => <div style={{ height: '300px' }} />
})

export const dynamic = 'force-static';

export const revalidate = 7200;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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