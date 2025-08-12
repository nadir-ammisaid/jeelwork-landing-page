import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Section principale">
      <div className="container">
        <div className="hero-content">
          <h1>Des jobbers de confiance <br /> partout en Algérie</h1>
          <p>Plombier, électricien ou peintre : réservez votre jobber en quelques clics dans les 58 wilayas.</p>
          <Link href="#download" className="btn" aria-label="Essayez gratuitement l'application">
            Essayez gratuitement
          </Link>
        </div>
      </div>
    </section>
  )
}