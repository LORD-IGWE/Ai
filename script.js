
// CRAZY DEV


document.getElementById('send-btn').addEventListener('click', sendMessage);

// Fonction pour envoyer un message
function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput) return;

  // Afficher le message de l'utilisateur
  addMessage(userInput, 'user-message');

  // Vider le champ de texte
  document.getElementById('user-input').value = '';

  // Afficher l'animation de "typing" de l'IA
  addTypingIndicator();

  // Appel API pour obtenir la réponse de l'IA
  setTimeout(() => {
    fetchResponse(userInput);
  }, 2000); // Temps pour simuler l'IA en train de taper
}

// Fonction pour ajouter un message dans le chat
function addMessage(message, className) {
  const chatBox = document.getElementById('chat-box');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', className);
  newMessage.textContent = message;
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight; // Faire défiler le chat vers le bas
}

// Fonction pour afficher l'animation de "typing"
function addTypingIndicator() {
  const chatBox = document.getElementById('chat-box');
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('typing-indicator');
typingIndicator.textContent = '...';
  chatBox.appendChild(typingIndicator);
}

// Fonction pour enlever l'animation de "typing"
function removeTypingIndicator() {
  const typingIndicator = document.querySelector('.typing-indicator');
  if (typingIndicator) typingIndicator.remove();
}

// Fonction pour appeler l'API GPT (remplacer avec ton API)
async function fetchResponse(userInput) {
  try {
    const response = await fetch(`https://api.dreaded.site/api/chatgpt?text=${encodedText}`);
    const data = await response.json();

    // Réponse de l'IA
    const botResponse = data.response || "Désolé, je n'ai pas pu répondre à ça.";
    
    // Enlever l'animation de typing et afficher la réponse
    removeTypingIndicator();
    addMessage(botResponse, 'bot-message');
  } catch (error) {
    console.error("Erreur de l'API GPT", error);
    removeTypingIndicator();
    addMessage("Désolé, une erreur est survenue. Essayez à nouveau.", 'bot-message');
  }
}

// Menu Burger
document.getElementById('menu-burger').addEventListener('click', () => {
  alert('Menu burger activé! Ajoute des options ici.');
});
