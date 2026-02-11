class NewsletterViewer {
    constructor() {
        this.images = [];
        this.currentPage = 0;
        this.leftPage = document.getElementById('leftPage');
        this.rightPage = document.getElementById('rightPage');
        this.leftArrow = document.getElementById('leftArrow');
        this.rightArrow = document.getElementById('rightArrow');
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.leftArrow.addEventListener('click', () => this.previousPage());
        this.rightArrow.addEventListener('click', () => this.nextPage());
        
        // Load images (placeholder for now - will be updated with actual images)
        this.loadImages();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousPage();
            if (e.key === 'ArrowRight') this.nextPage();
        });
    }
    
    loadImages() {
        // Load the 6 user-provided images
        this.images = [
            'image1.jpeg',
            'image2.jpeg',
            'image3.jpeg',
            'image4.jpeg',
            'image5.jpeg',
            'image6.jpeg'
        ];
        
        this.updatePages();
    }
    
    setImages(imageArray) {
        this.images = imageArray;
        this.currentPage = 0;
        this.updatePages();
    }
    
    updatePages() {
        const leftIndex = this.currentPage * 2;
        const rightIndex = this.currentPage * 2 + 1;
        
        // Update left page
        const leftImg = this.leftPage.querySelector('.page-image');
        if (leftIndex < this.images.length) {
            leftImg.src = this.images[leftIndex];
            leftImg.style.display = 'block';
        } else {
            leftImg.style.display = 'none';
        }
        
        // Update right page
        const rightImg = this.rightPage.querySelector('.page-image');
        if (rightIndex < this.images.length) {
            rightImg.src = this.images[rightIndex];
            rightImg.style.display = 'block';
        } else {
            rightImg.style.display = 'none';
        }
        
        // Update arrow visibility
        this.updateArrowVisibility();
        
        // Update archive button visibility
        this.updateArchiveButton();
    }
    
    updateArrowVisibility() {
        // Hide left arrow on first page
        if (this.currentPage === 0) {
            this.leftArrow.style.display = 'none';
        } else {
            this.leftArrow.style.display = 'flex';
        }
        
        // Hide right arrow on last page
        const maxPage = Math.floor((this.images.length - 1) / 2);
        if (this.currentPage >= maxPage) {
            this.rightArrow.style.display = 'none';
        } else {
            this.rightArrow.style.display = 'flex';
        }
    }
    
    updateArchiveButton() {
        const maxPage = Math.floor((this.images.length - 1) / 2);
        let archiveButton = document.getElementById('archiveButton');
        
        if (this.currentPage >= maxPage) {
            // Show archive button on last page
            if (!archiveButton) {
                archiveButton = document.createElement('div');
                archiveButton.id = 'archiveButton';
                archiveButton.className = 'archive-button';
                archiveButton.innerHTML = `
                    <div class="archive-content">
                        <span class="archive-icon">📚</span>
                        <span class="archive-text">Archive</span>
                    </div>
                `;
                archiveButton.addEventListener('click', () => {
                    window.location.href = 'archive.html';
                });
                document.body.appendChild(archiveButton);
            }
            setTimeout(() => {
                archiveButton.style.opacity = '1';
                archiveButton.style.transform = 'translateY(0)';
            }, 100);
        } else {
            // Hide archive button on other pages
            if (archiveButton) {
                archiveButton.style.opacity = '0';
                archiveButton.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    if (archiveButton.parentNode) {
                        archiveButton.parentNode.removeChild(archiveButton);
                    }
                }, 300);
            }
        }
    }
    
    nextPage() {
        const maxPage = Math.floor((this.images.length - 1) / 2);
        if (this.currentPage < maxPage) {
            // Add forward page-turning animation to right page
            this.rightPage.classList.add('turning-forward');
            
            setTimeout(() => {
                this.currentPage++;
                this.updatePages();
                
                // Remove animation class and reset transform
                setTimeout(() => {
                    this.rightPage.classList.remove('turning-forward');
                    this.rightPage.style.transform = '';
                }, 50);
            }, 400);
        }
    }
    
    previousPage() {
        if (this.currentPage > 0) {
            // Add backward page-turning animation to left page
            this.leftPage.classList.add('turning-backward');
            
            setTimeout(() => {
                this.currentPage--;
                this.updatePages();
                
                // Remove animation class and reset transform
                setTimeout(() => {
                    this.leftPage.classList.remove('turning-backward');
                    this.leftPage.style.transform = '';
                }, 50);
            }, 400);
        }
    }
}

// Initialize the newsletter viewer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.newsletterViewer = new NewsletterViewer();
});

// Function to update images (can be called from console or external script)
window.updateNewsletterImages = function(imageArray) {
    if (window.newsletterViewer) {
        window.newsletterViewer.setImages(imageArray);
    }
};
