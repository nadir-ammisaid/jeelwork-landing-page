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

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
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
