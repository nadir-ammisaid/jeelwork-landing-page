import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Section principale">
      <div className="hero-bg" aria-hidden="true">
        {/* <Image
          src="/images/artisanat.avif"
          alt="deux artisans travaillant ensemble"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1600px) 1600px, 100vw"
          quality={60}
        /> */}

        <Image
          src="/images/artisanat.avif"
          alt="deux artisans travaillant ensemble"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 430px) 430px,
                (max-width: 1024px) 1024px,
                1200px"
          quality={40}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM2MzY2RjEiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4K"
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