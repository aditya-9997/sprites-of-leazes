import React from 'react';

const ProgressAndAchievements = ({ playerProgress }) => {
  return (
    <div>
      <h2>Progress and Achievements</h2>
      <div className="progress-tracker">
        <p>Leazes Lighters Captured: {playerProgress.lightersCapured}</p>
        <p>QR Codes Scanned: {playerProgress.qrCodesScanned}</p>
        {/* Add more progress tracking elements */}
      </div>
      <div className="achievements">
        {playerProgress.achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-item">
            <img src={achievement.icon} alt={achievement.title} />
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressAndAchievements;