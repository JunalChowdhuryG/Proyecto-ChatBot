package com.uni.chatbot.controller;

import com.uni.chatbot.dto.ChatRequestDTO;
import com.uni.chatbot.dto.ChatResponseDTO;
import com.uni.chatbot.service.LLMService;
import com.uni.chatbot.service.QueryProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ChatController {

    private final QueryProcessor queryProcessor;

    public ChatController(QueryProcessor queryProcessor) {
        this.queryProcessor = queryProcessor;
    }

    @PostMapping("/chat")
    public ResponseEntity<ChatResponseDTO> chat(@RequestBody ChatRequestDTO request) {
        if (request.getMessage() == null || request.getMessage().isEmpty()) {
            return ResponseEntity.badRequest().body(new ChatResponseDTO("El mensaje no puede estar vacío."));
        }
        ChatResponseDTO response = queryProcessor.processQuery(request);
        return ResponseEntity.ok(response);
    }
}
