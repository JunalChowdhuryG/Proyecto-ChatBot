'use client'
 
import React, { useState } from "react";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy Chatbot-UNI, ¿en qué puedo ayudarte?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Lo siento, no entendí tu consulta." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hubo un error al procesar tu solicitud." },
      ]);
    }

    setInputValue("");
  };

  return (
    <>
      <button className={styles.chatbotButton} onClick={handleToggleChat}>
        <img src="/assets/chatbot.png" alt="Abrir Chatbot" />
      </button>

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h3>Chatbot Universitario</h3>
            <button onClick={handleToggleChat}>&times;</button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.chatMessage} ${
                  msg.sender === "bot" ? styles.bot : styles.user
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
