const services = [
  {
    icon: '/icons/valve.svg',
    title: 'Plomberie',
    description: 'Réparation de fuites et chasses d\'eau, Installation de chauffe-eaux, robinets, éviers et lavabos, Débouchage de canalisations…',
  },
  {
    icon: '/icons/ac_unit.svg',
    title: 'Froid et climatisation',
    description: 'Installation, entretien et réparation de climatiseurs, systèmes de ventilation, groupes frigorifiques et pompes à chaleur…',
  },
  {
    icon: '/icons/electric_bolt.svg',
    title: 'Électricité',
    description: 'Dépannage de pannes électriques, Installation de prises, interrupteurs et de tableaux électriques, Pose de compteurs…',
  },
  {
    icon: '/icons/local_laundry_service.svg',
    title: 'Électroménager',
    description: 'Réparation et installation de réfrigérateurs, lave-linge, fours, micro-ondes, lave-vaisselle, aspirateurs et autres appareils électroménagers domestiques…',
  },
  {
    icon: '/icons/format_paint.svg',
    title: 'Peinture',
    description: 'Peinture intérieure/extérieure, Application d\'enduits et sous-couches, Réparation de fissures et préparation de surfaces…',
  },
  {
    icon: '/icons/roofing.svg',
    title: 'Placo/Plâtre',
    description: 'Faux plafonds et éclairage LED intégré, Moulures et corniches en plâtre, Cloisons et habillages décoratifs en placo…',
  },
  {
    icon: '/icons/brick.svg',
    title: 'Maçonnerie',
    description: 'Construction de murs, Réparation de fissures, Pose de carreaux, faïence et dallage, Réalisation de chapes, Travaux en béton…',
  },
  {
    icon: '/icons/nature.svg',
    title: 'Jardinage',
    description: 'Taille de palmiers et entretien d\'espaces extérieurs, Arrosage d\'arbres et irrigation, Aménagement de jardins traditionnels…',
  },
  {
    icon: '/icons/local_shipping.svg',
    title: 'Transport',
    description: 'Déménagements et transport de meubles, Livraison d\'objets volumineux, Chargement/déchargement d\'équipements lourds…',
  },
  {
    icon: '/icons/construction.svg',
    title: 'Autres',
    description: 'Montage de meubles et étagères, Réparation de portes et poignées, Installation de tringles, Petits travaux, Rebouchage de trous…',
  }
];


export default function ServicesSection() {
  return (
    <section id="services" className="services" aria-label="Nos services">
      <div className="container">
        <h2>Des services fiables, partout en Algérie</h2>
        <p
          style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '1.1rem',
            marginBottom: '2rem',
          }}
        >
          Des professionnels qualifiés dans les 58 wilayas
        </p>

        <div className="carousel-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <img src={service.icon} alt={service.title} className="service-icon" width="32" height="32" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="services-carousel" role="region" aria-label="Carrousel des services">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <img src={service.icon} alt={service.title} className="service-icon" width="32" height="32" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="carousel-dots" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
