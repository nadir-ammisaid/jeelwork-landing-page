'use client';

import Link from 'next/link';
import Script from 'next/script';

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: 'Comment réserver un jobber plombier ?',
    a: "Décrivez votre besoin (fuite, débouchage, installation chauffe-eau/robinetterie), recevez un devis simple puis réservez en quelques clics. Le jobber intervient à l'adresse indiquée.",
  },
  {
    q: 'Jeelwork couvre-t-il les 58 wilayas ?',
    a: "Oui. Jeelwork connecte des particuliers et des jobbers qualifiés dans les 58 wilayas. Consultez les profils actifs près de chez vous avec l'avis de la communauté",
  },
  {
    q: 'Puis-je obtenir un devis avant la prestation ?',
    a: "Oui. Après votre demande, vous recevez un devis estimatif (prix/délais). Vous validez uniquement si cela vous convient. Le paiement se fait après la prestation.",
  },
  {
    q: "En combien de temps un jobber peut intervenir ?",
    a: "Selon votre localisation et le service, une intervention peut être proposée le jour même ou sous 24-48h. Pour les urgences (plomberie/électricité), c'est souvent très rapide.",
  },
  {
    q: 'Comment sont vérifiés les jobbers ?',
    a: "Nous examinons les informations déclaratives, l'historique des missions et les avis des clients. Les profils avec de bonnes évaluations apparaissent en priorité.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: "Vous payez le jobber directement après la prestation (espèces, virement ou autre moyen convenu). Jeelwork ne perçoit pas de paiement pour votre compte.",
  },
  {
    q: "Puis-je annuler ou reprogrammer une intervention ?",
    a: "Oui. Prévenez le jobber dès que possible via la messagerie/coordonnées pour convenir d'une nouvelle date. Les conditions d'annulation sont celles du jobber.",
  },
  {
    q: 'Que faire en cas de litige ?',
    a: "Contactez d'abord le jobber pour trouver une solution amiable. Si besoin, signalez le problème à Jeelwork pour examen et modération du profil.",
  },
];

// JSON-LD pour rich results
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="faq" aria-label="Foire aux questions">
      <div className="container">
        <h2 className="faq-title">FAQ</h2>
        <p className="faq-subtitle">Retrouvez les réponses aux questions les plus fréquentes sur Jeelwork</p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">
                {item.q}
                <span className="faq-chevron" aria-hidden>
                  ▾
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="faq-cta">
          <Link href="#download" className="btn" aria-label="Essayer l'application maintenant">
            Téléchargez l&apos;application
          </Link>
        </div>

      {/* Schema.org FAQ */}
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </section>
  );
}
