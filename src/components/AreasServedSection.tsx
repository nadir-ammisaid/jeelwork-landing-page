'use client';
import { useMemo, useState } from 'react';

const WILAYAS = [
  'Mila','Oran','Adrar','Sidi Bel Abbès','Bordj Bou Arréridj','Bordj Badji Mokhtar','Alger','Batna','Blida','Relizane','Mascara','Mostaganem','Skikda','Guelma','Djelfa','Touggourt','Tissemsilt','Tamanrasset','Sétif','Jijel','M\'Sila','El Meniaa','Djanet','Tizi Ouzou','Illizi','Tlemcen','Tipaza','Ghardaïa','Chlef','Biskra','Annaba','Bouira','Naâma','Constantine','Béchar','El Oued','Médéa','Souk Ahras','Khenchela','El Tarf','Béjaïa','Tiaret','Laghouat','Ouargla','Timimoun','El Bayadh','Béni Abbès','In Salah','Aïn Defla','El M\'Ghair','In Guezzam','Boumerdès','Tébessa','Saïda','Ouled Djellal','Oum El Bouaghi','Aïn Témouchent','Tindouf'
];

export default function AreasServedSection() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return WILAYAS;
    return WILAYAS.filter(w => w.toLowerCase().includes(query));
  }, [q]);

  return (
    <section id="zones" className="areas-served" aria-labelledby="zones-title">
      <div className="container">
        {/* <h2 id="zones-title">Zones desservies dans les 58 wilayas</h2>  */}
        <h2 id="zones-title">Disponible partout en Algérie dans les 58 wilayas</h2>
        {/* <p className="areas-intro">
          Interventions disponibles partout en Algérie : grandes villes et zones rurales. 
          Réservez un jobber près de chez vous.
        </p> */}
        <p className="areas-intro">
          Nous intervenons dans toutes les régions, des grandes villes aux zones rurales.
        </p>

        {/* Petit texte sémantique pour le SEO (termes locaux) */}
        
        {/* <p className="areas-seo">
          Services disponibles à Alger, Oran, Constantine, Annaba, Blida, Sétif, Tizi Ouzou, Béjaïa, 
          Batna, Chlef, Ouargla, Ghardaïa et dans toutes les autres wilayas.
        </p> */}
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

        <ul className="areas-grid" aria-label="Liste des wilayas desservies">
          {list.map((w) => (
            <li key={w}>
              {/* Lien vers la section de téléchargement (ancre existante) */}
              <a className="area-chip" href="#download" aria-label={`Réserver un jobber à ${w}`}>
                {w}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
