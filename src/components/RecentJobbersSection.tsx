// src/components/RecentJobbersSection.tsx
import Image from 'next/image';
import { getRecentJobbers } from '@/lib/jobbers';

export default async function RecentJobbersSection() {
  // Cette fonction s’exécute côté serveur.
  // La page est revalidée selon `export const revalidate` défini dans app/page.tsx
  const jobbers = await getRecentJobbers();

//   const res = await fetch("https://api.jeelwork.com/recent-jobbers", {
//     next: { revalidate: 7200 }, // ISR : refresh toutes les 2h
//   });
//   const jobbers = await res.json();

  if (!jobbers?.length) return null;

  return (
    <section id="jobbers-recents" className="recent-jobbers" aria-label="Jobbers récents">
      <div className="container">
        <h2 className="recent-jobbers-title">Jobbers récents près de chez vous</h2>
        <p className="recent-jobbers-subtitle">
          Des profils vérifiés qui interviennent rapidement — dans les 58 wilayas.
        </p>

        <div className="recent-jobbers-grid">
          {jobbers.map((j) => (
            <article key={j.id} className="jobber-card" aria-label={`${j.trade} - ${j.name}`}>
              <div className="jobber-avatar">
                {j.avatar ? (
                  <Image
                    src={j.avatar}
                    alt={`${j.name} - ${j.trade}`}
                    width={64}
                    height={64}
                  />
                ) : (
                  <div className="jobber-avatar-fallback" aria-hidden>
                    {j.name?.charAt(0) ?? 'J'}
                  </div>
                )}
              </div>

              <div className="jobber-info">
                <h3 className="jobber-name">{j.name}</h3>
                <p className="jobber-meta">
                  {j.trade} • {j.city ? `${j.city}, ` : ''}{j.wilaya}
                </p>
                {typeof j.rating === 'number' && (
                  <div className="jobber-rating" aria-label={`Note ${j.rating} sur 5`}>
                    <span className="stars" aria-hidden>★★★★★</span>
                    <span className="score">{j.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
