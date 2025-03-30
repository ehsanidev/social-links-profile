document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bubbleCanvas');
    const bubbleCount = 15; // Number of bubbles to create
  
    // Create bubble elements
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      container.appendChild(bubble);
    }
  });