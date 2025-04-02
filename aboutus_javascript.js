// Animate text reveal
gsap.to(".cinematic-content .line", {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page1-about",
        start: "top center"
    }
});

// Button hover effect
document.querySelectorAll('.gallery-cta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        btn.style.setProperty('--x', x);
        btn.style.setProperty('--y', y);
    });
});


