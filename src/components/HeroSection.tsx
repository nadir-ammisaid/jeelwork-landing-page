import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Section principale">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/images/artisanat.avif"
          alt="deux artisans travaillant ensemble"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1600px) 1600px, 100vw"
          quality={60}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <h1>Des jobbers de confiance <br /> partout en Algérie</h1>
          <p>Plombier, électricien ou peintre : réservez votre jobber en quelques clics dans les 58 wilayas.</p>
          <Link href="#download" className="btn" aria-label="Essayez gratuitement l'application">
            Trouvez un artisan
          </Link>
        </div>
      </div>
    </section>
  )
}