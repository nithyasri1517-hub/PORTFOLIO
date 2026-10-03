import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { HomePage } from './pages/HomePage';
import { SavoirPage } from './pages/SavoirPage';
import { RedEditorialPage } from './pages/RedEditorialPage';
import { ExperimentalDetailPage } from './pages/ExperimentalDetailPage';
import { SocialMediaDetailPage } from './pages/SocialMediaDetailPage';
import { PceraPage } from './pages/PceraPage';
import { QuickZapsPage } from './pages/QuickZapsPage';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0908] text-[#f5f2eb] flex flex-col justify-between selection:bg-[#c91f1f] selection:text-white">
      {/* Single Custom Circle-Glow Cursor */}
      <CustomCursor />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Primary Route Views */}
      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Brand Identity: Savoir (10 Sections) */}
          <Route path="/projects/savoir" element={<SavoirPage />} />

          {/* Editorial: _red (Physical Page-Turning) */}
          <Route path="/projects/red" element={<RedEditorialPage />} />

          {/* Experimental: Ash, Euphoria, Fashion, Book */}
          <Route path="/projects/experimental/:id" element={<ExperimentalDetailPage />} />
          <Route path="/projects/experimental" element={<Navigate to="/projects/experimental/ash" replace />} />

          {/* Social Media: RMC, Zion, HOD, Vivere Arte */}
          <Route path="/projects/social/:id" element={<SocialMediaDetailPage />} />
          <Route path="/projects/social" element={<Navigate to="/projects/social/rmc" replace />} />

          {/* Fashion: PCERA */}
          <Route path="/projects/pcera" element={<PceraPage />} />

          {/* Content & Social Media Management: QuickZaps */}
          <Route path="/projects/quickzaps" element={<QuickZapsPage />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
