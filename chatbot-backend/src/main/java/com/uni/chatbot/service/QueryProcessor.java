package com.uni.chatbot.service;

import com.uni.chatbot.dto.ChatRequestDTO;
import com.uni.chatbot.dto.ChatResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class QueryProcessor {
    private final LLMService llmService;

    public QueryProcessor(LLMService llmService) {
        this.llmService = llmService;
    }

    public ChatResponseDTO processQuery(ChatRequestDTO request) {
        // Lógica adicional de procesamiento si es necesario
        return llmService.sendMessageToLLM(request);
    }
}
