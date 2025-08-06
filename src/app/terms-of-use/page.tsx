import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './terms-of-use.css';

export const metadata = {
  title: "Conditions d'utilisation - Jeel Work Algérie",
  description: "Conditions générales d'utilisation de la plateforme Jeel Work"
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main className="terms-container">
        <h1>Conditions d'utilisation</h1>
        <p>
          En utilisant la plateforme Jeel Work, vous acceptez les présentes
          conditions d'utilisation. La plateforme met en relation des clients et
          des artisans pour la réalisation de prestations de service.
        </p>
        <ul>
          <li>
            Les utilisateurs s'engagent à fournir des informations exactes lors de
            leur inscription.
          </li>
          <li>
            Les prestations sont convenues directement entre le client et
            l'artisan. Jeel Work n'intervient pas dans la réalisation ni le
            paiement.
          </li>
          <li>
            Les utilisateurs doivent respecter les lois en vigueur en Algérie.
          </li>
          <li>
            Tout comportement abusif, frauduleux ou non conforme peut entraîner
            une suspension ou une suppression du compte.
          </li>
        </ul>
        <p>
          Jeel Work se réserve le droit de modifier ces conditions à tout moment.
          <br /><br />
          Dernière mise à jour : août 2025.
        </p>
      </main>
      <Footer />
    </>
  );
}
