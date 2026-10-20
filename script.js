// Animation
const observer = new IntersectionObserver((entries) => {    
    for (const entry of entries) {        
        if (!entry.isIntersecting) continue;

        entry.target.setAttribute('data-animation', 'visible');
        observer.unobserve(entry.target);
    }
}, { threshold: 0.03 });

for (const element of document.body.querySelectorAll('[data-animation]'))
    observer.observe(element);
