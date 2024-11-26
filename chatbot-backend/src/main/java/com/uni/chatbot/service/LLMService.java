package com.uni.chatbot.service;

import com.uni.chatbot.dto.ChatRequestDTO;
import com.uni.chatbot.dto.ChatResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LLMService {

    @Value("${llm.api.url}")
    private String apiUrl;

    @Value("${llm.api.workspace}")
    private String workspace;

    @Value("${llm.api.thread}")
    private String thread;

    @Value("${llm.api.token}")
    private String token;

    private final RestTemplate restTemplate;

    public LLMService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ChatResponseDTO sendMessageToLLM(ChatRequestDTO request) {
        String endpoint = String.format("%s/workspace/%s/thread/%s/chat", apiUrl, workspace, thread);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(token);

        HttpEntity<ChatRequestDTO> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<ChatResponseDTO> response = restTemplate.exchange(
                    endpoint, HttpMethod.POST, entity, ChatResponseDTO.class
            );
            return response.getBody();
        } catch (Exception e) {
            // Manejo de errores
            return new ChatResponseDTO("Error al comunicarse con el servicio LLM.");
        }
    }
}
