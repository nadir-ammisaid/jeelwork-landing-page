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
    <main className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ textAlign: 'center' }}>Nos services</h1>

      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '1.5rem',
        }}
      >
        {SERVICES.map((s) => (
          <li
            key={s.slug}
            style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit' }} aria-label={`Voir le service ${s.h1}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <img src={s.icon} alt="" width={28} height={28} loading="lazy" />
                <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{s.h1}</h2>
              </div>
              <p style={{ color: '#6b7280', margin: '.5rem 0 0' }}>{s.teaser}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
