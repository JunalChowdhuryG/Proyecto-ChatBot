
# Chatbot Backend

Este es el backend del **Chatbot Universitario** desarrollado con **Spring Boot**. Proporciona un servicio REST que se comunica con un modelo de lenguaje (LLM) alojado en un servidor externo para procesar y responder a las consultas.

## Estructura del Proyecto

```plaintext
src
├───main
│   ├───java
│   │   └───com
│   │       └───uni
│   │           └───chatbot
│   │               │   ChatbotApplication.java
│   │               │
│   │               ├───config
│   │               │       AppConfig.java
│   │               │
│   │               ├───controller
│   │               │       ChatController.java
│   │               │
│   │               ├───dto
│   │               │       ChatRequestDTO.java
│   │               │       ChatResponseDTO.java
│   │               │
│   │               └───service
│   │                       LLMService.java
│   │                       QueryProcessor.java
│   └───resources
│       │   application.properties
```

### Archivos Clave
- **`ChatController.java`**: Maneja las solicitudes HTTP.
- **`LLMService.java`**: Gestiona las interacciones con el servidor LLM.
- **`application.properties`**: Configura el entorno de la aplicación.

## Configuración

El archivo `application.properties` contiene la configuración principal del backend:

```properties
spring.application.name=chatbot-backend
server.port=8080

llm.api.url=http://localhost:3001/api/v1
llm.api.workspace=chatuni
llm.api.thread=1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9
llm.api.token=YCRAXES-NN1M9RW-NK4985A-0JCEGKK
```

### Variables configurables
- **`llm.api.token`**: Token de autenticación para el servidor LLM.
- **`llm.api.thread`**: ID del thread utilizado en el LLM.
- **`llm.api.workspace`**: Workspace configurado en el servidor LLM.

## Dependencias

El proyecto utiliza las siguientes dependencias de **Spring Boot**:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Instalación y Ejecución

### Pre-requisitos
- Java 17 o superior.
- Maven instalado.
- Servidor LLM configurado y ejecutándose en `http://localhost:3001`.

### Instrucciones
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-repositorio/chatbot.git
   cd chatbot/chatbot-backend
   ```

2. Construye el proyecto con Maven:
   ```bash
   mvn clean install
   ```

3. Inicia la aplicación:
   ```bash
   mvn spring-boot:run
   ```

El backend estará disponible en `http://localhost:8080`.

## Endpoints

### Chat Endpoint

- **URL:** `POST /api/v1/chat`
- **Headers:**
    - `Authorization: Bearer <TOKEN>`
    - `Content-Type: application/json`
- **Body (ejemplo):**
  ```json
  {
      "message": "¿Quien eres?",
      "mode": "chat",
      "userId": 1
  }
  ```

- **Respuesta (ejemplo):**
  ```json
  {
      "textResponse": "Soy Chat-UNI, el asistente virtual universitario de la Universidad Nacional de Ingeniería. Estoy aquí para ayudarte con consultas relacionadas con reglamentos, calendario académico, trámites administrativos y otras áreas relacionadas con la vida académica en nuestra institución."
  }
  ```

## Pruebas

Se utilizó **Postman** para realizar pruebas del backend. Para probar:

1. Asegúrate de que el servidor LLM está activo con:
   ```bash
   anythingllm start --workspace chatuni --thread 1fe8b1f3-ab0a-4c52-b02e-b2aee67ce2d9
   ```

2. Configura una solicitud en Postman:
    - **URL:** `http://localhost:8080/api/v1/chat`
    - **Método:** `POST`
    - **Headers:**
        - `Authorization: Bearer YCRAXES-NN1M9RW-NK4985A-0JCEGKK`
        - `Content-Type: application/json`
    - **Body:**
      ```json
      {
          "message": "¿Quien eres?",
          "mode": "chat",
          "userId": 1
      }
      ```

3. Verifica que la respuesta coincida con el formato esperado.
