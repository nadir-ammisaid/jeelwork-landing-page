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
          // ✅ Optimisé spécifiquement pour mobile (plus agressif)
          sizes="(max-width: 430px) 430px, (max-width: 768px) 768px, 1200px"
          // ✅ Qualité réduite pour mobile (20 au lieu de 40)
          quality={20}
          placeholder="blur"
          // ✅ BlurDataURL optimisé (plus petit SVG)
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMUYyOTM3Ii8+CjxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzYzNjZGMSIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPgo="
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