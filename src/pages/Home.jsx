import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { PORTFOLIO_PROJECTS } from '../data/portfolioProjects';

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Webvastgoed.nl',
    'description': 'Maatwerk websites en webshops gebouwd met React en Next.js. Geen standaard templates of kwetsbare PHP plugins. Maandelijks ontzorgd of eenmalig afrekenen.',
    'url': 'https://webvastgoed.nl',
    'telephone': '+31630037257',
    'email': 'info@webvastgoed.nl',
    'areaServed': ['NL', 'BE'],
    'priceRange': '€250 - €2500',
    'knowsAbout': [
      'Maatwerk website laten maken',
      'Webshop laten bouwen',
      'React & Next.js webarchitectuur',
      'Zoekmachine optimalisatie (SEO)'
    ]
  };

  return (
    <div>
      <SEO
        title="Maatwerk Websites & Webshops zonder Standaard Templates"
        description="Razendsnelle maatwerk websites en webshops op React & Next.js architectuur. Geen kwetsbare PHP plugins of standaard templates. Tijdelijke portfolio actie vanaf € 250,- of volledig ontzorgd per maand."
        keywords="maatwerk website laten maken, website zonder wordpress, react webdesign, zakelijke website laten bouwen, webvastgoed"
        schema={homeSchema}
      />

      {/* 1. HERO SECTIE MET DONKERE LUXE OVERLAY VOOR MAXIMAAL CONTRAST */}
      <section
        className="bg-luxury-cover"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(9, 14, 23, 0.94) 0%, rgba(13, 21, 38, 0.88) 52%, rgba(17, 26, 46, 0.82) 100%), url('/assets/hero_architecture.jpg?v=2')`,
          color: '#F5EFE4',
          paddingTop: 'clamp(3rem, 6vw, 5.25rem)',
          paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
          borderBottom: '1px solid rgba(197, 160, 89, 0.28)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Clear, High-Contrast Proposition */}
            <div style={{ textShadow: '0 2px 14px rgba(0, 0, 0, 0.65)' }}>
              <div className="badge-tag" style={{ marginBottom: '1.35rem', textShadow: 'none' }}>
                <span>100% Maatwerk · Geen PHP of Standaard Templates</span>
              </div>

              <h1
                style={{
                  color: '#F5EFE4',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Razendsnelle websites op maat,{' '}
                <span style={{ color: '#C5A059', fontWeight: 700 }}>
                  gebouwd voor resultaat.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 0.95rem + 0.3vw, 1.1rem)',
                  color: '#F1F5F9',
                  lineHeight: 1.72,
                  marginBottom: '1.6rem',
                }}
              >
                Uw website is meer dan een online visitekaartje: het is uw <strong style={{ color: '#C5A059', fontWeight: 600 }}>digitaal vastgoed</strong> en het fundament van uw bedrijf. Waar veel webbureaus werken met trage WordPress templates en kwetsbare PHP plugins, bouwen wij een oersterke fundering op maat met moderne React &amp; Next.js software. Haarscherp op laptop, telefoon en tablet.
              </p>

              {/* Key USPs */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.25rem' }}>
                {[
                  'Tijdelijke Portfolio Actie: complete starter website (tot 3 pagina’s) voor € 250,- eenmalig',
                  'Uitgebreide bedrijfswebsites & webshops: eenmalig afrekenen of vast bedrag per maand',
                  'Maximale veiligheid: geen verouderde PHP systemen die gehackt kunnen worden',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.96rem', color: '#F8FAFC', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="hero-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', textShadow: 'none' }}>
                <Link to="/investeringsplannen" className="btn-primary">
                  <span>Bekijk Tarieven &amp; Actie</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/portfolio" className="btn-secondary">
                  <span>Bekijk Recente Projecten</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Real Multi-Device Showcase Image (LCP Image) */}
            <div>
              <Link
                to="/portfolio"
                className="portfolio-card"
                style={{
                  display: 'block',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(197, 160, 89, 0.48)',
                  boxShadow: '0 24px 54px rgba(0, 0, 0, 0.7)',
                  backgroundColor: '#090E17',
                }}
              >
                <img
                  src="/assets/marktplaats_1_onpoint_koeriers.png"
                  alt="OnPoint Koeriers maatwerk website weergave op laptop, telefoon en tablet"
                  fetchPriority="high"
                  width="1200"
                  height="800"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div
                  style={{
                    padding: '1rem 1.35rem',
                    backgroundColor: 'rgba(22, 34, 59, 0.96)',
                    borderTop: '1px solid rgba(197, 160, 89, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    fontSize: '0.88rem',
                    color: '#CBD5E1',
                  }}
                >
                  <span>
                    Uitgelicht project: <strong style={{ color: '#F5EFE4' }}>OnPoint Koeriers</strong>
                  </span>
                  <span
                    style={{
                      color: '#C5A059',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>Bekijk portfolio</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECENTE PROJECTEN SECTIE (Ruime 2x2 Grid + Achtergrondafbeelding) */}
      <section
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17, 26, 46, 0.90) 0%, rgba(9, 14, 23, 0.84) 50%, rgba(17, 26, 46, 0.92) 100%), url('/assets/hero_portfolio.jpg?v=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#F5EFE4',
          padding: 'clamp(3.5rem, 7vw, 6rem) 0',
          borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.25rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '1rem' }}>
              <span>Gerealiseerd Werk</span>
            </div>
            <h2 style={{ color: '#F5EFE4', marginBottom: '0.75rem' }}>
              Recente projecten uit ons portfolio
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Van zakelijk spoedtransport en afbouw tot internationale reisplatforms en luxe webshops. Elk project is 100% op maat ontworpen voor laptop, telefoon en tablet.
            </p>
          </div>

          <div
            className="portfolio-grid-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '2.25rem',
            }}
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <Link
                key={project.id}
                to="/portfolio"
                className="portfolio-card"
                style={{
                  backgroundColor: 'rgba(17, 26, 46, 0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(197, 160, 89, 0.32)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.45)',
                }}
              >
                <div style={{ aspectRatio: '3 / 2', overflow: 'hidden', backgroundColor: '#090E17' }}>
                  <img
                    src={project.image}
                    alt={`${project.title} website op laptop, telefoon en tablet`}
                    loading="lazy"
                    width="1200"
                    height="800"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: 'clamp(1.25rem, 3vw, 1.85rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#C5A059', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      {project.category}
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.35rem, 2vw, 1.7rem)', color: '#F5EFE4', marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.35rem' }}>
                      {project.summary}
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(148, 163, 184, 0.18)',
                      fontSize: '0.88rem',
                    }}
                  >
                    <span style={{ color: '#94A3B8', fontWeight: 500, fontSize: '0.84rem' }}>
                      Laptop · Telefoon · Tablet
                    </span>
                    <span
                      style={{
                        color: '#C5A059',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span>Case bekijken</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/portfolio" className="btn-secondary">
              <span>Alle Case Studies &amp; Details Bekijken</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DE FILOSOFIE VAN WEBVASTGOED SECTIE (Donkere Luxe Stijl, Geen Wit, Geen AI-Icoontjes) */}
      <section
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.84) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/office_detail.jpg?v=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#F5EFE4',
          padding: 'clamp(3.5rem, 7vw, 6rem) 0',
          borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '1rem' }}>
              <span>De Filosofie van Webvastgoed</span>
            </div>
            <h2 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
              Meer dan een website: het online fundament van uw bedrijf
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Net als bij een echt bedrijfspand bepaalt de fundering de waarde en levensduur. Veel aanbieders zetten binnen een middag een standaard WordPress thema online met twintig losse plugins. Dat lijkt goedkoop, totdat de site traag wordt, op mobiel verspringt of kwetsbaar blijkt. Bij Webvastgoed bouwen wij een duurzame digitale fundering waar uw onderneming jarenlang op kan groeien.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                label: 'Digitaal Bedrijfspand',
                title: 'Een Sterke Fundering op Maat',
                text: 'Uw website is vaak het eerste contactmoment met een nieuwe klant. Wij ontwerpen elk project vanaf een leeg canvas rond uw merk, zodat uw bedrijf direct vertrouwen en autoriteit uitstraalt.',
              },
              {
                label: 'Moderne Webarchitectuur',
                title: '100% Veilig (Geen PHP)',
                text: 'Omdat wij bouwen met moderne React en Next.js websoftware zonder kwetsbare PHP databases of lekke plugins, staat het fundament van uw website als een huis.',
              },
              {
                label: 'Waarde & Vindbaarheid',
                title: 'Gebouwd voor Blijvend Rendement',
                text: 'Schone code en een doordachte structuur zorgen voor minimale laadtijden op mobiel en desktop. Dat levert een hogere positie in Google en structureel meer aanvragen op.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(22, 34, 59, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderTop: '3px solid #C5A059',
                  borderRadius: '10px',
                  padding: 'clamp(1.6rem, 3vw, 2.25rem)',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ marginBottom: '0.85rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C5A059' }}>
                    {item.label}
                  </span>
                </div>
                <h3 style={{ color: '#F5EFE4', fontSize: '1.45rem', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOE HET WERKT IN 3 STAPPEN + ZEKERHEDEN (CRO SECTIE) */}
      <section
        style={{
          backgroundColor: '#090E17',
          color: '#F5EFE4',
          padding: 'clamp(3.5rem, 7vw, 5.5rem) 0',
          borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.25rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '1rem' }}>
              <span>Heldere Werkwijze</span>
            </div>
            <h2 style={{ color: '#F5EFE4', marginBottom: '0.85rem' }}>
              Van eerste idee tot livegang in drie heldere stappen
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.68 }}>
              Wij houden niet van eindeloze vergaderingen of onduidelijke offertes. Binnen gemiddeld 5 tot 10 werkdagen staat uw nieuwe website veilig en razendsnel online.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              marginBottom: '2.75rem',
            }}
          >
            {[
              {
                phase: 'Stap 1 · Dezelfde dag reactie',
                title: 'Kennismaking & Blauwdruk',
                text: 'U laat ons kort weten wat uw bedrijf doet en waar u naar op zoek bent. Wij denken vrijblijvend mee en geven direct aan of uw project binnen de € 250,- Portfolio Actie valt of welk pakket het beste past.',
              },
              {
                phase: 'Stap 2 · Binnen 5 tot 10 werkdagen',
                title: 'Maatwerk Ontwerp & Bouw',
                text: 'Wij ontwerpen en bouwen uw website op maat in React en Next.js. U ontvangt een werkende live proefversie die u rustig op uw eigen telefoon, tablet en laptop kunt bekijken en bijsturen.',
              },
              {
                phase: 'Stap 3 · Zorgeloos Online',
                title: 'Oplevering & Volledig Eigendom',
                text: 'Na uw volledige goedkeuring koppelen wij uw domeinnaam, verzorgen we indien gewenst de verhuizing van uw huidige adres en melden we uw website direct technisch aan bij Google.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(17, 26, 46, 0.94)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderTop: '3px solid #C5A059',
                  borderRadius: '10px',
                  padding: 'clamp(1.6rem, 3vw, 2.2rem)',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ marginBottom: '0.8rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C5A059' }}>
                    {step.phase}
                  </span>
                </div>
                <h3 style={{ color: '#F5EFE4', fontSize: '1.45rem', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Compacte Zekerheden & CTA Balk */}
          <div
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.94)',
              border: '1px solid rgba(197, 160, 89, 0.38)',
              borderRadius: '10px',
              padding: '1.85rem 2.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.35rem', fontSize: '0.92rem', color: '#F1F5F9', fontWeight: 500 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="#C5A059" /> Vooraf vaste prijsafspraak
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="#C5A059" /> 100% eigenaar van uw domein &amp; content
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="#C5A059" /> Inclusief technische Google SEO basis
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Link to="/contact?pakket=actie" className="btn-primary">
                <span>Start voor € 250,-</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/kennisbank" className="btn-secondary">
                <span>Lees Onze Kennisbank</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VEELGESTELDE VRAGEN (FAQ) */}
      <FAQSection />
    </div>
  );
}
