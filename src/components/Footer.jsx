import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from './WhatsAppButton';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#090E17',
        color: '#F5EFE4',
        borderTop: '1px solid rgba(197, 160, 89, 0.22)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Kolom 1: Merk */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#16223B',
                  border: '1px solid rgba(197, 160, 89, 0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={20} color="#C5A059" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#F5EFE4',
                }}
              >
                Webvastgoed<span style={{ color: '#C5A059' }}>.nl</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1rem' }}>
              Razendsnelle maatwerk websites en webshops gebouwd met moderne React &amp; Next.js techniek. Geen standaard templates en geen kwetsbare PHP-plug-ins.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#C5A059', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              100% Maatwerk · Veilige Webarchitectuur
            </div>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#F5EFE4', marginBottom: '1rem' }}>
              Pagina&apos;s
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Portfolio &amp; Cases</Link></li>
              <li><Link to="/investeringsplannen" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Tarieven &amp; Pakketten</Link></li>
              <li><Link to="/digitale-groei" style={{ color: '#CBD5E1', textDecoration: 'none' }}>SEO &amp; Vindbaarheid</Link></li>
              <li><Link to="/over-ons" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Over Ons</Link></li>
              <li><Link to="/faq" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Veelgestelde Vragen</Link></li>
              <li><Link to="/contact" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Gerealiseerde Projecten */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#F5EFE4', marginBottom: '1rem' }}>
              Recente Projecten
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <li><Link to="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none' }}>OnPoint Koeriers (Logistiek)</Link></li>
              <li><Link to="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Smart Stops Europe (Reisplatform)</Link></li>
              <li><Link to="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Pastry Company (Webshop)</Link></li>
              <li><Link to="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Brökling Afbouw &amp; Montage</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#F5EFE4', marginBottom: '1rem' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '0.15rem' }}>
                  WhatsApp
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F5EFE4', fontWeight: 600, textDecoration: 'none' }}
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '0.15rem' }}>
                  E-mailadres
                </div>
                <a href="mailto:info@webvastgoed.nl" style={{ color: '#F5EFE4', fontWeight: 600, textDecoration: 'none' }}>
                  info@webvastgoed.nl
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '0.15rem' }}>
                  Werkgebied
                </div>
                <span>Nederland &amp; België</span>
              </div>
              <div style={{ paddingTop: '0.35rem', borderTop: '1px solid rgba(148, 163, 184, 0.14)', fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.6 }}>
                <div><strong style={{ color: '#CBD5E1' }}>KvK:</strong> 42077914</div>
                <div><strong style={{ color: '#CBD5E1' }}>BTW:</strong> NL005478178B19</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(148, 163, 184, 0.14)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#94A3B8',
          }}
        >
          <span>&copy; {new Date().getFullYear()} Webvastgoed.nl · KvK 42077914 · Alle prijzen zijn excl. btw.</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.35rem', alignItems: 'center' }}>
            <Link to="/privacybeleid" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
              Privacybeleid (AVG)
            </Link>
            <Link to="/algemene-voorwaarden" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
