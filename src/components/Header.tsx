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
      router.push(href)
    }
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="Navigation principale">
          <Link href="/" className="logo" aria-label="Jeel Work - Accueil">
            <Image
              src="/images/jeelWorkLogo.webp"
              alt="Logo Jeel Work"
              width={30}
              height={30}
              className="logo-img"
              priority
            />
            <span>Jeel Work</span>
          </Link>

          <ul className="nav-links">
            <li><a href="/#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
            <li><a href="/#fonctionnement" onClick={(e) => handleSmoothScroll(e, '#fonctionnement')}>Comment ça marche</a></li>
            <li><a href="/#temoignages" onClick={(e) => handleSmoothScroll(e, '#temoignages')}>Témoignages</a></li>
            <li><a href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Télécharger</a></li>
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
          <li><a href="/#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
          <li><a href="/#fonctionnement" onClick={(e) => handleSmoothScroll(e, '#fonctionnement')}>Comment ça marche</a></li>
          <li><a href="/#temoignages" onClick={(e) => handleSmoothScroll(e, '#temoignages')}>Témoignages</a></li>
          <li><a href="/#download" onClick={(e) => handleSmoothScroll(e, '#download')}>Télécharger</a></li>
        </ul>
      </div>

      {isMobileMenuOpen && <div className="menu-overlay active" onClick={closeMobileMenu} />}
    </header>
  )
}
