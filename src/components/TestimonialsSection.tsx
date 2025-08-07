const testimonials = [
  {
    text: "J'avais une panne d'électricité un vendredi soir. Grâce à Jeelwork, j'ai pu contacter un électricien dispo rapidement. Travail propre, prix raisonnable.",
    author: 'Yahia BOUKERMOUCHE',
    role: 'Particulier - Ghardaïa, Ghardaïa'
  },
  {
    text: "Je devais réparer une fuite d'eau dans ma cuisine. J'ai trouvé un plombier sérieux via Jeelwork. Il est venu le jour même, ça m'a bien arrangé.",
    author: 'Aissa KERROUCHI',
    role: 'Propriétaire - Berriane, Ghardaïa'
  },
  {
    text: "J'avais besoin de quelqu'un pour tailler des palmiers et des arbres autour de ma maison. En quelques clics sur Jeelwork, j'ai trouvé un jardinier équipé et sérieux. Très bon service.",
    author: 'Belhadj BEN CHIKH',
    role: 'Entrepreneur - Guerrara, Ghardaïa'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="testimonials" aria-label="Témoignages clients">
      <div className="container">
        <h2>Ils nous font confiance à travers l&apos;Algérie</h2>
        
        {/* Grid pour desktop */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="testimonial-card">
              <p>&quot;{testimonial.text}&quot;</p>
              <footer>
                <cite className="testimonial-author">{testimonial.author}</cite>
                <div className="testimonial-role">{testimonial.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Carrousel pour mobile */}
        <div className="testimonials-carousel" role="region" aria-label="Carrousel des témoignages">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="testimonial-card">
              <p>&quot;{testimonial.text}&quot;</p>
              <footer>
                <cite className="testimonial-author">{testimonial.author}</cite>
                <div className="testimonial-role">{testimonial.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="carousel-dots" aria-hidden="true" />
      </div>
    </section>
  )
}