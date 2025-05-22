import React from 'react';
import SocialIcons from './components/SocialIcons';
import MessageForm from './components/MessageForm';

import './App.css';
import MessagesPanel from './components/MessagesPanel';

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
      <h1 className="title">Fallback Messenger</h1>
      <p className="subtitle">Use when WhatsApp, Facebook, Twitter, or Instagram is down</p>
      <SocialIcons />
      <MessageForm />
    </div>
    <MessagesPanel/>
    </div>
     
    
  )
}

export default App