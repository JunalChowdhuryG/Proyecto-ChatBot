package com.uni.chatbot.controller;

import com.uni.chatbot.dto.ChatRequestDTO;
import com.uni.chatbot.dto.ChatResponseDTO;
import com.uni.chatbot.service.LLMService;
import com.uni.chatbot.service.QueryProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final QueryProcessor queryProcessor;
    private final LLMService llmService;

    @Autowired
    public ChatController(QueryProcessor queryProcessor, LLMService llmService) {
        this.queryProcessor = queryProcessor;
        this.llmService = llmService;
    }

    @PostMapping
    public ChatResponseDTO sendMessage(@RequestParam String message) {
        ChatRequestDTO requestDTO = queryProcessor.processQuery(message);
        return llmService.sendToLLM(requestDTO);
    }
}