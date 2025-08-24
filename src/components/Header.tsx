'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const burger = document.getElementById('burger')
      const mobileMenu = document.getElementById('mobileMenu')
      const target = event.target as Node

      if (
        burger &&
        mobileMenu &&
        target &&
        !burger.contains(target) &&
        !mobileMenu.contains(target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
      closeMobileMenu()
    } else {
      // Ne bloque pas la redirection vers /
      closeMobileMenu()
      // router.push(href)
      router.push(`/${href.replace(/^\/+/, '')}`) // Ex: '#services' -> '/#services'
    }
  }

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="Navigation principale">
          <Link href="/" className="logo" aria-label="Jeelwork - Accueil">
            <Image
              src="/images/jeelWorkLogo.webp"
              alt="Logo Jeelwork"
              width={30}
              height={30}
              className="logo-img"
              priority
            />
            <span>Jeelwork</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</Link></li>
            <li><Link href="/#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>How it works</Link></li>
            <li><Link href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Download</Link></li>
            <li><Link href="/#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Testimonials</Link></li>
            <li><Link href="/#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</Link></li>
          </ul>

          <button
            className={`burger ${isMobileMenuOpen ? 'active' : ''}`}
            id="burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="burger-line" />
            <div className="burger-line" />
            <div className="burger-line" />
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <ul>
          <li><Link href="/#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</Link></li>
          <li><Link href="/#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>Comment ça marche</Link></li>
          <li><Link href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Télécharger</Link></li>
          <li><Link href="/#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Témoignages</Link></li>
          <li><Link href="/#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</Link></li>
        </ul>
      </div>

      {isMobileMenuOpen && <div className="menu-overlay active" onClick={closeMobileMenu} />}
    </header>
  )
}
