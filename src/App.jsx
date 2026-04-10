import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Seminar1Page from './pages/Seminar1Page';
import Seminar2Page from './pages/Seminar2Page';
import PripravaSePage from './pages/PripravaSePage';
import SlovnikPage from './pages/SlovnikPage';
import KontaktPage from './pages/KontaktPage';
import BezpecnostPage from './pages/BezpecnostPage';

function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const elementId = decodeURIComponent(location.hash.slice(1));

    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timer = window.setTimeout(scrollToElement, 0);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <HashScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seminar/1" element={<Seminar1Page />} />
        <Route path="/seminar/2" element={<Seminar2Page />} />
        <Route path="/seminar/priprava" element={<PripravaSePage />} />
        <Route path="/slovnik" element={<SlovnikPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/bezpecnost" element={<BezpecnostPage />} />
      </Routes>
    </>
  );
}
