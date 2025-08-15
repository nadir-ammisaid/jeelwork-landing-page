// src/lib/jobbers.ts
export type Jobber = {
  id: string;
  name: string;
  trade: string;       // ex: Plombier, Électricien…
  wilaya: string;      // ex: Alger
  city?: string;       // ex: Hydra
  rating?: number;     // ex: 4.8
  avatar?: string;     // chemin image publique optionnelle
};

export async function getRecentJobbers(): Promise<Jobber[]> {
  // >>> Remplace plus tard par un appel DB ou API
  // (cette fonction est *côté serveur* grâce à l’app router)
  return [
    { id: '1', name: 'Amine B.', trade: 'Plombier',     wilaya: 'Alger',    city: 'El Biar',  rating: 4.6, avatar: '/images/avatars/nadir.jpeg' },
    { id: '2', name: 'Imad K.',   trade: 'Électricien',  wilaya: 'Oran',     city: 'Bir El Djir', rating: 4.7, avatar: '/images/avatars/nadir.jpeg' },
    { id: '3', name: 'Hichem M.',   trade: 'Peintre',      wilaya: 'Constantine', city: 'El Khroub', rating: 4.9, avatar: '/images/avatars/nadir.jpeg' },
    { id: '4', name: 'Yahia D.', trade: 'Climatisation', wilaya: 'Ghardaïa',   city: 'Ghardaïa', rating: 4.7, avatar: '/images/avatars/nadir.jpeg' },
  ];
}
