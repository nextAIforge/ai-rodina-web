import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Seminar1Page from './pages/Seminar1Page';
import Seminar2Page from './pages/Seminar2Page';
import PripravaSePage from './pages/PripravaSePage';
import SlovnikPage from './pages/SlovnikPage';
import KontaktPage from './pages/KontaktPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seminar/1" element={<Seminar1Page />} />
      <Route path="/seminar/2" element={<Seminar2Page />} />
      <Route path="/seminar/priprava" element={<PripravaSePage />} />
      <Route path="/slovnik" element={<SlovnikPage />} />
      <Route path="/kontakt" element={<KontaktPage />} />
    </Routes>
  );
}
