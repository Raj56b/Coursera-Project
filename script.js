/* ===========================
   Navigation Menu Toggle (Hamburger Menu)
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                smoothScroll(href);
            }
        });
    });

    // Initialize lightbox
    initializeLightbox();

    // Initialize project filter
    initializeProjectFilter();

    // Initialize form validation
    initializeFormValidation();

    console.log('Portfolio website initialized successfully');
});

/* ===========================
   Toggle Navigation Menu
   =========================== */

function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');

    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        console.log('Menu toggled');
    }
}

/* ===========================
   Smooth Scrolling
   =========================== */

function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        console.log('Smooth scrolling to:', targetId);
    } else {
        console.warn('Target element not found:', targetId);
    }
}

/* ===========================
   Project Filter Functionality
   =========================== */

function initializeProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            filterProjects(category);

            // Update active button styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log('Project filter initialized');
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');

        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            // Add fade-in animation
            setTimeout(() => {
                project.classList.add('fade-in');
            }, 0);
        } else {
            project.style.display = 'none';
            project.classList.remove('fade-in');
        }
    });

    console.log('Projects filtered by category:', category);
}

/* ===========================
   Lightbox Modal Functionality
   =========================== */

function initializeLightbox() {
    const projectImages = document.querySelectorAll('.project-image');
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    let allImages = [];

    // Collect all images
    projectImages.forEach((img, index) => {
        allImages.push(img.src);

        img.addEventListener('click', function() {
            openLightbox(index);
        });

        // Make images keyboard accessible
        img.setAttribute('role', 'button');
        img.setAttribute('tabindex', '0');
        img.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(index);
            }
        });
    });

    function openLightbox(index) {
        currentImageIndex = index;
        if (modal && modalImage) {
            modalImage.src = allImages[currentImageIndex];
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log('Lightbox opened at image:', currentImageIndex);
        }
    }

    function closeLightbox() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Lightbox closed');
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        if (modalImage) {
            modalImage.src = allImages[currentImageIndex];
        }
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        if (modalImage) {
            modalImage.src = allImages[currentImageIndex];
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }

    // Close lightbox when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });

    console.log('Lightbox initialized with', allImages.length, 'images');
}

/* ===========================
   Form Validation
   =========================== */

function initializeFormValidation() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation on input
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });

        console.log('Form validation initialized');
    }
}

function validateForm() {
    const form = document.querySelector('form');
    let isValid = true;

    // Get form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');

    // Clear previous errors
    clearAllErrors();

    // Validate name
    if (!validateField(nameField)) {
        isValid = false;
    }

    // Validate email
    if (!validateField(emailField)) {
        isValid = false;
    }

    // Validate subject
    if (!validateField(subjectField)) {
        isValid = false;
    }

    // Validate message
    if (!validateField(messageField)) {
        isValid = false;
    }

    if (isValid) {
        console.log('Form validation passed');
    } else {
        console.warn('Form validation failed');
    }

    return isValid;
}

function validateField(field) {
    if (!field) return false;

    const value = field.value.trim();
    const fieldName = field.name || field.id;
    let isValid = true;

    // Check if field is empty
    if (value === '') {
        showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`);
        return false;
    }

    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address.');
            return false;
        }
    }

    // Text field minimum length
    if (field.type === 'text' && value.length < 2) {
        showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least 2 characters.`);
        return false;
    }

    // Textarea minimum length
    if (field.tagName === 'TEXTAREA' && value.length < 10) {
        showFieldError(field, 'Message must be at least 10 characters.');
        return false;
    }

    showFieldSuccess(field);
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');

    let errorMessage = field.nextElementSibling;

    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }

    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function showFieldSuccess(field) {
    field.classList.add('success');
    field.classList.remove('error');

    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.style.display = 'none';
    }
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.style.display = 'none';
    }
}

function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('input.error, textarea.error');

    errorMessages.forEach(msg => {
        msg.style.display = 'none';
    });

    errorFields.forEach(field => {
        field.classList.remove('error');
    });

    console.log('All errors cleared');
}

/* ===========================
   Form Submission
   =========================== */

function submitForm() {
    const form = document.querySelector('form');

    if (form) {
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Log form submission
        console.log('Form submitted with data:', data);

        // Show success message
        showSuccessMessage();

        // Reset form
        form.reset();

        // Clear field validation styles
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('success', 'error');
        });
    }
}

function showSuccessMessage() {
    const form = document.querySelector('form');

    if (form) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = '✓ Thank you for your message! I will get back to you soon.';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.backgroundColor = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.borderRadius = '4px';
        successMessage.style.border = '1px solid #c3e6cb';

        form.parentNode.insertBefore(successMessage, form.nextSibling);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);

        console.log('Success message displayed');
    }
}

/* ===========================
   Debugging Utilities
   =========================== */

function debugPortfolio() {
    console.group('Portfolio Debug Information');
    console.log('Page Title:', document.title);
    console.log('Sections found:', document.querySelectorAll('section').length);
    console.log('Navigation links:', document.querySelectorAll('nav a').length);
    console.log('Project items:', document.querySelectorAll('.project-item').length);
    console.log('Form fields:', document.querySelectorAll('form input, form textarea').length);
    console.groupEnd();
}

// Run debug info on page load (can be removed in production)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', debugPortfolio);
}

/* ===========================
   Scroll to Top Button
   =========================== */

function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');

    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        console.log('Scroll to top button initialized');
    }
}

document.addEventListener('DOMContentLoaded', initializeScrollToTop);

/* ===========================
   Performance Monitoring
   =========================== */

function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        const connectTime = timing.responseEnd - timing.requestStart;

        console.log('Page Load Time:', pageLoadTime, 'ms');
        console.log('Server Response Time:', connectTime, 'ms');
    }
}

window.addEventListener('load', logPerformanceMetrics);

console.log('Script.js loaded and initialized');
