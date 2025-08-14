import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="cta-section" aria-label="Appel à l'action">
      <div className="cta-content">
        <h2>Réservez un jobber de confiance</h2>
        <p>
          Grâce à Jeelwork, trouvez facilement un professionnel près de chez vous dans toutes les villes algériennes, réservez en ligne et payez en toute sécurité après la prestation.
        </p>
      </div>
      <div className="cta-image">
        <Image
          src="/images/jobbersIllustrationWithWhiteLogo.png"
          alt="Professionnels de confiance Jeelwork"
          width={600}
          height={400}
          loading="lazy"
        />
      </div>
    </section>
  )
}