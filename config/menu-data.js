// Hearts and Plates Restaurant Menu - Complete Working Version
const MENU_DATA = {
    appetizers: {
        title: "Appetizers",
        icon: "fas fa-leaf",
        description: "Start your culinary journey with our handcrafted appetizers",
        items: [
            {
                name: "Samosa Delight",
                price: 120,
                description: "Crispy pastry filled with spiced potatoes and peas (2 pieces)",
                image: "assets/images/menu/appetizers/samosa.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Medu Vada",
                price: 150,
                description: "Traditional South Indian lentil donuts served with sambhar and chutney (3 pieces)",
                image: "assets/images/menu/appetizers/medu-vada.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Chicken 65",
                price: 280,
                description: "Spicy deep-fried chicken marinated in aromatic spices",
                image: "assets/images/menu/appetizers/chicken-65.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Prawn Koliwada",
                price: 350,
                description: "Mumbai-style crispy prawns tossed in tangy spices",
                image: "assets/images/menu/appetizers/prawn-koliwada.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Tikka",
                price: 240,
                description: "Grilled cottage cheese marinated in yogurt and spices",
                image: "assets/images/menu/appetizers/paneer-tikka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Fish Fry",
                price: 320,
                description: "Fresh fish marinated in coastal spices and fried to perfection",
                image: "assets/images/menu/appetizers/fish-fry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            }
        ]
    },
    
    mainCourse: {
        title: "Main Course",
        icon: "fas fa-bowl-rice",
        description: "Hearty meals that define our culinary excellence",
        items: [
            {
                name: "Chicken Biryani",
                price: 320,
                description: "Fragrant basmati rice layered with tender chicken and aromatic spices",
                image: "assets/images/menu/main-course/chicken-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Mutton Biryani",
                price: 420,
                description: "Premium basmati rice with succulent mutton pieces and saffron",
                image: "assets/images/menu/main-course/mutton-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Fish Curry",
                price: 350,
                description: "Fresh pomfret cooked in traditional coastal curry with coconut",
                image: "assets/images/menu/main-course/fish-curry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Prawn Curry",
                price: 380,
                description: "Juicy prawns in rich, spiced coconut curry",
                image: "assets/images/menu/main-course/prawn-curry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Vegetable Thali",
                price: 220,
                description: "Complete vegetarian meal with rice, dal, vegetables, and accompaniments",
                image: "assets/images/menu/main-course/veg-thali.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Butter Chicken",
                price: 340,
                description: "Creamy tomato-based curry with tender chicken pieces",
                image: "assets/images/menu/main-course/butter-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Mutton Rogan Josh",
                price: 380,
                description: "Slow-cooked tender mutton in rich, aromatic gravy",
                image: "assets/images/menu/main-course/mutton-rogan-josh.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Butter Masala",
                price: 280,
                description: "Cottage cheese in rich, creamy tomato gravy",
                image: "assets/images/menu/main-course/paneer-butter-masala.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            }
        ]
    },
    
    southIndian: {
        title: "South Indian Specials",
        icon: "fas fa-bread-slice",
        description: "Authentic flavors from the heart of South India",
        items: [
            {
                name: "Masala Dosa",
                price: 150,
                description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambhar",
                image: "assets/images/menu/south-indian/masala-dosa.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Chicken Dosa",
                price: 220,
                description: "Crispy dosa filled with spiced chicken and onions",
                image: "assets/images/menu/south-indian/chicken-dosa.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Rava Dosa",
                price: 170,
                description: "Crispy semolina crepe with a perfect golden texture",
                image: "assets/images/menu/south-indian/rava-dosa.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Idli Sambhar",
                price: 120,
                description: "Steamed rice cakes served with lentil curry and coconut chutney (4 pieces)",
                image: "assets/images/menu/south-indian/idli-sambhar.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Uttapam",
                price: 160,
                description: "Thick rice pancake topped with vegetables and served with chutney",
                image: "assets/images/menu/south-indian/uttapam.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Fried Rice",
                price: 240,
                description: "Fragrant rice stir-fried with chicken and vegetables",
                image: "assets/images/menu/south-indian/chicken-fried-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Mutton Fried Rice",
                price: 280,
                description: "Aromatic rice with tender mutton pieces and spices",
                image: "assets/images/menu/south-indian/mutton-fried-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    seafood: {
        title: "Seafood Specialties",
        icon: "fas fa-fish",
        description: "Fresh catch from the coastal waters, prepared to perfection",
        items: [
            {
                name: "Pomfret Fry",
                price: 450,
                description: "Fresh pomfret marinated in coastal spices and pan-fried",
                image: "assets/images/menu/seafood/pomfret-fry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Prawn Masala",
                price: 380,
                description: "Juicy prawns cooked in spicy onion-tomato gravy",
                image: "assets/images/menu/seafood/prawn-masala.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Crab Curry",
                price: 420,
                description: "Fresh crab in traditional coconut curry",
                image: "assets/images/menu/seafood/crab-curry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Fish Tikka",
                price: 350,
                description: "Grilled fish marinated in yogurt and spices",
                image: "assets/images/menu/seafood/fish-tikka.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Squid Fry",
                price: 320,
                description: "Tender squid rings fried with aromatic spices",
                image: "assets/images/menu/seafood/squid-fry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            }
        ]
    },
    
    beveragesDeserts: {
        title: "Beverages & Desserts",
        icon: "fas fa-ice-cream",
        description: "Perfect endings to your dining experience",
        items: [
            {
                name: "Filter Coffee",
                price: 80,
                description: "Authentic South Indian filter coffee with perfect aroma",
                image: "assets/images/menu/beverages/filter-coffee.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Masala Chai",
                price: 60,
                description: "Traditional Indian tea with aromatic spices",
                image: "assets/images/menu/beverages/masala-chai.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Fresh Lime Soda",
                price: 100,
                description: "Refreshing lime soda with mint and spices",
                image: "assets/images/menu/beverages/lime-soda.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mango Lassi",
                price: 120,
                description: "Creamy yogurt drink blended with fresh mango",
                image: "assets/images/menu/beverages/mango-lassi.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Gulab Jamun",
                price: 120,
                description: "Soft milk dumplings soaked in rose-flavored sugar syrup (2 pieces)",
                image: "assets/images/menu/desserts/gulab-jamun.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Rasmalai",
                price: 140,
                description: "Cottage cheese dumplings in sweetened milk with cardamom (2 pieces)",
                image: "assets/images/menu/desserts/rasmalai.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Kulfi",
                price: 90,
                description: "Traditional Indian ice cream with rich milk and nuts",
                image: "assets/images/menu/desserts/kulfi.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Payasam",
                price: 100,
                description: "Traditional South Indian sweet pudding with jaggery",
                image: "assets/images/menu/desserts/payasam.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            }
        ]
    }
};

const MENU_CONFIG = {
    currency: "₹",
    tax: {
        rate: 18,
        included: false,
        message: "Prices are exclusive of applicable taxes"
    },
    serviceCharge: {
        rate: 10,
        applicable: true,
        message: "Service charge of 10% applicable on orders above ₹500"
    },
    offers: [
        {
            title: "Weekend Special",
            description: "20% off on family meals (4+ people)",
            validDays: ["saturday", "sunday"],
            minAmount: 1000
        },
        {
            title: "Birthday Special",
            description: "Complimentary dessert for birthday celebrations",
            code: "BIRTHDAY",
            validAlways: true
        },
        {
            title: "Seafood Thursday",
            description: "15% off on all seafood items",
            validDays: ["thursday"],
            minAmount: 500
        }
    ],
    mealTimings: {
        breakfast: { start: "07:00", end: "11:00" },
        lunch: { start: "12:00", end: "15:30" },
        dinner: { start: "18:00", end: "22:30" }
    },
    dietaryInfo: {
        veg: { icon: "🥬", label: "Vegetarian", color: "#10B981" },
        nonVeg: { icon: "🍖", label: "Non-Vegetarian", color: "#EF4444" },
        spicy: { icon: "🌶️", label: "Spicy", color: "#F59E0B" },
        popular: { icon: "⭐", label: "Popular", color: "#D4AF37" },
        seafood: { icon: "🐟", label: "Seafood", color: "#3B82F6" }
    }
};

const MENU_HELPERS = {
    getAllItems() {
        const allItems = [];
        Object.values(MENU_DATA).forEach(category => {
            category.items.forEach(item => {
                allItems.push({
                    ...item,
                    category: category.title
                });
            });
        });
        return allItems;
    },
    
    getPopularItems() {
        return this.getAllItems().filter(item => item.isPopular);
    },
    
    getVegetarianItems() {
        return this.getAllItems().filter(item => item.isVeg);
    },
    
    getNonVegetarianItems() {
        return this.getAllItems().filter(item => !item.isVeg);
    },
    
    getSeafoodItems() {
        return this.getAllItems().filter(item => 
            item.category === "Seafood Specialties" || 
            item.name.toLowerCase().includes('fish') ||
            item.name.toLowerCase().includes('prawn') ||
            item.name.toLowerCase().includes('crab')
        );
    },
    
    searchItems(query) {
        const searchTerm = query.toLowerCase();
        return this.getAllItems().filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    },
    
    getItemsByPriceRange(min, max) {
        return this.getAllItems().filter(item => 
            item.price >= min && item.price <= max
        );
    },
    
    formatPrice(price) {
        return `${MENU_CONFIG.currency}${price}`;
    },
    
    calculateTotalPrice(price) {
        let total = price;
        
        if (!MENU_CONFIG.tax.included) {
            total += (price * MENU_CONFIG.tax.rate) / 100;
        }
        
        if (MENU_CONFIG.serviceCharge.applicable && price >= 500) {
            total += (price * MENU_CONFIG.serviceCharge.rate) / 100;
        }
        
        return Math.round(total);
    },
    
    getDietaryBadges(item) {
        const badges = [];
        
        if (item.isVeg) {
            badges.push(MENU_CONFIG.dietaryInfo.veg);
        } else {
            badges.push(MENU_CONFIG.dietaryInfo.nonVeg);
        }
        
        if (item.isSpicy) {
            badges.push(MENU_CONFIG.dietaryInfo.spicy);
        }
        
        if (item.isPopular) {
            badges.push(MENU_CONFIG.dietaryInfo.popular);
        }
        
        if (item.category === "Seafood Specialties" || 
            item.name.toLowerCase().includes('fish') ||
            item.name.toLowerCase().includes('prawn') ||
            item.name.toLowerCase().includes('crab') ||
            item.name.toLowerCase().includes('squid')) {
            badges.push(MENU_CONFIG.dietaryInfo.seafood);
        }
        
        return badges;
    },
    
    generateCategoryHTML(categoryKey) {
        const category = MENU_DATA[categoryKey];
        if (!category) return '';
        
        const itemsHTML = category.items.map(item => {
            const badges = this.getDietaryBadges(item);
            const badgesHTML = badges.map(badge => 
                `<span class="badge" style="background: ${badge.color}20; color: ${badge.color};" data-badge="${badge.label.toLowerCase()}">
                    ${badge.icon} ${badge.label}
                </span>`
            ).join('');
            
            return `
                <div class="menu-item" 
                     data-name="${item.name.toLowerCase()}" 
                     data-description="${item.description.toLowerCase()}"
                     data-price="${item.price}"
                     data-category="${categoryKey}">
                    <div class="menu-item-content">
                        <div class="item-image">
                            <img src="${item.image}" 
                                 alt="${item.name}"
                                 loading="lazy"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="image-placeholder" style="display: none;">
                                <i class="fas fa-utensils"></i>
                                <p>${item.name}</p>
                            </div>
                            ${item.isPopular ? '<div class="popular-badge"><i class="fas fa-star"></i> Popular</div>' : ''}
                        </div>
                        <div class="item-info">
                            <div class="item-header">
                                <h4 class="item-name">${item.name}</h4>
                                <div class="item-price">${this.formatPrice(item.price)}</div>
                            </div>
                            <p class="item-description">${item.description}</p>
                            <div class="item-badges">${badgesHTML}</div>
                            <div class="item-actions">
                                <button class="btn btn-sm btn-secondary add-to-selection" 
                                        data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>
                                    <i class="fas fa-plus"></i> Add to Order
                                </button>
                                <button class="btn btn-sm btn-primary share-item" 
                                        data-item-name="${item.name}"
                                        data-item-price="${item.price}">
                                    <i class="fas fa-share"></i> Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="menu-category glass" data-category="${categoryKey}">
                <div class="category-header">
                    <i class="category-icon ${category.icon}"></i>
                    <div class="category-info">
                        <h3 class="category-title font-display">${category.title}</h3>
                        <p class="category-description">${category.description}</p>
                        <span class="item-count">${category.items.length} items</span>
                    </div>
                </div>
                <div class="menu-items">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.MENU_DATA = MENU_DATA;
    window.MENU_CONFIG = MENU_CONFIG;
    window.MENU_HELPERS = MENU_HELPERS;
    console.log('✅ Menu data loaded successfully!');
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MENU_DATA, MENU_CONFIG, MENU_HELPERS };
}