import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BREADCRUMB_NAMES = {
  '/portfolio': 'Portfolio & Cases',
  '/investeringsplannen': 'Tarieven & Pakketten',
  '/digitale-groei': 'SEO & Organische Groei',
  '/over-ons': 'Over Ons & Werkwijze',
  '/faq': 'Veelgestelde Vragen',
  '/kennisbank': 'Kennisbank & Advies',
  '/kennisbank/website-laten-maken-250-euro': 'Website Laten Maken voor € 250,-',
  '/kennisbank/maatwerk-website-vs-wordpress': 'Maatwerk Website vs. WordPress',
  '/kennisbank/wat-kost-een-bedrijfswebsite': 'Wat Kost een Bedrijfswebsite?',
  '/kennisbank/maatwerk-webshop-laten-maken': 'Maatwerk Webshop Laten Maken',
  '/kennisbank/website-voor-transport-en-koeriers': 'Website voor Transport & Koeriers',
  '/kennisbank/website-voor-bouw-en-afbouw': 'Website voor Bouw & Afbouw',
  '/contact': 'Contact & Project Bespreken',
  '/privacybeleid': 'Privacybeleid & Cookieverklaring',
  '/algemene-voorwaarden': 'Algemene Voorwaarden',
};

export default function SEO({ title, description, keywords, schema }) {
  const location = useLocation();
  const baseUrl = 'https://webvastgoed.nl';
  const cleanPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const canonicalUrl = `${baseUrl}${cleanPath}`;

  useEffect(() => {
    const fullTitle = title
      ? `${title} | Webvastgoed.nl`
      : 'Maatwerk Websites & Webshops zonder Standaard Templates | Webvastgoed.nl';
    const fullDesc =
      description ||
      'Razendsnelle maatwerk websites en webshops op React & Next.js architectuur. Geen kwetsbare PHP plugins of standaard templates. Tijdelijke portfolio actie vanaf € 250,- of volledig ontzorgd per maand.';

    document.title = fullTitle;

    const updateMeta = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('name', 'description', fullDesc);
    if (keywords) {
      updateMeta('name', 'keywords', keywords);
    }

    // Open Graph Meta Tags
    updateMeta('property', 'og:title', fullTitle);
    updateMeta('property', 'og:description', fullDesc);
    updateMeta('property', 'og:type', cleanPath.startsWith('/kennisbank/') ? 'article' : 'website');
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:image', `${baseUrl}/assets/marktplaats_1_onpoint_koeriers.jpg`);
    updateMeta('property', 'og:locale', 'nl_NL');

    // Twitter Cards
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', fullTitle);
    updateMeta('name', 'twitter:description', fullDesc);
    updateMeta('name', 'twitter:image', `${baseUrl}/assets/marktplaats_1_onpoint_koeriers.jpg`);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Build combined Schema.org JSON-LD (Page Schema + BreadcrumbList for Google Search)
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
    ];

    if (cleanPath.startsWith('/kennisbank/') && BREADCRUMB_NAMES[cleanPath]) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Kennisbank & Advies',
        item: `${baseUrl}/kennisbank`,
      });
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: BREADCRUMB_NAMES[cleanPath],
        item: canonicalUrl,
      });
    } else if (cleanPath !== '/' && BREADCRUMB_NAMES[cleanPath]) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: BREADCRUMB_NAMES[cleanPath],
        item: canonicalUrl,
      });
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    };

    const combinedSchema = schema ? [schema, breadcrumbSchema] : [breadcrumbSchema];

    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(combinedSchema);
  }, [title, description, keywords, canonicalUrl, cleanPath, schema]);

  return null;
}
