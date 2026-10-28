import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { WHATSAPP_URL } from '../components/WhatsAppButton';
import { KENNISBANK_ARTICLES } from '../data/kennisbankArticles';

export { KENNISBANK_ARTICLES };

export default function Kennisbank() {
  const { slug } = useParams();

  // If a specific article slug is requested, render the full article view
  if (slug) {
    const article = KENNISBANK_ARTICLES.find((a) => a.slug === slug);
    if (!article) {
      return <Navigate to="/kennisbank" replace />;
    }

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.metaDesc,
      image: article.image,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: {
        '@type': 'Organization',
        name: 'Webvastgoed.nl',
        url: 'https://webvastgoed.nl',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Webvastgoed.nl',
        logo: {
          '@type': 'ImageObject',
          url: 'https://webvastgoed.nl/favicon-512x512.png',
          width: 512,
          height: 512,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://webvastgoed.nl/kennisbank/${article.slug}`,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.article-key-takeaways'],
      },
      inLanguage: 'nl-NL',
    };

    const otherArticles = KENNISBANK_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

    return (
      <div
        className="bg-luxury-cover"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.90) 0%, rgba(17, 26, 46, 0.86) 50%, rgba(9, 14, 23, 0.95) 100%), url('/assets/hero_kennisbank.jpg?v=1')`,
          color: '#F5EFE4',
          minHeight: '85vh',
          paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        }}
      >
        <SEO
          title={article.metaTitle}
          description={article.metaDesc}
          keywords={article.keywords}
          schema={articleSchema}
        />

        <div className="container" style={{ maxWidth: '940px' }}>
          {/* Back link */}
          <div style={{ marginBottom: '2rem' }}>
            <Link
              to="/kennisbank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#C5A059',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              <ArrowLeft size={16} />
              <span>Terug naar Kennisbank overzicht</span>
            </Link>
          </div>

          {/* Article Container */}
          <article
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.94)',
              backdropFilter: 'blur(12px)',
              borderRadius: '10px',
              padding: 'clamp(1.75rem, 4vw, 3.25rem)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderTop: '3px solid #C5A059',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  backgroundColor: 'rgba(9, 14, 23, 0.8)',
                  border: '1px solid rgba(197, 160, 89, 0.45)',
                  color: '#C5A059',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                }}
              >
                {article.category}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                {article.readTime} · Bijgewerkt oktober 2026
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.65rem, 1.2rem + 1.8vw, 2.5rem)', color: '#F5EFE4', marginBottom: '1.35rem', lineHeight: 1.25 }}>
              {article.title}
            </h1>

            <p
              className="article-intro"
              style={{
                fontSize: '1.1rem',
                color: '#E2E8F0',
                lineHeight: 1.75,
                marginBottom: '2.25rem',
                paddingBottom: '1.75rem',
                borderBottom: '1px solid rgba(148, 163, 184, 0.18)',
                maxWidth: '75ch',
              }}
            >
              {article.intro}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem', maxWidth: '75ch' }}>
              {article.sections.map((sec, idx) => (
                <section key={idx}>
                  <h2 style={{ fontSize: 'clamp(1.25rem, 1rem + 0.9vw, 1.6rem)', color: '#C5A059', marginBottom: '0.85rem', lineHeight: 1.3 }}>
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} style={{ fontSize: '1.02rem', color: '#CBD5E1', lineHeight: 1.75, marginBottom: '0.9rem' }}>
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul
                      className="article-key-takeaways"
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.65rem',
                        marginTop: '0.75rem',
                        padding: '1.25rem 1.4rem',
                        backgroundColor: 'rgba(9, 14, 23, 0.65)',
                        borderRadius: '8px',
                        border: '1px solid rgba(197, 160, 89, 0.22)',
                      }}
                    >
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.96rem', color: '#F1F5F9', lineHeight: 1.55 }}>
                          <CheckCircle2 size={17} color="#C5A059" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Contextual Pillar Links (SEO Internal Linking) */}
            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <div
                style={{
                  marginTop: '2.5rem',
                  padding: '1.35rem 1.5rem',
                  backgroundColor: 'rgba(9, 14, 23, 0.7)',
                  border: '1px solid rgba(197, 160, 89, 0.28)',
                  borderRadius: '8px',
                  maxWidth: '75ch',
                }}
              >
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.65rem' }}>
                  Relevante vervolgstappen
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {article.relatedLinks.map((lnk, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={lnk.to}
                        style={{
                          color: '#F5EFE4',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          textDecoration: 'underline',
                          textDecorationColor: '#C5A059',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <ArrowRight size={15} color="#C5A059" style={{ flexShrink: 0 }} />
                        <span>{lnk.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Bottom CTA Box */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2.25rem',
                borderTop: '1px solid rgba(197, 160, 89, 0.28)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div style={{ maxWidth: '540px' }}>
                <h3 style={{ fontSize: '1.45rem', color: '#F5EFE4', marginBottom: '0.4rem' }}>
                  {article.ctaTitle}
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                  {article.ctaText}
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
                <Link to={article.ctaPackage ? `/contact?pakket=${article.ctaPackage}` : '/contact'} className="btn-primary">
                  <span>Vrijblijvend Aanvragen</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div style={{ marginTop: '3.5rem' }}>
            <h2 style={{ fontSize: '1.55rem', color: '#F5EFE4', marginBottom: '1.5rem', textAlign: 'center' }}>
              Meer artikelen uit onze Kennisbank
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1.5rem',
              }}
            >
              {otherArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/kennisbank/${rel.slug}`}
                  className="portfolio-card"
                  style={{
                    backgroundColor: 'rgba(22, 34, 59, 0.92)',
                    border: '1px solid rgba(197, 160, 89, 0.28)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.45rem' }}>
                      {rel.category}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#F5EFE4', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                      {rel.title}
                    </h3>
                  </div>
                  <span style={{ color: '#C5A059', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem' }}>
                    <span>Artikel bekijken</span>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Overview page (/kennisbank)
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kennisbank & Advies over Maatwerk Websites | Webvastgoed.nl',
    description: 'Praktische artikelen en gidsen voor ondernemers over maatwerk websites, kosten, het verschil met WordPress en branchegerichte weboplossingen.',
    url: 'https://webvastgoed.nl/kennisbank',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: KENNISBANK_ARTICLES.map((art, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: art.title,
        url: `https://webvastgoed.nl/kennisbank/${art.slug}`,
      })),
    },
  };

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.88) 0%, rgba(17, 26, 46, 0.82) 50%, rgba(9, 14, 23, 0.94) 100%), url('/assets/hero_kennisbank.jpg?v=1')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Kennisbank & Advies - Alles over Maatwerk Websites, Kosten & SEO"
        description="Lees onze praktische gidsen over het laten maken van een bedrijfswebsite of webshop, de € 250,- starter actie, waarom React sneller is dan WordPress en tips per branche."
        keywords="kennisbank webdesign, website laten maken advies, wat kost een website, maatwerk website voordelen, webvastgoed kennisbank"
        schema={collectionSchema}
      />

      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Kennisbank &amp; Inzichten</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Advies over maatwerk websites, kosten &amp; online groei
          </h1>
          <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Heldere antwoorden en praktijkvoorbeelden voor ondernemers die een snelle, veilige website of webshop willen laten bouwen die echt klanten oplevert.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2rem',
          }}
        >
          {KENNISBANK_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/kennisbank/${article.slug}`}
              className="portfolio-card"
              style={{
                backgroundColor: 'rgba(22, 34, 59, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                borderTop: '3px solid #C5A059',
                borderRadius: '10px',
                padding: 'clamp(1.6rem, 3vw, 2.2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    marginBottom: '0.9rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(148, 163, 184, 0.16)',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', whiteSpace: 'nowrap' }}>
                    {article.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.45rem', color: '#F5EFE4', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {article.title}
                </h2>

                <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.16)',
                }}
              >
                <span style={{ fontSize: '0.84rem', color: '#94A3B8' }}>
                  Praktisch advies
                </span>
                <span
                  style={{
                    color: '#C5A059',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Artikel lezen</span>
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
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
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
              Direct sparren over uw eigen website of webshop?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65 }}>
              Wij denken vrijblijvend met u mee en laten u graag zien wat er voor uw bedrijf mogelijk is.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            <span>Vrijblijvend Bespreken</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
