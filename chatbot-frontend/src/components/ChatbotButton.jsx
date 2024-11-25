import React from "react";

function ChatbotButton({ toggleChat }) {
  return (
    <button className="chatbot-button" onClick={toggleChat}>
      <img src="./assets/chatbot1.jpeg" alt="Abrir Chatbot" />
    </button>
  );
}

export default ChatbotButton;
