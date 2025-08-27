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
  return (
    <div className="no-sticky-header">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}