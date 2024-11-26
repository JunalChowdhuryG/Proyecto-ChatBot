package com.uni.chatbot.dto;

public class ChatResponseDTO {
    private String textResponse;

    public ChatResponseDTO() {}

    public ChatResponseDTO(String textResponse) {
        this.textResponse = textResponse;
    }

    // Getters y Setters
    public String getTextResponse() {
        return textResponse;
    }

    public void setTextResponse(String textResponse) {
        this.textResponse = textResponse;
    }
}
