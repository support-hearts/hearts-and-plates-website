class HeartsAndPlatesApp {
    constructor() {
        this.isLoaded = false;
        this.animations = [];
        this.init();
    }

    init() {
        this.handlePageLoad();
        this.initializeAnimations();
        this.handleImageLoading();
        this.initializeComponents();
        this.handleContactForm();
    }

    handlePageLoad() {
        // Show loading state initially
        document.body.classList.add('loading');
        
        window.addEventListener('load', () => {
            this.isLoaded = true;
            document.body.classList.remove('loading');
            this.triggerEntranceAnimations();
        });

        // Fallback for slow connections
        setTimeout(() => {
            if (!this.isLoaded) {
                this.isLoaded = true;
                document.body.classList.remove('loading');
                this.triggerEntranceAnimations();
            }
        }, 3000);
    }

    initializeAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    this.animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.animate-fadeInUp, .animate-fadeInLeft, .feature-card, .service-card, .menu-category'
        );
        
        animateElements.forEach(el => {
            this.animationObserver.observe(el);
        });
    }

    triggerEntranceAnimations() {
        // Trigger hero animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }

        // Stagger animation for hero elements
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    handleImageLoading() {
        // Handle image loading with fallbacks
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });

            img.addEventListener('error', () => {
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    img.style.display = 'none';
                    placeholder.style.display = 'flex';
                }
            });
        });

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    initializeComponents() {
        this.initializeModals();
        this.initializeTooltips();
        this.initializeCarousels();
        this.handlePreferences();
    }

    initializeModals() {
        // Modal functionality
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modalClosers = document.querySelectorAll('[data-modal-close]');
        const modalOverlays = document.querySelectorAll('.modal-overlay');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    this.openModal(modal);
                }
            });
        });

        modalClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                const modal = closer.closest('.modal-overlay');
                if (modal) {
                    this.closeModal(modal);
                }
            });
        });

        modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.closeModal(overlay);
                }
            });
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal-overlay.active');
                if (activeModal) {
                    this.closeModal(activeModal);
                }
            }
        });
    }

    openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }

    closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    initializeTooltips() {
        // Simple tooltip functionality
        const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
        
        tooltipTriggers.forEach(trigger => {
            let tooltip = null;
            
            trigger.addEventListener('mouseenter', () => {
                const text = trigger.getAttribute('data-tooltip');
                tooltip = this.createTooltip(text);
                document.body.appendChild(tooltip);
                this.positionTooltip(tooltip, trigger);
            });
            
            trigger.addEventListener('mouseleave', () => {
                if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                }
            });
        });
    }

    createTooltip(text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--surface);
            color: var(--text-primary);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            border: 1px solid var(--border);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            pointer-events: none;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.2s ease;
        `;
        
        // Animate in
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        }, 10);
        
        return tooltip;
    }

    positionTooltip(tooltip, trigger) {
        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let top = triggerRect.bottom + window.scrollY + 8;
        let left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2);
        
        // Adjust if tooltip goes off-screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
    }

    initializeCarousels() {
        // Simple carousel functionality for future use
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.carousel-slide');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            let currentSlide = 0;
            
            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            };
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
                    showSlide(currentSlide);
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
                    showSlide(currentSlide);
                });
            }
            
            // Auto-advance carousel
            setInterval(() => {
                if (slides.length > 1) {
                    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
                    showSlide(currentSlide);
                }
            }, 5000);
            
            // Initialize first slide
            if (slides.length > 0) {
                showSlide(0);
            }
        });
    }

    handlePreferences() {
        // Handle user preferences (theme, animations, etc.)
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (reducedMotion.matches) {
            document.body.classList.add('reduced-motion');
        }

        reducedMotion.addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('reduced-motion');
            } else {
                document.body.classList.remove('reduced-motion');
            }
        });
    }

    handleContactForm() {
        // Basic contact form handling (for future use)
        const contactForms = document.querySelectorAll('.contact-form');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitContactForm(form);
            });
        });
    }

    submitContactForm(form) {
        // Add loading state
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            // Reset after delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
                form.reset();
            }, 3000);
        }, 2000);
    }

    // Utility functions
    showAlert(message, type = 'info') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Insert at top of page
        const main = document.querySelector('main') || document.body;
        main.insertBefore(alert, main.firstChild);
        
        // Auto remove after delay
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.fetchStart;
                
                console.log(`Page load time: ${loadTime}ms`);
                
                // Track Core Web Vitals if available
                if ('web-vitals' in window) {
                    // This would require importing web-vitals library
                    // getCLS(console.log);
                    // getFID(console.log);
                    // getFCP(console.log);
                    // getLCP(console.log);
                    // getTTFB(console.log);
                }
            });
        }
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new HeartsAndPlatesApp();
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeartsAndPlatesApp;
}