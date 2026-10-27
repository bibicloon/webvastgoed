import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Building } from 'lucide-react';

export default function Hero({ onScrollToPricing, onScrollToPortfolio }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--color-dark)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Architectural Image Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '60%',
          backgroundImage: `url('/assets/hero_architecture.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.38,
          filter: 'sepia(30%) hue-rotate(-15deg) contrast(1.1)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Geometric Architectural Line Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(239, 161, 128, 0.08) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* Linear Gradient Fog Fade at Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to bottom, transparent, var(--color-dark))',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Badge Tag */}
          <div className="badge-tag animate-fade-in" style={{ marginBottom: '1.75rem' }}>
            <Building size={14} color="var(--color-salmon)" />
            <span>State-of-the-Art Webarchitectuur</span>
          </div>

          {/* H1 Title */}
          <h1
            className="animate-fade-in"
            style={{
              color: 'var(--color-cream)',
              marginBottom: '1.5rem',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            UW DIGITAAL VASTGOED.{' '}
            <span
              style={{
                color: 'var(--color-salmon)',
                fontStyle: 'italic',
                fontWeight: 500,
                display: 'block',
              }}
            >
              GEBOUWD VOOR RENDEMENT.
            </span>
          </h1>

          {/* Subtitle (H2) */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              fontWeight: 300,
              color: 'var(--color-cream)',
              opacity: 0.9,
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '720px',
            }}
          >
            Stop met het kopen van wegwerpwebsites. Huur state-of-the-art webarchitectuur voor een vast bedrag per maand. Wij bouwen, beheren en optimaliseren uw digitale fundament, zodat u zorgeloos kunt schalen.
          </h2>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
          >
            <button
              onClick={onScrollToPricing}
              className="btn-primary"
              style={{ padding: '1.25rem 2.5rem', fontSize: '0.9rem' }}
            >
              <span>BEKIJK INVESTERINGSPLANNEN</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onScrollToPortfolio}
              className="btn-secondary"
              style={{ padding: '1.25rem 2.2rem', fontSize: '0.9rem' }}
            >
              <span>BEKIJK PORTFOLIO</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(139, 102, 84, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={20} color="var(--color-salmon)" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cream)' }}>Geen Hoge Eenmalige Kosten</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>Vaste voorspelbare maandprijs</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <TrendingUp size={20} color="var(--color-salmon)" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cream)' }}>Continu Geoptimaliseerd</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>Inclusief updates & performance</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Sparkles size={20} color="var(--color-salmon)" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cream)' }}>Luxe Maatwerk Esthetiek</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>Geen standaard templates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
