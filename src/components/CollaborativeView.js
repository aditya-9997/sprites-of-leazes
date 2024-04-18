import React, { useState, useEffect } from 'react';
import { initializeMultiplayerSession, sendGameBoardUpdate, sendChatMessage, subscribeToGameBoardUpdates, subscribeToChat } from '../utils/multiplayer';

const CollaborativeView = () => {
  const [mode, setMode] = useState('single');
  const [sharedGameBoard, setSharedGameBoard] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (mode === 'multiplayer') {
      initializeMultiplayerSession();
      subscribeToGameBoardUpdates((update) => {
        setSharedGameBoard((prevBoard) => [...prevBoard, update]);
      });
      subscribeToChat((message) => {
        setChatMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [mode]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleGameBoardUpdate = (update) => {
    setSharedGameBoard((prevBoard) => [...prevBoard, update]);
    sendGameBoardUpdate(update);
  };

  const handleChatMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    sendChatMessage(message);
  };

  return (
    <div>
      <div className="mode-selection">
        <button onClick={() => handleModeChange('single')}>Single Player</button>
        <button onClick={() => handleModeChange('multiplayer')}>Multiplayer</button>
      </div>
      {mode === 'multiplayer' && (
        <div>
          <div className="shared-game-board">
            {/* Render the shared game board */}
            {sharedGameBoard.map((update, index) => (
              <div key={index} className="game-board-update">
                {update}
              </div>
            ))}
          </div>
          <div className="chat-interface">
            {/* Render the chat interface for player communication */}
            {chatMessages.map((message, index) => (
              <div key={index} className="chat-message">
                {message}
              </div>
            ))}
            <input type="text" placeholder="Type your message" onKeyPress={(e) => handleChatMessage(e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborativeView;