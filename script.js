// Mesajları tutmak için bir dizi
let messages = [];

// Mesajları getir ve ekrana ekle
function displayMessages() {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.innerHTML = '';

  messages.forEach((message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
  });
}

// Mesaj gönderildiğinde
document.getElementById('message-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const usernameInput = document.getElementById('username-input');
  const messageInput = document.getElementById('message-input');

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (username !== '' && message !== '') {
    messages.push(`${username}: ${message}`);
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages();
    messageInput.value = '';
  }
});

// Sayfa yüklendiğinde mesajları getir ve ekrana ekle
window.addEventListener('load', () => {
  const savedMessages = localStorage.getItem('messages');

  if (savedMessages) {
    messages = JSON.parse(savedMessages);
    displayMessages();
  }
});
