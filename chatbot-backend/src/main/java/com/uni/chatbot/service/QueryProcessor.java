package com.uni.chatbot.service;

import com.uni.chatbot.dto.ChatRequestDTO;
import org.springframework.stereotype.Service;

@Service
public class QueryProcessor {

    public ChatRequestDTO processQuery(String message) {
        ChatRequestDTO requestDTO = new ChatRequestDTO();
        requestDTO.setMessage(message);
        requestDTO.setMode("chat");
        requestDTO.setUserId(1); // Id de usuario por defecto
        return requestDTO;
    }
}
