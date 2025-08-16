// src/lib/jobbers.ts
export type Jobber = {
  id: string;
  name: string;
  trade: string;
  wilaya: string;
  city?: string;
  rating?: number;
  avatar?: string;
};

export async function getRecentJobbers(): Promise<Jobber[]> {
  return [
    { id: '1', name: 'Amine B.', trade: 'Plombier',     wilaya: 'Alger',    city: 'El Biar',  rating: 4.6, avatar: '/images/avatars/nadir.jpeg' },
    { id: '2', name: 'Imad K.',   trade: 'Électricien',  wilaya: 'Oran',     city: 'Bir El Djir', rating: 4.7, avatar: '/images/avatars/nadir.jpeg' },
    { id: '3', name: 'Hichem M.',   trade: 'Peintre',      wilaya: 'Constantine', city: 'El Khroub', rating: 4.9, avatar: '/images/avatars/nadir.jpeg' },
    { id: '4', name: 'Yahia D.', trade: 'Climatisation', wilaya: 'Ghardaïa',   city: 'Ghardaïa', rating: 4.7, avatar: '/images/avatars/nadir.jpeg' },
  ];
}
