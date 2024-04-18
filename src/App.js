import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Tutorial from './components/Tutorial';
import MainGameView from './components/MainGameView';
import QRCodeContent from './components/QRCodeContent';
import CollaborativeView from './components/CollaborativeView';
import ProgressAndAchievements from './components/ProgressAndAchievements';

const App = () => {
  const qrCodeContent = {
    type: 'narrative',
    message: 'A Leazes Lighter has left a message for you...',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/game" element={<MainGameView qrCodeContent={qrCodeContent} />} />
        <Route path="/qr-code" element={<QRCodeContent />} />
        <Route path="/collaborative" element={<CollaborativeView />} />
        <Route path="/progress" element={<ProgressAndAchievements />} />
      </Routes>
    </Router>
  );
};

export default App;