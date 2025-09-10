// Hearts and Plates Restaurant - Complete Site Configuration
const SITE_CONFIG = {
    restaurant: {
        name: "Hearts & Plates",
        tagline: "Where Every Meal Tells a Story",
        description: "Experience luxury dining at Hearts and Plates Restaurant in Pondicherry. Exquisite cuisine, elegant ambiance, and unforgettable memories await.",
        
        // Contact Information
        address: {
            street: "51 B, First Floor",
            area: "Mission Street",
            city: "Pondicherry",
            postalCode: "605001",
            country: "India",
            full: "51 B, First Floor, Mission Street, Pondicherry - 605001"
        },
        
        contact: {
            phone: "", // Add your phone number
            email: "info@heartsandplates.com",
            whatsapp: "", // Add WhatsApp number with country code
            reservations: "" // Add reservations number
        },
        
        // Operating Hours
        hours: {
            general: "Daily: 11:00 AM - 11:00 PM",
            kitchen: "Kitchen closes at 10:30 PM",
            detailed: {
                monday: { open: "11:00", close: "23:00", closed: false },
                tuesday: { open: "11:00", close: "23:00", closed: false },
                wednesday: { open: "11:00", close: "23:00", closed: false },
                thursday: { open: "11:00", close: "23:00", closed: false },
                friday: { open: "11:00", close: "23:00", closed: false },
                saturday: { open: "11:00", close: "23:00", closed: false },
                sunday: { open: "11:00", close: "23:00", closed: false }
            }
        },
        
        // Capacity Information
        capacity: {
            dining: {
                indoor: 80,
                outdoor: 20
            },
            events: {
                birthdayHall: 50,
                corporateHall: 100,
                privateHall: 30
            }
        }
    },
    
    // Social Media Links
    social: {
        facebook: "#", // Add your Facebook page URL
        instagram: "#", // Add your Instagram profile URL
        google: "#", // Add your Google Business profile URL
        whatsapp: "#", // Add WhatsApp chat link
        twitter: "#", // Add Twitter profile URL (optional)
        youtube: "#" // Add YouTube channel URL (optional)
    },
    
    // Google Forms Configuration
    forms: {
        birthday: {
            url: "", // Add your Google Form embed URL for birthday bookings
            title: "Birthday Hall Booking",
            description: "Book our elegant birthday hall for your special celebration"
        },
        corporate: {
            url: "", // Add your Google Form embed URL for corporate events
            title: "Corporate Events Booking",
            description: "Professional event management for your business needs"
        },
        contact: {
            url: "", // Add your Google Form embed URL for general contact
            title: "Contact Us",
            description: "Get in touch with us for any inquiries"
        }
    },
    
    // Website Configuration
    website: {
        domain: "heartsandplates.com", // Your domain name
        title: "Hearts & Plates | Fine Dining Experience in Pondicherry",
        description: "Experience luxury dining at Hearts and Plates Restaurant in Pondicherry. Exquisite cuisine, elegant ambiance, and unforgettable memories await.",
        keywords: "restaurant, fine dining, Pondicherry, birthday party, corporate events, Indian cuisine, luxury dining",
        author: "Hearts & Plates Restaurant",
        
        // SEO Configuration
        seo: {
            ogImage: "assets/images/gallery/restaurant-hero-og.jpg",
            twitterCard: "summary_large_image",
            locale: "en_IN",
            type: "restaurant"
        }
    },
    
    // Features and Services
    features: {
        services: [
            {
                name: "Fine Dining",
                icon: "fas fa-utensils",
                description: "Experience culinary artistry in our elegant dining space",
                page: "pages/menu.html"
            },
            {
                name: "Birthday Celebrations",
                icon: "fas fa-birthday-cake",
                description: "Make your special day extraordinary with our dedicated hall",
                page: "pages/birthday.html"
            },
            {
                name: "Corporate Events",
                icon: "fas fa-handshake",
                description: "Professional event management for business needs",
                page: "pages/corporate.html"
            }
        ],
        
        amenities: [
            "Air Conditioned Dining",
            "Free WiFi",
            "Parking Available",
            "Wheelchair Accessible",
            "Private Dining Rooms",
            "Audio/Visual Equipment",
            "Event Planning Services",
            "Custom Menu Options"
        ],
        
        cuisines: [
            "South Indian",
            "North Indian", 
            "Continental",
            "Chinese",
            "Seafood Specialties"
        ]
    },
    
    // Business Information
    business: {
        established: "2015", // Year established
        type: "Fine Dining Restaurant",
        category: "Restaurant & Event Venue",
        priceRange: "₹₹₹", // Price indicator
        dressCode: "Smart Casual",
        reservationRequired: false,
        acceptsWalkIns: true,
        paymentMethods: [
            "Cash",
            "Credit Cards",
            "Debit Cards", 
            "UPI",
            "Digital Wallets"
        ]
    },
    
    // Analytics and Tracking
    analytics: {
        googleAnalytics: "", // Add your GA tracking ID
        facebookPixel: "", // Add Facebook Pixel ID
        googleTagManager: "" // Add GTM container ID
    },
    
    // API Keys (for future integrations)
    apiKeys: {
        googleMaps: "", // For maps integration
        emailService: "", // For email services
        smsService: "" // For SMS notifications
    }
};

