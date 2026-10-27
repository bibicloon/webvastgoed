import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../components/WhatsAppButton';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    packageType: 'Starter Website € 250,- (tot 3 pagina’s)',
    message: '',
  });

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Webvastgoed.nl',
    'url': 'https://webvastgoed.nl/contact',
    'mainEntity': {
      '@type': 'ContactPoint',
      'telephone': '+31630037257',
      'email': 'info@webvastgoed.nl',
      'contactType': 'customer service',
      'areaServed': 'NL',
      'availableLanguage': 'Dutch'
    }
  };

  const syncAriaInvalid = (input) => {
    if (!input || typeof input.checkValidity !== 'function') return;
    if (!input.checkValidity()) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  const handleBlurCapture = (e) => {
    if (e.target.matches('input[required], textarea[required]')) {
      syncAriaInvalid(e.target);
    }
  };

  const handleInputCapture = (e) => {
    if (e.target.matches('input[required], textarea[required]') && e.target.checkValidity()) {
      e.target.removeAttribute('aria-invalid');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.querySelectorAll('input[required], textarea[required]').forEach(syncAriaInvalid);
      if (!formRef.current.checkValidity()) return;
    }
    setSubmitted(true);
  };

  return (
    <div
      className="bg-luxury-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 14, 23, 0.86) 0%, rgba(17, 26, 46, 0.80) 50%, rgba(9, 14, 23, 0.92) 100%), url('/assets/hero_contact.jpg?v=2')`,
        color: '#F5EFE4',
        minHeight: '85vh',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <SEO
        title="Contact & Project Bespreken"
        description="Neem vrijblijvend contact op met Webvastgoed.nl voor de €250,- portfolio-actie, een maatwerk bedrijfswebsite of een webshop."
        keywords="contact webvastgoed, website aanvragen, offerte maatwerk website, webdesign contact"
        schema={contactSchema}
      />

      <div className="container">
        {/* Centered Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem' }}>
            <span>Vrijblijvend Sparren</span>
          </div>

          <h1 style={{ color: '#F5EFE4', marginBottom: '1rem' }}>
            Bespreek uw nieuwe website
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.65 }}>
            Laat kort weten wat uw bedrijf doet en waar u naar op zoek bent. Wij denken vrijblijvend met u mee en reageren vrijwel altijd dezelfde dag nog.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Dark Luxury Form Container */}
          <div
            style={{
              backgroundColor: 'rgba(22, 34, 59, 0.92)',
              backdropFilter: 'blur(12px)',
              borderRadius: '10px',
              padding: '2.5rem 2.25rem',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderTop: '3px solid #C5A059',
            }}
          >
            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                onBlurCapture={handleBlurCapture}
                onInputCapture={handleInputCapture}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}
              >
                <div style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.16)', paddingBottom: '0.85rem', marginBottom: '0.25rem' }}>
                  <h2 style={{ fontSize: '1.85rem', color: '#F5EFE4', marginBottom: '0.2rem' }}>
                    Stuur een bericht
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                    Vul uw gegevens in voor een vrijblijvend voorstel op maat.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.15rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.45rem' }}>
                      Uw naam *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      placeholder="Bijv. Jan de Vries"
                      aria-errormessage="name-error"
                      className="form-field-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <div id="name-error" className="field-error-msg">
                      <AlertCircle size={14} aria-hidden="true" />
                      <span>Vul alstublieft uw naam in.</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.45rem' }}>
                      Bedrijfsnaam
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Uw bedrijfsnaam"
                      className="form-field-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.45rem' }}>
                    E-mailadres *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="uw@bedrijf.nl"
                    aria-errormessage="email-error"
                    className="form-field-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <div id="email-error" className="field-error-msg">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>Vul een geldig e-mailadres in.</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-package" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.45rem' }}>
                    Waar heeft u interesse in?
                  </label>
                  <select
                    id="contact-package"
                    name="packageType"
                    className="form-field-input"
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                  >
                    <option value="Starter Website € 250,- (tot 3 pagina’s)" style={{ backgroundColor: '#090E17', color: '#F5EFE4' }}>
                      Starter Website € 250,- (tot 3 pagina’s)
                    </option>
                    <option value="Uitgebreide Bedrijfswebsite" style={{ backgroundColor: '#090E17', color: '#F5EFE4' }}>
                      Uitgebreide Bedrijfswebsite (vanaf € 59,- p/m of eenmalig)
                    </option>
                    <option value="Maatwerk Webshop" style={{ backgroundColor: '#090E17', color: '#F5EFE4' }}>
                      Maatwerk Webshop (vanaf € 99,- p/m of eenmalig)
                    </option>
                    <option value="SEO & Vindbaarheid" style={{ backgroundColor: '#090E17', color: '#F5EFE4' }}>
                      SEO &amp; Hogere Vindbaarheid in Google
                    </option>
                    <option value="Anders / Vrijblijvend advies" style={{ backgroundColor: '#090E17', color: '#F5EFE4' }}>
                      Anders / Vrijblijvend advies
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.45rem' }}>
                    Uw wensen of vraag *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Vertel kort wat uw bedrijf doet en wat u graag op de website terugziet..."
                    aria-errormessage="message-error"
                    className="form-field-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <div id="message-error" className="field-error-msg">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>Geef kort aan waarmee we u kunnen helpen.</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.4rem',
                  }}
                >
                  <span>Aanvraag Versturen</span>
                  <Send size={16} />
                </button>

                <p style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.55, textAlign: 'center', marginTop: '-0.25rem' }}>
                  Door dit formulier te versturen gaat u akkoord met ons{' '}
                  <Link to="/privacybeleid" style={{ color: '#C5A059', textDecoration: 'underline' }}>
                    Privacybeleid
                  </Link>{' '}
                  en onze{' '}
                  <Link to="/algemene-voorwaarden" style={{ color: '#C5A059', textDecoration: 'underline' }}>
                    Algemene Voorwaarden
                  </Link>
                  .
                </p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <CheckCircle2 size={48} color="#C5A059" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.85rem', color: '#F5EFE4', marginBottom: '0.5rem' }}>
                  Bericht ontvangen
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#CBD5E1', lineHeight: 1.65 }}>
                  Bedankt {formData.name}, we hebben uw aanvraag voor <strong style={{ color: '#C5A059' }}>{formData.packageType}</strong> ontvangen en nemen vandaag nog contact met u op.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contact & Werkwijze */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(22, 34, 59, 0.92)',
                backdropFilter: 'blur(12px)',
                color: '#F5EFE4',
                borderRadius: '10px',
                padding: '2.25rem',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderTop: '3px solid #C5A059',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
              }}
            >
              <h2 style={{ fontSize: '1.75rem', color: '#F5EFE4', marginBottom: '1.25rem' }}>
                Direct contact
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ paddingBottom: '1.15rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <div style={{ fontSize: '0.76rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Direct via WhatsApp (Snelste reactie)
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.12rem', color: '#F5EFE4', fontWeight: 600 }}
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem', minHeight: '38px' }}
                    >
                      <span>Stuur WhatsApp</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <div style={{ fontSize: '0.76rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.25rem' }}>
                    E-mailadres
                  </div>
                  <a href="mailto:info@webvastgoed.nl" style={{ fontSize: '1.1rem', color: '#F5EFE4', fontWeight: 600 }}>
                    info@webvastgoed.nl
                  </a>
                </div>

                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <div style={{ fontSize: '0.76rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Reactietijd
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#F5EFE4', fontWeight: 600 }}>
                    Binnen enkele uren (vandaag nog reactie)
                  </div>
                </div>

                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                  <div style={{ fontSize: '0.76rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Werkgebied
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#F5EFE4', fontWeight: 600 }}>
                    Geheel Nederland &amp; België
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Bedrijfsgegevens
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.65 }}>
                    <div><strong style={{ color: '#F5EFE4' }}>KvK-nummer:</strong> 42077914</div>
                    <div><strong style={{ color: '#F5EFE4' }}>BTW-nummer:</strong> NL005478178B19</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(22, 34, 59, 0.92)',
                backdropFilter: 'blur(12px)',
                color: '#F5EFE4',
                borderRadius: '10px',
                padding: '2.25rem',
                border: '1px solid rgba(197, 160, 89, 0.28)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
              }}
            >
              <h3 style={{ fontSize: '1.45rem', color: '#C5A059', marginBottom: '1rem' }}>
                In 3 stappen online
              </h3>
              <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.65 }}>
                <li><strong style={{ color: '#F5EFE4' }}>Korte kennismaking:</strong> wij bespreken uw wensen en geven direct aan of dit binnen het € 250,- pakket (tot 3 pagina&apos;s) valt of wat een uitgebreidere opzet kost.</li>
                <li><strong style={{ color: '#F5EFE4' }}>Ontwerp &amp; Bouw:</strong> wij bouwen uw maatwerk website in onze nieuwste React/Next.js omgeving en sturen u een live proefversie.</li>
                <li><strong style={{ color: '#F5EFE4' }}>Oplevering:</strong> na uw goedkeuring zetten wij de website direct veilig en razendsnel live op uw domeinnaam.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
