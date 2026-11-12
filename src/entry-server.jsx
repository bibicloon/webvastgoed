import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Investeringsplannen from './pages/Investeringsplannen';
import DigitaleGroei from './pages/DigitaleGroei';
import Portfolio from './pages/Portfolio';
import OverOns from './pages/OverOns';
import FAQPage from './pages/FAQPage';
import Kennisbank from './pages/Kennisbank';
import Contact from './pages/Contact';
import Privacybeleid from './pages/Privacybeleid';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';

export function renderRoute(url) {
  return renderToString(
    <StaticRouter location={url}>
      <div style={{ backgroundColor: '#090E17', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investeringsplannen" element={<Investeringsplannen />} />
            <Route path="/digitale-groei" element={<DigitaleGroei />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/kennisbank" element={<Kennisbank />} />
            <Route path="/kennisbank/:slug" element={<Kennisbank />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacybeleid" element={<Privacybeleid />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </StaticRouter>
  );
}
