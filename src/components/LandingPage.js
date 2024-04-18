import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartPlaying = () => {
    navigate('/tutorial');
  };

  return (
    <div>
      <header>
        <h1>Sprites of Leazes</h1>
        <p>Uncover the hidden world of Leazes Park through the eyes of mischievous Leazes Lighters.</p>
        <div className="hero-image">
          {/* Insert the visually striking image showcasing Leazes Park in a mixed reality setting */}
        </div>
      </header>
      <main>
        <section className="value-proposition">
          <h2>Explore the Enchanting Leazes Park</h2>
          <p>In "Sprites of Leazes," players become Sprite Seekers exploring the enchanting Leazes Park. Using mixed reality technology, they encounter mischievous Leazes Lighters - tiny, luminous creatures that have made the park their home.</p>
          <ul>
            <li>Immerse yourself in a whimsical, location-based adventure</li>
            <li>Discover hidden Leazes Lighters throughout the park's natural landscapes</li>
            <li>Interact with the Lighters through playful challenges and puzzles</li>
            <li>Uncover the Lighters' stories and help them with their mischievous tasks</li>
          </ul>
        </section>
        <section className="call-to-action">
          <button className="start-playing" onClick={handleStartPlaying}>Start Playing</button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;