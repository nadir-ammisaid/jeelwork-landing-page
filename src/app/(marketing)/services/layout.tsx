// src/app/(marketing)/services/layout.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Services - Jeelwork Algérie',
    template: '%s | Jeelwork Algérie',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  // Ce layout s’applique uniquement aux routes /services/*
  // Le RootLayout (src/app/layout.tsx) reste global et garde le header sticky par défaut.
  return (
    <div className="no-sticky-header">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
// Note: Le header n'est pas sticky ici, il est géré par le RootLayout global.
// Ce layout permet de personnaliser le header et footer pour les pages de services.
// Le style "no-sticky-header" est utilisé pour éviter le comportement sticky du header global