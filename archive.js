document.addEventListener('DOMContentLoaded', function() {
    const milestoneCards = document.querySelectorAll('.milestone-card');
    
    milestoneCards.forEach(card => {
        card.addEventListener('click', function() {
            const milestone = this.getAttribute('data-milestone');
            window.location.href = `milestone.html?milestone=${milestone}`;
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    // Add random floating animations
    const floatingElements = document.querySelectorAll('.floating-star, .floating-heart');
    floatingElements.forEach((element, index) => {
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`;
        }, 3000 + index * 500);
    });
});
