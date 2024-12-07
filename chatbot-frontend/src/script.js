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

    // Configurar URL y Headers
    const urlApi = "http://localhost:8080/api/v1/chat";

    fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YCRAXES-NN1M9RW-NK4985A-0JCEGKK",
        },
        body: JSON.stringify({
            message: "Quien eres?",
            mode: "chat",
            userId: 1,
        }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Error en la respuesta de la API");
            
            return res.json();
        })
        .then((data) => {
            const botResponse = data.textResponse || "Lo siento, no puedo responder en este momento.";
            
            addMessage(botResponse, "bot");
        })
        .catch((err) => {
            console.error("Error:", err);
            addMessage("Hubo un problema al conectar con el servidor.", "bot");
            
        });

    chatInput.value = ""; // Limpiar el input
}

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}
const suggestedMessages = document.getElementById("suggestedMessages");

// Delegamos los clics a los botones de sugerencias
suggestedMessages.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion-button")) {
        const message = e.target.dataset.message; // Obtiene el mensaje predefinido
        chatInput.value = message; // Llena el input con el mensaje
        sendMessage(); // Envía el mensaje
    }
});