// src/app/(marketing)/services/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug } from '@/data/services';

type Props = { params: { slug: string } };

export const dynamic = 'force-static';
export const revalidate = 7200; // ISR (2h), optionnel

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      images: [{ url: service.icon }],
    },
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <section className="services" aria-label={`Service : ${service.h1}`}>
      <div className="container">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="breadcrumb">
          <a href="/services" aria-label="Retour aux services">Services</a>
          {' '}/{' '}
          <strong>{service.h1}</strong>
        </nav>

        {/* En-tête de page */}
        <header className="service-header">
          <img src={service.icon} alt={service.h1} width={48} height={48} />
          <h1 className="recent-jobbers-title">{service.h1}</h1>
          <p className="recent-jobbers-subtitle">{service.contentIntro}</p>
        </header>

        {/* Contenu principal */}
        <article className="service-card service-detail-card">
          <h3>Ce que nous proposons</h3>
          <p>{service.metaDescription}</p>

          {service.bullets?.length ? (
            <ul className="service-bullets">
              {service.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}

          <div className="services-cta">
            <a
              href="/#download"
              className="btn"
              aria-label={`Réserver ${service.h1.toLowerCase()}`}
            >
              Réserver {service.h1.toLowerCase()}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
