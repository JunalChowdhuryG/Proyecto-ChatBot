import React from "react";

function ChatMessage({ text, sender }) {
  return <div className={`chat-message ${sender}`}>{text}</div>;
}

export default ChatMessage;
