// Hearts and Plates / Hearts & Plates - Main JavaScript
// Clean, professional, and functional

class RestaurantSite {
    constructor() {
        this.config = {
            whatsappNumber: '917305207180',
            phoneNumber: '+914422221234',
            address: 'No. 12, Marina Beach Road, Mylapore, Chennai - 600004'
        };
        this.init();
    }

    init() {
        this.handlePageLoad();
        this.initNavigation();
        this.initScrollEffects();
        this.initImageLazyLoading();
        this.initAnimations();
        this.initWhatsAppLinks();
        this.initPhoneLinks();
        this.initMapLinks();
        this.initFormHandling();
        this.initScrollToTop();
        this.loadSiteConfig();
    }

    loadSiteConfig() {
        // Load config from site-config.js if available
        if (window.SITE_CONFIG) {
            this.config.whatsappNumber = window.SITE_CONFIG.restaurant?.contact?.whatsapp || this.config.whatsappNumber;
            this.config.phoneNumber = window.SITE_CONFIG.restaurant?.contact?.phone || this.config.phoneNumber;
            this.config.address = window.SITE_CONFIG.restaurant?.address?.full || this.config.address;
        }
    }

    handlePageLoad() {
        // Add loaded class to body when page is ready
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.triggerEntranceAnimations();
        });

        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.refreshActiveStates();
            }
        });

        // Set active navigation on load
        this.refreshActiveStates();
    }

    triggerEntranceAnimations() {
        // Trigger animations for hero section
        const heroElements = document.querySelectorAll('.hero-content > *, .hero-buttons > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    initNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (!hamburger || !navMenu) return;

        // Toggle mobile menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMobileMenu();
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            }, 150);
        });
    }

    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Accessibility
        const isOpen = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        navMenu.setAttribute('aria-hidden', !isOpen);
    }

    closeMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        if (navMenu) {
            navMenu.classList.remove('active');
            navMenu.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = '';
    }

    initScrollEffects() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        let lastScroll = 0;
        let ticking = false;

        const updateNavbar = () => {
            const currentScroll = window.pageYOffset;

            // Add scrolled class for styling
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Optional: Hide navbar on scroll down, show on scroll up
            // Uncomment if you want this behavior
            /*
            if (currentScroll > lastScroll && currentScroll > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            */

            lastScroll = currentScroll;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });

        // Smooth scroll for anchor links
        this.initSmoothScroll();
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#' || href.length <= 1) return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                
                const navbar = document.getElementById('navbar');
                const offsetTop = target.offsetTop - (navbar ? navbar.offsetHeight : 0);
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                this.closeMobileMenu();
            });
        });
    }

    initImageLazyLoading() {
        // Native lazy loading is preferred, but add intersection observer for better control
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Load data-src images
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            // Observe all images with data-src or loading attribute
            const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
            images.forEach(img => imageObserver.observe(img));
        }

        // Fallback for image errors - show placeholder
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', () => {
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    img.style.display = 'none';
                    placeholder.style.display = 'flex';
                }
            });

            // Show image when loaded
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    }

    initAnimations() {
        // Intersection Observer for scroll animations
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated', 'visible');
                        
                        // Add staggered delay for child elements
                        const children = entry.target.querySelectorAll('.stagger-item');
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animated');
                            }, index * 100);
                        });
                        
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements with animation classes
            const animateElements = document.querySelectorAll(
                '[data-animate], .fade-in, .slide-up, .feature-card, .service-card, .contact-item'
            );
            
            animateElements.forEach(el => {
                animationObserver.observe(el);
            });
        }
    }

    initWhatsAppLinks() {
        const whatsappNumber = this.config.whatsappNumber;
        
        // Handle data-whatsapp attributes
        document.querySelectorAll('[data-whatsapp]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const message = link.dataset.whatsapp || "Hello! I'd like to inquire about your services.";
                this.openWhatsApp(message);
            });
        });

        // Generic WhatsApp buttons
        document.querySelectorAll('.whatsapp-btn, #whatsapp-inquiry, #whatsapp-order, #whatsapp-corporate').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const message = btn.dataset.message || this.getWhatsAppMessage(btn);
                this.openWhatsApp(message);
            });
        });
    }

    getWhatsAppMessage(button) {
        const page = window.location.pathname;
        
        if (page.includes('birthday')) {
            return "Hello! I'm interested in booking your birthday hall. Could you please provide more information?";
        } else if (page.includes('corporate')) {
            return "Hello! I'd like to inquire about hosting a corporate event at your venue.";
        } else if (page.includes('catering')) {
            return "Hello! I'm interested in your catering services. Could you share more details?";
        }
        
        return "Hello! I'd like to know more about Hearts & Plates.";
    }

    openWhatsApp(message) {
        const whatsappUrl = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    initPhoneLinks() {
        const phoneNumber = this.config.phoneNumber;
        
        document.querySelectorAll('[data-phone], .phone-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `tel:${phoneNumber}`;
            });
        });

        // Update phone number displays
        document.querySelectorAll('.phone-number').forEach(el => {
            if (!el.textContent.trim()) {
                el.textContent = phoneNumber;
            }
        });
    }

    initMapLinks() {
        const address = this.config.address;
        
        document.querySelectorAll('[data-directions], .directions-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                window.open(mapsUrl, '_blank', 'noopener,noreferrer');
            });
        });
    }

    initFormHandling() {
        // Handle form submissions
        document.querySelectorAll('form[data-form-type]').forEach(form => {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.classList.add('loading');
                    
                    // Re-enable after a delay (form will redirect anyway)
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('loading');
                    }, 3000);
                }
            });
        });

        // Auto-resize textareas
        document.querySelectorAll('textarea').forEach(textarea => {
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        });
    }

    initScrollToTop() {
        // Create scroll to top button if it doesn't exist
        let scrollBtn = document.getElementById('scrollToTop');
        
        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTop';
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            document.body.appendChild(scrollBtn);
        }

        // Show/hide on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }, { passive: true });

        // Click handler
        scrollBtn.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    refreshActiveStates() {
        // Update active navigation states
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href, window.location.origin).pathname;
            link.classList.remove('active');
            
            // Check for exact match or home page
            if (currentPage === linkPath || 
                (currentPage === '/' && linkPath.includes('index.html')) ||
                (currentPage.includes('index.html') && linkPath === '/')) {
                link.classList.add('active');
            }
            
            // Check for section matches (e.g., birthday.html matches pages/birthday.html)
            const currentFile = currentPage.split('/').pop();
            const linkFile = linkPath.split('/').pop();
            if (currentFile === linkFile && currentFile !== '') {
                link.classList.add('active');
            }
        });
    }

    // Utility Methods
    showNotification(message, type = 'info', duration = 5000) {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles if not already present
        if (!document.getElementById('notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    max-width: 400px;
                    opacity: 0;
                    transform: translateX(400px);
                    transition: all 0.3s ease;
                }
                .notification.show {
                    opacity: 1;
                    transform: translateX(0);
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex: 1;
                }
                .notification-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.25rem;
                    color: #666;
                }
                .notification-success { border-left: 4px solid #10b981; }
                .notification-error { border-left: 4px solid #ef4444; }
                .notification-info { border-left: 4px solid #3b82f6; }
                .notification-warning { border-left: 4px solid #f59e0b; }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || icons.info;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Image Gallery/Slideshow functionality
class ImageGallery {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.gallery-slide');
        this.indicators = this.container.querySelectorAll('.gallery-indicator');
        this.prevBtn = this.container.querySelector('.gallery-nav.prev');
        this.nextBtn = this.container.querySelector('.gallery-nav.next');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.isPlaying = true;
        
        if (this.slides.length === 0) return;
        
        this.init();
    }

    init() {
        // Set first slide as active
        this.showSlide(0);
        
        // Add button listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Add indicator listeners
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.showSlide(index));
        });
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch/swipe support
        this.initTouchSupport();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    showSlide(index) {
        // Wrap around
        if (index >= this.slides.length) index = 0;
        if (index < 0) index = this.slides.length - 1;
        
        this.currentIndex = index;
        
        // Update slides
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Update indicators
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.showSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.showSlide(this.currentIndex - 1);
    }

    startAutoPlay() {
        if (this.autoPlayInterval) return;
        this.isPlaying = true;
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
            this.isPlaying = false;
        }
    }

    initTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoPlay();
        }, { passive: true });
        
        this.container.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        this.container.addEventListener('touchend', () => {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            
            this.startAutoPlay();
        });
    }
}

// Global gallery controls (for backward compatibility)
function changeSlide(direction) {
    if (window.galleryInstance) {
        if (direction > 0) {
            window.galleryInstance.nextSlide();
        } else {
            window.galleryInstance.prevSlide();
        }
    }
}

function currentSlide(index) {
    if (window.galleryInstance) {
        window.galleryInstance.showSlide(index - 1);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main site functionality
    window.restaurantSite = new RestaurantSite();
    
    // Initialize image gallery if present
    const galleryContainer = document.getElementById('imageGallery');
    if (galleryContainer) {
        window.galleryInstance = new ImageGallery('imageGallery');
    }
    
    console.log('✅ Hearts and Plates site initialized successfully');
});

// Handle page visibility for better performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations/timers
        if (window.galleryInstance) {
            window.galleryInstance.stopAutoPlay();
        }
    } else {
        // Page is visible - resume
        if (window.galleryInstance && window.galleryInstance.isPlaying) {
            window.galleryInstance.startAutoPlay();
        }
        if (window.restaurantSite) {
            window.restaurantSite.refreshActiveStates();
        }
    }
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RestaurantSite, ImageGallery };
}