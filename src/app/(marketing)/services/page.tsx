// src/app/(marketing)/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services - Jeelwork Algérie',
  description:
    "Découvrez les services Jeelwork : plomberie, électricité, climatisation, peinture, placo/plâtre, maçonnerie, jardinage, transport et petits travaux — disponibles dans les 58 wilayas.",
  alternates: { canonical: 'https://jeelwork.com/services' },
};

export default function ServicesIndexPage() {
  return (
    <section className="services" aria-label="Nos services">
      <div className="container">
        <h1 className="recent-jobbers-title">Des services fiables, partout en Algérie</h1>
        <p className="recent-jobbers-subtitle">
          Des professionnels qualifiés et disponibles dans toutes les wilayas.
        </p>

        <div className="carousel-wrapper">
          {/* Grid desktop */}
          <div className="services-grid" role="list">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
                aria-label={`Voir le service ${service.h1}`}
                title={service.h1}
              >
                <img
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

          {/* Carrousel mobile */}
          <div className="services-carousel" role="region" aria-label="Carrousel des services">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
                aria-label={`Voir le service ${service.h1}`}
                title={service.h1}
              >
                <img
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
          <a href="/#download" className="btn" aria-label="Découvrir l'application maintenant">
            Réservez un service
          </a>
        </div>
      </div>
    </section>
  );
}
