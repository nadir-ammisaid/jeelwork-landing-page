const services = [
  {
    icon: '/icons/valve.svg',
    title: 'Plomberie',
    description: 'Trouvez un jobber plombier pour la réparation de fuites et chasses d\'eau, installation de chauffe-eaux, robinets, éviers et lavabos, débouchage de canalisations - service disponible dans toutes les 58 wilayas.',
  },
  {
    icon: '/icons/ac_unit.svg',
    title: 'Froid et climatisation',
    description: 'Faites appel à un jobber frigoriste ou climaticien pour l\'installation, l\'entretien et la réparation de climatiseurs, systèmes de ventilation, groupes frigorifiques et pompes à chaleur - intervention rapide partout en Algérie.',
  },
  {
    icon: '/icons/electric_bolt.svg',
    title: 'Électricité',
    description: 'Besoin d’un jobber électricien ? Dépannage de pannes électriques, installation de prises, interrupteurs et tableaux électriques, pose de compteurs - artisans qualifiés dans les 58 wilayas.',
  },
  {
    icon: '/icons/local_laundry_service.svg',
    title: 'Électroménager',
    description: 'Trouvez un jobber électroménager pour la réparation et l\'installation de réfrigérateurs, lave-linge, fours, micro-ondes, lave-vaisselle, aspirateurs et autres appareils domestiques - intervention à domicile dans votre wilaya.',
  },
  {
    icon: '/icons/format_paint.svg',
    title: 'Peinture',
    description: 'Contactez un jobber peintre pour vos travaux de peinture intérieure et extérieure, application d\'enduits et sous-couches, réparation de fissures et préparation de surfaces - chantiers soignés partout en Algérie.',
  },
  {
    icon: '/icons/roofing.svg',
    title: 'Placo/Plâtre',
    description: 'Faites intervenir un jobber plaquiste ou plâtrier pour la pose de faux plafonds avec éclairage LED intégré, moulures et corniches en plâtre, cloisons et habillages décoratifs en placo - finitions précises et esthétiques.',
  },
  {
    icon: '/icons/brick.svg',
    title: 'Maçonnerie',
    description: 'Sollicitez un jobber maçon pour la construction de murs, réparation de fissures, pose de carreaux, faïence et dallage, réalisation de chapes, travaux en béton - professionnels expérimentés disponibles rapidement.',
  },
  {
    icon: '/icons/nature.svg',
    title: 'Jardinage',
    description: 'Engagez un jobber jardinier pour la taille de palmiers et l\'entretien d\'espaces verts, arrosage et irrigation, aménagement de jardins traditionnels - services disponibles du Nord au Sud de l’Algérie.',
  },
  {
    icon: '/icons/local_shipping.svg',
    title: 'Transport',
    description: 'Réservez un jobber transporteur pour vos déménagements, le transport de meubles, la livraison d\'objets volumineux, le chargement et déchargement d\'équipements lourds - réseau actif dans les 58 wilayas.',
  },
  {
    icon: '/icons/construction.svg',
    title: 'Autres',
    description: 'Trouvez un jobber polyvalent pour le montage de meubles et étagères, réparation de portes et poignées, installation de tringles, petits travaux, rebouchage de trous - service rapide près de chez vous.',
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
