import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Investeringsplannen() {
  const plansSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Product',
          'name': 'Starter Website (Portfolio Actie)',
          'description': 'Maatwerk website tot maximaal 3 pagina’s, volledig responsive, inclusief contactformulier en basis SEO.',
          'offers': {
            '@type': 'Offer',
            'price': '300.00',
            'priceCurrency': 'EUR'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Product',
          'name': 'Bedrijfswebsite op Maat',
          'description': 'Uitgebreide maatwerk website tot 8 pagina’s in React en Next.js, volledig afgestemd op uw bedrijf en Google SEO.',
          'offers': {
            '@type': 'Offer',
            'price': '950.00',
            'priceCurrency': 'EUR'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Product',
          'name': 'Maatwerk Webshop',
          'description': 'Compleet ontworpen webshop tot 50 producten, iDEAL & betaalmethoden, voorraadbeheer en mobiele checkout.',
          'offers': {
            '@type': 'Offer',
            'price': '1950.00',
            'priceCurrency': 'EUR'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'item': {
          '@type': 'Product',
          'name': 'Onderhoud Basis',
          'description': 'Snelle Europese cloud hosting, SSL-certificaat, dagelijkse back-ups, beveiligingsmonitoring en technische updates.',
          'offers': {
            '@type': 'Offer',
            'price': '49.00',
            'priceCurrency': 'EUR',
            'eligibleQuantity': { '@type': 'QuantitativeValue', 'unitCode': 'MON' }
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'item': {
          '@type': 'Product',
          'name': 'Onderhoud & Content',
          'description': 'Alles uit Onderhoud Basis plus doorlopende tekst- en fotowijzigingen, nieuwe projecten of producten plaatsen en directe support.',
          'offers': {
            '@type': 'Offer',
            'price': '89.00',
            'priceCurrency': 'EUR',
            'eligibleQuantity': { '@type': 'QuantitativeValue', 'unitCode': 'MON' }
          }
        }
      }
    ]
  };

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.82) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_investeringsplannen.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Tarieven & Pakketten - Maatwerk Websites & Webshops"
        description="Transparante eenmalige tarieven voor maatwerk websites en webshops. Tijdelijke Portfolio Actie: starter website voor € 300,-, Bedrijfswebsite vanaf € 950,- en Maatwerk Webshop vanaf € 1.950,-."
        keywords="website laten maken kosten, website 300 euro, bedrijfswebsite 950 euro, maatwerk website tarieven, webshop laten bouwen prijs"
        schema={plansSchema}
      />

      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Heldere Tarieven · Geen Verborgen Kosten</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Website of webshop laten maken: tarieven &amp; pakketten
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Bij Webvastgoed betaalt u een heldere eenmalige investering voor het ontwerp en de bouw van uw website of webshop. Zo zit u nergens onnodig aan vast en krijgt u 100% maatwerk zonder standaard templates of verouderde PHP systemen.
          </p>
        </div>

        {/* Highlight Banner: Portfolio Actie € 300,- */}
        <div
          style={{
            backgroundColor: 'rgba(22, 34, 59, 0.94)',
            backdropFilter: 'blur(12px)',
            border: '2px solid #C5A059',
            borderRadius: '10px',
            padding: '2.25rem 2.5rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
            <div style={{ display: 'inline-block', backgroundColor: '#C5A059', color: '#090E17', fontWeight: 700, fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
              Tijdelijke Portfolio Actie
            </div>
            <h2 style={{ fontSize: '2rem', color: '#F5EFE4', marginBottom: '0.6rem' }}>
              Starter Website (max. 3 pagina&apos;s)
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>
              Omdat wij ons portfolio met onze nieuwste websoftware verder uitbreiden, bouwen wij tijdelijk een complete, professionele bedrijfswebsite tot maximaal 3 pagina&apos;s (bijv. <em>Home, Diensten &amp; Contact</em>) voor een eenmalige actieprijs. Meer pagina&apos;s of extra modules zijn altijd mogelijk tegen een eerlijke meerprijs.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} color="#C5A059" /> 100% Maatwerk Design</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} color="#C5A059" /> Mobiel, Tablet &amp; Desktop</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} color="#C5A059" /> Geen PHP / Veilige Code</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} color="#C5A059" /> Contactformulier &amp; Basis SEO</span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(9, 14, 23, 0.85)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              borderRadius: '8px',
              padding: '1.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.82rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
              Eenmalige investering
            </div>
            <div className="font-serif" style={{ fontSize: '3.2rem', fontWeight: 700, color: '#C5A059', lineHeight: 1.1, margin: '0.35rem 0' }}>
              € 300,-
            </div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.25rem' }}>
              Eenmalig (excl. btw) · Geen verplichte maandkosten
            </div>
            <Link to="/contact?pakket=actie" className="btn-primary" style={{ width: '100%' }}>
              <span>Actie Aanvragen</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 3 Standard Packages Grid (Donkere Luxe Stijl, Geen Wit) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* CARD 1: BEDRIJFSWEBSITE */}
          <div
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.92)',
              backdropFilter: 'blur(12px)',
              color: '#F5EFE4',
              borderRadius: '10px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              borderTop: '3px solid #C5A059',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div>
              <div style={{ marginBottom: '0.85rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C5A059' }}>
                  Zakelijk &amp; Compleet
                </span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#F5EFE4', marginBottom: '0.75rem' }}>
                Bedrijfswebsite
              </h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>vanaf</span>
                  <span className="font-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 950,-
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '0.4rem', fontWeight: 500 }}>
                  Eenmalige investering (excl. btw) · 100% uw eigendom
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(148, 163, 184, 0.16)', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Volledig maatwerk ontwerp (tot 8 pagina’s)',
                  'Razendsnelle React & Next.js webarchitectuur',
                  'Geoptimaliseerd voor mobiel, tablet & desktop',
                  'Uitgebreide technische Google SEO & Schema.org opzet',
                  'Conversiegerichte offerte- & WhatsApp modules',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=bedrijfswebsite"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <span>Bedrijfswebsite Bespreken</span>
              <ArrowRight size={16} color="#C5A059" />
            </Link>
          </div>

          {/* CARD 2: WEBSHOP */}
          <div
            style={{
              backgroundColor: 'rgba(17, 26, 46, 0.96)',
              backdropFilter: 'blur(12px)',
              color: '#F5EFE4',
              borderRadius: '10px',
              padding: '2.5rem 2rem',
              border: '2px solid #C5A059',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.55)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(197, 160, 89, 0.3)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C5A059' }}>
                  E-Commerce &amp; Verkoop
                </span>
                <span
                  style={{
                    backgroundColor: '#C5A059',
                    color: '#090E17',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Populair
                </span>
              </div>

              <h2 style={{ fontSize: '2.1rem', color: '#F5EFE4', marginBottom: '0.75rem' }}>
                Maatwerk Webshop
              </h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>vanaf</span>
                  <span className="font-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 1.950,-
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '0.4rem', fontWeight: 500 }}>
                  Eenmalige investering (excl. btw) · Direct klaar voor verkoop
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.3)', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Luxe webshop ontwerp op maat (zoals Pastry Company)',
                  'Tot 50 producten overzichtelijk ingericht',
                  'Directe koppeling met iDEAL, Bancontact & creditcard',
                  'Geoptimaliseerd voor mobiel bestellen & conversie',
                  'Product Schema.org opzet voor optimale Google vindbaarheid',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=webshop"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <span>Webshop Bespreken</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* CARD 3: MAATWERK & WEBAPPLICATIES */}
          <div
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.92)',
              backdropFilter: 'blur(12px)',
              color: '#F5EFE4',
              borderRadius: '10px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              borderTop: '3px solid #C5A059',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div>
              <div style={{ marginBottom: '0.85rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C5A059' }}>
                  Specifieke Modules
                </span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#F5EFE4', marginBottom: '0.75rem' }}>
                Maatwerk &amp; Platforms
              </h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>prijs</span>
                  <span className="font-serif" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#C5A059', lineHeight: 1.1 }}>
                    Op aanvraag
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '0.4rem', fontWeight: 500 }}>
                  Vooraf vaste, transparante offerte op maat
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(148, 163, 184, 0.16)', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Interactieve route of prijsberekenaars (zoals Smart Stops)',
                  'Voor/Na projectsliders & interactieve keuzehulpen',
                  'Meertalige websites en internationale platforms',
                  'Koppelingen met externe API’s, CRM of boekingssystemen',
                  'Volledige begeleiding van ontwerp tot livegang',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=maatwerk"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <span>Vrijblijvende Offerte</span>
              <ArrowRight size={16} color="#C5A059" />
            </Link>
          </div>
        </div>

        {/* OPTIONEEL LOSGEKOPPELD: HOSTING, BEVEILIGING & ONDERHOUD */}
        <div
          style={{
            marginTop: '4.5rem',
            backgroundColor: 'rgba(22, 34, 59, 0.94)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderTop: '3px solid #C5A059',
            borderRadius: '10px',
            padding: 'clamp(1.85rem, 4vw, 3rem)',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.85rem' }}>
              <span>Optioneel &amp; Flexibel Losgekoppeld</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.3vw, 2.25rem)', color: '#F5EFE4', marginBottom: '0.75rem' }}>
              Onderhoud, Hosting &amp; Doorlopende Support
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7 }}>
              Wij koppelen het onderhoud bewust los van de bouwkosten van uw website. Zo betaalt u voor de bouw slechts eenmalig en kiest u daarna zelf of u de hosting, beveiliging en wijzigingen zorgeloos door ons laat verzorgen.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch',
            }}
          >
            {/* Optie 1: Onderhoud Basis (€ 49,- p/m) */}
            <div
              style={{
                backgroundColor: 'rgba(9, 14, 23, 0.78)',
                border: '1px solid rgba(197, 160, 89, 0.32)',
                borderRadius: '8px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#C5A059', marginBottom: '0.4rem' }}>
                  Technisch Ontzorgd
                </div>
                <h3 style={{ fontSize: '1.55rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
                  Onderhoud Basis
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.1rem' }}>
                  <span className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 49,-
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>p/m (excl. btw)</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Voor ondernemers die willen dat hun website of webshop altijd razendsnel, veilig en up-to-date in de lucht blijft zonder er zelf naar om te kijken.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', color: '#E2E8F0', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Razendsnelle Europese cloud hosting &amp; SSL-certificaat</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Dagelijkse automatische back-ups &amp; 24/7 uptime-monitoring</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Doorlopende beveiligings- &amp; React/Next.js software-updates</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Technische storingsdienst &amp; domeinbeheer</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact?pakket=onderhoud-basis" className="btn-secondary" style={{ width: '100%' }}>
                <span>Onderhoud Basis Kiezen</span>
                <ArrowRight size={15} color="#C5A059" />
              </Link>
            </div>

            {/* Optie 2: Onderhoud & Content (€ 89,- p/m) */}
            <div
              style={{
                backgroundColor: 'rgba(17, 26, 46, 0.98)',
                border: '2px solid #C5A059',
                borderRadius: '8px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 14px 36px rgba(0, 0, 0, 0.45)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#C5A059' }}>
                    Volledig Ontzorgd
                  </span>
                  <span
                    style={{
                      backgroundColor: '#C5A059',
                      color: '#090E17',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Meest Gekozen
                  </span>
                </div>
                <h3 style={{ fontSize: '1.55rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
                  Onderhoud &amp; Content
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.1rem' }}>
                  <span className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 89,-
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>p/m (excl. btw)</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Voor bedrijven die naast snelle hosting ook regelmatig teksten, foto&apos;s, projecten of producten willen laten aanpassen zonder losse uurtarieven.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', color: '#E2E8F0', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Alles uit Onderhoud Basis</strong> (hosting, SSL, back-ups &amp; updates)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Doorlopende tekst- en fotowijzigingen op verzoek</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Nieuwe projecten, cases of producten laten plaatsen</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>Directe prioriteitssupport via WhatsApp en e-mail</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact?pakket=onderhoud-content" className="btn-primary" style={{ width: '100%' }}>
                <span>Onderhoud &amp; Content Kiezen</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Optie 3: Geen onderhoud? Eigen hosting */}
            <div
              style={{
                backgroundColor: 'rgba(9, 14, 23, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.24)',
                borderRadius: '8px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#94A3B8', marginBottom: '0.4rem' }}>
                  Zelf Beheerd
                </div>
                <h3 style={{ fontSize: '1.55rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
                  Geen onderhoud?
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.1rem' }}>
                  <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700, color: '#F5EFE4', lineHeight: 1.2 }}>
                    Eigen hosting
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  Wilt u geen maandelijks onderhoudspakket? Dan verzorgen wij de volledige oplevering op de eigen hosting van de klant tegen een eenmalige overdrachtstoeslag, zonder doorlopende support.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                  <li>• Volledige overdracht van de gecompileerde broncode op uw eigen server</li>
                  <li>• Eenmalige overdrachtstoeslag voor externe serverconfiguratie</li>
                  <li>• Geen maandelijkse kosten bij Webvastgoed.nl</li>
                  <li>• Zonder doorlopende technische updates of support</li>
                </ul>
              </div>
              <Link to="/contact" className="btn-secondary" style={{ width: '100%' }}>
                <span>Vraag naar de Voorwaarden</span>
                <ArrowRight size={15} color="#C5A059" />
              </Link>
            </div>
          </div>
        </div>

        {/* EERLIJKE PRIJSVERGELIJKING & WAARDEVERANKERING */}
        <div
          style={{
            marginTop: '4rem',
            backgroundColor: 'rgba(22, 34, 59, 0.94)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderTop: '3px solid #C5A059',
            borderRadius: '10px',
            padding: 'clamp(1.85rem, 4vw, 3rem)',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.85rem' }}>
              <span>Eerlijke Vergelijking</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.55rem, 2.2vw, 2.2rem)', color: '#F5EFE4', marginBottom: '0.75rem' }}>
              Waarom kunnen wij maatwerk aanbieden voor dit tarief?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7 }}>
              Veel ondernemers vragen zich af hoe het verschil tussen een traditioneel webbureau van duizenden euro&apos;s en onze tarieven ontstaat. Door onze moderne React en Next.js ontwikkelstraat zonder logge kantooroverhead betaalt u bij ons puur voor het digitale vakwerk.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Optie A: Traditioneel Webbureau */}
            <div
              style={{
                backgroundColor: 'rgba(9, 14, 23, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                padding: '1.75rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#94A3B8', marginBottom: '0.4rem' }}>
                Traditioneel Webbureau
              </div>
              <div className="font-serif" style={{ fontSize: '1.65rem', color: '#F5EFE4', fontWeight: 700, marginBottom: '1rem' }}>
                € 3.500,- tot € 7.500,-
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                <li>• Hoge aanloopkosten door kantoorpanden, accountmanagers en vergaderingen</li>
                <li>• Doorlooptijd van gemiddeld 8 tot 14 weken</li>
                <li>• Vaak alsnog gebouwd op een zwaar WordPress of PHP systeem</li>
                <li>• Achteraf uurtarief van € 95,- tot € 135,- voor elke tekstaanpassing</li>
              </ul>
            </div>

            {/* Optie B: Standaard Template / Zelfbouw */}
            <div
              style={{
                backgroundColor: 'rgba(9, 14, 23, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                padding: '1.75rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#94A3B8', marginBottom: '0.4rem' }}>
                Standaard Template Bouwer
              </div>
              <div className="font-serif" style={{ fontSize: '1.65rem', color: '#F5EFE4', fontWeight: 700, marginBottom: '1rem' }}>
                € 500,- tot € 1.500,-
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                <li>• Standaard thema dat al door duizenden andere bedrijven wordt gebruikt</li>
                <li>• Trage mobiele laadtijd door 20+ losse plugins van derden</li>
                <li>• Kwetsbaar voor verouderde plugins en geautomatiseerde inbraakpogingen</li>
                <li>• Beperkte Google vindbaarheid door vervuilde broncode</li>
              </ul>
            </div>

            {/* Optie C: Webvastgoed.nl */}
            <div
              style={{
                backgroundColor: 'rgba(17, 26, 46, 0.98)',
                border: '2px solid #C5A059',
                borderRadius: '8px',
                padding: '1.75rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#C5A059', marginBottom: '0.4rem' }}>
                Webvastgoed.nl Maatwerk
              </div>
              <div className="font-serif" style={{ fontSize: '1.65rem', color: '#C5A059', fontWeight: 700, marginBottom: '1rem' }}>
                € 300,- actie of v.a. € 950,-
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#F1F5F9', lineHeight: 1.55 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>100% op maat ontworpen in React &amp; Next.js zonder standaard templates</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Binnen 5 tot 10 werkdagen compleet opgeleverd</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Geen kwetsbare PHP databases of trage plugins</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Check size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Onderhoud &amp; hosting flexibel los te kiezen (vanaf € 49,- p/m)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contextual Internal Links */}
          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(148, 163, 184, 0.18)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.9rem',
              color: '#CBD5E1',
            }}
          >
            <span>
              Meer weten over de opbouw van onze tarieven en het losgekoppelde onderhoud? Lees onze gids:{' '}
              <Link to="/kennisbank/wat-kost-een-bedrijfswebsite" style={{ color: '#C5A059', textDecoration: 'underline', fontWeight: 600 }}>
                Wat kost een professionele bedrijfswebsite laten maken?
              </Link>
            </span>
            <Link to="/portfolio" style={{ color: '#C5A059', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>Bekijk opgeleverde voorbeelden</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
