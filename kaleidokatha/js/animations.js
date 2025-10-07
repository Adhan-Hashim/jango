// Advanced Animations for Kaleidokatha

class AnimationEngine {
    constructor() {
        this.animationQueue = [];
        this.isAnimating = false;
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupLoadingAnimations();
        this.setupCustomAnimations();
    }

    setupScrollAnimations() {
        // Create intersection observer for scroll animations
        const observerOptions = {
            threshold: [0.1, 0.5, 1.0],
            rootMargin: '0px 0px -100px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerScrollAnimation(entry.target, entry.intersectionRatio);
                }
            });
        }, observerOptions);

        // Observe elements with scroll animation classes
        const animatedElements = document.querySelectorAll(`
            .animate-fade-up,
            .animate-fade-left,
            .animate-fade-right,
            .animate-fade-scale,
            .animate-slide-down,
            .animate-stagger,
            .bounce-in,
            .slide-reveal,
            .image-reveal,
            .text-reveal
        `);

        animatedElements.forEach(el => {
            scrollObserver.observe(el);
        });

        this.observers.set('scroll', scrollObserver);
    }

    triggerScrollAnimation(element, ratio) {
        if (element.classList.contains('animated')) return;

        // Add animated class with delay based on element type
        const delay = this.getAnimationDelay(element);
        
        setTimeout(() => {
            element.classList.add('animated');
            this.handleSpecialAnimations(element);
        }, delay);
    }

    getAnimationDelay(element) {
        // Custom delay based on element position and type
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top + window.pageYOffset;
        
        // Stagger elements that are close together
        if (element.classList.contains('animate-stagger')) {
            return 100;
        }

        return Math.min(distanceFromTop / 10, 500); // Max 500ms delay
    }

    handleSpecialAnimations(element) {
        // Counter animations
        if (element.classList.contains('counter')) {
            this.animateCounter(element);
        }

        // Text reveal animations
        if (element.classList.contains('text-reveal')) {
            this.animateTextReveal(element);
        }

        // Image reveal animations
        if (element.classList.contains('image-reveal')) {
            this.animateImageReveal(element);
        }

        // Slide reveal animations
        if (element.classList.contains('slide-reveal')) {
            this.animateSlideReveal(element);
        }
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || 0;
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const prefix = element.getAttribute('data-prefix') || '';
        const suffix = element.getAttribute('data-suffix') || '';
        
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = prefix + Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = prefix + target + suffix;
            }
        };

        updateCounter();
    }

    animateTextReveal(element) {
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = '';

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.overflow = 'hidden';
            
            word.split('').forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.style.display = 'inline-block';
                charSpan.style.transform = 'translateY(100%)';
                charSpan.style.transition = `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${(wordIndex * 0.1) + (charIndex * 0.02)}s`;
                wordSpan.appendChild(charSpan);
            });

            const space = document.createElement('span');
            space.innerHTML = '&nbsp;';
            wordSpan.appendChild(space);
            element.appendChild(wordSpan);
        });

        // Trigger animation
        setTimeout(() => {
            element.querySelectorAll('span span').forEach(span => {
                span.style.transform = 'translateY(0)';
            });
        }, 100);
    }

    animateImageReveal(element) {
        const img = element.querySelector('img');
        if (!img) return;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-green);
            transform: translateX(-100%);
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(overlay);

        setTimeout(() => {
            overlay.style.transform = 'translateX(100%)';
            img.style.transform = 'scale(1)';
        }, 200);

        setTimeout(() => {
            element.removeChild(overlay);
        }, 1000);
    }

    animateSlideReveal(element) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, var(--golden), transparent);
            transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(overlay);

        setTimeout(() => {
            overlay.style.left = '100%';
        }, 100);

        setTimeout(() => {
            element.removeChild(overlay);
        }, 900);
    }

    setupHoverEffects() {
        // Enhanced hover effects for interactive elements
        this.setupCardHovers();
        this.setupButtonHovers();
        this.setupImageHovers();
    }

    setupCardHovers() {
        const cards = document.querySelectorAll('.art-card, .feature-item, .testimonial-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.animateCardHover(e.target, true);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.animateCardHover(e.target, false);
            });
        });
    }

    animateCardHover(card, isHovering) {
        const tiltAmount = isHovering ? 5 : 0;
        const scale = isHovering ? 1.05 : 1;
        const shadow = isHovering ? 'var(--shadow-heavy)' : 'var(--shadow-light)';
        
        card.style.transform = `perspective(1000px) rotateX(${tiltAmount}deg) scale(${scale})`;
        card.style.boxShadow = shadow;
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    setupButtonHovers() {
        const buttons = document.querySelectorAll('.cta-button, .explore-btn, button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.animateButtonHover(e.target, true);
            });
            
            button.addEventListener('mouseleave', (e) => {
                this.animateButtonHover(e.target, false);
            });
        });
    }

    animateButtonHover(button, isHovering) {
        const scale = isHovering ? 1.05 : 1;
        const brightness = isHovering ? 1.1 : 1;
        
        button.style.transform = `scale(${scale})`;
        button.style.filter = `brightness(${brightness})`;
        button.style.transition = 'all 0.2s ease';
    }

    setupImageHovers() {
        const images = document.querySelectorAll('.art-image, img');
        
        images.forEach(img => {
            img.addEventListener('mouseenter', (e) => {
                this.animateImageHover(e.target, true);
            });
            
            img.addEventListener('mouseleave', (e) => {
                this.animateImageHover(e.target, false);
            });
        });
    }

    animateImageHover(img, isHovering) {
        const scale = isHovering ? 1.1 : 1;
        const brightness = isHovering ? 1.2 : 1;
        
        img.style.transform = `scale(${scale})`;
        img.style.filter = `brightness(${brightness})`;
        img.style.transition = 'all 0.3s ease';
    }

    setupLoadingAnimations() {
        // Page load animations
        this.animatePageLoad();
        
        // Content loading animations
        this.setupContentLoading();
    }

    animatePageLoad() {
        // Hide body initially
        document.body.style.opacity = '0';
        
        window.addEventListener('load', () => {
            // Fade in body
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
            
            // Animate hero elements
            this.animateHeroElements();
        });
    }

    animateHeroElements() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const ctaButton = document.querySelector('.cta-button');
        
        if (heroTitle) {
            setTimeout(() => heroTitle.classList.add('animated'), 300);
        }
        
        if (heroSubtitle) {
            setTimeout(() => heroSubtitle.classList.add('animated'), 600);
        }
        
        if (ctaButton) {
            setTimeout(() => ctaButton.classList.add('animated'), 900);
        }
    }

    setupContentLoading() {
        // Simulate content loading with skeleton screens
        const contentSections = document.querySelectorAll('.art-card, .feature-item');
        
        contentSections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }

    setupCustomAnimations() {
        // Custom Kerala-themed animations
        this.setupMapAnimations();
        this.setupDistrictAnimations();
        this.setupArtFormAnimations();
    }

    setupMapAnimations() {
        // Animate map districts on load
        setTimeout(() => {
            const districts = document.querySelectorAll('.district');
            districts.forEach((district, index) => {
                setTimeout(() => {
                    district.style.transition = 'all 0.5s ease';
                    district.style.opacity = '1';
                    district.style.transform = 'scale(1)';
                }, index * 50);
            });
        }, 1000);
    }

    setupDistrictAnimations() {
        // Pulse animation for active districts
        const pulseDistrict = (district) => {
            district.style.animation = 'pulse 2s ease-in-out infinite';
        };
        
        // Apply to active districts
        document.addEventListener('districtSelected', (e) => {
            const activeDistrict = document.querySelector('.district.active');
            if (activeDistrict) {
                pulseDistrict(activeDistrict);
            }
        });
    }

    setupArtFormAnimations() {
        // Stagger animation for art tags
        const artTags = document.querySelectorAll('.art-tag');
        artTags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                tag.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Public methods for external control
    triggerAnimation(element, animationType) {
        switch (animationType) {
            case 'fadeUp':
                element.classList.add('animate-fade-up', 'animated');
                break;
            case 'fadeScale':
                element.classList.add('animate-fade-scale', 'animated');
                break;
            case 'bounceIn':
                element.classList.add('bounce-in');
                break;
            default:
                element.classList.add('animated');
        }
    }

    pauseAnimation(element) {
        element.style.animationPlayState = 'paused';
    }

    resumeAnimation(element) {
        element.style.animationPlayState = 'running';
    }

    // Performance monitoring
    measureAnimationPerformance() {
        if ('performance' in window) {
            const animationStart = performance.now();
            
            return {
                end: () => {
                    const animationEnd = performance.now();
                    const duration = animationEnd - animationStart;
                    console.log(`🎬 Animation completed in ${duration.toFixed(2)}ms`);
                    return duration;
                }
            };
        }
        
        return { end: () => {} };
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        this.animationQueue = [];
    }
}

// Initialize animation engine
document.addEventListener('DOMContentLoaded', () => {
    window.animationEngine = new AnimationEngine();
    console.log('🎭 Animation engine initialized');
});

// Reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-slow', 'none');
    
    // Disable animations for accessibility
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationEngine;
}