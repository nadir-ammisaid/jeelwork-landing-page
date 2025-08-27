import Link from 'next/link';
import { SERVICES } from '@/data/services';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="services" aria-label="Nos services">
      <div className="container">
        <h2>Des services fiables, partout en Algérie</h2>
        <p className="services-subtitle">
          Des professionnels qualifiés et disponibles dans toutes les wilayas.
        </p>

        <div className="carousel-wrapper">
          <div className="services-grid">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
                aria-label={`Voir le service ${service.h1}`}
                title={service.h1}
              >
                <Image
                  src={service.icon}
                  alt={service.h1}
                  className="service-icon"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                />
                <h3>{service.h1}</h3>
                <p>{service.teaser}</p>
              </Link>
            ))}
          </div>

          <div className="services-carousel" role="region" aria-label="Carrousel des services">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
                aria-label={`Voir le service ${service.h1}`}
                title={service.h1}
              >
                <Image
                  src={service.icon}
                  alt={service.h1}
                  className="service-icon"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                />
                <h3>{service.h1}</h3>
                <p>{service.teaser}</p>
              </Link>
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
  );
}
