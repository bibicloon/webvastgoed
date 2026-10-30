import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PORTFOLIO_PROJECTS } from '../data/portfolioProjects';

export { PORTFOLIO_PROJECTS };

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      setSelectedProject(null);
    };
    dialog.addEventListener('close', handleClose);

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, dlg) => {
        const r = dlg.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      const onPointerDown = (e) => {
        pressedOutside = outside(e, dialog);
      };
      const onPointerUp = (e) => {
        if (pressedOutside && outside(e, dialog)) dialog.close();
      };
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);

      return () => {
        dialog.removeEventListener('close', handleClose);
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, []);

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.86) 0%, rgba(17, 26, 46, 0.80) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_portfolio.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Gerealiseerd Portfolio & Recente Websites"
        description="Bekijk recente maatwerk websites en webshops van Webvastgoed.nl: OnPoint Koeriers, Smart Stops Europe, Pastry Company en Brökling Afbouw & Montage."
        keywords="portfolio webdesign, maatwerk websites voorbeelden, OnPoint Koeriers, Smart Stops Europe, Pastry Company, Brökling Afbouw"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Portfolio & Case Studies - Webvastgoed.nl',
          'description': 'Overzicht van maatwerk websites en webshops gerealiseerd door Webvastgoed.nl in React en Next.js.',
          'url': 'https://webvastgoed.nl/portfolio',
          'mainEntity': {
            '@type': 'ItemList',
            'itemListElement': PORTFOLIO_PROJECTS.map((proj, i) => ({
              '@type': 'ListItem',
              'position': i + 1,
              'name': proj.title,
              'description': proj.summary
            }))
          }
        }}
      />

      <div className="container">
        {/* Centered Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Gerealiseerd Werk</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Recente projecten uit ons portfolio
          </h1>
          <p style={{ fontSize: '1.06rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Geen standaard templates, maar 100% echt maatwerk afgestemd op de branche en doelgroep van de ondernemer. Klik op een project om de volledige case te bekijken.
          </p>
        </div>

        {/* 4 Real Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '2.25rem',
          }}
          className="portfolio-grid-2col"
        >
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openModal(project)}
              style={{
                backgroundColor: 'rgba(22, 34, 59, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(197, 160, 89, 0.32)',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 16px 40px rgba(9, 14, 23, 0.5)',
                cursor: 'pointer',
              }}
              className="portfolio-card"
            >
              {/* Multi-Device Showcase Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 2',
                  overflow: 'hidden',
                  backgroundColor: '#090E17',
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} - Maatwerk website op laptop, telefoon en tablet`}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  loading={index === 0 ? undefined : 'lazy'}
                  decoding={index === 0 ? undefined : 'async'}
                  width="1280"
                  height="853"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem 2.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C5A059', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                    {project.category}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#F5EFE4', marginBottom: '0.6rem' }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: '0.98rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {project.summary}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    borderTop: '1px solid rgba(148, 163, 184, 0.18)',
                    paddingTop: '1.15rem',
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: '#94A3B8' }}>
                    Laptop · Telefoon · Tablet
                  </span>
                  <span
                    style={{
                      color: '#C5A059',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span>Case bekijken</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '4rem',
            backgroundColor: 'rgba(22, 34, 59, 0.92)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '10px',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.85rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
              Ook zo&apos;n razendsnelle maatwerk website voor uw bedrijf?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1rem' }}>
              Bekijk onze{' '}
              <Link to="/investeringsplannen" style={{ color: '#C5A059', textDecoration: 'underline', fontWeight: 600 }}>
                transparante tarieven en de € 300,- Portfolio Actie
              </Link>{' '}
              of vraag direct vrijblijvend een voorstel aan.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            <span>Vrijblijvend Bespreken</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Native HTML <dialog> Modal */}
      <dialog
        ref={dialogRef}
        className="case-study-dialog"
        closedby="any"
        aria-labelledby="case-study-title"
      >
        {selectedProject && (
          <div className="dialog-inner">
            {/* Close Form Button */}
            <form method="dialog" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
              <button
                type="submit"
                value="close"
                autoFocus
                aria-label="Projectdetails sluiten"
                style={{
                  background: 'rgba(9, 14, 23, 0.85)',
                  border: '1px solid rgba(197, 160, 89, 0.5)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5EFE4',
                }}
              >
                <X size={20} color="#C5A059" />
              </button>
            </form>

            {/* Header info */}
            <div style={{ marginBottom: '1.75rem', paddingRight: '3rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                <span>{selectedProject.category}</span>
              </div>

              <h2 id="case-study-title" style={{ fontSize: 'clamp(1.85rem, 3vw, 2.6rem)', color: '#F5EFE4', marginBottom: '0.4rem' }}>
                {selectedProject.title}
              </h2>
              <div style={{ fontSize: '0.92rem', color: '#94A3B8', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={15} color="#C5A059" />
                  {selectedProject.location}
                </span>
              </div>
            </div>

            {/* Showcase Preview Image */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                marginBottom: '2rem',
                backgroundColor: '#090E17',
              }}
            >
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} weergave op laptop, telefoon en tablet`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Case Study Details Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#C5A059', marginBottom: '0.6rem' }}>
                  De Vraag van de Klant
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: 1.7 }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#C5A059', marginBottom: '0.6rem' }}>
                  Onze Maatwerk Oplossing
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: 1.7 }}>
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Results List */}
            <div
              style={{
                backgroundColor: '#111A2E',
                borderRadius: '8px',
                padding: '1.6rem 1.8rem',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                marginBottom: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: '#C5A059', marginBottom: '0.9rem' }}>
                Belangrijkste Kenmerken &amp; Resultaat
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedProject.results.map((res, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#C5A059', flexShrink: 0 }} />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual Link to Industry Kennisbank Guide */}
            {selectedProject.guideSlug && (
              <div
                style={{
                  backgroundColor: 'rgba(9, 14, 23, 0.7)',
                  border: '1px solid rgba(197, 160, 89, 0.28)',
                  borderRadius: '8px',
                  padding: '1rem 1.35rem',
                  marginBottom: '1.75rem',
                  fontSize: '0.92rem',
                  color: '#CBD5E1',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <span>Verdieping in deze branche:</span>
                <Link
                  to={selectedProject.guideSlug}
                  onClick={closeModal}
                  style={{ color: '#C5A059', fontWeight: 600, textDecoration: 'underline' }}
                >
                  {selectedProject.guideLabel}
                </Link>
              </div>
            )}

            {/* Tech Specs Badges */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.65rem', letterSpacing: '0.08em' }}>
                Toegepaste Techniek
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {selectedProject.techSpecs.map((spec, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#090E17',
                      border: '1px solid rgba(197, 160, 89, 0.3)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      color: '#F5EFE4',
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1.5rem' }}>
              <form method="dialog">
                <button
                  type="submit"
                  value="close"
                  className="btn-secondary"
                  style={{ padding: '0.8rem 1.4rem', fontSize: '0.86rem' }}
                >
                  Sluiten
                </button>
              </form>

              <Link
                to={selectedProject.id === 'pastrycompany' ? '/contact?pakket=webshop' : '/contact?pakket=bedrijfswebsite'}
                className="btn-primary"
                onClick={closeModal}
                style={{ padding: '0.8rem 1.5rem', fontSize: '0.86rem' }}
              >
                <span>Vergelijkbaar Project Aanvragen</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
