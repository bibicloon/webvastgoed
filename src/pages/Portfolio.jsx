import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, X, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const PORTFOLIO_PROJECTS = [
  {
    id: 'onpoint',
    title: 'OnPoint Koeriers',
    category: 'Zakelijk Spoedtransport & B2B Logistiek',
    image: '/assets/marktplaats_1_onpoint_koeriers.png',
    summary: 'Moderne Next.js webarchitectuur voor direct en toegewijd spoedtransport met personenauto en compacte bestelwagen door heel Nederland en Europa.',
    challenge: 'OnPoint Koeriers zocht een krachtige, zakelijke website die direct vertrouwen wekt bij bedrijven met urgente zendingen (medisch spoedtransport, juridische documenten en kritieke automotive-onderdelen) zonder de traagheid van een standaard template.',
    solution: 'Wij ontwierpen en bouwden een razendsnelle Next.js website op maat met een strakke donkere huisstijl, directe bel- en aanvraagknoppen, heldere dienstpagina’s per sector en een vlekkeloze mobiele weergave voor klanten die onderweg direct moeten schakelen.',
    results: [
      'Directe conversiegerichtheid met prominente "Bel Direct" en transportmodules.',
      'Supersnelle laadtijden op zowel desktop, tablet als smartphone zonder kwetsbare PHP plugins.',
      'Heldere positionering voor gespecialiseerde B2B logistiek in Nederland en Europa.',
    ],
    techSpecs: ['Next.js & React', '100% Maatwerk UI', 'Geen PHP / Geen Templates', 'Technische B2B SEO'],
    location: 'Nederland & Europa',
  },
  {
    id: 'smartstops',
    title: 'Smart Stops Europe',
    category: 'Interactieve Europese Reis- & Routeplanner',
    image: '/assets/marktplaats_2_smartstops_europe.png',
    summary: 'Compleet reisplatform waarmee Europese automobilisten, camper- en caravanreizigers hun ideale tussenstops, overnachtingshotels en verplichte tolvignetten berekenen.',
    challenge: 'Reizigers die met de auto, camper of caravan door Europa rijden, moesten voorheen op allerlei losse websites zoeken naar veilige overnachtingshotels langs de snelweg, hondvriendelijke tussenstops en officiële tolvignetten of milieustickers.',
    solution: 'Wij ontwikkelden een gebruiksvriendelijke Next.js webapplicatie met een interactieve routeplanner en tolvignetten-check direct in de hero. Bezoekers kiezen hun voertuigtype, vertrek- en bestemmingspunt en maximale rijtijd per dag, waarna ze direct passende tussenstops en reisgidsen zien.',
    results: [
      'Geïntegreerde routeplanner en tolvignetten-checker voor auto, camper, caravan en elektrisch rijden.',
      'Overzichtelijke populaire routes (zoals Route du Soleil, Brennerpas, Toscane en Costa Brava).',
      'Volledig responsive ontwerp zodat reizigers ook onderweg op hun telefoon hun route kunnen plannen.',
    ],
    techSpecs: ['Next.js App Router', 'Interactieve Routeplanner', 'Tolvignetten & Milieuzone Check', 'Mobiel-Eerst Ontwerp'],
    location: 'Europese Autoroutes',
  },
  {
    id: 'pastrycompany',
    title: 'Pastry Company',
    category: 'Luxe Chocolade & Patisserie Webshop',
    image: '/assets/marktplaats_3_pastry_company.png',
    summary: 'Stijlvolle online boutique en webshop voor ambachtelijke handgemaakte bonbons, luxe pindarotsjes, de originele Dubai Reep en zakelijke geschenkdozen.',
    challenge: 'Voor een ambachtelijk chocolade-atelier moet een webshop dezelfde verfijning, warmte en luxe uitstralen als het product zelf, terwijl bezoekers op hun telefoon of laptop binnen enkele klikken een bestelling of zakelijk relatiegeschenk kunnen plaatsen.',
    solution: 'We realiseerden een smaakvolle maatwerk webshop in diep chocoladebruin, warm crème en geborsteld goud. De productpresentatie ("Vers uit het Atelier") zet de echte productfotografie centraal met een snelle, overzichtelijke winkelwagen- en bestelervaring.',
    results: [
      'Luxe merkbeleving die direct aansluit bij ambachtelijke patisserie en zakelijke gifting (B2B).',
      'Duidelijke productkaarten en directe bestelflow op zowel smartphone, tablet als desktop.',
      'Razendsnelle pagina-opbouw zonder zware, vertragende standaard webshop-templates.',
    ],
    techSpecs: ['Maatwerk E-Commerce UI', 'Luxe Merkidentiteit', 'B2B Gifting Integratie', 'Geoptimaliseerde Mobiele Checkout'],
    location: 'Nederland (Landelijke Bezorging)',
  },
  {
    id: 'brokling',
    title: 'Brökling Afbouw & Montage',
    category: 'Bouw, Systeemwanden, Plafonds & Timmerwerk',
    image: '/assets/marktplaats_4_brokling_afbouw.png',
    summary: 'Overzichtelijke vakmanschap-website met interactieve Voor/Na-slider en uitgebreid projectoverzicht voor zakelijke en particuliere opdrachtgevers.',
    challenge: 'Brökling Afbouw & Montage (actief sinds 2007 in regio Eindhoven) wilde hun vakmanschap in systeemwanden, akoestische plafonds en timmerwerk helder presenteren met echte projectfoto’s van de bouwplaats tot de oplevering.',
    solution: 'Wij bouwden een strakke, betrouwbare website met duidelijke expertise-overzichten, een interactieve Voor/Na-vergelijkingsslider (zoals bij Kindcentrum Het Octaaf in Nijmegen) en laagdrempelige offerte-aanvraagmogelijkheden.',
    results: [
      'Interactieve Voor/Na slider waarmee potentiële klanten direct het verschil in afwerking zien.',
      'Heldere presentatie van gerealiseerde projecten voor zowel zakelijke als particuliere klanten.',
      'Snelle, veilige maatwerkcode zonder onderhoudsgevoelige WordPress of PHP plugins.',
    ],
    techSpecs: ['Interactieve Voor/Na Slider', 'Projectgalerij op Maat', 'Lokale SEO (Regio Eindhoven)', 'Veilige Webarchitectuur'],
    location: 'Regio Eindhoven & Zuidoost-Nederland',
  },
];

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
                  width="1200"
                  height="800"
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
              Vraag vrijblijvend een voorstel aan. Wij bouwen 100% op maat en volledig vrij van verouderde PHP-systemen.
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
                marginBottom: '2rem',
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
                to="/contact"
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
