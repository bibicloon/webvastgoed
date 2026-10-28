import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { KENNISBANK_ARTICLES } from '../src/data/kennisbankArticles.js';
import { PORTFOLIO_PROJECTS } from '../src/data/portfolioProjects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const baseHtmlPath = path.join(distDir, 'index.html');
const baseUrl = 'https://webvastgoed.nl';

const ROUTES = [
  {
    path: '/investeringsplannen',
    breadcrumb: 'Tarieven & Pakketten',
    title: 'Tarieven & Pakketten - Eenmalig of Per Maand | Webvastgoed.nl',
    description:
      "Transparante tarieven voor maatwerk websites en webshops. Tijdelijke Portfolio Actie: complete website (tot 3 pagina's) voor € 250,- eenmalig, of volledig ontzorgd vanaf € 59,- p/m.",
    keywords: 'website laten maken kosten, website 250 euro, maatwerk website tarieven, webshop laten bouwen prijs',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Starter Website (Portfolio Actie)',
            description: 'Maatwerk website tot maximaal 3 pagina’s, volledig responsive, inclusief contactformulier en basis SEO.',
            offers: { '@type': 'Offer', price: '250.00', priceCurrency: 'EUR' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Bedrijfswebsite Compleet',
            description: 'Uitgebreide maatwerk website tot 5-10 pagina’s, inclusief hosting, SSL, onderhoud en beheer.',
            offers: {
              '@type': 'Offer',
              price: '59.00',
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' },
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'Maatwerk Webshop',
            description: 'Compleet ontworpen webshop tot 50 producten, iDEAL & betaalmethoden, voorraadbeheer.',
            offers: {
              '@type': 'Offer',
              price: '99.00',
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' },
            },
          },
        },
      ],
    },
  },
  {
    path: '/digitale-groei',
    breadcrumb: 'SEO & Organische Groei',
    title: 'SEO & Vindbaarheid in Google - Pakketten | Webvastgoed.nl',
    description:
      'Structurele zoekmachine optimalisatie (SEO) voor hogere posities in Google. Bekijk onze heldere SEO Start, Grow en Dominate pakketten.',
    keywords: 'SEO pakketten, hoger in google komen, zoekmachine optimalisatie mkb, lokale seo uitbesteden',
  },
  {
    path: '/portfolio',
    breadcrumb: 'Portfolio & Cases',
    title: 'Gerealiseerd Portfolio & Recente Websites | Webvastgoed.nl',
    description:
      'Bekijk recente maatwerk websites en webshops van Webvastgoed.nl: OnPoint Koeriers, Smart Stops Europe, Pastry Company en Brökling Afbouw & Montage.',
    keywords: 'portfolio webdesign, maatwerk websites voorbeelden, OnPoint Koeriers, Smart Stops Europe, Pastry Company, Brökling Afbouw',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portfolio & Case Studies - Webvastgoed.nl',
      description: 'Overzicht van maatwerk websites en webshops gerealiseerd door Webvastgoed.nl in React en Next.js.',
      url: 'https://webvastgoed.nl/portfolio',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: PORTFOLIO_PROJECTS.map((proj, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: proj.title,
          description: proj.summary,
        })),
      },
    },
  },
  {
    path: '/over-ons',
    breadcrumb: 'Over Ons & Werkwijze',
    title: 'Over Ons & Onze Werkwijze | Webvastgoed.nl',
    description:
      'Ontdek waarom Webvastgoed bewust kiest voor 100% maatwerk in React en Next.js zonder verouderde PHP systemen of standaard templates.',
    keywords: 'over webvastgoed, maatwerk webdesign zonder wordpress, react nextjs webbureau, veilige website laten bouwen',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Over Webvastgoed.nl & Onze Werkwijze',
      description: 'Waarom Webvastgoed.nl kiest voor 100% maatwerk in React en Next.js zonder verouderde PHP plugins of standaard templates.',
      url: 'https://webvastgoed.nl/over-ons',
    },
  },
  {
    path: '/faq',
    breadcrumb: 'Veelgestelde Vragen',
    title: 'Veelgestelde Vragen (FAQ) - Maatwerk Websites, Webshops & Tarieven | Webvastgoed.nl',
    description:
      'Antwoorden op veelgestelde vragen over onze maatwerk websites zonder PHP, de € 250,- portfolio actie, webshops, maandpakketten, oplevertijd en Google SEO.',
    keywords: 'veelgestelde vragen website laten maken, website zonder php, kosten website laten bouwen, webvastgoed faq, website 250 euro',
  },
  {
    path: '/kennisbank',
    breadcrumb: 'Kennisbank & Advies',
    title: 'Kennisbank & Advies - Alles over Maatwerk Websites, Kosten & SEO | Webvastgoed.nl',
    description:
      'Lees onze praktische gidsen over het laten maken van een bedrijfswebsite of webshop, de € 250,- starter actie, waarom React sneller is dan WordPress en tips per branche.',
    keywords: 'kennisbank webdesign, website laten maken advies, wat kost een website, maatwerk website voordelen, webvastgoed kennisbank',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Kennisbank & Advies over Maatwerk Websites | Webvastgoed.nl',
      description:
        'Praktische artikelen en gidsen voor ondernemers over maatwerk websites, kosten, het verschil met WordPress en branchegerichte weboplossingen.',
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
    },
  },
  {
    path: '/contact',
    breadcrumb: 'Contact & Project Bespreken',
    title: 'Contact & Project Bespreken | Webvastgoed.nl',
    description:
      'Neem vrijblijvend contact op met Webvastgoed.nl voor de € 250,- portfolio actie, een maatwerk bedrijfswebsite of een webshop.',
    keywords: 'contact webvastgoed, website aanvragen, offerte maatwerk website, webdesign contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Webvastgoed.nl',
      url: 'https://webvastgoed.nl/contact',
      mainEntity: {
        '@type': 'ContactPoint',
        telephone: '+31630037257',
        email: 'info@webvastgoed.nl',
        contactType: 'customer service',
        areaServed: 'NL',
        availableLanguage: 'Dutch',
      },
    },
  },
  {
    path: '/privacybeleid',
    breadcrumb: 'Privacybeleid & Cookieverklaring',
    title: 'Privacybeleid & Cookieverklaring | Webvastgoed.nl',
    description: 'Lees het privacybeleid van Webvastgoed.nl. Wij gaan zorgvuldig en conform de AVG/GDPR om met uw gegevens.',
    keywords: 'privacybeleid webvastgoed, avg verklaring, privacyverklaring',
  },
  {
    path: '/algemene-voorwaarden',
    breadcrumb: 'Algemene Voorwaarden',
    title: 'Algemene Voorwaarden | Webvastgoed.nl',
    description: 'Bekijk de heldere algemene voorwaarden van Webvastgoed.nl voor het bouwen en onderhouden van maatwerk websites en webshops.',
    keywords: 'algemene voorwaarden webvastgoed, leveringsvoorwaarden website laten maken',
  },
  ...KENNISBANK_ARTICLES.map((art) => ({
    path: `/kennisbank/${art.slug}`,
    breadcrumb: art.title,
    isArticle: true,
    title: `${art.metaTitle} | Webvastgoed.nl`,
    description: art.metaDesc,
    keywords: art.keywords,
    ogImage: art.image,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: art.title,
      description: art.metaDesc,
      image: art.image,
      datePublished: art.datePublished,
      dateModified: art.dateModified,
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
        '@id': `https://webvastgoed.nl/kennisbank/${art.slug}`,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.article-key-takeaways'],
      },
      inLanguage: 'nl-NL',
    },
  })),
];

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

for (const route of ROUTES) {
  const canonicalUrl = `${baseUrl}${route.path}`;
  const ogImage = route.ogImage || `${baseUrl}/assets/marktplaats_1_onpoint_koeriers.jpg`;
  const ogType = route.isArticle ? 'article' : 'website';

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
  ];
  if (route.isArticle) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Kennisbank & Advies',
      item: `${baseUrl}/kennisbank`,
    });
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: route.breadcrumb,
      item: canonicalUrl,
    });
  } else {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: route.breadcrumb,
      item: canonicalUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  const combinedSchema = route.schema ? [route.schema, breadcrumbSchema] : [breadcrumbSchema];

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttr(route.description)}" />`
    )
    .replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
      `<meta name="keywords" content="${escapeAttr(route.keywords)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeAttr(route.title)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttr(route.description)}" />`
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${ogType}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${ogImage}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${ogImage}" />`
    )
    .replace(
      route.path === '/portfolio'
        ? /(?!)/
        : /\s*<!-- Preload Homepage LCP Showcase Image -->\s*<link\s+rel="preload"[^>]*\/>/,
      ''
    )
    .replace(
      '</head>',
      `    <script id="jsonld-schema" type="application/ld+json">${JSON.stringify(combinedSchema)}</script>\n  </head>`
    );

  const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
}

console.log(`Pre-rendered static SEO HTML and JSON-LD for ${ROUTES.length} routes (+ homepage = ${ROUTES.length + 1} total URLs).`);
