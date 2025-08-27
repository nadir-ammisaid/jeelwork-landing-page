import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';

type RouteParams = { slug: string };
type Props = { params: Promise<RouteParams> };

export const dynamic = 'force-static';
export const revalidate = 7200;

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  return (
    <section className="services" aria-label={`Service : ${service.h1}`}>
      <div className="container">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="breadcrumb">
          <Link href="/services" aria-label="Retour aux services">Services</Link>
          {' '}/{' '}
          <strong>{service.h1}</strong>
        </nav>

        {/* En-tête de page */}
        <header className="service-header">
          <Image src={service.icon} alt={service.h1} width={48} height={48} />
          <h1>{service.h1}</h1>
          <p>{service.contentIntro}</p>
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
            <Link
              href="/#download"
              prefetch={false}
              className="btn"
              aria-label={`Réservez ${service.h1.toLowerCase()}`}
            >
              Réservez {service.h1.toLowerCase()}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
