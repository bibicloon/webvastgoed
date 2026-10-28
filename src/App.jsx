import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

const Investeringsplannen = lazy(() => import('./pages/Investeringsplannen'));
const DigitaleGroei = lazy(() => import('./pages/DigitaleGroei'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const OverOns = lazy(() => import('./pages/OverOns'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const Kennisbank = lazy(() => import('./pages/Kennisbank'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacybeleid = lazy(() => import('./pages/Privacybeleid'));
const AlgemeneVoorwaarden = lazy(() => import('./pages/AlgemeneVoorwaarden'));

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
          <Suspense fallback={<div style={{ minHeight: '75vh', backgroundColor: '#090E17' }} />}>
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
          </Suspense>
        </main>

        {/* Footer Framing */}
        <Footer />

        {/* Direct WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
