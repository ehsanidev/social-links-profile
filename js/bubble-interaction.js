document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bubble-container');
    const bubbles = document.querySelectorAll('.bubble');
    const maxDistance = 150; // Maximum mouse interaction distance
  
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      bubbles.forEach(bubble => {
        // Get bubble center position
        const rect = bubble.getBoundingClientRect();
        const bubbleX = rect.left + rect.width / 2;
        const bubbleY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to bubble
        const distance = Math.sqrt(
          Math.pow(mouseX - bubbleX, 2) + 
          Math.pow(mouseY - bubbleY, 2)
        );
        
        // If mouse is close enough, push the bubble
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(mouseY - bubbleY, mouseX - bubbleX);
          const pushDistance = force * 50;
          
          // Apply push transformation
          bubble.style.transform = `
            translate(
              ${pushDistance * Math.cos(angle)}px,
              ${pushDistance * Math.sin(angle)}px
            )
          `;
          bubble.style.transition = 'transform 0.1s ease-out';
        } else {
          // Return to original position
          bubble.style.transform = 'translate(0, 0)';
          bubble.style.transition = 'transform 0.5s ease-out';
        }
      });
    });
  });