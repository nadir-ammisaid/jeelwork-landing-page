import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import DownloadSection from '../components/DownloadSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import FAQSection from '../components/FAQSection'
import AreasServedSection from '../components/AreasServedSection'
import RecentJobbersSection from '../components/RecentJobbersSection'

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
        <AreasServedSection />
        <DownloadSection />
        <TestimonialsSection />
        <FAQSection/>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
