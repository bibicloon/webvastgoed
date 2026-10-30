import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function DigitaleGroei() {
  const seoPlansSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Product',
          'name': 'SEO Start',
          'description': 'Voor kleine bedrijven die hun basis goed willen hebben. Technische SEO check, zoekwoordenonderzoek, metadata, H1/H2 structuur, Analytics.',
          'offers': {
            '@type': 'Offer',
            'price': '149.00',
            'priceCurrency': 'EUR',
            'eligibleQuantity': { '@type': 'QuantitativeValue', 'unitCode': 'MON' }
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Product',
          'name': 'SEO Grow',
          'description': 'Voor bedrijven die actief willen groeien in Google. Zoekwoordanalyse, contentoptimalisatie, nieuwe landingspagina’s, linkbuilding, strategie.',
          'offers': {
            '@type': 'Offer',
            'price': '299.00',
            'priceCurrency': 'EUR',
            'eligibleQuantity': { '@type': 'QuantitativeValue', 'unitCode': 'MON' }
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Product',
          'name': 'SEO Dominate',
          'description': 'Voor bedrijven die serieus organisch marktaandeel willen opbouwen. Uitgebreide contentstrategie, conversie optimalisatie, strategiesessies.',
          'offers': {
            '@type': 'Offer',
            'price': '549.00',
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
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.82) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_digitale_groei.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="SEO & Vindbaarheid in Google - Pakketten"
        description="Structurele zoekmachine optimalisatie (SEO) voor hogere posities in Google. Bekijk onze heldere SEO Start, Grow en Dominate pakketten."
        keywords="SEO pakketten, hoger in google komen, zoekmachine optimalisatie mkb, lokale seo uitbesteden"
        schema={seoPlansSchema}
      />

      <div className="container">
        {/* Centered Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Meer Bezoekers uit Google</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            SEO &amp; Organische Groei
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Een snelle website is de eerste stap. Met structurele zoekmachine optimalisatie zorgen wij ervoor dat klanten die in Google zoeken naar uw diensten direct bij uw bedrijf uitkomen.
          </p>
        </div>

        {/* 3 SEO Pricing Cards (Donkere Luxe Stijl, Geen Wit) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* CARD 1: SEO START */}
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
                  Basis Vindbaarheid
                </span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
                SEO Start
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Voor bedrijven die hun technische en lokale SEO basis goed op orde willen hebben.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span className="font-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 149,-
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>p/m</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '0.4rem', fontWeight: 500 }}>
                  Eenmalige SEO setup: € 299,-
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(148, 163, 184, 0.16)', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {[
                  'Technische SEO check & optimalisatie',
                  'Zoekwoordenonderzoek voor uw branche',
                  'Metadata & paginatitels optimalisatie',
                  'Logische H1/H2 koppenstructuur',
                  'Interne linkstructuur verbeteren',
                  'Google Search Console & Analytics inrichting',
                  'Heldere maandelijkse voortgangsrapportage',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=seo-start"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <span>Start met SEO Start</span>
              <ArrowRight size={16} color="#C5A059" />
            </Link>
          </div>

          {/* CARD 2: SEO GROW */}
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
                  Structurele Groei
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
                  Meest Gekozen
                </span>
              </div>

              <h2 style={{ fontSize: '2.1rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
                SEO Grow
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Voor bedrijven die maandelijks actief willen stijgen op winstgevende zoektermen.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span className="font-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 299,-
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>p/m</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '0.4rem', fontWeight: 500 }}>
                  Eenmalige SEO setup: € 499,-
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.3)', marginBottom: '1.25rem' }} />

              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C5A059', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Alles uit SEO Start +
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {[
                  'Maandelijkse zoekwoordanalyse & kansen',
                  'Doorlopende contentoptimalisatie',
                  'Nieuwe gerichte SEO landingspagina’s',
                  'Uitgebreide interne linkbuilding',
                  'Concurrentieanalyse in uw regio/branche',
                  'Doorlopende technische optimalisaties',
                  'Maandelijkse rapportage & bijsturing',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=seo-grow"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <span>Kies SEO Grow</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* CARD 3: SEO DOMINATE */}
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
                  Maximale Autoriteit
                </span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
                SEO Dominate
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Voor bedrijven die landelijk of regionaal een dominante positie in Google willen opbouwen.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span className="font-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#C5A059', lineHeight: 1 }}>
                    € 549,-
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>p/m</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#C5A059', marginTop: '0.4rem', fontWeight: 700 }}>
                  SEO setup volledig inbegrepen
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(148, 163, 184, 0.16)', marginBottom: '1.25rem' }} />

              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C5A059', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Alles uit SEO Grow +
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {[
                  'Uitgebreide content & autoriteitsstrategie',
                  'Meerdere nieuwe SEO landingspagina’s per maand',
                  'Diepgaande concurrentie & zoekintentie analyse',
                  'Actieve kwalitatieve linkbuilding',
                  'Conversie optimalisatie van bestaande pagina’s',
                  'Maandelijkse persoonlijke SEO strategiesessie',
                  'Uitgebreide resultaat & ROI rapportage',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.94rem', color: '#E2E8F0' }}>
                    <Check size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact?pakket=seo-dominate"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <span>Kies SEO Dominate</span>
              <ArrowRight size={16} color="#C5A059" />
            </Link>
          </div>
        </div>

        {/* Contextual Link Bar to Website Packages & Kennisbank */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'rgba(22, 34, 59, 0.92)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderRadius: '10px',
            padding: '2rem 2.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: '1.55rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
              Heeft uw bedrijf eerst een snellere website nodig als technisch fundament?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.65 }}>
              Zoekmachine optimalisatie werkt het krachtigst op een schone, snelle broncode. Bekijk waarom een{' '}
              <Link to="/kennisbank/maatwerk-website-vs-wordpress" style={{ color: '#C5A059', textDecoration: 'underline', fontWeight: 600 }}>
                maatwerk React &amp; Next.js website beter presteert in Google dan WordPress
              </Link>{' '}
              of bekijk onze{' '}
              <Link to="/investeringsplannen" style={{ color: '#C5A059', textDecoration: 'underline', fontWeight: 600 }}>
                website pakketten vanaf € 300,-
              </Link>
              .
            </p>
          </div>
          <Link to="/investeringsplannen" className="btn-secondary">
            <span>Bekijk Website Pakketten</span>
            <ArrowRight size={16} color="#C5A059" />
          </Link>
        </div>
      </div>
    </div>
  );
}
