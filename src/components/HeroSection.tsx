import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Section principale">
      <div className="container">
        <div className="hero-content">
          <h1>Des artisans de confiance, partout en Algérie</h1>
          <p>Réservez un professionnel près de chez vous, en quelques clics.</p>
          <Link href="#download" className="btn" aria-label="Essayer gratuitement l'application">
            Essayer gratuitement
          </Link>
        </div>
      </div>
    </section>
  )
}