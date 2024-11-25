import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

function ChatContainer({ closeChat }) {
  const [messages, setMessages] = useState([
    { text: "Me llamo Chat-UNI, soy un asistente virtual. ¿En qué puedo ayudarte hoy?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.textResponse || "Lo siento, no entiendo tu consulta.", sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Hubo un error al procesar tu consulta. Intenta más tarde.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatbot Universitario</h2>
        <button className="close-button" onClick={closeChat}>
          ×
        </button>
      </div>
      <div className="chat-body">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default ChatContainer;
