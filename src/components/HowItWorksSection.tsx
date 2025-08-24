import Link from "next/link"

const steps = [
  {
    number: 1,
    title: 'Décrivez votre besoin',
    description: 'Ajoutez des détails pour que les jobbers comprennent clairement votre demande (type de service, délais, contexte, etc.)'
  },
  {
    number: 2,
    title: 'Recevez des offres',
    description: 'Comparez les propositions (devis) des jobbers près de chez vous et choisissez celui qui vous convient'
  },
  {
    number: 3,
    title: 'Service réalisé',
    description: 'Réservation rapide, prestation effectuée, paiement direct avec le jobber. Vous pouvez suivre l’avancement en temps réel'
  },
  {
    number: 4,
    title: 'Laissez un avis',
    description: 'Évaluez la prestation du jobber pour aider la communauté à faire le bon choix'
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works" aria-label="Comment ça marche">
      <div className="container">
        <h2>Comment ça marche</h2>
        <p
          style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '1.1rem',
            marginBottom: '2rem',
          }}
        >
          Facile, rapide et accessible à tous
        </p>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step">
              <div className="step-number" aria-label={`Étape ${step.number}`}>
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-cta">
          <Link href="#download" className="btn" aria-label="Essayer l'application maintenant">
            Commencez maintenant
          </Link>
        </div>
        
        {/* Carrousel pour mobile */}
        {/* <div className="steps-carousel">
          {steps.map((step) => (
            <article key={step.number} className="step">
              <div className="step-number" aria-label={`Étape ${step.number}`}>
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="carousel-dots" /> */}
      </div>
    </section>
  )
}