import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MessageScanner from './pages/MessageScanner';
import UrlChecker from './pages/UrlChecker';
import EmailAnalyzer from './pages/EmailAnalyzer';
import CallTranscript from './pages/CallTranscript';
import ScreenshotAnalyzer from './pages/ScreenshotAnalyzer';
import Learn from './pages/Learn';
import History from './pages/History';
import Settings from './pages/Settings';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<MessageScanner />} />
        <Route path="/url" element={<UrlChecker />} />
        <Route path="/email" element={<EmailAnalyzer />} />
        <Route path="/call" element={<CallTranscript />} />
        <Route path="/screenshot" element={<ScreenshotAnalyzer />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
