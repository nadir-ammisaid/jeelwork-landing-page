import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './privacy-policy.css';

export const metadata = {
  title: 'Politique de confidentialité - Jeel Work Algérie',
  description: 'Politique de confidentialité et protection des données',
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header />
    <main className="privacy-container">
      <h1>Politique de confidentialité</h1>
      <p>
        Chez Jeel Work, nous accordons une grande importance à la protection de
        vos données personnelles. Cette politique explique comment nous
        collectons, utilisons et protégeons vos informations.
      </p>
      <ul>
        <li>
          Les données collectées (nom, téléphone, e-mail, localisation) sont
          utilisées uniquement pour faciliter les mises en relation.
        </li>
        <li>
          Nous ne partageons jamais vos informations avec des tiers sans votre
          consentement explicite.
        </li>
        <li>
          Vos données sont stockées de manière sécurisée et sont accessibles
          uniquement par les membres autorisés de notre équipe.
        </li>
        <li>
          Vous pouvez demander la modification ou la suppression de vos données
          à tout moment en nous contactant.
        </li>
      </ul>
      <p>
        En utilisant notre application ou notre site, vous acceptez cette
        politique. <br /> <br /> Dernière mise à jour : août 2025.
      </p>
    </main>
    <Footer />
    </>
  );
}
