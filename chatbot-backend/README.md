# **Chatbot Backend**

Backend para un chatbot desarrollado en **Spring Boot**, diseñado para integrarse con la API de **Anything LLM**. Este servicio gestiona las consultas de los usuarios y se comunica con una API externa para generar respuestas inteligentes.

---

## **Tabla de Contenidos**

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Configuración](#configuración)
6. [Ejecución](#ejecución)
7. [Pruebas](#pruebas)
8. [Estructura del Proyecto](#estructura-del-proyecto)
9. [Recursos de Instalación](#recursos-de-instalación)
10. [Contribuciones](#contribuciones)
11. [Licencia](#licencia)

---

## **Descripción del Proyecto**

Este proyecto consiste en el backend de un chatbot diseñado para integrarse con un frontend y una API externa como **Anything LLM**. Es ideal para responder consultas y realizar tareas automatizadas de manera eficiente.

El backend implementa:
- Gestión de solicitudes y respuestas mediante API REST.
- Integración con servicios externos para generar respuestas inteligentes.
- Validación y procesamiento de datos.

---

## **Tecnologías Utilizadas**

El proyecto utiliza las siguientes tecnologías y herramientas:

- **Java 17**: Lenguaje principal del backend.
- **Spring Boot**: Framework para construir aplicaciones RESTful.
- **Maven**: Gestión de dependencias y compilación.
- **Anything LLM**: API externa para procesamiento de lenguaje natural.
- **Postman**: Herramienta para pruebas de APIs.
- **Git**: Control de versiones.

### Otras dependencias clave:
- **Spring Web**: Para construir APIs REST.
- **Spring Validation**: Validación de datos de entrada.
- **Jackson**: Serialización/deserialización de objetos JSON.

---

## **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:

- **Java 17** o superior
- **Maven** 3.8 o superior
- **Postman** (opcional, para pruebas)
- **Git**

---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JunalChowdhuryG/Proyecto-ChatBot.git
   cd Proyecto-ChatBot/chatbot-backend
   ```

2. Compila el proyecto con Maven:
   ```bash
   ./mvnw clean install
   ```

---

## **Configuración**

1. Crea un archivo `application.properties` en la ruta `src/main/resources/` y agrega lo siguiente:

   ```properties
   # Configuración del servidor
   server.port=8080

   # Configuración de la API de Anything LLM
   llm.api.url=http://localhost:3001/api/v1
   llm.api.workspace=chatuni
   llm.api.thread=1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9
   llm.api.token=YCRAXES-NN1M9RW-NK4985A-0JCEGKK
   ```

2. (Opcional) Ajusta el puerto del servidor o la configuración de la API según sea necesario.

---

## **Ejecución**

1. Inicia el servidor:
   ```bash
   ./mvnw spring-boot:run
   ```

2. El servidor estará disponible en `http://localhost:8080`.

---

## **Pruebas**

### **Con Postman**

- **Endpoint**: `POST http://localhost:8080/api/v1/chat`
- **Headers**:
    - `Content-Type: application/json`
    - `Authorization: Bearer YCRAXES-NN1M9RW-NK4985A-0JCEGKK`
- **Body (JSON)**:
  ```json
  {
      "message": "¿Quien eres?",
      "mode": "chat",
      "userId": 1
  }
  ```

### **Respuesta Esperada**
```json
{
    "textResponse": "Soy el chatbot de la Universidad Nacional de Ingenieria, Peru. Mi objetivo es ayudarte a encontrar información y resolver dudas sobre temas académicos y administrativos relacionados con la universidad. Estoy aquí para proporcionarte respuestas claras y concisas a tus preguntas. ¿En qué puedo ayudarte hoy?"
}
```

---

## **Estructura del Proyecto**

El proyecto sigue una estructura estándar para aplicaciones Spring Boot:

```plaintext
chatbot
│   ChatbotApplication.java        # Clase principal, arranca la aplicación.
│
├───config
│       AppConfig.java             # Configuración general del proyecto.
│
├───controller
│       ChatController.java        # Define los endpoints de la API REST.
│
├───dto
│       ChatRequestDTO.java        # Modelo de datos para solicitudes del cliente.
│       ChatResponseDTO.java       # Modelo de datos para respuestas al cliente.
│
└───service
        LLMService.java            # Servicio para interactuar con la API externa.
        QueryProcessor.java        # Procesa las consultas y las adapta a la lógica del chatbot.
```

---


## **Recursos de Instalación**

Si no tienes experiencia instalando las tecnologías utilizadas, aquí hay algunos recursos útiles:

- **Java**:
    - [Descarga e Instalación de JDK 21 en Windows](https://www.youtube.com/watch?v=4WKo13f2Qpc)
- **Maven**:
    - [Instalación y configuración de Maven](https://www.youtube.com/watch?v=rl5-yyrmp-0)
- **Spring Boot**:
    - [Introducción y configuración de Spring Boot](https://youtu.be/8SGI_XS5OPw)
- **Postman**:
    - [Pruebas de APIs con POSTMAN](https://youtu.be/FQAQO90LoQU)
- **Anything LLM**:
    - [Anything LLM](https://www.youtube.com/watch?v=psdU-CqFgcA).

---

## **Contribuciones**

¡Gracias por tu interés en contribuir a este proyecto! Para colaborar:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y crea un pull request.

---

## **Licencia**

Este proyecto está licenciado bajo la licencia [MIT](https://opensource.org/licenses/MIT). Siéntete libre de usar, modificar y distribuir el código conforme a los términos de la licencia.
