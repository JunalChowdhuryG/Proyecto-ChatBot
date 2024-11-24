# Backend - Chatbot Universitario

Este repositorio contiene el backend del **Sistema de Chatbot Universitario** desarrollado en **Spring Boot**. Su propósito principal es procesar las solicitudes de los usuarios y conectarse con la API de **Anything LLM** para obtener respuestas en lenguaje natural.

---

## **Requisitos**
- Java 17+
- Spring Boot 3.x
- Maven 3.8+
- Servidor local para **Anything LLM**

---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JunalChowdhuryG/Proyecto-ChatBot.git
   cd chatbot
   ```

2. Configura las credenciales de la API en `src/main/resources/application.properties`.

3. Ejecuta la aplicación:
   ```bash
   mvn spring-boot:run
   ```

---

## **Estructura del Proyecto**

- **`controller/`**: Controladores REST para manejar las solicitudes de los clientes.
- **`service/`**: Lógica de negocio y conexión con la API de Anything LLM.
- **`dto/`**: Objetos de transferencia de datos para enviar y recibir información.
- **`config/`**: Configuraciones del proyecto, como el bean `RestTemplate`.

---

## **Endpoints**

- **POST `/api/chat`**
    - Parámetro: `message` (string)
    - Devuelve una respuesta generada por Anything LLM.

---

<!--
## **Contribuciones**

Si encuentras errores o tienes sugerencias, abre un **Issue** o envía un **Pull Request**. ¡Gracias por contribuir!

---

## **Licencia**
Este proyecto está bajo la Licencia MIT.
```
-->