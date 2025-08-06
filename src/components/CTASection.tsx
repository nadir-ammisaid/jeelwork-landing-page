import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="cta-section" aria-label="Appel à l'action">
      <div className="cta-content">
        <h2>Réservez un artisan de confiance en quelques clics</h2>
        <p>
          Grâce à Jeel Work, trouvez facilement un professionnel près de chez
          vous, réservez en quelques clics et payez en toute sécurité après la
          prestation. Partout en Algérie.
        </p>
      </div>
      <div className="cta-image">
        <Image
          src="/images/jobbersIllustration.png"
          alt="Professionnels de confiance Jeel Work"
          width={600}
          height={400}
          loading="lazy"
        />
      </div>
    </section>
  )
}