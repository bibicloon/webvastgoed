import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../components/WhatsAppButton';

export default function Privacybeleid() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacybeleid & Cookieverklaring | Webvastgoed.nl',
    url: 'https://webvastgoed.nl/privacybeleid',
    inLanguage: 'nl-NL',
  };

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.90) 0%, rgba(17, 26, 46, 0.88) 50%, rgba(9, 14, 23, 0.96) 100%), url('/assets/hero_architecture.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Privacybeleid & Cookieverklaring (AVG)"
        description="Privacyverklaring en cookiebeleid van Webvastgoed.nl conform de Algemene Verordening Gegevensbescherming (AVG / GDPR). KvK: 42077914."
        keywords="privacybeleid webvastgoed, avg verklaring, cookieverklaring, persoonsgegevens bescherming"
        schema={privacySchema}
      />

      <div className="container" style={{ maxWidth: '940px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Juridische Informatie · AVG / GDPR</span>
          </div>
          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Privacybeleid &amp; Cookieverklaring
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Webvastgoed.nl gaat uiterst zorgvuldig om met uw bedrijfs- en persoonsgegevens. Hieronder leest u welke gegevens wij verwerken, met welk doel en hoe wij uw privacy waarborgen conform de Algemene Verordening Gegevensbescherming (AVG).
          </p>
        </div>

        {/* Main Content Card */}
        <div
          style={{
            backgroundColor: 'rgba(22, 34, 59, 0.92)',
            backdropFilter: 'blur(12px)',
            borderRadius: '10px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderTop: '3px solid #C5A059',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.25rem',
          }}
        >
          {/* Section 1 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              1. Verantwoordelijke &amp; Bedrijfsgegevens
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Webvastgoed.nl is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring:
            </p>
            <div
              style={{
                backgroundColor: 'rgba(9, 14, 23, 0.65)',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                borderRadius: '8px',
                padding: '1.25rem 1.5rem',
                fontSize: '0.95rem',
                color: '#E2E8F0',
                lineHeight: 1.8,
              }}
            >
              <div><strong style={{ color: '#C5A059' }}>Handelsnaam:</strong> Webvastgoed.nl</div>
              <div><strong style={{ color: '#C5A059' }}>KvK-nummer:</strong> 42077914</div>
              <div><strong style={{ color: '#C5A059' }}>BTW-identificatienummer:</strong> NL005478178B19</div>
              <div>
                <strong style={{ color: '#C5A059' }}>E-mailadres:</strong>{' '}
                <a href="mailto:info@webvastgoed.nl" style={{ color: '#F5EFE4', textDecoration: 'underline' }}>
                  info@webvastgoed.nl
                </a>
              </div>
              <div>
                <strong style={{ color: '#C5A059' }}>Telefoon / WhatsApp:</strong>{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#F5EFE4', textDecoration: 'underline' }}>
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              2. Persoonsgegevens die wij verwerken
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Webvastgoed.nl verwerkt uw persoonsgegevens doordat u gebruikmaakt van onze diensten en/of omdat u deze gegevens zelf aan ons verstrekt via ons contactformulier, per e-mail of via WhatsApp:
            </p>
            <ul style={{ paddingLeft: '1.35rem', color: '#CBD5E1', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>Voor- en achternaam</li>
              <li>Bedrijfsnaam en eventuele KvK-gegevens</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Inhoud van uw aanvraag, projectwensen of correspondentie</li>
              <li>Facturatie- en betaalgegevens (uitsluitend bij een zakelijke overeenkomst)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              3. Doeleinden en grondslagen van de verwerking
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Wij verwerken uw persoonsgegevens uitsluitend op basis van de wettelijke grondslagen uit de AVG (uitvoering van een overeenkomst, wettelijke verplichting of gerechtvaardigd bedrijfsbelang) voor de volgende doelen:
            </p>
            <ul style={{ paddingLeft: '1.35rem', color: '#CBD5E1', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>Het beantwoorden van uw aanvraag en het opstellen van een vrijblijvend voorstel of offerte.</li>
              <li>Het ontwerpen, ontwikkelen, opleveren en beheren van uw website, webshop of domeinnaam.</li>
              <li>Het afhandelen van facturatie en het voldoen aan de wettelijke fiscale bewaarplicht (Belastingdienst).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              4. Bewaartermijnen
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Webvastgoed.nl bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Vrijblijvende offerteaanvragen die niet leiden tot een samenwerking worden uiterlijk na 12 maanden verwijderd. Voor zakelijke facturen en financiële administratie geldt de wettelijke fiscale bewaartermijn van 7 jaar.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              5. Delen van persoonsgegevens met derden
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Webvastgoed.nl verkoopt uw gegevens nooit aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u (bijvoorbeeld voor het registreren van uw domeinnaam bij SIDN of het hosten van uw webapplicatie op beveiligde Europese servers) of om te voldoen aan een wettelijke verplichting.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              6. Cookies en vergelijkbare technieken
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Webvastgoed.nl maakt uitsluitend gebruik van technische en functionele werking die geen inbreuk maakt op uw privacy. Wij plaatsen <strong style={{ color: '#F5EFE4' }}>geen invasieve tracking-cookies of advertentiepixels van derden</strong> zonder uw voorafgaande toestemming. Onze React &amp; Next.js architectuur is specifiek ontworpen voor maximale snelheid en privacy.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              7. Gegevens inzien, aanpassen of verwijderen
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1rem' }}>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Webvastgoed.nl. U kunt een verzoek tot inzage, correctie of verwijdering sturen naar{' '}
              <a href="mailto:info@webvastgoed.nl" style={{ color: '#C5A059', textDecoration: 'underline' }}>
                info@webvastgoed.nl
              </a>
              . Wij reageren zo snel mogelijk, maar uiterlijk binnen vier weken, op uw verzoek.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
              <Link to="/algemene-voorwaarden" className="btn-outline" style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}>
                Bekijk Algemene Voorwaarden
              </Link>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}>
                Neem Contact Op
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
