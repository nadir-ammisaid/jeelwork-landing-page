'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()
  
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === '/') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Redirection vers la page d'accueil avec ancre
      router.push(`/${href.replace(/^\/+/, '')}`)
    }
  }

  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <nav className="footer-links" aria-label="Navigation footer">
          <Link href="/#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</Link>
          <Link href="/#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>Comment ça marche</Link>
          <Link href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Télécharger</Link>
          <Link href="/#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Témoignages</Link>
          <Link href="/#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</Link>
          <Link href="/terms-of-use">Conditions d&apos;utilisation</Link>
          <Link href="/privacy-policy">Politique de confidentialité</Link>
        </nav>
        
        <div className="footer-bottom">
          <div className="logo logo-footer">
            <Image
              src="/images/palestine-flag-circular-17840.svg"
              alt="Drapeau Palestine"
              width={30}
              height={30}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="38 38 436 436"
              aria-label="Drapeau Algérie"
            >
              <title>Drapeau Algérie</title>
              <path fill="#fff" fillRule="nonzero" d="M256.001 19.596c65.278 0 124.383 26.466 167.163 69.243 42.776 42.779 69.243 101.884 69.243 167.162s-26.467 124.383-69.246 167.16c-42.777 42.779-101.882 69.246-167.16 69.246-65.278 0-124.383-26.467-167.162-69.243-42.777-42.78-69.243-101.885-69.243-167.163S46.062 131.618 88.839 88.839c42.779-42.777 101.884-69.243 167.162-69.243z"/>
              <path fill="#063" fillRule="nonzero" d="M255.939 39.594v432.815c-119.491-.033-216.345-96.911-216.345-216.408 0-119.5 96.854-216.375 216.345-216.407z"/>
              <path fill="#D21034" fillRule="nonzero" d="M351.787 196.335c-19.747-34.233-56.313-55.338-95.848-55.338-61.115 0-110.676 49.561-110.676 110.676 0 61.113 49.561 110.677 110.676 110.677 39.535 0 76.086-21.094 95.854-55.333a88.607 88.607 0 01-69.122 33.197c-48.893 0-88.541-39.65-88.541-88.541 0-48.893 39.648-88.541 88.541-88.541a88.558 88.558 0 0169.116 33.206v-.003zm4.259 55.338l-100.107-32.526 61.871 85.154V199.042L255.939 284.2l100.107-32.527z"/>
            </svg>
          </div>
          <p>Jeelwork : pour une nouvelle génération de services en Algérie.</p>
          <p>&copy; {currentYear} Jeelwork Algérie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}