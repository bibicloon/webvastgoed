import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function OverOns() {
  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.82) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_over_ons.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Over Ons & Onze Werkwijze"
        description="Ontdek waarom Webvastgoed bewust kiest voor 100% maatwerk in React en Next.js zonder verouderde PHP systemen of standaard templates."
        keywords="over webvastgoed, maatwerk webdesign zonder wordpress, react nextjs webbureau, veilige website laten bouwen"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'Over Webvastgoed.nl & Onze Werkwijze',
          'description': 'Waarom Webvastgoed.nl kiest voor 100% maatwerk in React en Next.js zonder verouderde PHP plugins of standaard templates.',
          'url': 'https://webvastgoed.nl/over-ons'
        }}
      />

      <div className="container">
        {/* Centered Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.75rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Onze Visie &amp; Werkwijze</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Meer dan een website: het digitale fundament van uw bedrijf
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            De naam <strong style={{ color: '#C5A059', fontWeight: 600 }}>Webvastgoed</strong> staat voor onze overtuiging: een goede website is geen wegwerpproduct, maar uw online bedrijfspand en de fundering waarop uw onderneming groeit.
          </p>
        </div>

        {/* Main Grid: Vision Statement & Real Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left: Vision */}
          <div
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderTop: '3px solid #C5A059',
              borderRadius: '10px',
              padding: '2.5rem',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div style={{ marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C5A059' }}>
                Waarom Webvastgoed.nl · De Fundering van Uw Bedrijf
              </span>
            </div>

            <blockquote style={{ position: 'relative', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p
                style={{
                  fontSize: 'clamp(1.04rem, 1.2vw, 1.14rem)',
                  fontWeight: 400,
                  color: '#F5EFE4',
                  lineHeight: 1.75,
                }}
              >
                Een website is voor vrijwel elke klant de allereerste kennismaking met uw bedrijf. Net zoals u een bedrijfspand niet op een zwakke ondergrond bouwt, hoort uw online aanwezigheid ook op een rotsvast fundament te staan.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.04rem, 1.2vw, 1.14rem)',
                  fontWeight: 400,
                  color: '#CBD5E1',
                  lineHeight: 1.75,
                }}
              >
                Veel ondernemers betalen of duizenden euro&apos;s bij een traditioneel bureau, of krijgen voor weinig geld een traag standaard WordPress template dat na een paar maanden problemen geeft. Met onze moderne React en Next.js webarchitectuur bewijzen wij dat echt maatwerk, maximale veiligheid zonder PHP en betaalbaarheid wel samen kunnen gaan. Zo bouwen wij aan digitaal vastgoed dat dag en nacht voor uw bedrijf werkt.
              </p>
            </blockquote>

            <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#C5A059' }}>
                  Stefan
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Oprichter &amp; Lead Developer · Webvastgoed.nl
                </div>
              </div>

              <Link to="/portfolio" style={{ color: '#C5A059', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>Bekijk ons werk</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: Concrete Guarantees & Real Project Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                backgroundColor: '#090E17',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
              }}
            >
              <img
                src="/assets/marktplaats_4_brokling_afbouw.jpg"
                alt="Brökling Afbouw & Montage maatwerk website op laptop, telefoon en tablet"
                loading="lazy"
                decoding="async"
                width="1280"
                height="853"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { label: '100% Maatwerk', desc: 'Geen standaard thema’s' },
                { label: '100% Veilig', desc: 'Volledig vrij van PHP' },
                { label: 'Alle Schermen', desc: 'Mobiel, tablet & desktop' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(22, 34, 59, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: '8px',
                    padding: '1.15rem 1.2rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#C5A059', fontWeight: 700, fontSize: '0.94rem', marginBottom: '0.3rem', whiteSpace: 'nowrap' }}>
                    <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                    <span>{stat.label}</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.45 }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Core Technical Pillars (Geen AI-icoontjes) */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <h2 style={{ color: '#F5EFE4', marginBottom: '0.5rem' }}>
              Onze drie beloftes aan elke ondernemer
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem' }}>
              Heldere afspraken, moderne techniek en een resultaat waar u jarenlang op kunt bouwen.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                label: 'Techniek',
                title: 'Moderne React & Next.js Code',
                text: 'Wij bouwen met dezelfde moderne technologie waar grote techbedrijven op draaien. Uw website voelt daardoor direct en vloeiend aan op elk toestel.',
              },
              {
                label: 'Resultaat',
                title: 'Gebouwd voor Google & Conversie',
                text: 'Een mooie website heeft pas waarde als deze klanten oplevert. Wij zorgen voor een logische opbouw, duidelijke actieknoppen en sterke technische SEO.',
              },
              {
                label: 'Samenwerking',
                title: 'Persoonlijk & Zonder Gedoe',
                text: 'Korte lijnen, heldere afspraken vooraf en snelle oplevering. U hoeft zich niet bezig te houden met ingewikkelde technische instellingen.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(22, 34, 59, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderTop: '3px solid #C5A059',
                  borderRadius: '8px',
                  padding: '2.25rem 2rem',
                  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div style={{ marginBottom: '0.85rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C5A059' }}>
                    {item.label}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#F5EFE4', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.65 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
