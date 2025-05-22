import React, { useState } from "react";
import "./MessageForm.css";

const MessageForm = () => {
  const [recipientId, setRecipientId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending to:", recipientId, "Message:", message);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter Recipient ID"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="textarea"
      />
      <button type="submit" className="button">
        Send Message
      </button>
    </form>
  );
};

export default MessageForm;