// Navigation functionality for Hearts & Plates Restaurant
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScrolling();
        this.handleActiveStates();
        this.handleKeyboardNavigation();
    }

    handleScroll() {
        let lastScrollTop = 0;
        let ticking = false;
        
        const updateNavbar = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for styling
            if (currentScroll > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll (optional - uncomment if needed)
            /*
            if (currentScroll > lastScrollTop && currentScroll > 200) {
                // Scrolling down
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                this.navbar.style.transform = 'translateY(0)';
            }
            */
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });
    }

    handleMobileMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close menu when clicking on links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navbar && !this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        if (this.hamburger) {
            this.hamburger.classList.toggle('active');
        }
        if (this.navMenu) {
            this.navMenu.classList.toggle('active');
        }
        
        // Prevent body scroll when menu is open
        if (this.navMenu && this.navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        if (this.hamburger) {
            this.hamburger.classList.remove('active');
        }
        if (this.navMenu) {
            this.navMenu.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    handleSmoothScrolling() {
        // Handle smooth scrolling for anchor links
        this.navLinks.forEach(link => {
            if (link.getAttribute('href').startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - (this.navbar ? this.navbar.offsetHeight : 0);
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });

        // Handle all anchor links on page
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
                const link = e.target.matches('a') ? e.target : e.target.closest('a');
                const href = link.getAttribute('href');
                
                if (href && href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - (this.navbar ? this.navbar.offsetHeight : 0);
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    }

    handleActiveStates() {
        // Add active state to current page link
        const currentPage = window.location.pathname;
        const currentHash = window.location.hash;
        
        this.navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            const linkHash = new URL(link.href).hash;
            
            // Remove any existing active states
            link.classList.remove('active');
            
            // Check for exact page match
            if (currentPage === linkPath || 
                (currentPage === '/' && linkPath.includes('index.html')) ||
                (currentPage.includes('index.html') && linkPath === '/')) {
                link.classList.add('active');
            }
            
            // Check for hash match
            if (linkHash && linkHash === currentHash) {
                link.classList.add('active');
            }
        });

        // Update active states on hash change
        window.addEventListener('hashchange', () => {
            this.handleActiveStates();
        });
    }

    handleKeyboardNavigation() {
        // Keyboard navigation for accessibility
        let currentFocus = -1;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && this.navMenu && this.navMenu.classList.contains('active')) {
                const focusableElements = this.navMenu.querySelectorAll('a, button');
                
                if (e.shiftKey) {
                    // Shift + Tab (backwards)
                    currentFocus--;
                    if (currentFocus < 0) {
                        currentFocus = focusableElements.length - 1;
                    }
                } else {
                    // Tab (forwards)
                    currentFocus++;
                    if (currentFocus >= focusableElements.length) {
                        currentFocus = 0;
                    }
                }
                
                if (focusableElements[currentFocus]) {
                    e.preventDefault();
                    focusableElements[currentFocus].focus();
                }
            }
        });
    }

    // Public method to highlight specific nav item
    setActiveLink(linkText) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.textContent.trim() === linkText) {
                link.classList.add('active');
            }
        });
    }

    // Public method to show/hide navbar
    showNavbar() {
        if (this.navbar) {
            this.navbar.style.transform = 'translateY(0)';
        }
    }

    hideNavbar() {
        if (this.navbar) {
            this.navbar.style.transform = 'translateY(-100%)';
        }
    }

    // Public method to check if mobile menu is open
    isMobileMenuOpen() {
        return this.navMenu && this.navMenu.classList.contains('active');
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
    console.log('✅ Navigation loaded successfully!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && window.navigation) {
        // Refresh navigation state when page becomes visible
        window.navigation.handleActiveStates();
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}