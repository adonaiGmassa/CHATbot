document.getElementById("sendBtn").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        document.getElementById("userInput").value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, "bot");
        }, 1000);
    }
}

function addMessage(content, sender) {
    const messages = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    messageContent.textContent = content;
    messageElement.appendChild(messageContent);
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(input) {
    // Logic simple de réponse du bot
    const responses = {
        "bonjour": "Bonjour! Comment puis-je vous aider?",
        "comment ça va?": "Je vais bien, merci! Et vous?",
        "quelle est la capitale de la France?": "La capitale de la France est Paris."
    };

    return responses[input.toLowerCase()] || "Désolé, je ne comprends pas cette question.";
}
