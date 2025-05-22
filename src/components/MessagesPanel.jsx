import React from 'react';
import './MessagesPanel.css';

const MessagesPanel = () => {
  // Temporary placeholder data
  const demoMessages = [
    { id: 1, sender: 'John', text: 'Hey, is WhatsApp down for you too?' },
    { id: 2, sender: 'Sarah', text: 'Meet me at the usual place' },
    { id: 3, sender: 'Team', text: 'Emergency server maintenance happening now' }
  ];

  return (
    <div className="messages-panel">
      <h3 className="panel-title">Your Messages</h3>
      
      {demoMessages.length > 0 ? (
        <ul className="messages-list">
          {demoMessages.map((message) => (
            <li key={message.id} className="message-item">
              <span className="sender">{message.sender}:</span>
              <span className="message-text">{message.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <p>Find your messages here</p>
          <p>When you receive messages, they'll appear here</p>
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;