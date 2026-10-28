import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { WHATSAPP_URL } from '../components/WhatsAppButton';

export const KENNISBANK_ARTICLES = [
  {
    slug: 'website-laten-maken-250-euro',
    category: 'Starter Actie & ZZP / MKB',
    readTime: '3 min leestijd',
    title: 'Professionele website laten maken voor € 250,-: wat krijgt u precies?',
    metaTitle: 'Professionele Website Laten Maken voor € 250,- (Maatwerk Zonder Templates)',
    metaDesc: 'Wilt u een professionele website laten maken voor € 250,- eenmalig? Ontdek wat er inbegrepen zit in onze tijdelijke Portfolio Actie tot 3 pagina’s zonder WordPress.',
    keywords: 'website laten maken 250 euro, goedkope professionele website laten maken, zzp website laten bouwen, starter website mkb',
    excerpt: 'Veel startende en groeiende ondernemers zoeken een betaalbare website die wel direct een hoogwaardige, zakelijke indruk maakt. Ontdek hoe onze tijdelijke Portfolio Actie van € 250,- werkt.',
    intro: 'Wanneer u als ondernemer zoekt op het laten maken van een betaalbare website, komt u al snel uit bij partijen die een traag standaardthema gebruiken of verborgen kosten rekenen. Met onze tijdelijke Portfolio Actie bewijzen wij dat een razendsnelle maatwerk website tot 3 pagina’s ook voor een eenmalige instapprijs van € 250,- excl. btw haalbaar is.',
    sections: [
      {
        heading: 'Waarom bieden wij tijdelijk een complete website aan voor € 250,-?',
        paragraphs: [
          'Wij werken met de nieuwste generatie React en Next.js ontwikkelsoftware. Hiermee bouwen wij sneller, schoner en veiliger dan traditionele webbureaus die nog met verouderde PHP systemen werken. Om ons portfolio in uiteenlopende branches verder uit te breiden, bouwen wij tijdelijk complete starter websites tot maximaal 3 pagina’s voor € 250,- eenmalig.',
          'U krijgt hiervoor geen standaard template, maar een uniek ontwerp dat volledig is afgestemd op uw bedrijfsnaam, kleuren en doelgroep.',
        ],
      },
      {
        heading: 'Wat zit er standaard in het € 250,- pakket?',
        paragraphs: [
          'Het starter pakket is ontworpen voor ondernemers die snel, veilig en representatief online willen staan met alles wat nodig is om aanvragen te ontvangen:',
        ],
        bullets: [
          'Uniek maatwerk ontwerp tot maximaal 3 pagina’s (bijvoorbeeld Home, Diensten en Contact)',
          'Haarscherpe weergave op zowel smartphone, tablet als desktop',
          'Direct werkend contactformulier en optionele WhatsApp knop',
          'Technische Google SEO basis (snelle laadtijd, juiste koppenstructuur en metadata)',
          '100% veilige React & Next.js architectuur zonder kwetsbare PHP plugins',
        ],
      },
      {
        heading: 'Kan ik later uitbreiden naar meer pagina’s of extra modules?',
        paragraphs: [
          'Ja, dat is het grote voordeel van onze modulaire webarchitectuur. Heeft u direct of op een later moment behoefte aan extra dienstpagina’s, een projectgalerij, een interactieve Voor/Na slider of een webshop? Dan breiden wij uw bestaande website eenvoudig uit tegen een vooraf afgesproken meerprijs.',
        ],
      },
    ],
    relatedLinks: [
      { to: '/investeringsplannen', label: 'Bekijk alle specificaties van de € 250,- Portfolio Actie en onze maandpakketten' },
      { to: '/portfolio', label: 'Bekijk gerealiseerde maatwerk websites in ons portfolio' },
    ],
    ctaPackage: 'actie',
    ctaTitle: 'Direct gebruikmaken van de € 250,- Portfolio Actie?',
    ctaText: 'Laat ons kort weten wat uw bedrijf doet. Wij reageren dezelfde dag nog met een helder voorstel.',
  },
  {
    slug: 'maatwerk-website-vs-wordpress',
    category: 'Techniek & Veiligheid',
    readTime: '4 min leestijd',
    title: 'Maatwerk React & Next.js website vs. WordPress: het verschil in snelheid en veiligheid',
    metaTitle: 'Maatwerk React & Next.js Website vs. WordPress | Snelheid & Veiligheid',
    metaDesc: 'Waarom kiezen steeds meer bedrijven voor een maatwerk React & Next.js website in plaats van WordPress en PHP? Vergelijk laadtijd, Google SEO en beveiliging.',
    keywords: 'maatwerk website vs wordpress, website zonder wordpress, react nextjs website voordelen, veilige website zonder php',
    excerpt: 'Waarom lopen zoveel WordPress websites na verloop van tijd vast op trage laadtijden en beveiligingslekken? Een heldere vergelijking tussen PHP templates en moderne React architectuur.',
    intro: 'Meer dan de helft van de traditionele websites draait nog op WordPress, een systeem dat oorspronkelijk is ontworpen als eenvoudig blogsysteem op basis van PHP. Hoewel het jarenlang de standaard was, merken steeds meer ondernemers de nadelen van zware thema’s en kwetsbare plugins.',
    sections: [
      {
        heading: 'Het probleem met standaard templates en losse PHP plugins',
        paragraphs: [
          'Een gemiddelde WordPress website gebruikt tussen de 15 en 30 losse plugins van verschillende makers: voor het contactformulier, voor SEO, voor een slider en voor beveiliging. Elke keer dat een bezoeker uw pagina opent, moet de server tientallen losse scripts en databaseverzoeken uitvoeren.',
          'Wanneer een van die plugins veroudert of niet tijdig wordt bijgewerkt, ontstaat er direct een beveiligingsrisico of verspringt de opmaak van de website.',
        ],
      },
      {
        heading: 'Waarom React & Next.js fundamenteel sneller en veiliger zijn',
        paragraphs: [
          'Webvastgoed.nl bouwt uitsluitend met React en Next.js: dezelfde moderne webtechnologie die grote internationale platforms gebruiken. Uw website wordt voor plaatsing gecompileerd tot razendsnelle, kant en klare code.',
        ],
        bullets: [
          'Directe laadtijden op mobiel en desktop (cruciaal voor Google Core Web Vitals)',
          'Geen publieke wp-admin inlogpagina waar geautomatiseerde bots op kunnen inbreken',
          'Geen kwetsbare SQL database of verouderde PHP plugins die lekken veroorzaken',
          'Vrijheid in vormgeving: elk onderdeel wordt exact op maat voor uw merk gebouwd',
        ],
      },
      {
        heading: 'Hoger rendement in Google door schone code',
        paragraphs: [
          'Google meet bij elke website hoe snel de belangrijkste inhoud zichtbaar is op een smartphone. Doordat onze maatwerk websites geen overbodige ballast meeladen, behalen ze structureel hogere prestatiescores en converteren bezoekers sneller naar klant.',
        ],
      },
    ],
    relatedLinks: [
      { to: '/digitale-groei', label: 'Ontdek hoe technische snelheid en onze SEO pakketten zorgen voor hogere Google posities' },
      { to: '/over-ons', label: 'Lees meer over onze filosofie achter digitaal vastgoed als bedrijfsfundament' },
    ],
    ctaPackage: 'bedrijfswebsite',
    ctaTitle: 'Overstappen van een trage template naar echt maatwerk?',
    ctaText: 'Wij bouwen uw nieuwe website snel, veilig en volledig vrij van verouderde PHP systemen.',
  },
  {
    slug: 'wat-kost-een-bedrijfswebsite',
    category: 'Tarieven & Advies',
    readTime: '4 min leestijd',
    title: 'Wat kost een professionele bedrijfswebsite laten maken? (Eenmalig vs. Per maand)',
    metaTitle: 'Wat Kost een Professionele Bedrijfswebsite Laten Maken? | Tarieven Overzicht',
    metaDesc: 'Wat kost een zakelijke website of webshop laten bouwen? Vergelijk eenmalige aanschaf (vanaf € 250,-) met een volledig ontzorgd maandpakket (vanaf € 59,- p/m).',
    keywords: 'wat kost een website laten maken, zakelijke website kosten, website per maand of eenmalig, prijzen webdesign mkb',
    excerpt: 'Kiest u voor een eenmalige investering of een vast bedrag per maand inclusief hosting en onderhoud? Bekijk wat een professionele bedrijfswebsite echt hoort te kosten.',
    intro: 'Voor veel ondernemers zijn de prijzen in de webdesignwereld ondoorzichtig. Bij een traditioneel reclamebureau betaalt u al snel € 3.500,- tot € 7.500,- vooraf, terwijl goedkope budgetpartijen achteraf hoge uurtarieven rekenen voor elke kleine aanpassing. Bij Webvastgoed.nl werken we daarom met twee transparante keuzes.',
    sections: [
      {
        heading: 'Optie 1: Eenmalig afrekenen (Direct 100% afgekocht)',
        paragraphs: [
          'Wilt u geen doorlopend abonnement en uw website liever in een keer afrekenen? Dan betaalt u een vast bedrag vooraf afgesproken voor het ontwerp en de bouw. Voor een compacte website tot 3 pagina’s kan dit tijdelijk al voor € 250,- excl. btw via onze Portfolio Actie.',
          'Voor uitgebreidere bedrijfswebsites met meerdere dienstpagina’s, projectoverzichten of maatwerkmodules ontvangt u vooraf een vaste prijsopgave. Optioneel kunnen wij de snelle hosting, het SSL certificaat en de technische updates verzorgen vanaf € 20,- per maand.',
        ],
      },
      {
        heading: 'Optie 2: Volledig ontzorgd per maand (Vanaf € 59,- p/m)',
        paragraphs: [
          'Veel MKB ondernemers kiezen voor gemak en voorspelbaarheid. Met ons maandpakket spreidt u de investering en hoeft u zelf nooit naar de techniek om te kijken:',
        ],
        bullets: [
          'Bedrijfswebsite Compleet vanaf € 59,- p/m (setup vanaf € 299,-)',
          'Maatwerk Webshop vanaf € 99,- p/m (setup vanaf € 499,-)',
          'Inclusief razendsnelle Europese cloud hosting, SSL beveiliging en backups',
          'Inclusief doorlopende tekstwijzigingen, nieuwe foto’s plaatsen en technisch beheer',
        ],
      },
      {
        heading: 'Welke keuze past het beste bij uw onderneming?',
        paragraphs: [
          'Heeft u een overzichtelijke website nodig die na oplevering weinig verandert? Dan is eenmalig afrekenen zeer voordelig. Wilt u regelmatig projecten toevoegen, teksten aanscherpen en volledig ontzorgd worden? Dan is het maandpakket de meest gekozen oplossing.',
        ],
      },
    ],
    relatedLinks: [
      { to: '/investeringsplannen', label: 'Vergelijk al onze eenmalige en maandelijkse investeringsplannen naast elkaar' },
      { to: '/faq', label: 'Bekijk de veelgestelde vragen over hosting, domeinverhuizing en eigendom' },
    ],
    ctaPackage: 'bedrijfswebsite',
    ctaTitle: 'Benieuwd welk pakket het beste bij uw wensen past?',
    ctaText: 'Bekijk onze tarievenpagina of vraag direct een vrijblijvend voorstel op maat aan.',
  },
  {
    slug: 'maatwerk-webshop-laten-maken',
    category: 'E-Commerce & Conversie',
    readTime: '3 min leestijd',
    title: 'Maatwerk webshop laten bouwen met iDEAL en optimale mobiele conversie',
    metaTitle: 'Maatwerk Webshop Laten Maken met iDEAL | Razendsnel & Mobielvriendelijk',
    metaDesc: 'Een luxe maatwerk webshop laten bouwen die direct verkoopt op mobiel, tablet en desktop? Ontdek onze webshop architectuur met iDEAL en Bancontact.',
    keywords: 'maatwerk webshop laten maken, webshop laten bouwen kosten, professionele webwinkel laten maken, luxe webshop design',
    excerpt: 'In een webshop telt elke seconde laadtijd. Ontdek hoe wij luxe, overzichtelijke webshops bouwen waarin bezoekers op hun smartphone binnen enkele klikken via iDEAL afrekenen.',
    intro: 'Meer dan 75% van alle online bestellingen in Nederland en België vindt inmiddels plaats op een smartphone. Een webshop moet daarom niet alleen een luxe uitstraling hebben die vertrouwen wekt, maar ook op elk schermformaat direct en soepel werken.',
    sections: [
      {
        heading: 'Waarom standaard webshop thema’s omzet kosten',
        paragraphs: [
          'Standaard webwinkels zitten vaak vol met onnodige scripts, waardoor productpagina’s traag laden en de winkelwagen op mobiele schermen onoverzichtelijk wordt. Elke extra seconde wachttijd zorgt aantoonbaar voor afhakende bezoekers bij het afrekenen.',
        ],
      },
      {
        heading: 'Praktijkvoorbeeld: Pastry Company (Luxe Patisserie & Chocolade)',
        paragraphs: [
          'Voor Pastry Company realiseerden wij een stijlvolle online boutique in diep chocoladebruin, warm crème en geborsteld goud. De productfotografie staat centraal en zowel particuliere klanten als zakelijke bestellers (B2B gifting) kunnen moeiteloos hun bestelling plaatsen.',
        ],
        bullets: [
          'Overzichtelijke productkaarten met directe winkelwagen interactie',
          'Naadloze betaling via iDEAL, Bancontact, creditcard en Apple Pay',
          'Geoptimaliseerde mobiele checkout met minimale invulstappen',
          'Verkrijgbaar als maandpakket vanaf € 99,- p/m of als eenmalige afkoop',
        ],
      },
    ],
    relatedLinks: [
      { to: '/portfolio', label: 'Bekijk de volledige Pastry Company webshop case in ons portfolio' },
      { to: '/investeringsplannen', label: 'Bekijk de specificaties en prijs van het Maatwerk Webshop pakket' },
    ],
    ctaPackage: 'webshop',
    ctaTitle: 'Uw producten verkopen via een luxe maatwerk webshop?',
    ctaText: 'Bespreek uw webshop wensen vrijblijvend met ons voor een passend voorstel.',
  },
  {
    slug: 'website-voor-transport-en-koeriers',
    category: 'Branche: Transport & Logistiek',
    readTime: '3 min leestijd',
    title: 'Website laten maken voor transportbedrijf, koeriersdienst of logistiek',
    metaTitle: 'Website Laten Maken voor Koeriersbedrijf & Transport | B2B Logistiek',
    metaDesc: 'Professionele website laten maken voor uw koeriersbedrijf of transportonderneming? Bekijk hoe wij voor OnPoint Koeriers een conversiegerichte Next.js website bouwden.',
    keywords: 'website laten maken koeriersbedrijf, website transportbedrijf laten bouwen, webdesign logistiek en transport, spoedtransport website',
    excerpt: 'In het spoedtransport en de B2B logistiek moet een opdrachtgever binnen 5 seconden zien dat u betrouwbaar en direct inzetbaar bent. Bekijk onze aanpak aan de hand van OnPoint Koeriers.',
    intro: 'Wanneer een bedrijf met spoed een koerier of transporteur zoekt voor medische zendingen, vertrouwelijke documenten of kritieke onderdelen, is er geen tijd voor een onduidelijke website. De bezoeker wil direct weten: rijdt u vandaag nog, met welk voertuig en hoe neem ik direct contact op?',
    sections: [
      {
        heading: 'Wat een transportwebsite direct moet uitstralen',
        paragraphs: [
          'Opdrachtgevers in de logistiek zoeken zekerheid, stiptheid en bereikbaarheid. Een professionele transportwebsite combineert een krachtige zakelijke uitstraling met directe actieknoppen voor telefonisch contact, WhatsApp en ritplanning.',
        ],
        bullets: [
          'Prominente "Bel Direct" en spoedaanvraag knoppen die op mobiel direct meebewegen',
          'Heldere presentatie van uw wagenpark en specifieke B2B sectoren',
          'Lokale en landelijke SEO opbouw zodat bedrijven die zoeken op spoedtransport u direct vinden',
          'Razendsnelle laadtijd voor klanten die onderweg via hun mobiele netwerk zoeken',
        ],
      },
      {
        heading: 'Case uit ons portfolio: OnPoint Koeriers',
        paragraphs: [
          'Voor OnPoint Koeriers ontwikkelden wij een maatwerk Next.js platform gericht op spoedtransport door heel Nederland en Europa. Door de combinatie van duidelijke dienstpagina’s en directe conversieknoppen weten zakelijke opdrachtgevers direct waar ze aan toe zijn.',
        ],
      },
    ],
    relatedLinks: [
      { to: '/portfolio', label: 'Bekijk de volledige OnPoint Koeriers case study in ons portfolio' },
      { to: '/digitale-groei', label: 'Ontdek hoe uw transportbedrijf hoger in Google komt op regionale en landelijke zoektermen' },
    ],
    ctaPackage: 'bedrijfswebsite',
    ctaTitle: 'Actief in transport of logistiek en toe aan een sterke website?',
    ctaText: 'Van een strakke starter website (€ 250,-) tot een compleet logistiek platform op maat.',
  },
  {
    slug: 'website-voor-bouw-en-afbouw',
    category: 'Branche: Bouw & Vakmanschap',
    readTime: '3 min leestijd',
    title: 'Website laten maken voor bouwbedrijf, aannemer of afbouwspecialist',
    metaTitle: 'Website Laten Maken voor Bouwbedrijf, Aannemer of Afbouw | Maatwerk',
    metaDesc: 'Een krachtige website laten maken voor uw bouwbedrijf, montagebedrijf of afbouwspecialist? Laat uw vakmanschap zien met echte projectfoto’s en een Voor/Na slider.',
    keywords: 'website laten maken bouwbedrijf, website aannemer laten maken, webdesign afbouw en montage, vakmanschap website laten bouwen',
    excerpt: 'In de bouw en afbouw verkopen uw gerealiseerde projecten het werk. Ontdek hoe u met een overzichtelijke projectgalerij en interactieve Voor/Na slider meer offerteaanvragen ontvangt.',
    intro: 'Als bouwbedrijf, timmerbedrijf of afbouwspecialist levert u dagelijks zichtbaar vakwerk af. Toch hebben veel vakbedrijven een verouderde website die op een telefoon slecht leesbaar is en waar recente projecten nauwelijks op tot hun recht komen.',
    sections: [
      {
        heading: 'Laat uw vakmanschap voor zich spreken',
        paragraphs: [
          'Zakelijke en particuliere opdrachtgevers kiezen een bouwpartner op basis van vertrouwen en aantoonbaar resultaat. Wij richten uw website zo in dat bezoekers direct uw expertises en afgeronde projecten kunnen bekijken.',
        ],
        bullets: [
          'Interactieve Voor/Na vergelijkingsslider om het verschil tussen ruwbouw en oplevering te tonen',
          'Duidelijke dienstblokken (zoals systeemwanden, plafonds, timmerwerk of renovatie)',
          'Sterke regionale vindbaarheid in Google (bijvoorbeeld op uw stad en omliggende regio)',
          'Laagdrempelig offerteformulier en directe WhatsApp knop voor snelle aanvragen',
        ],
      },
      {
        heading: 'Case uit ons portfolio: Brökling Afbouw & Montage',
        paragraphs: [
          'Voor Brökling Afbouw & Montage realiseerden wij een overzichtelijke vakmanschap website met een interactieve Voor/Na slider en heldere projectpresentaties in regio Eindhoven en Nijmegen. Zo zien nieuwe opdrachtgevers direct de kwaliteit van de afwerking.',
        ],
      },
    ],
    relatedLinks: [
      { to: '/portfolio', label: 'Bekijk de Brökling Afbouw & Montage case met Voor/Na slider in ons portfolio' },
      { to: '/investeringsplannen', label: 'Bekijk onze tarieven voor een starter website (€ 250,-) of uitgebreide projectwebsite' },
    ],
    ctaPackage: 'bedrijfswebsite',
    ctaTitle: 'Uw vakwerk professioneel presenteren op een eigen website?',
    ctaText: 'Neem vrijblijvend contact op voor de € 250,- starter actie of een uitgebreide projectwebsite.',
  },
];

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
                {article.readTime}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.65rem, 1.2rem + 1.8vw, 2.5rem)', color: '#F5EFE4', marginBottom: '1.35rem', lineHeight: 1.25 }}>
              {article.title}
            </h1>

            <p
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
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.75rem', padding: '1.25rem 1.4rem', backgroundColor: 'rgba(9, 14, 23, 0.65)', borderRadius: '8px', border: '1px solid rgba(197, 160, 89, 0.22)' }}>
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
