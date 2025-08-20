const testimonials = [
  {
    text: "Un vendredi soir, une panne d'électricité m'a surpris. Grâce à Jeelwork, j'ai pu contacter un électricien dispo rapidement. Travail propre, prix raisonnable. Je recommande !",
    author: 'Yahia BOUKERMOUCHE',
    role: 'Particulier - Ghardaïa, Ghardaïa'
  },
  {
    text: "Je devais réparer une fuite d'eau dans ma cuisine. J'ai trouvé un plombier sérieux grâce à Jeelwork. Il est venu le jour même, ça m'a bien arrangé. Je suis très satisfait du service.",
    author: 'Aissa KERROUCHI',
    role: 'Entrepreneur - Berriane, Ghardaïa'
  },
  {
    text: "J'avais besoin de quelqu'un pour tailler des palmiers et des arbres autour de ma maison. En quelques clics sur Jeelwork, j'ai trouvé un jardinier équipé et sérieux. Très bon service.",
    author: 'Belhadj BEN CHIKH',
    role: 'Particulier - Guerrara, Ghardaïa'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="testimonials" aria-label="Témoignages clients">
      <div className="container">
        {/* <h2>Ils nous font confiance à travers l&apos;Algérie</h2> */}
        <h2>Ils nous font confiance</h2>
        
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