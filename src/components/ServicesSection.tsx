const services = [
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plumbing.svg',
    title: 'Plomberie',
    description: 'Trouvez un jobber plombier pour la réparation de fuites et chasses d\'eau, installation de chauffe-eaux, robinets, éviers et lavabos, débouchage de canalisations. Service disponible dans toutes les régions.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/cooling-and-air-conditioning.svg',
    title: 'Froid et climatisation',
    description: 'Faites appel à un technicien frigoriste ou climaticien pour l\'installation, l\'entretien et la réparation de climatiseurs, systèmes de ventilation, groupes frigorifiques et pompes à chaleur. Intervention rapide sur tout le territoire algérien.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/electrical-work.svg',
    title: 'Électricité',
    description: 'Besoin d\'un spécialiste électricien ? Dépannage de pannes électriques, installation de prises, interrupteurs et tableaux électriques, pose de compteurs. Artisans qualifiés dans chaque wilaya.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/home-appliance.svg',
    title: 'Électroménager',
    description: 'Faites intervenir un professionnel en électroménager pour la réparation et l\'installation de réfrigérateurs, lave-linge, fours, lave-vaisselle, aspirateurs et autres appareils domestiques. Service à domicile disponible à l\'échelle nationale.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/painting.svg',
    title: 'Peinture',
    description: 'Contactez un artisan peintre pour vos travaux de peinture intérieure et extérieure, application d\'enduits et sous-couches, réparation de fissures et préparation de surfaces. Chantiers et finitions soignés partout dans le pays.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plaster.svg',
    title: 'Placo/Plâtre',
    description: 'Faites intervenir un spécialiste plaquiste ou plâtrier pour la pose de faux plafonds avec éclairage LED intégré, moulures et corniches en plâtre, cloisons et habillages décoratifs en placo. Résultat esthétique et précis sur l\'ensemble du territoire.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/masonry.svg',
    title: 'Maçonnerie',
    description: 'Sollicitez un professionnel maçon pour la construction de murs, réparation de fissures, pose de carreaux, faïence et dallage, réalisation de chapes, travaux en béton. Prestataires expérimentés disponibles rapidement.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/gardening.svg',
    title: 'Jardinage',
    description: 'Engagez un intervenant jardinier pour la taille de palmiers et l\'entretien d\'espaces verts, arrosage et irrigation, aménagement de jardins traditionnels. Services proposés du Nord au Sud de l\'Algérie.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/transportation.svg',
    title: 'Transport',
    description: 'Réservez un prestataire transporteur pour vos déménagements, le transport de meubles, la livraison d\'objets volumineux, le chargement et déchargement d\'équipements lourds. Réseau actif dans les 58 wilayas.',
  },
  {
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/miscellaneous.svg',
    title: 'Autres',
    description: 'Trouvez un expert polyvalent pour le montage de meubles et étagères, réparation de portes et poignées, installation de tringles, petits travaux, rebouchage de trous. Service rapide près de chez vous.',
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
          Des professionnels qualifiés et disponibles dans toutes les wilayas.
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
        <div className="services-cta">
          <a href="#download" className="btn" aria-label="Découvrir l'application maintenant">
            Réservez un service
          </a>
        </div>
      </div>
    </section>
  )
}
