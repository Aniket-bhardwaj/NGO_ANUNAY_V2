document.addEventListener('DOMContentLoaded', function() {
    const donationType = document.getElementById('donation-type');
    const amountInput = document.getElementById('amount');

    donationType.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex].text;
        const amountMatch = selectedOption.match(/₹(\d+)/);
        if (amountMatch) {
            amountInput.value = amountMatch[1];
            amountInput.readOnly = true;
        } else {
            amountInput.readOnly = false;
            amountInput.value = '';
        }
    });

    // GSAP Animations
    gsap.from(".donate-hero", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".donate-hero",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".donation-methods", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".donation-container",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".donation-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".donation-container",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
});


// donate button

// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // Show confirmation message
//     alert('Thank you for your contribution! Please send your details to satyasmission6@gmail.com as mentioned in the instructions.');
    
//     // Clear form fields
//     this.reset();
    
//     // Scroll to top
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });