// src/lib/jobbers.ts
export type Jobber = {
  id: string;
  name: string;
  trade: string;
  wilaya: string;
  city?: string;
  rating?: number;
  avatar?: string;
  trade: string;
  wilaya: string;
  city?: string;
  rating?: number;
  avatar?: string;
};

export async function getRecentJobbers(): Promise<Jobber[]> {
  return [
    { id: '1', name: 'Belhadj', trade: 'Plombier',     wilaya: 'Ghardaïa',    city: 'Bounoura',  rating: 4.6, avatar: '/images/avatars/user-avatar.png' },
    { id: '2', name: 'Fares',   trade: 'Placo-plâtre',  wilaya: 'Ghardaïa',     city: 'Ghardaïa', rating: 4.7, avatar: '/images/avatars/user-avatar.png' },
    { id: '3', name: 'Abdallah',   trade: 'Froid & climatisation',      wilaya: 'Ghardaïa', city: 'Berriane', rating: 4.9, avatar: '/images/avatars/user-avatar.png' },
    { id: '4', name: 'Oussama', trade: 'Électricien', wilaya: 'Ghardaïa',   city: 'Berriane', rating: 4.7, avatar: '/images/avatars/user-avatar.png' },
  ];
}
