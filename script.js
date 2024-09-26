document.addEventListener('DOMContentLoaded', () => {
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxBody = document.querySelector('.chatbox-body');
    const sendButton = document.querySelector('.send-btn');
    const chatInput = document.querySelector('.chat-input');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle Chatbox
    chatboxToggle.addEventListener('click', () => {
        chatboxBody.style.display = chatboxBody.style.display === 'none' ? 'flex' : 'none';
    });

    // Send message and display response
    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            // Display user's message
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-message');
            userMessage.textContent = message;
            chatMessages.appendChild(userMessage);

            // Simulate bot response (you can implement AI logic here)
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.classList.add('message', 'bot-message');
                botMessage.textContent = 'Hello! How can I assist you today?';
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
            }, 500); // Simulated response delay

            chatInput.value = ''; // Clear input
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
        }
    });
});
