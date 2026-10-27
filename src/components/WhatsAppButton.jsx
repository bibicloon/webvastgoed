import React from 'react';

export const WHATSAPP_URL = 'https://wa.me/31630037257?text=Hallo%20Webvastgoed%2C%20ik%20heb%20een%20vraag%20over%20een%20maatwerk%20website.';
export const WHATSAPP_DISPLAY = '+31 6 3003 7257';

export function WhatsAppIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons direct een bericht via WhatsApp"
      className="whatsapp-floating-btn"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 95,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        backgroundColor: 'rgba(17, 26, 46, 0.96)',
        backdropFilter: 'blur(10px)',
        color: '#F5EFE4',
        border: '1px solid #C5A059',
        borderRadius: '50px',
        padding: '0.8rem 1.35rem',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)',
        fontWeight: 600,
        fontSize: '0.88rem',
        letterSpacing: '0.02em',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#22C55E',
          boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
          flexShrink: 0,
        }}
      />
      <WhatsAppIcon size={18} color="#C5A059" />
      <span className="whatsapp-floating-label">Direct WhatsApp</span>
    </a>
  );
}