// Helper Functions
const SITE_HELPERS = {
    // Get current operating status
    getCurrentStatus() {
        const now = new Date();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const currentTime = now.getHours() * 100 + now.getMinutes();
        
        const todayHours = SITE_CONFIG.restaurant.hours.detailed[day];
        if (!todayHours || todayHours.closed) {
            return { open: false, message: "Closed today" };
        }
        
        const openTime = parseInt(todayHours.open.replace(':', ''));
        const closeTime = parseInt(todayHours.close.replace(':', ''));
        
        if (currentTime >= openTime && currentTime <= closeTime) {
            return { open: true, message: "Open now" };
        } else {
            return { open: false, message: `Opens at ${todayHours.open}` };
        }
    },
    
    // Format phone number for display
    formatPhone(phone) {
        if (!phone) return '';
        return phone.replace(/(\d{2})(\d{4})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
    },
    
    // Generate WhatsApp link
    getWhatsAppLink(message = "Hello! I'd like to make a reservation.") {
        const phone = SITE_CONFIG.restaurant.contact.whatsapp;
        if (!phone) return '#';
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    },
    
    // Generate Google Maps link
    getDirectionsLink() {
        const address = SITE_CONFIG.restaurant.address.full;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    },
    
    // Get form embed URL
    getFormUrl(formType) {
        const form = SITE_CONFIG.forms[formType];
        return form ? form.url : '';
    },
    
    // Update page title
    updatePageTitle(pageTitle) {
        document.title = `${pageTitle} | ${SITE_CONFIG.restaurant.name}`;
    },
    
    // Update meta description
    updateMetaDescription(description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }
    },
    
    // Get social media share links
    getSocialShareLink(platform, url, text) {
        const encodedUrl = encodeURIComponent(url || window.location.href);
        const encodedText = encodeURIComponent(text || SITE_CONFIG.website.description);
        
        const shareLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            whatsapp: `https://wa.me/?text=${encodedText} ${encodedUrl}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            email: `mailto:?subject=${encodedText}&body=${encodedText} ${encodedUrl}`
        };
        
        return shareLinks[platform] || '#';
    },
    
    // Check if restaurant is open
    isRestaurantOpen() {
        return this.getCurrentStatus().open;
    },
    
    // Get next opening time
    getNextOpeningTime() {
        const now = new Date();
        const today = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const currentTime = now.getHours() * 100 + now.getMinutes();
        
        // Check if opening later today
        const todayHours = SITE_CONFIG.restaurant.hours.detailed[today];
        if (todayHours && !todayHours.closed) {
            const openTime = parseInt(todayHours.open.replace(':', ''));
            if (currentTime < openTime) {
                return `Today at ${todayHours.open}`;
            }
        }
        
        // Check tomorrow and following days
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayIndex = days.indexOf(today);
        
        for (let i = 1; i <= 7; i++) {
            const dayIndex = (todayIndex + i) % 7;
            const dayName = days[dayIndex];
            const dayHours = SITE_CONFIG.restaurant.hours.detailed[dayName];
            
            if (dayHours && !dayHours.closed) {
                const dayLabel = i === 1 ? 'Tomorrow' : dayName.charAt(0).toUpperCase() + dayName.slice(1);
                return `${dayLabel} at ${dayHours.open}`;
            }
        }
        
        return 'Check our hours';
    },
    
    // Format currency
    formatCurrency(amount) {
        return `₹${amount.toLocaleString('en-IN')}`;
    },
    
    // Validate email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // Validate phone number
    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    },
    
    // Get business hours for today
    getTodayHours() {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const todayHours = SITE_CONFIG.restaurant.hours.detailed[today];
        
        if (!todayHours || todayHours.closed) {
            return 'Closed today';
        }
        
        return `${todayHours.open} - ${todayHours.close}`;
    },
    
    // Load Google Analytics
    loadGoogleAnalytics() {
        const gaId = SITE_CONFIG.analytics.googleAnalytics;
        if (!gaId) return;
        
        // Load GA script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);
        
        // Initialize GA
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', gaId);
        
        // Make gtag available globally
        window.gtag = gtag;
    },
    
    // Track events
    trackEvent(action, category = 'General', label = '', value = 0) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    }
};

// Make configuration available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.SITE_HELPERS = SITE_HELPERS;
    console.log('✅ Site config loaded successfully!');
    
    // Auto-load Google Analytics if configured
    if (SITE_CONFIG.analytics.googleAnalytics) {
        SITE_HELPERS.loadGoogleAnalytics();
    }
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SITE_CONFIG, SITE_HELPERS };
}