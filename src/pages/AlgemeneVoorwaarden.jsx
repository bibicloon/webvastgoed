import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../components/WhatsAppButton';

export default function AlgemeneVoorwaarden() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Algemene Voorwaarden | Webvastgoed.nl',
    url: 'https://webvastgoed.nl/algemene-voorwaarden',
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
        title="Algemene Voorwaarden"
        description="Algemene voorwaarden van Webvastgoed.nl voor de ontwikkeling van maatwerk websites, webshops, hosting en SEO-dienstverlening. KvK: 42077914."
        keywords="algemene voorwaarden webvastgoed, voorwaarden website laten maken, zakelijke voorwaarden webdesign"
        schema={termsSchema}
      />

      <div className="container" style={{ maxWidth: '940px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Zakelijke Dienstverlening · KvK 42077914</span>
          </div>
          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Algemene Voorwaarden
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Heldere afspraken zonder kleine lettertjes. Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van Webvastgoed.nl.
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
              Artikel 1. Bedrijfsidentiteit
            </h2>
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
              <div><strong style={{ color: '#C5A059' }}>Opdrachtnemer:</strong> Webvastgoed.nl</div>
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
              Artikel 2. Toepasselijkheid &amp; Offertes
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Deze voorwaarden zijn van toepassing op alle aanbiedingen, werkzaamheden en overeenkomsten tussen Webvastgoed.nl en de zakelijke opdrachtgever. Alle op de website en in offertes genoemde prijzen zijn in euro&apos;s en <strong style={{ color: '#F5EFE4' }}>exclusief 21% btw</strong>, tenzij uitdrukkelijk anders vermeld.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              Artikel 3. Uitvoering, Oplevering &amp; € 250,- Starter-actie
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Webvastgoed.nl ontwikkelt maatwerk websites en webshops op basis van moderne React en Next.js webarchitectuur.
            </p>
            <ul style={{ paddingLeft: '1.35rem', color: '#CBD5E1', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>Bij de eenmalige starter actie (€ 250,- excl. btw) levert Webvastgoed.nl een complete maatwerk bedrijfswebsite op tot maximaal 3 pagina&apos;s, inclusief mobielvriendelijke weergave en contactformulier.</li>
              <li>Voor oplevering ontvangt de opdrachtgever een live proefomgeving ter beoordeling. Eventuele tekstuele of visuele correcties worden in overleg verwerkt voor livegang.</li>
              <li>Opdrachtgever draagt zorg voor tijdige aanlevering van benodigde teksten, bedrijfsgegevens of beeldmateriaal, tenzij is overeengekomen dat Webvastgoed.nl dit verzorgt.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              Artikel 4. Eigendomsrecht van Domeinnaam &amp; Website
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Uw domeinnaam, bedrijfsnaam, logo&apos;s en aangeleverde content blijven te allen tijde <strong style={{ color: '#F5EFE4' }}>100% eigendom van de opdrachtgever</strong>. Na volledige voldoening van de overeengekomen eenmalige afkoopsom verkrijgt de opdrachtgever het volledige gebruiksrecht op de opgeleverde maatwerk website.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              Artikel 5. Maandpakketten, Hosting &amp; Onderhoud
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Indien opdrachtgever kiest voor een maandelijks pakket of een hosting en onderhoudspakket, zorgt Webvastgoed.nl voor snelle cloud hosting, SSL beveiliging, technische updates en tekstuele of visuele aanpassingen conform het gekozen pakket. Na de overeengekomen eerste looptijd zijn maandpakketten maandelijks opzegbaar met een opzegtermijn van een kalendermaand.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              Artikel 6. Betalingsvoorwaarden
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
              Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij schriftelijk anders overeengekomen. Bij grotere maatwerkprojecten of webshops kan Webvastgoed.nl werken met een aanbetaling van 50% bij opdrachtbevestiging en 50% bij oplevering.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '0.75rem' }}>
              Artikel 7. Aansprakelijkheid &amp; Toepasselijk Recht
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1rem' }}>
              Webvastgoed.nl spant zich maximaal in voor een veilige en ononderbroken beschikbaarheid van alle gebouwde websites. Eventuele aansprakelijkheid van Webvastgoed.nl voor directe schade is beperkt tot maximaal het factuurbedrag van de betreffende opdracht (of bij maandpakketten het bedrag over de laatste drie maanden). Op alle rechtsbetrekkingen is uitsluitend Nederlands recht van toepassing.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
              <Link to="/privacybeleid" className="btn-outline" style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}>
                Bekijk Privacybeleid (AVG)
              </Link>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}>
                Vragen? Neem Contact Op
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
