# Chatbot Frontend Demo

Este proyecto es un **frontend demo** para el Chatbot Universitario, diseñado para interactuar directamente con la API de **AnythingLLM**, eliminando la necesidad de un backend intermedio. Es más eficiente y liviano para propósitos demostrativos.

## Estructura del Proyecto

```plaintext
chatbot-frontend-demo  
│   .gitignore
│   README.md
│
├───public
│   │   index.html
│   │
│   └───assets
│           chatbot.png
│           chatbot1.jpeg
│           fondo.png
│           fondo1.png
│
└───src
        script.js
        styles.css
```

### Archivos Clave
- **`index.html`**: Página principal donde se carga el chatbot.
- **`script.js`**: Contiene la lógica para la interacción con la API de AnythingLLM.
- **`styles.css`**: Define los estilos para la interfaz del chatbot.

## Requisitos Previos

1. **Servidor AnythingLLM** en funcionamiento.
2. **Visual Studio Code** con la extensión **Live Server** para ejecutar el frontend localmente.

## Configuración

### API de AnythingLLM
En el archivo `script.js`, asegúrate de configurar las variables adecuadamente:

```javascript
const Workspace = "chatuni"; // Configuración del workspace
const thread = "1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9"; // Thread del workspace
const urlApi = "http://localhost:3001/api/v1/workspace/" + Workspace + "/thread/" + thread + "/chat";
```

Además, el token de autorización debe ser actualizado si cambia:
```javascript
Authorization: "Bearer YCRAXES-NN1M9RW-NK4985A-0JCEGKK"
```

## Instalación y Ejecución

### Pasos para Ejecutar
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-repositorio/chatbot.git
   cd chatbot/chatbot-frontend-demo
   ```

2. **Abre el proyecto en Visual Studio Code**:
   - Usa el comando:
     ```bash
     code .
     ```

3. **Instala la extensión Live Server**:
   - Busca "Live Server" en el marketplace de extensiones de Visual Studio Code.
   - Instálala y actívala.
   ![Buscar e instalar la extensión Live Server en Visual Studio Code.](assets/Extension%20Live%20Server.png)
   
4. **Inicia el servidor local**:
   - Haz clic derecho sobre el archivo `index.html` y selecciona `Open with Live Server`.
   - La aplicación se abrirá en tu navegador en `http://127.0.0.1:5500/public/`.

   ![Iniciar Live Server en Visual Studio Code para el archivo index.html](assets/start-live-server.png)

## Uso del Chatbot

1. **Abre el navegador**:
   - Accede a `http://127.0.0.1:5500/public/`.

2. **Envía un mensaje**:
   - Escribe un mensaje en el cuadro de texto y presiona **Enviar**.

   ![Interfaz del chatbot funcionando en el navegador](assets/Interaccion%20Usuario%20Frontend.png)

3. **Obtén una respuesta**:
   - El chatbot interactuará directamente con la API de AnythingLLM y devolverá una respuesta.

## Scripts Clave

El archivo `script.js` contiene la lógica para manejar las interacciones con la API. Aquí está el fragmento clave:

```javascript
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Agregar mensaje del usuario
    addMessage(message, "user");

    const Workspace = "chatuni";
    const thread = "1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9";

    const urlApi = "http://localhost:3001/api/v1/workspace/" + Workspace + "/thread/" + thread + "/chat";

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
```

Este código:
1. Toma el mensaje del usuario.
2. Llama a la API de AnythingLLM para procesar la consulta.
3. Muestra la respuesta en la interfaz.

