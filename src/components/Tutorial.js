import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep === 2) {
      // Navigate to the MainGameView after the tutorial is complete
      navigate('/game');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <h2>Tutorial</h2>
      {currentStep === 1 && (
        <div>
          <h3>Step 1: Tracking Leazes Lighters</h3>
          <p>Learn how to use your mobile device to track and locate the mischievous Leazes Lighters in Leazes Park.</p>
          <div className="tutorial-content">
            {/* Add interactive elements for tracking Leazes Lighters */}
            <button onClick={handleNextStep}>Next</button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3>Step 2: Interacting with Leazes Lighters</h3>
          <p>Discover how to engage with the Leazes Lighters through various challenges and puzzles.</p>
          <div className="tutorial-content">
            {/* Add interactive elements for interacting with Leazes Lighters */}
            <button onClick={handleNextStep}>Complete Tutorial</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;