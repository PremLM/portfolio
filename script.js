// Scroll animation initialization
AOS.init({
    duration: 1200, // animation duration
    easing: 'ease-in-out', // easing function
    once: true // only once for each element
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
