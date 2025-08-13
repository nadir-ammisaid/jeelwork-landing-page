import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './privacy-policy.css';

export const metadata = {
  title: 'Politique de confidentialité - Jeelwork Algérie',
  description: 'Politique de confidentialité et protection des données',
};

export const dynamic = 'force-static';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="privacy-container">
        <h1>Politique de confidentialité</h1>

        <section>
          <h2 className="privacy-title">1. Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment Jeelwork collecte, utilise et protège les données personnelles des utilisateurs de sa plateforme (site web et application mobile).
          </p>
        </section>

        <section>
          <h2 className="privacy-title">2. Données collectées</h2>
          <ul>
            <li>Nom, prénom, adresse email, numéro de téléphone</li>
            <li>Localisation géographique pour faciliter les mises en relation</li>
            <li>Historique des interactions avec la plateforme (demandes, offres, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 className="privacy-title">3. Utilisation des données</h2>
          <ul>
            <li>Faciliter la mise en relation entre clients et jobbers</li>
            <li>Améliorer les services proposés et l'expérience utilisateur</li>
            <li>Communiquer des informations importantes liées à votre activité</li>
          </ul>
        </section>

        <section>
          <h2 className="privacy-title">4. Partage des données</h2>
          <p>
            Nous ne partageons jamais vos informations personnelles avec des tiers sans votre consentement explicite, sauf si la loi l’exige.
          </p>
        </section>

        <section>
          <h2 className="privacy-title">5. Sécurité</h2>
          <p>
            Vos données sont stockées de manière sécurisée, avec des mesures techniques et organisationnelles strictes. Seuls les membres autorisés de l'équipe Jeelwork y ont accès.
          </p>
        </section>

        <section>
          <h2 className="privacy-title">6. Vos droits</h2>
          <ul>
            <li>Demander l'accès, la modification ou la suppression de vos données</li>
            <li>Retirer votre consentement à tout moment</li>
            <li>Exercer vos droits en nous contactant à l'adresse email officielle</li>
          </ul>
        </section>

        <section>
          <h2 className="privacy-title">7. Consentement</h2>
          <p>
            En utilisant la plateforme Jeelwork, vous acceptez la présente politique de confidentialité. Elle peut être modifiée à tout moment. Les utilisateurs seront notifiés en cas de changement important.
          </p>
        </section>

        <section>
          <p>Dernière mise à jour : juillet 2025.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
