// Gallery Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Gallery
    const initGallery = () => {
        const galleryItems = document.querySelectorAll('.masonry-item');
        let currentImageIndex = 0;
        let imagesArray = [];

        // Lightbox functionality
        const showLightbox = (index) => {
            currentImageIndex = index;
            const item = imagesArray[index];
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.image-caption').textContent;

            const lightboxHTML = `
                <div class="lightbox active">
                    <button class="lightbox-nav prev">&lt;</button>
                    <button class="lightbox-nav next">&gt;</button>
                    <div class="lightbox-content">
                        <img src="${imgSrc}" alt="Enlarged view">
                        <div class="lightbox-caption">${caption}</div>
                        <button class="close-btn">&times;</button>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', lightboxHTML);
            addLightboxEvents();
        };

        // Add click events to gallery items
        galleryItems.forEach((item, index) => {
            imagesArray.push(item);
            item.addEventListener('click', () => showLightbox(index));
        });

        // Lightbox controls
        const addLightboxEvents = () => {
            document.querySelector('.close-btn').addEventListener('click', closeLightbox);
            document.querySelector('.prev').addEventListener('click', () => navigate(-1));
            document.querySelector('.next').addEventListener('click', () => navigate(1));
            document.addEventListener('keydown', handleKeyboard);
        };

        const closeLightbox = () => {
            const lightbox = document.querySelector('.lightbox');
            lightbox.classList.remove('active');
            setTimeout(() => lightbox.remove(), 300);
            document.removeEventListener('keydown', handleKeyboard);
        };

        const navigate = (direction) => {
            currentImageIndex = (currentImageIndex + direction + imagesArray.length) % imagesArray.length;
            const newItem = imagesArray[currentImageIndex];
            updateLightboxContent(newItem);
        };

        const updateLightboxContent = (item) => {
            const content = document.querySelector('.lightbox-content');
            content.querySelector('img').src = item.querySelector('img').src;
            content.querySelector('.lightbox-caption').textContent = 
                item.querySelector('.image-caption').textContent;
        };

        const handleKeyboard = (e) => {
            if(e.key === 'ArrowLeft') navigate(-1);
            if(e.key === 'ArrowRight') navigate(1);
            if(e.key === 'Escape') closeLightbox();
        };

        // GSAP Animations
        gsap.from(".masonry-item", {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".masonry-grid",
                start: "top center",
                toggleActions: "play none none reverse"
            }
        });
    };

    // Initialize only if gallery exists
    if(document.querySelector('.masonry-grid')) {
        initGallery();
    }
});

// Add this to your lightbox creation code
gsap.from(".lightbox-content", {
    duration: 0.5,
    scale: 0.9,
    opacity: 0,
    ease: "power3.out"
});






