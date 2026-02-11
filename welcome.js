document.addEventListener('DOMContentLoaded', function() {
    const enterNewsletter = document.getElementById('enterNewsletter');
    
    enterNewsletter.addEventListener('click', function() {
        // Add a nice transition effect
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '0';
        
        // Navigate to the main newsletter after transition
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });
    
    // Add some interactive effects
    enterNewsletter.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    enterNewsletter.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add a subtle floating animation to the graphic
    const graphic = document.querySelector('.newsletter-graphic');
    let floatY = 0;
    let floatDirection = 1;
    
    setInterval(() => {
        floatY += 0.5 * floatDirection;
        if (floatY > 10 || floatY < -10) {
            floatDirection *= -1;
        }
        graphic.style.transform = `translateY(${floatY}px)`;
    }, 50);
});
