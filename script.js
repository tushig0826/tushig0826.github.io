// 1. SCROLL ANIMATION OBSERVER
// This function watches elements with the class 'scroll-animate'
// and adds the 'show' class when they enter the viewport.

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // When the element comes into view
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing the element once it has been shown
            observer.unobserve(entry.target); 
        } 
    });
}, {
    // Start animation when 10% of the element is visible
    threshold: 0.1 
});

const hiddenElements = document.querySelectorAll('.scroll-animate');
hiddenElements.forEach((el) => observer.observe(el));

// 2. SMOOTH SCROLLING (Optional but helpful)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
