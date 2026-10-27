import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WHATSAPP_URL } from '../components/WhatsAppButton';

export default function FAQPage() {
  const faqData = [
    {
      question: 'Waarom werken jullie niet met WordPress of PHP-templates?',
      answer: 'De meeste goedkope aanbieders gebruiken standaard WordPress-thema’s met tientallen PHP-plug-ins. Als één plug-in veroudert, wordt uw site traag of kwetsbaar voor hackers. Wij bouwen al onze websites vanaf de basis op met moderne React en Next.js software. Dat betekent: géén kwetsbare PHP-databases, directe laadtijden en een 100% uniek ontwerp.',
    },
    {
      question: 'Wat houdt de tijdelijke Portfolio Actie van € 250,- in?',
      answer: 'Wij zijn overgestapt op de nieuwste generatie ontwikkeltools en breiden ons portfolio graag verder uit met uiteenlopende branches. Daarom bouwen wij tijdelijk een complete, professionele maatwerk website tot maximaal 3 pagina’s (bijv. Home, Diensten en Contact) voor eenmalig € 250,- excl. btw.',
    },
    {
      question: 'Kan ik bij de € 250,- actie ook extra pagina’s of specifieke functies laten toevoegen?',
      answer: 'Jazeker. Heeft u bijvoorbeeld 5 of 8 pagina’s nodig, een interactieve Voor/Na-slider (zoals bij Brökling Afbouw), een route-/prijsmodule (zoals bij Smart Stops Europe) of een webshop? Dan bespreken we vooraf een heldere, eerlijke meerprijs zodat u precies weet waar u aan toe bent.',
    },
    {
      question: 'Wat is het verschil tussen eenmalig afrekenen en het maandpakket?',
      answer: 'Bij eenmalige afrekening betaalt u één vast bedrag voor de bouw van de website (en eventueel optioneel € 20,- p/m voor snelle hosting, SSL en technisch onderhoud). Bij het maandpakket vanaf € 59,- p/m spreidt u de investering en zijn alle hosting, updates en tekst-/foto-aanpassingen doorlopend inbegrepen.',
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
      question: 'Bieden jullie ook zoekmachine-optimalisatie (SEO) aan?',
      answer: 'Elke website die wij opleveren is standaard technisch geoptimaliseerd voor Google (supersnelle laadtijd, juiste koppenstructuur, mobiele vriendelijkheid en Schema.org data). Wilt u daarnaast maandelijks actief stijgen op extra zoekwoorden? Bekijk dan onze SEO-pakketten.',
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
        title="Veelgestelde Vragen (FAQ) - Maatwerk Websites & Tarieven"
        description="Antwoorden op veelgestelde vragen over onze maatwerk websites zonder PHP, de €250,- portfolio-actie, maandpakketten, oplevertijd en onderhoud."
        keywords="veelgestelde vragen website laten maken, website zonder php, kosten website laten bouwen, webvastgoed faq"
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
            Vind direct antwoord op de meest gestelde vragen over onze werkwijze, tarieven en techniek.
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
