import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './terms-of-use.css';

export const metadata = {
  title: "Conditions d'utilisation - Jeelwork Algérie",
  description: "Conditions générales d'utilisation de la plateforme Jeelwork"
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main className="terms-container">
        <h1>Conditions Générales d'Utilisation</h1>

        <section>
          <h2 className="terms-title">Article 1 : Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités dans lesquelles la plateforme Jeelwork fournit ses services aux utilisateurs. L'utilisation de la plateforme implique l'acceptation sans réserve des CGU.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 2 : Accès aux services</h2>
          <p>
            L'accès à Jeelwork est gratuit. Il permet aux clients de publier des demandes de service et aux jobbers de proposer leurs prestations. L'inscription est requise pour utiliser certaines fonctionnalités.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 3 : Inscription</h2>
          <ul>
            <li>L'utilisateur s'engage à fournir des informations exactes lors de l'inscription.</li>
            <li>Les identifiants sont strictement personnels et confidentiels.</li>
            <li>Tout usage frauduleux peut entraîner la suppression du compte.</li>
          </ul>
        </section>

        <section>
          <h2 className="terms-title">Article 4 : Utilisation de la plateforme</h2>
          <ul>
            <li>Les prestations sont convenues directement entre le client et le jobber.</li>
            <li>Jeelwork n'intervient ni dans la réalisation, ni dans le paiement des prestations.</li>
            <li>Les utilisateurs s'engagent à utiliser la plateforme uniquement à des fins légales.</li>
          </ul>
        </section>

        <section>
          <h2 className="terms-title">Article 5 : Responsabilités</h2>
          <p>
            Jeelwork agit comme un simple intermédiaire. Elle ne peut être tenue responsable d'un litige entre client et jobber. Les utilisateurs sont responsables du contenu qu'ils publient.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 6 : Propriété intellectuelle</h2>
          <p>
            Tous les contenus de la plateforme (logos, textes, images, etc.) sont protégés. Toute reproduction est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 7 : Données personnelles</h2>
          <p>
            Jeelwork s'engage à protéger les données personnelles des utilisateurs conformément à la réglementation en vigueur. Vous pouvez exercer vos droits d'accès, de rectification ou de suppression en contactant l'équipe Jeelwork.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 8 : Modification des CGU</h2>
          <p>
            Jeelwork se réserve le droit de modifier les CGU à tout moment. Toute modification prendra effet dès sa publication sur la plateforme.
          </p>
        </section>

        <section>
          <h2 className="terms-title">Article 9 : Durée et résiliation</h2>
          <p>
            Les présentes CGU sont valables pour une durée indéterminée. Chaque utilisateur peut supprimer son compte librement. En cas de manquement aux présentes, Jeelwork pourra suspendre ou supprimer l'accès à ses services.
          </p>
        </section>

        <section>
          <p>
            Dernière mise à jour : juillet 2025.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}