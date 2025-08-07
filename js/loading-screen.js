// 🚀 Loading Screen with Advanced Animations
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3500); // 3.5 seconds loading time
});