import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Tarieven', path: '/investeringsplannen' },
    { name: 'SEO & Groei', path: '/digitale-groei' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Veelgestelde Vragen', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(9, 14, 23, 0.95)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.14)',
        padding: '1.1rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          width: '100%',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '6px',
              backgroundColor: '#16223B',
              border: '1px solid rgba(197, 160, 89, 0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Building2 size={21} color="#C5A059" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
                color: '#F5EFE4',
                lineHeight: 1,
              }}
            >
              Webvastgoed<span style={{ color: '#C5A059' }}>.nl</span>
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: '3px',
              }}
            >
              Maatwerk Websites & Webshops
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Navigation */}
        <nav className="desktop-nav" aria-label="Hoofdnavigatie" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '0.88rem',
                fontWeight: 600,
                color: isActive ? '#C5A059' : '#E2E8F0',
                borderBottom: isActive ? '2px solid #C5A059' : '2px solid transparent',
                paddingBottom: '0.25rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/contact"
            className="btn-primary desktop-cta"
            style={{
              padding: '0.7rem 1.35rem',
              fontSize: '0.84rem',
              backgroundColor: '#C5A059',
              color: '#090E17',
              textDecoration: 'none',
            }}
          >
            <span>Project Bespreken</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#F5EFE4',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu openen of sluiten"
          >
            {mobileMenuOpen ? <X size={26} color="#C5A059" /> : <Menu size={26} color="#F5EFE4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobiele navigatie"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#090E17',
            borderBottom: '1px solid #334155',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: '1rem',
                fontWeight: 600,
                color: isActive ? '#C5A059' : '#F5EFE4',
                textDecoration: 'none',
                padding: '0.4rem 0',
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{
              marginTop: '0.5rem',
              justifyContent: 'center',
              backgroundColor: '#C5A059',
              color: '#090E17',
              textDecoration: 'none',
            }}
          >
            <span>Project Bespreken</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
