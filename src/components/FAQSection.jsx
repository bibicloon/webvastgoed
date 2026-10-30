import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Waarom werken jullie niet met WordPress of PHP templates?',
      answer: 'Traditionele WordPress en PHP websites zijn afhankelijk van tientallen losse plugins die regelmatig verouderen, de site vertragen of kwetsbaar maken voor aanvallen. Wij bouwen elke website met moderne React en Next.js websoftware. Daardoor laadt uw website direct, scoort deze hoger in Google en loopt u geen risico op lekke plugins.',
    },
    {
      question: 'Wat houdt de tijdelijke Portfolio Actie van € 300,- precies in?',
      answer: 'Omdat wij ons portfolio met onze nieuwste ontwikkelsoftware verder uitbreiden, bouwen wij tijdelijk een complete, professionele maatwerk website tot maximaal 3 pagina’s (bijvoorbeeld Home, Diensten en Contact) voor € 300,- eenmalig excl. btw. Heeft u meer pagina’s of een uitgebreide bedrijfswebsite nodig? Onze complete bedrijfswebsites starten vanaf € 950,- eenmalig.',
    },
    {
      question: 'Hoe werken hosting, beveiliging en onderhoud na oplevering?',
      answer: 'Wij koppelen het onderhoud bewust los van de bouwkosten zodat u nergens onnodig aan vastzit. Na de eenmalige bouw kunt u kiezen voor Onderhoud Basis (€ 49,- p/m voor snelle cloud hosting, SSL, back-ups en technische updates) of Onderhoud & Content (€ 89,- p/m inclusief doorlopende tekst- en fotowijzigingen). Wilt u geen onderhoud? Dan leveren wij de website op uw eigen hosting op tegen een eenmalige overdrachtstoeslag, zonder doorlopende support.',
    },
    {
      question: 'Bouwen jullie ook maatwerk webshops met iDEAL en Bancontact?',
      answer: 'Jazeker. Wij ontwikkelen razendsnelle maatwerk webshops (zoals Pastry Company) met een luxe uitstraling, overzichtelijk productbeheer en directe betaling via iDEAL, Bancontact en creditcard. Beschikbaar vanaf € 1.950,- eenmalig.',
    },
    {
      question: 'Voor welke branches bouwen jullie websites op maat?',
      answer: 'Wij bouwen maatwerk websites voor uiteenlopende MKB en ZZP bedrijven in Nederland en België: van koeriersbedrijven en transport (zoals OnPoint Koeriers) en bouw en afbouwspecialisten (zoals Brökling Afbouw) tot webshops, zakelijke dienstverleners en internationale platforms.',
    },
    {
      question: 'Hoe snel staat mijn nieuwe website online?',
      answer: 'Een website tot 3 pagina’s staat na het aanleveren van uw wensen en teksten of foto’s doorgaans al binnen enkele werkdagen tot een week online. Voor grotere websites of webshops rekenen wij gemiddeld 1 tot 2 weken.',
    },
    {
      question: 'Blijft mijn domeinnaam en inhoud van mijzelf?',
      answer: 'Uiteraard. Uw domeinnaam, logo’s, foto’s en teksten blijven altijd 100% uw eigendom. Geen kleine lettertjes of onduidelijke contracten.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.82) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_faq.jpg?v=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#F5EFE4',
        padding: '6rem 0',
        borderTop: '1px solid rgba(197, 160, 89, 0.25)',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3.25rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Veelgestelde Vragen</span>
          </div>

          <h2 style={{ color: '#F5EFE4', marginBottom: '0.75rem' }}>
            Duidelijke antwoorden vooraf
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Alles over onze maatwerk aanpak, het verschil met standaard templates en onze tarieven.
          </p>
        </div>

        {/* Centered Native <details> Exclusive Accordion */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="faq-disclosure"
              name="home-faq"
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

        <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/faq" className="btn-secondary">
            <span>Bekijk Alle Veelgestelde Vragen</span>
          </Link>
          <Link to="/kennisbank" className="btn-primary">
            <span>Naar Onze Kennisbank</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
