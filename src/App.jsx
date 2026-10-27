import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Scroll to top on navigation helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ backgroundColor: '#090E17', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Sticky Luxury Header */}
        <Navbar />

        {/* Multi-Page Route Content */}
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

        {/* Footer Framing */}
        <Footer />

        {/* Direct WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
