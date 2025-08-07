// ⌨️ Typewriter Effect for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter');
    
    if (!typewriter) return;
    
    const texts = [
        'Full Stack Developer',
        'Freelance Specialist',
        'CS Student',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typewriter after loading screen
    setTimeout(() => {
        type();
    }, 4000);
});