import React, { useState } from "react";
import ChatbotButton from "./components/ChatbotButton";
import ChatContainer from "./components/ChatContainer";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      <div className="background"></div>
      <ChatbotButton toggleChat={() => setIsChatOpen(!isChatOpen)} />
      {isChatOpen && <ChatContainer closeChat={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default App;
