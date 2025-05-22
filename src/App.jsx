import React from 'react';
import SocialIcons from './components/SocialIcons';
import MessageForm from './components/MessageForm';
import './App.css';

const App = () => {
  return (
      <div className="container">
      <h1 className="title">Fallback Messenger</h1>
      <p className="subtitle">Use when WhatsApp, Facebook, Twitter, or Instagram is down</p>
      <SocialIcons />
      <MessageForm />
    </div>
  )
}

export default App