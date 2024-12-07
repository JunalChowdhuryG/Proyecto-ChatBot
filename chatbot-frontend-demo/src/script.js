const chatbotButton = document.getElementById("chatbotButton");
const chatContainer = document.getElementById("chatContainer");
const closeButton = document.getElementById("closeButton");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Mostrar/Ocultar el chat
chatbotButton.addEventListener("click", () => {
    chatContainer.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
    chatContainer.classList.remove("show");
});

// Enviar mensaje
sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Agregar mensaje del usuario
    addMessage(message, "user");

    const Workspace = "chatuni";
    const thread = "1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9";

    const urlApi = "http://localhost:3001/api/v1/workspace/"+ Workspace + "/thread/"+ thread +"/chat";

    // Llamar a la API
    //fetch("http://localhost:3001/api/v1/workspace/chatuni/thread/1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9/chat", {
    fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YCRAXES-NN1M9RW-NK4985A-0JCEGKK",
        },
        body: JSON.stringify({ message, mode: "chat", userId: 1 }),
    })
        .then((res) => res.json())
        .then((data) => {
            addMessage(data.textResponse || "Lo siento, no entiendo tu consulta.", "bot");
        })
        .catch(() => {
            addMessage("Hubo un error al procesar tu consulta. Intenta más tarde.", "bot");
        });

    chatInput.value = ""; // Limpiar input
}

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}
// Delegamos los clics a los botones de sugerencias
suggestedMessages.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion-button")) {
        const message = e.target.dataset.message; // Obtiene el mensaje predefinido
        chatInput.value = message; // Llena el input con el mensaje
        sendMessage(); // Envía el mensaje
    }
});