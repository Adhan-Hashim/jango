// Main JavaScript for Kaleidokatha

class KaleidokathaApp {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.navHamburger = document.getElementById('nav-hamburger');
        this.currentTestimonial = 0;
        this.testimonialCards = document.querySelectorAll('.testimonial-card');
        this.testimonialDots = document.querySelectorAll('.dot');
        
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupNavigation();
        this.setupAnimations();
        this.setupTestimonials();
        this.setupParallax();
        this.setupSmoothScrolling();
        this.setupFormHandlers();
        this.setupIntersectionObserver();
    }

    setupScrollEffects() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Navbar background change
            if (scrollTop > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Navbar hide/show on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    setupNavigation() {
        // Mobile navigation toggle
        this.navHamburger.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.navHamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.navHamburger.classList.remove('active');
            });
        });

        // Active navigation highlighting
        this.updateActiveNavigation();
        window.addEventListener('scroll', () => this.updateActiveNavigation());
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    setupAnimations() {
        // Add animation classes to elements
        this.addAnimationClasses();
    }

    addAnimationClasses() {
        // Hero elements
        document.querySelector('.hero-title')?.classList.add('animate-fade-up');
        document.querySelector('.hero-subtitle')?.classList.add('animate-fade-up');
        document.querySelector('.cta-button')?.classList.add('animate-fade-scale');

        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            title.classList.add('animate-fade-up');
        });

        // Section subtitles
        document.querySelectorAll('.section-subtitle').forEach(subtitle => {
            subtitle.classList.add('animate-fade-up');
        });

        // Art cards
        document.querySelectorAll('.art-card').forEach((card, index) => {
            card.classList.add('animate-fade-up');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Feature items
        document.querySelectorAll('.feature-item').forEach((item, index) => {
            item.classList.add('animate-fade-up');
            item.style.animationDelay = `${index * 0.3}s`;
        });

        // Add stagger animation to grids
        document.querySelector('.arts-grid')?.classList.add('animate-stagger');
        document.querySelector('.features-grid')?.classList.add('animate-stagger');
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Special handling for counters
                    if (entry.target.classList.contains('counter')) {
                        this.animateCounter(entry.target);
                    }
                    
                    // Special handling for text reveals
                    if (entry.target.classList.contains('text-reveal')) {
                        this.animateTextReveal(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-fade-scale, .animate-slide-down, .animate-stagger, .counter, .text-reveal').forEach(el => {
            observer.observe(el);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || 100;
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    animateTextReveal(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.transitionDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });

        // Trigger animation
        setTimeout(() => {
            element.classList.add('animated');
        }, 100);
    }

    setupTestimonials() {
        // Auto-rotate testimonials
        this.startTestimonialRotation();

        // Manual navigation
        this.testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToTestimonial(index);
            });
        });
    }

    startTestimonialRotation() {
        setInterval(() => {
            this.nextTestimonial();
        }, 5000); // Change every 5 seconds
    }

    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonialCards.length;
        this.updateTestimonialDisplay();
    }

    goToTestimonial(index) {
        this.currentTestimonial = index;
        this.updateTestimonialDisplay();
    }

    updateTestimonialDisplay() {
        // Hide all cards
        this.testimonialCards.forEach(card => {
            card.classList.remove('active');
        });

        // Show current card
        this.testimonialCards[this.currentTestimonial]?.classList.add('active');

        // Update dots
        this.testimonialDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentTestimonial);
        });
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-element');
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerOffset = 70; // Height of fixed navbar
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupFormHandlers() {
        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        }

        // Contact forms (for future pages)
        document.querySelectorAll('form').forEach(form => {
            if (!form.classList.contains('newsletter-form')) {
                form.addEventListener('submit', (e) => this.handleFormSubmit(e));
            }
        });
    }

    handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        if (this.validateEmail(email)) {
            this.showNotification('Thank you for subscribing!', 'success');
            e.target.reset();
        } else {
            this.showNotification('Please enter a valid email address.', 'error');
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        // Handle other form submissions
        this.showNotification('Form submitted successfully!', 'success');
        e.target.reset();
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Utility method for scrolling to section
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 70;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Performance optimization: Lazy load images
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Accessibility improvements
    setupAccessibility() {
        // Keyboard navigation for interactive elements
        document.querySelectorAll('.art-card, .feature-item').forEach(element => {
            element.setAttribute('tabindex', '0');
            element.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    element.click();
                }
            });
        });

        // Focus management for mobile menu
        this.navHamburger.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.navHamburger.click();
            }
        });
    }
}

// Global utility functions
function scrollToSection(sectionId) {
    if (window.kaleidokathaApp) {
        window.kaleidokathaApp.scrollToSection(sectionId);
    }
}

function scrollToRegions() {
    scrollToSection('regions');
}

function currentSlide(index) {
    if (window.kaleidokathaApp) {
        window.kaleidokathaApp.goToTestimonial(index - 1);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.kaleidokathaApp = new KaleidokathaApp();
    
    // Setup lazy loading
    window.kaleidokathaApp.setupLazyLoading();
    
    // Setup accessibility
    window.kaleidokathaApp.setupAccessibility();
    
    console.log('🎭 Kaleidokatha initialized successfully!');
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
        
        // Report to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'load',
                value: loadTime
            });
        }
    });
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('🔧 Service Worker registered successfully');
            })
            .catch(error => {
                console.log('Service Worker registration failed');
            });
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KaleidokathaApp;
}