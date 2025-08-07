// 🔘 Enhanced Custom Cursor with Hover Effects
document.addEventListener("DOMContentLoaded", () => {
    const dot = document.getElementById("cursor-dot");
    const outline = document.getElementById("cursor-outline");
  
    if (!dot || !outline) return;
  
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
  
    const delay = 8;
  
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.top = mouseY + "px";
      dot.style.left = mouseX + "px";
    });
  
    function animate() {
      outlineX += (mouseX - outlineX) / delay;
      outlineY += (mouseY - outlineY) / delay;
      outline.style.top = outlineY + "px";
      outline.style.left = outlineX + "px";
      requestAnimationFrame(animate);
    }
    animate();
    
    // Enhanced hover effects
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .skill-item, .stat-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.borderColor = '#ff00ff';
        });
        
        element.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.borderColor = '#00ffff';
        });
    });
});
  