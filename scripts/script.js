// DOM Elements
        const themeToggle = document.getElementById('theme-toggle');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const contactForm = document.getElementById('contactForm');
        const fadeElements = document.querySelectorAll('.fade-in');


        // Theme Toggle
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });


        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }


        // Mobile Menu Toggle
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });


        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });


        // Form Validation
    contactForm.addEventListener('submit', (e) => {
    let isValid = true;
    
    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    
    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject');
    if (!subject.value.trim()) {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    // Submit form if valid
    if (isValid) {
        // Remove e.preventDefault() from here and let the form submit naturally
        contactForm.submit(); // Trigger the form submission to Formspree
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        e.preventDefault(); // Prevent submission only if validation fails
    }
});