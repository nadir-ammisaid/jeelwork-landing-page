// src/data/services.ts
export type ServiceItem = {
  slug: string;
  title: string;            // <title> SEO (ex: "Plombier en Algérie")
  h1: string;               // Titre H1 visible en page service
  icon: string;             // URL icône
  teaser: string;           // Court résumé (cartes / listes)
  metaDescription: string;  // <meta name="description">
  contentIntro: string;     // Intro visible en page service
  bullets?: string[];       // Points clés (optionnel)
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'plomberie',
    title: 'Plombier en Algérie',
    h1: 'Service de plomberie',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plumbing.svg',
    teaser:
      "Trouvez un jobber plombier pour la réparation de fuites et chasses d'eau, l’installation de chauffe-eaux et de robinetterie (éviers, lavabos), ainsi que le débouchage de canalisations. Intervention rapide dans toutes les régions.",
    metaDescription:
      "Jobber plombier partout en Algérie : réparation de fuites et chasses d'eau, installation de chauffe-eaux et robinetterie, débouchage de canalisations. Devis simple, intervention rapide.",
    contentIntro:
      "Trouvez un jobber plombier pour la réparation de fuites et chasses d'eau, l'installation de chauffe-eaux, robinets, éviers et lavabos, ainsi que le débouchage de canalisations. Service disponible dans toutes les régions.",
    bullets: [
      "Réparation de fuites et chasses d'eau",
      'Débouchage de canalisations',
      'Installation chauffe-eau et robinetterie',
      'Interventions rapides dans les 58 wilayas',
    ],
  },
  {
    slug: 'froid-climatisation',
    title: 'Climatisation et Froid en Algérie',
    h1: 'Froid et climatisation',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/cooling-and-air-conditioning.svg',
    teaser:
      "Faites appel à un technicien frigoriste ou climaticien pour l’installation, l’entretien et la réparation de climatiseurs, la ventilation et les pompes à chaleur. Dépannage et recharge, intervention rapide sur tout le territoire algérien.",
    metaDescription:
      "Technicien frigoriste/climaticien : installation, entretien et réparation de climatiseurs, ventilation, groupes frigorifiques et pompes à chaleur. Intervention rapide sur tout le territoire algérien.",
    contentIntro:
      "Faites appel à un technicien frigoriste ou climaticien pour l'installation, l'entretien et la réparation de climatiseurs, systèmes de ventilation, groupes frigorifiques et pompes à chaleur.",
    bullets: [
      'Pose et entretien de climatiseurs',
      'Dépannage et recharge',
      'Ventilation et pompes à chaleur',
      'Couverture nationale',
    ],
  },
  {
    slug: 'electricite',
    title: 'Électricien en Algérie',
    h1: "Service d'électricité",
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/electrical-work.svg',
    teaser:
      "Besoin d’un spécialiste électricien ? Dépannage de pannes, installation de prises, interrupteurs et tableaux, pose de compteurs et mise aux normes. Des professionnels qualifiés disponibles dans chaque wilaya.",
    metaDescription:
      "Spécialiste électricien : dépannage de pannes, installation de prises, interrupteurs et tableaux électriques, pose de compteurs. Professionnels qualifiés dans chaque wilaya.",
    contentIntro:
      "Besoin d'un spécialiste électricien ? Dépannage de pannes, installation de prises, interrupteurs et tableaux électriques, pose de compteurs et mise aux normes.",
    bullets: [
      'Dépannage de pannes',
      'Tableaux, prises, interrupteurs',
      'Mise aux normes',
      'Disponibles par wilaya',
    ],
  },
  {
    slug: 'electromenager',
    title: 'Réparation Électroménager en Algérie',
    h1: 'Service électroménager',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/home-appliance.svg',
    teaser:
      "Réparation et installation de réfrigérateurs, lave-linge, fours, micro-ondes, lave-vaisselle, aspirateurs et autres appareils. Intervention à domicile et couverture nationale.",
    metaDescription:
      "Professionnel électroménager : réparation et installation de réfrigérateurs, lave-linge, fours, lave-vaisselle, aspirateurs et autres appareils domestiques. Service à domicile national.",
    contentIntro:
      "Faites intervenir un professionnel en électroménager pour la réparation et l'installation de réfrigérateurs, lave-linge, fours, micro-ondes, lave-vaisselle, aspirateurs et autres appareils.",
    bullets: [
      'Réfrigérateurs, lave-linge, fours',
      'Lave-vaisselle et petits appareils',
      'Diagnostic et réparation',
      'À domicile, partout',
    ],
  },
  {
    slug: 'peinture',
    title: 'Peintre en Algérie',
    h1: 'Travaux de peinture',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/painting.svg',
    teaser:
      "Peinture intérieure et extérieure, application d’enduits et sous-couches, réparation de fissures et préparation des surfaces. Finitions propres et soignées partout en Algérie.",
    metaDescription:
      "Artisan peintre : travaux de peinture intérieure et extérieure, application d'enduits et sous-couches, réparation de fissures et préparation de surfaces. Finitions soignées partout en Algérie.",
    contentIntro:
      'Contactez un artisan peintre pour vos chantiers : intérieur/extérieur, enduits et sous-couches, réparation de fissures et préparation de surfaces.',
    bullets: [
      'Intérieur / extérieur',
      'Enduits et sous-couches',
      'Préparation & finitions',
      'Résultat soigné',
    ],
  },
  {
    slug: 'placo-platre',
    title: 'Placo / Plâtre en Algérie',
    h1: 'Placo / Plâtre',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plaster.svg',
    teaser:
      "Pose de faux plafonds avec LED intégrées, moulures et corniches en plâtre, cloisons et habillages décoratifs en placo. Résultat esthétique et précis dans tout le pays.",
    metaDescription:
      "Spécialiste plaquiste/plâtrier : faux plafonds avec LED intégrées, moulures et corniches en plâtre, cloisons et habillages décoratifs en placo. Résultat esthétique et précis.",
    contentIntro:
      'Faites intervenir un spécialiste plaquiste ou plâtrier pour la pose de faux plafonds (LED intégrées), moulures/corniches, cloisons et habillages décoratifs en placo.',
    bullets: [
      'Faux plafonds LED',
      'Cloisons & habillages',
      'Moulures et corniches',
      'Finitions précises',
    ],
  },
  {
    slug: 'maconnerie',
    title: 'Maçon en Algérie',
    h1: 'Maçonnerie',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/masonry.svg',
    teaser:
      "Construction de murs, réparation de fissures, pose de carreaux/faïence/dallage, réalisation de chapes et travaux en béton. Des professionnels expérimentés, disponibles rapidement.",
    metaDescription:
      "Professionnel maçon : construction de murs, réparation de fissures, pose de carreaux/faïence/dallage, réalisation de chapes et travaux en béton. Disponibles rapidement.",
    contentIntro:
      'Sollicitez un professionnel maçon pour vos travaux : murs, fissures, carrelage/faïence/dallage, chapes et béton.',
    bullets: [
      'Murs & chapes',
      'Carreaux, faïence, dallage',
      'Béton et réparations',
      'Intervention rapide',
    ],
  },
  {
    slug: 'jardinage',
    title: 'Jardinier en Algérie',
    h1: 'Jardinage',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/gardening.svg',
    teaser:
      "Taille de palmiers et entretien d’espaces verts, arrosage/irrigation, aménagement de jardins traditionnels. Des services proposés du Nord au Sud de l’Algérie.",
    metaDescription:
      "Intervenant jardinier : taille de palmiers, entretien d'espaces verts, arrosage/irrigation, aménagement de jardins traditionnels. Services du Nord au Sud.",
    contentIntro:
      "Engagez un intervenant jardinier pour la taille de palmiers, l'entretien, l'arrosage/irrigation et l'aménagement de jardins traditionnels.",
    bullets: [
      'Taille de palmiers',
      'Espaces verts & irrigation',
      'Aménagements',
      'Nord au Sud',
    ],
  },
  {
    slug: 'transport',
    title: 'Transport et Déménagement en Algérie',
    h1: 'Transport',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/transportation.svg',
    teaser:
      "Déménagements et transport de meubles, livraison d’objets volumineux, chargement et déchargement d’équipements lourds. Réseau de prestataires actif dans les 58 wilayas.",
    metaDescription:
      "Prestataire transporteur : déménagements, transport de meubles, livraison d'objets volumineux, chargement et déchargement d'équipements lourds. Réseau actif dans les 58 wilayas.",
    contentIntro:
      'Réservez un prestataire transporteur pour vos déménagements, transport de meubles/objets volumineux et manutention (chargement/déchargement).',
    bullets: [
      'Déménagements et mobilier',
      'Colis volumineux',
      'Chargement/déchargement',
      '58 wilayas',
    ],
  },
  {
    slug: 'autres',
    title: 'Petits Travaux en Algérie',
    h1: 'Autres services',
    icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/miscellaneous.svg',
    teaser:
      "Montage de meubles et étagères, réparation de portes et poignées, installation de tringles, petits travaux et finitions. Service rapide près de chez vous.",
    metaDescription:
      "Expert polyvalent : montage de meubles/étagères, réparation de portes et poignées, installation de tringles, petits travaux, rebouchage de trous. Service rapide près de chez vous.",
    contentIntro:
      "Trouvez un expert polyvalent pour vos petits travaux : montage d'éléments, réparations simples, pose de tringles et finitions.",
    bullets: [
      'Montage & petits travaux',
      'Réparations courantes',
      'Interventions rapides',
      'Partout en Algérie',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}







// // src/data/services.ts
// export type ServiceItem = {
//   slug: string;
//   title: string;            // <title> SEO (ex: "Plombier en Algérie")
//   h1: string;               // Titre H1 visible en page service
//   icon: string;             // URL icône
//   teaser: string;           // Court résumé (cartes / listes)
//   metaDescription: string;  // <meta name="description">
//   contentIntro: string;     // Intro visible en page service
//   bullets?: string[];       // Points clés (optionnel)
// };

// export const SERVICES: ServiceItem[] = [
//   {
//     slug: 'plomberie',
//     title: 'Plombier en Algérie',
//     h1: 'Service de plomberie',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plumbing.svg',
//     teaser: "Plomberie : fuites, chauffe-eau, robinetterie, débouchage — intervention rapide.",
//     metaDescription:
//       "Jobber plombier partout en Algérie : réparation de fuites et chasses d'eau, installation de chauffe-eaux et robinetterie, débouchage de canalisations. Devis simple, intervention rapide.",
//     contentIntro:
//       "Trouvez un jobber plombier pour la réparation de fuites et chasses d'eau, l\'installation de chauffe-eaux, robinets, éviers et lavabos, ainsi que le débouchage de canalisations. Service disponible dans toutes les régions.",
//     bullets: [
//       'Réparation de fuites et chasses d\'eau',
//       'Débouchage de canalisations',
//       'Installation chauffe-eau et robinetterie',
//       'Interventions rapides dans les 58 wilayas',
//     ],
//   },
//   {
//     slug: 'froid-climatisation',
//     title: 'Climatisation et Froid en Algérie',
//     h1: 'Froid et climatisation',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/cooling-and-air-conditioning.svg',
//     teaser: 'Climatisation : installation, entretien, réparation — techniciens qualifiés.',
//     metaDescription:
//       "Technicien frigoriste/climaticien : installation, entretien et réparation de climatiseurs, ventilation, groupes frigorifiques et pompes à chaleur. Intervention rapide sur tout le territoire algérien.",
//     contentIntro:
//       "Faites appel à un technicien frigoriste ou climaticien pour l\'installation, l\'entretien et la réparation de climatiseurs, systèmes de ventilation, groupes frigorifiques et pompes à chaleur.",
//     bullets: [
//       'Pose et entretien de climatiseurs',
//       'Dépannage et recharge',
//       'Ventilation et pompes à chaleur',
//       'Couverture nationale',
//     ],
//   },
//   {
//     slug: 'electricite',
//     title: 'Électricien en Algérie',
//     h1: 'Service d\'électricité',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/electrical-work.svg',
//     teaser: 'Électricité : dépannage, prises, interrupteurs, tableaux — mise aux normes.',
//     metaDescription:
//       "Spécialiste électricien : dépannage de pannes, installation de prises, interrupteurs et tableaux électriques, pose de compteurs. Professionnels qualifiés dans chaque wilaya.",
//     contentIntro:
//       'Besoin d\'un spécialiste électricien ? Dépannage de pannes, installation de prises, interrupteurs et tableaux électriques, pose de compteurs et mise aux normes.',
//     bullets: [
//       'Dépannage de pannes',
//       'Tableaux, prises, interrupteurs',
//       'Mise aux normes',
//       'Disponibles par wilaya',
//     ],
//   },
//   {
//     slug: 'electromenager',
//     title: 'Réparation Électroménager en Algérie',
//     h1: 'Service électroménager',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/home-appliance.svg',
//     teaser: 'Électroménager : installation et réparation à domicile.',
//     metaDescription:
//       "Professionnel électroménager : réparation et installation de réfrigérateurs, lave-linge, fours, lave-vaisselle, aspirateurs et autres appareils domestiques. Service à domicile national.",
//     contentIntro:
//       'Faites intervenir un professionnel en électroménager pour la réparation et l\'installation de réfrigérateurs, lave-linge, fours, micro-ondes, lave-vaisselle, aspirateurs et autres appareils.',
//     bullets: [
//       'Réfrigérateurs, lave-linge, fours',
//       'Lave-vaisselle et petits appareils',
//       'Diagnostic et réparation',
//       'À domicile, partout',
//     ],
//   },
//   {
//     slug: 'peinture',
//     title: 'Peintre en Algérie',
//     h1: 'Travaux de peinture',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/painting.svg',
//     teaser: 'Peinture intérieure/extérieure : finitions soignées.',
//     metaDescription:
//       "Artisan peintre : travaux de peinture intérieure et extérieure, application d\'enduits et sous-couches, réparation de fissures et préparation de surfaces. Finitions soignées partout en Algérie.",
//     contentIntro:
//       'Contactez un artisan peintre pour vos chantiers : intérieur/extérieur, enduits et sous-couches, réparation de fissures et préparation de surfaces.',
//     bullets: [
//       'Intérieur / extérieur',
//       'Enduits et sous-couches',
//       'Préparation & finitions',
//       'Résultat soigné',
//     ],
//   },
//   {
//     slug: 'placo-platre',
//     title: 'Placo / Plâtre en Algérie',
//     h1: 'Placo / Plâtre',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/plaster.svg',
//     teaser: 'Placo, faux plafonds, LED intégrées, moulures et cloisons.',
//     metaDescription:
//       "Spécialiste plaquiste/plâtrier : faux plafonds avec LED intégrées, moulures et corniches en plâtre, cloisons et habillages décoratifs en placo. Résultat esthétique et précis.",
//     contentIntro:
//       'Faites intervenir un spécialiste plaquiste ou plâtrier pour la pose de faux plafonds (LED intégrées), moulures/corniches, cloisons et habillages décoratifs en placo.',
//     bullets: [
//       'Faux plafonds LED',
//       'Cloisons & habillages',
//       'Moulures et corniches',
//       'Finitions précises',
//     ],
//   },
//   {
//     slug: 'maconnerie',
//     title: 'Maçon en Algérie',
//     h1: 'Maçonnerie',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/masonry.svg',
//     teaser: 'Maçonnerie : murs, dalles, carreaux, chapes, béton.',
//     metaDescription:
//       "Professionnel maçon : construction de murs, réparation de fissures, pose de carreaux/faïence/dallage, réalisation de chapes et travaux en béton. Disponibles rapidement.",
//     contentIntro:
//       'Sollicitez un professionnel maçon pour vos travaux : murs, fissures, carrelage/faïence/dallage, chapes et béton.',
//     bullets: [
//       'Murs & chapes',
//       'Carreaux, faïence, dallage',
//       'Béton et réparations',
//       'Intervention rapide',
//     ],
//   },
//   {
//     slug: 'jardinage',
//     title: 'Jardinier en Algérie',
//     h1: 'Jardinage',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/gardening.svg',
//     teaser: 'Jardinage : taille, entretien, irrigation, aménagement.',
//     metaDescription:
//       "Intervenant jardinier : taille de palmiers, entretien d\'espaces verts, arrosage/irrigation, aménagement de jardins traditionnels. Services du Nord au Sud.",
//     contentIntro:
//       'Engagez un intervenant jardinier pour la taille de palmiers, l\'entretien, l\'arrosage/irrigation et l\'aménagement de jardins traditionnels.',
//     bullets: [
//       'Taille de palmiers',
//       'Espaces verts & irrigation',
//       'Aménagements',
//       'Nord au Sud',
//     ],
//   },
//   {
//     slug: 'transport',
//     title: 'Transport et Déménagement en Algérie',
//     h1: 'Transport',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/transportation.svg',
//     teaser: 'Transport/déménagement : meubles, objets volumineux, manutention.',
//     metaDescription:
//       "Prestataire transporteur : déménagements, transport de meubles, livraison d\'objets volumineux, chargement et déchargement d\'équipements lourds. Réseau actif dans les 58 wilayas.",
//     contentIntro:
//       'Réservez un prestataire transporteur pour vos déménagements, transport de meubles/objets volumineux et manutention (chargement/déchargement).',
//     bullets: [
//       'Déménagements et mobilier',
//       'Colis volumineux',
//       'Chargement/déchargement',
//       '58 wilayas',
//     ],
//   },
//   {
//     slug: 'autres',
//     title: 'Petits Travaux en Algérie',
//     h1: 'Autres services',
//     icon: 'https://supabase.jeelwork.com/storage/v1/object/public/static/icons/miscellaneous.svg',
//     teaser: 'Montage de meubles, petites réparations, aide polyvalente.',
//     metaDescription:
//       "Expert polyvalent : montage de meubles/étagères, réparation de portes et poignées, installation de tringles, petits travaux, rebouchage de trous. Service rapide près de chez vous.",
//     contentIntro:
//       'Trouvez un expert polyvalent pour vos petits travaux : montage d\'éléments, réparations simples, pose de tringles et finitions.',
//     bullets: [
//       'Montage & petits travaux',
//       'Réparations courantes',
//       'Interventions rapides',
//       'Partout en Algérie',
//     ],
//   },
// ];

// export function getServiceBySlug(slug: string): ServiceItem | undefined {
//   return SERVICES.find((s) => s.slug === slug);
// }
