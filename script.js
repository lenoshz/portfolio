    // Add hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Matrix background effect
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const charSize = 14;
    const columns = canvas.width / charSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = charSize + 'px monospace';

        for(let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * charSize, drops[i] * charSize);

            if(drops[i] * charSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    // GSAP Animations
    window.addEventListener('DOMContentLoaded', () => {
        gsap.to(".hero-content h1", {
            duration: 1,
            y: 0,
            opacity: 1,
            delay: 0.5
        });

        gsap.to(".hero-content p", {
            duration: 1,
            y: 0,
            opacity: 1,
            delay: 0.8
        });

        gsap.to(".hero-content .btn", {
            duration: 1,
            y: 0,
            opacity: 1,
            delay: 1.1
        });
    });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".skill-card").forEach(card => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8
        });
    });

    gsap.utils.toArray(".project-card").forEach(card => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8
        });
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });