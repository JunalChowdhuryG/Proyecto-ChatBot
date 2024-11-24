package com.uni.chatbot.service;

import com.uni.chatbot.dto.ChatRequestDTO;
import com.uni.chatbot.dto.ChatResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LLMService {

    private final RestTemplate restTemplate;

    @Value("${llm.api.url}")
    private String apiUrl;

    @Value("${llm.api.token}")
    private String apiToken;

    public LLMService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ChatResponseDTO sendToLLM(ChatRequestDTO requestDTO) {
        return restTemplate.postForObject(apiUrl, requestDTO, ChatResponseDTO.class);
    }
}
