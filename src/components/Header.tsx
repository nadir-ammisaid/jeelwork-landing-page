'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // ✅ Optimisation: useCallback pour éviter les re-créations
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

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
        closeMobileMenu()
      }
    }

    // ✅ Ajout du listener seulement quand le menu est ouvert
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen, closeMobileMenu])

  const handleSmoothScroll = useCallback((
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
      closeMobileMenu()
      router.push(`/${href.replace(/^\/+/, '')}`)
    }
  }, [pathname, router, closeMobileMenu])

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
            <li><Link href="/#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>Comment ça marche</Link></li>
            <li><Link href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Télécharger</Link></li>
            <li><Link href="/#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Témoignages</Link></li>
            <li><Link href="/#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</Link></li>
          </ul>

          <button
            className={`burger ${isMobileMenuOpen ? 'active' : ''}`}
            id="burger"
            onClick={toggleMenu}
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
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
