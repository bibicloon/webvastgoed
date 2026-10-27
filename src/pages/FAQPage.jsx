import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WHATSAPP_URL } from '../components/WhatsAppButton';
import { KENNISBANK_ARTICLES } from './Kennisbank';

export default function FAQPage() {
  const faqData = [
    {
      question: 'Waarom werken jullie niet met WordPress of PHP templates?',
      answer: 'De meeste goedkope aanbieders gebruiken standaard WordPress thema’s met tientallen PHP plugins. Als één plugin veroudert, wordt uw site traag of kwetsbaar voor hackers. Wij bouwen al onze websites vanaf de basis op met moderne React en Next.js software. Dat betekent: géén kwetsbare PHP databases, directe laadtijden en een 100% uniek ontwerp.',
    },
    {
      question: 'Wat houdt de tijdelijke Portfolio Actie van € 250,- in?',
      answer: 'Wij zijn overgestapt op de nieuwste generatie ontwikkeltools en breiden ons portfolio graag verder uit met uiteenlopende branches. Daarom bouwen wij tijdelijk een complete, professionele maatwerk website tot maximaal 3 pagina’s (bijv. Home, Diensten en Contact) voor eenmalig € 250,- excl. btw.',
    },
    {
      question: 'Kan ik bij de € 250,- actie ook extra pagina’s of specifieke functies laten toevoegen?',
      answer: 'Jazeker. Heeft u bijvoorbeeld 5 of 8 pagina’s nodig, een interactieve Voor/Na slider (zoals bij Brökling Afbouw), een route en prijsmodule (zoals bij Smart Stops Europe) of een webshop? Dan bespreken we vooraf een heldere, eerlijke meerprijs zodat u precies weet waar u aan toe bent.',
    },
    {
      question: 'Wat is het verschil tussen eenmalig afrekenen en het maandpakket?',
      answer: 'Bij eenmalige afrekening betaalt u één vast bedrag voor de bouw van de website (en eventueel optioneel € 20,- p/m voor snelle hosting, SSL en technisch onderhoud). Bij het maandpakket vanaf € 59,- p/m spreidt u de investering en zijn alle hosting, updates en aanpassingen doorlopend inbegrepen.',
    },
    {
      question: 'Kunnen jullie ook een maatwerk webshop met iDEAL bouwen?',
      answer: 'Ja. Wij bouwen complete maatwerk webshops (zoals Pastry Company) die razendsnel laden op smartphone, tablet en desktop. Uw klanten rekenen direct af via iDEAL, Bancontact of creditcard. Beschikbaar vanaf € 99,- per maand of als eenmalige investering.',
    },
    {
      question: 'Bouwen jullie ook websites voor transportbedrijven, koeriers en bouwbedrijven?',
      answer: 'Ja, wij hebben ruime ervaring met zowel de transport en logistieke sector (zoals OnPoint Koeriers) als de bouw en afbouwsector (zoals Brökling Afbouw & Montage). Wij zorgen voor directe bel en offerteknoppen, overzichtelijke projectgalerijen en lokale Google vindbaarheid.',
    },
    {
      question: 'Hoe zorgen jullie ervoor dat mijn website hoog in Google komt?',
      answer: 'Elke website van Webvastgoed.nl wordt standaard geleverd met een sterke technische SEO fundering: razendsnelle laadtijden (Core Web Vitals), een logische H1/H2 koppenstructuur, mobiele optimalisatie, automatische XML sitemap en gestructureerde Schema.org data voor Google. Daarnaast bieden wij maandelijkse SEO groeipakketten aan.',
    },
    {
      question: 'Kan ik mijn huidige domeinnaam behouden of verhuizen?',
      answer: 'Ja, dat kan altijd. Of uw domeinnaam nu bij TransIP, MijnDomein, Hostnet of een andere provider staat: wij koppelen uw bestaande domeinnaam naadloos en zonder onderbreking aan uw nieuwe website, of regelen desgewenst de verhuizing.',
    },
    {
      question: 'Hoe snel staat mijn nieuwe website of webshop live?',
      answer: 'Doordat wij werken met moderne ontwikkelsoftware staat een website tot 3 pagina’s vaak al binnen enkele dagen tot een week online. Uitgebreidere websites en webshops leveren wij doorgaans binnen 1 tot 2 weken op.',
    },
    {
      question: 'Werkt mijn website goed op zowel telefoon, tablet als laptop?',
      answer: 'Ja, 100%. Meer dan 70% van uw bezoekers bekijkt uw website op een smartphone. Wij ontwerpen en testen elke pagina specifiek voor mobiel, tablet én grote desktopschermen.',
    },
    {
      question: 'Wie is eigenaar van de domeinnaam en de inhoud?',
      answer: 'Uw domeinnaam, bedrijfsnaam, foto’s en teksten blijven altijd 100% uw eigendom. Wij zorgen er puur voor dat de techniek en vormgeving op het hoogste niveau draaien.',
    },
    {
      question: 'Wat als ik later zelf een tekst of foto wil laten aanpassen?',
      answer: 'Heeft u een maandpakket of onderhoudspakket? Dan stuurt u ons eenvoudig een kort berichtje via WhatsApp of e-mail en voeren wij de aanpassing vaak nog dezelfde dag voor u door. Zo hoeft u zelf nooit in een ingewikkeld systeem te zoeken.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.86) 0%, rgba(17, 26, 46, 0.80) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_faq.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Veelgestelde Vragen (FAQ) - Maatwerk Websites, Webshops & Tarieven"
        description="Antwoorden op veelgestelde vragen over onze maatwerk websites zonder PHP, de € 250,- portfolio actie, webshops, maandpakketten, oplevertijd en Google SEO."
        keywords="veelgestelde vragen website laten maken, website zonder php, kosten website laten bouwen, webvastgoed faq, website 250 euro"
        schema={faqSchema}
      />

      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Kenniscentrum &amp; Antwoorden</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Veelgestelde vragen
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Vind direct antwoord op de meest gestelde vragen over onze werkwijze, de € 250,- starter actie, maatwerk webshops en onze techniek.
          </p>
        </div>

        {/* Centered Native <details> Exclusive Accordion */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((faq, idx) => (
            <details
              key={idx}
              className="faq-disclosure"
              name="page-faq"
              open={idx === 0}
            >
              <summary>
                <span>{faq.question}</span>
                <ChevronDown size={20} color="#C5A059" className="faq-chevron" />
              </summary>
              <div
                style={{
                  padding: '1.35rem 1.75rem 1.6rem 1.75rem',
                  fontSize: '0.98rem',
                  color: '#E2E8F0',
                  lineHeight: 1.7,
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Kennisbank Preview Links inside FAQ Page */}
        <div style={{ maxWidth: '900px', margin: '4rem auto 0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
              Verdiepende artikelen uit onze Kennisbank
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem' }}>
              Lees meer over onze aanpak per branche, tariefkeuzes en techniek.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {KENNISBANK_ARTICLES.slice(0, 3).map((art) => (
              <Link
                key={art.slug}
                to={`/kennisbank/${art.slug}`}
                className="portfolio-card"
                style={{
                  backgroundColor: 'rgba(22, 34, 59, 0.92)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    {art.category}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#F5EFE4', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {art.title}
                  </h3>
                </div>
                <span style={{ color: '#C5A059', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
                  <span>Lees artikel</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <Link to="/kennisbank" className="btn-secondary">
              <span>Bekijk Alle 6 Kennisbank Artikelen</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Centered CTA Footer Block */}
        <div
          style={{
            maxWidth: '900px',
            margin: '3.5rem auto 0 auto',
            backgroundColor: 'rgba(22, 34, 59, 0.92)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            padding: '2.25rem 2.5rem',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.65rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
              Staat uw vraag er niet tussen?
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#CBD5E1' }}>
              Stuur ons gerust een berichtje via WhatsApp of het contactformulier. Wij reageren vrijwel altijd dezelfde dag nog.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>WhatsApp Ons</span>
            </a>
            <Link to="/contact" className="btn-primary">
              <span>Stel Uw Vraag</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
