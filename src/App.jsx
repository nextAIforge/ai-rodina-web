import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Seminar1Page from './pages/Seminar1Page';
import Seminar2Page from './pages/Seminar2Page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seminar/1" element={<Seminar1Page />} />
      <Route path="/seminar/2" element={<Seminar2Page />} />
    </Routes>
  );
}
