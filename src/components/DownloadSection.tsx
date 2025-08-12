import Image from 'next/image'
import Link from 'next/link'

export default function DownloadSection() {
  return (
    <section id="download" className="app-download" aria-label="Téléchargement de l'application">
      <div className="app-content">
        <div className="container">
          <h2>Téléchargez Jeelwork Algérie</h2>
          <p>
            Accédez à tous nos services, où que vous soyez, depuis votre smartphone.
          </p>
          
          <div className="download-options">
            <Link
              href="https://play.google.com/store/apps/details?id=com.jeeltech.jeelwork"
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger sur Google Play Store"
            >
              <Image
                src="/images/google-play-playstore-logo.png"
                alt="Google Play Store"
                width={24}
                height={24}
                className="play-store-badge"
              />
              Télécharger l&apos;App
            </Link>
            
            <span className="download-separator" aria-hidden="true">ou</span>
            
            <Link
              href="https://app.jeelwork.com/"
              className="download-btn web-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Accéder à la version web"
            >
              <Image
                src="/images/internet-web-browser-icon.svg"
                alt="Web Browser"
                width={24}
                height={24}
                className="play-store-badge"
              />
              Continuer sur le site
            </Link>
          </div>
          
          <p className="app-info">
            Gratuit et conçu pour fonctionner efficacement dans toutes les wilayas.
          </p>
        </div>
      </div>
    </section>
  )
}