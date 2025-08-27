'use client';
import { useMemo, useState } from 'react';

const WILAYAS = [
  'Mila','Oran','Adrar','Sétif','Jijel','M\'Sila','Alger','Batna','Blida','Ghardaïa','Boumerdès','Constantine','Skikda','Guelma','Djelfa','Touggourt','Tissemsilt','Tamanrasset','Sidi Bel Abbès','Bordj Bou Arréridj','Bordj Badji Mokhtar','El Meniaa','Mostaganem','Tizi Ouzou','Illizi','Tlemcen','Tipaza','Relizane','Mascara','Djanet','Annaba','Bouira','Naâma','Biskra','Béchar','El Oued','Médéa','Souk Ahras','Khenchela','El Tarf','Béjaïa','Tiaret','Laghouat','Ouargla','Timimoun','El Bayadh','Béni Abbès','In Salah','Aïn Defla','El M\'Ghair','In Guezzam','Chlef','Tébessa','Saïda','Ouled Djellal','Oum El Bouaghi','Aïn Témouchent','Tindouf'
];

export default function AreasServedSection() {
  const [q, setQ] = useState('');
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return WILAYAS;
    return WILAYAS.filter(w => w.toLowerCase().includes(query));
  }, [q]);

  return (
    <section id="zones" className="areas-served" aria-labelledby="zones-title">
      <div className="container">
        <h2 id="zones-title">Disponible partout en Algérie dans les 58 wilayas</h2>
        <p className="areas-intro">
          Nous intervenons dans toutes les régions, des grandes villes aux zones rurales.
        </p>
        <p className="areas-seo">
          Trouvez et réservez un jobber près de chez vous à Alger, Oran, Constantine, Annaba, Blida, Sétif, Tizi Ouzou, Béjaïa, Batna, Chlef, Ouargla, Ghardaïa… et dans toutes les autres wilayas.
        </p>

        <div className="areas-search-wrap" role="search">
          <label htmlFor="areas-search" className="sr-only">Rechercher une wilaya</label>
          <input
            id="areas-search"
            type="search"
            className="areas-search"
            placeholder="Rechercher une wilaya (ex. Oran, Alger, Ghardaïa)…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            autoComplete="off"
          />
        </div>

        <ul className={`areas-grid ${showAll ? 'show-all' : ''}`} aria-label="Liste des wilayas desservies">
          {list.map((w) => (
            <li key={w}>
              <a className="area-chip" href="#download" aria-label={`Réserver un jobber à ${w}`}>
                {w}
              </a>
            </li>
          ))}
        </ul>

        <div className="areas-show-more">
          <button 
            className="areas-toggle-btn"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>

        <div className="areas-cta">
          <a href="#download" className="btn" aria-label="Trouvez votre jobber maintenant">
            Trouvez votre jobber maintenant
          </a>
        </div>
      </div>
    </section>
  );
}