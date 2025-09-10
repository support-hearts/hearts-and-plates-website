// Fixed Menu Page JavaScript - Works with existing menu-data.js
class MenuPage {
    constructor() {
        this.currentFilter = 'all';
        this.currentCategory = 'appetizers';
        this.searchTerm = '';
        this.menuContainer = null;
        this.init();
    }

    init() {
        this.menuContainer = document.getElementById('menu-container');
        if (!this.menuContainer) {
            console.error('Menu container not found!');
            return;
        }

        // Wait for menu data to load
        this.waitForMenuData(() => {
            this.addRequiredStyles();
            this.createMenuStructure();
            this.loadMenu();
            this.setupEventListeners();
        });
    }

    waitForMenuData(callback) {
        if (window.MENU_DATA) {
            callback();
        } else {
            // Wait for menu data to load
            setTimeout(() => this.waitForMenuData(callback), 100);
        }
    }

    addRequiredStyles() {
        // Check if styles already added
        if (document.getElementById('menu-styles')) return;

        const style = document.createElement('style');
        style.id = 'menu-styles';
        style.textContent = `
            /* Essential Menu Styles */
            .filter-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 2rem;
                padding: 1rem;
                background: rgba(26, 26, 26, 0.8);
                border-radius: 12px;
                border: 1px solid var(--border);
            }
            
            .filter-btn {
                padding: 0.5rem 1rem;
                background: transparent;
                color: var(--text-secondary);
                border: 1px solid var(--border);
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
                font-family: inherit;
            }
            
            .filter-btn.active,
            .filter-btn:hover {
                background: var(--primary);
                color: var(--background);
                border-color: var(--primary);
            }
            
            .category-tabs {
                display: flex;
                overflow-x: auto;
                gap: 0.5rem;
                margin-bottom: 2rem;
                padding: 0.5rem;
                background: rgba(26, 26, 26, 0.6);
                border-radius: 12px;
                border: 1px solid var(--border);
            }
            
            .category-tab {
                flex-shrink: 0;
                padding: 1rem 1.5rem;
                background: transparent;
                color: var(--text-secondary);
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-family: inherit;
            }
            
            .category-tab.active {
                background: var(--primary);
                color: var(--background);
            }
            
            .category-tab:hover:not(.active) {
                background: var(--surface-light);
                color: var(--text-primary);
            }
            
            .menu-content {
                position: relative;
                min-height: 400px;
            }
            
            .category-content {
                display: none;
                animation: fadeIn 0.3s ease-in-out;
            }
            
            .category-content.active {
                display: block;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .category-summary {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding: 1rem;
                background: rgba(26, 26, 26, 0.6);
                border-radius: 8px;
                border: 1px solid var(--border);
            }
            
            .category-title {
                font-size: 1.5rem;
                color: var(--primary);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin: 0;
            }
            
            .category-description {
                color: var(--text-muted);
                font-size: 0.9rem;
                margin: 0.25rem 0 0 0;
            }
            
            .menu-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 1.5rem;
            }
            
            .menu-item {
                background: rgba(26, 26, 26, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 1.5rem;
                transition: all 0.3s ease;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .menu-item:hover {
                transform: translateY(-5px);
                border-color: var(--primary);
                box-shadow: var(--shadow-lg);
            }
            
            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 0.75rem;
            }
            
            .item-name {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--text-primary);
                margin: 0;
                flex: 1;
            }
            
            .item-price {
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--primary);
                margin-left: 1rem;
            }
            
            .item-description {
                color: var(--text-secondary);
                font-size: 0.9rem;
                margin-bottom: 1rem;
                line-height: 1.5;
            }
            
            .item-badges {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .badge {
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
                border-radius: 12px;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }
            
            .search-results {
                margin-bottom: 1rem;
                padding: 0.5rem 1rem;
                background: rgba(26, 26, 26, 0.6);
                border-radius: 8px;
                color: var(--text-secondary);
                font-size: 0.9rem;
                text-align: center;
                display: none;
            }
            
            .no-results {
                text-align: center;
                padding: 3rem 2rem;
                color: var(--text-secondary);
                display: none;
            }
            
            .no-results i {
                font-size: 3rem;
                margin-bottom: 1rem;
                color: var(--text-muted);
            }
            
            .no-results h3 {
                margin-bottom: 0.5rem;
                color: var(--text-primary);
            }
            
            @media (max-width: 768px) {
                .category-tabs {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                
                .category-tabs::-webkit-scrollbar {
                    display: none;
                }
                
                .menu-grid {
                    grid-template-columns: 1fr;
                }
                
                .category-summary {
                    flex-direction: column;
                    gap: 1rem;
                    text-align: center;
                }
                
                .filter-controls {
                    gap: 0.5rem;
                }
                
                .filter-btn {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.8rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    createMenuStructure() {
        if (!this.menuContainer) return;
        
        this.menuContainer.innerHTML = `
            <!-- Filter Controls -->
            <div class="filter-controls">
                <button class="filter-btn active" data-filter="all">All Items</button>
                <button class="filter-btn" data-filter="veg">Vegetarian</button>
                <button class="filter-btn" data-filter="non-veg">Non-Vegetarian</button>
                <button class="filter-btn" data-filter="seafood">Seafood</button>
                <button class="filter-btn" data-filter="popular">Popular</button>
                <button class="filter-btn" data-filter="spicy">Spicy</button>
            </div>
            
            <!-- Category Tabs -->
            <div class="category-tabs" id="category-tabs"></div>
            
            <!-- Search Results Info -->
            <div class="search-results" id="search-results"></div>
            
            <!-- Menu Content -->
            <div class="menu-content" id="menu-content"></div>
        `;
    }

    loadMenu() {
        // Check if menu data is available
        if (!window.MENU_DATA) {
            console.error('Menu data not loaded!');
            this.showErrorMessage();
            return;
        }

        this.createCategoryTabs();
        this.createMenuContent();
        console.log('Menu loaded successfully!');
    }

    createCategoryTabs() {
        const tabsContainer = document.getElementById('category-tabs');
        if (!tabsContainer) return;

        const categories = [
            { key: 'appetizers', title: 'Appetizers', icon: 'fas fa-leaf' },
            { key: 'mainCourse', title: 'Main Course', icon: 'fas fa-bowl-rice' },
            { key: 'southIndian', title: 'South Indian', icon: 'fas fa-bread-slice' },
            { key: 'seafood', title: 'Seafood', icon: 'fas fa-fish' },
            { key: 'beveragesDeserts', title: 'Beverages & Desserts', icon: 'fas fa-ice-cream' }
        ];

        tabsContainer.innerHTML = categories.map((cat, index) => `
            <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${cat.key}">
                <i class="${cat.icon}"></i> ${cat.title}
            </button>
        `).join('');
    }

    createMenuContent() {
        const contentContainer = document.getElementById('menu-content');
        if (!contentContainer) return;

        let contentHTML = '';

        Object.keys(window.MENU_DATA).forEach((categoryKey, index) => {
            const category = window.MENU_DATA[categoryKey];
            const isActive = index === 0 ? 'active' : '';

            contentHTML += `
                <div class="category-content ${isActive}" data-category="${categoryKey}">
                    <div class="category-summary">
                        <div>
                            <h2 class="category-title">
                                <i class="${category.icon}"></i> ${category.title}
                            </h2>
                            <p class="category-description">${category.items.length} items • ${category.description}</p>
                        </div>
                    </div>
                    
                    <div class="menu-grid" id="${categoryKey}-grid">
                        ${this.generateCategoryItems(category.items, categoryKey)}
                    </div>
                    
                    <div class="no-results" id="${categoryKey}-no-results">
                        <i class="fas fa-search"></i>
                        <h3>No items found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                        <button class="btn btn-primary" onclick="window.menuPage.clearAllFilters()">
                            Clear Filters
                        </button>
                    </div>
                </div>
            `;
        });

        contentContainer.innerHTML = contentHTML;
    }

    generateCategoryItems(items, categoryKey) {
        return items.map(item => {
            const badges = this.getDietaryBadges(item);
            const badgesHTML = badges.map(badge => 
                `<span class="badge" style="background: ${badge.color}20; color: ${badge.color};" data-badge="${badge.label.toLowerCase()}">
                    ${badge.icon} ${badge.label}
                </span>`
            ).join('');

            const tags = this.getItemTags(item, categoryKey);

            return `
                <div class="menu-item" 
                     data-name="${item.name.toLowerCase()}" 
                     data-description="${item.description.toLowerCase()}"
                     data-price="${item.price}"
                     data-tags="${tags}">
                    <div class="item-content">
                        <div class="item-header">
                            <h3 class="item-name">${item.name}</h3>
                            <span class="item-price">₹${item.price}</span>
                        </div>
                        <p class="item-description">${item.description}</p>
                        <div class="item-badges">${badgesHTML}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getItemTags(item, categoryKey) {
        const tags = [];
        
        // Add dietary tags
        if (item.isVeg) tags.push('veg');
        else tags.push('non-veg');
        
        if (item.isSpicy) tags.push('spicy');
        if (item.isPopular) tags.push('popular');
        
        // Add seafood tag based on category or item name
        if (categoryKey === 'seafood' || 
            item.name.toLowerCase().includes('fish') ||
            item.name.toLowerCase().includes('prawn') ||
            item.name.toLowerCase().includes('crab') ||
            item.name.toLowerCase().includes('squid') ||
            item.name.toLowerCase().includes('pomfret')) {
            tags.push('seafood');
        }
        
        return tags.join(' ');
    }

    getDietaryBadges(item) {
        const badges = [];
        
        // Use MENU_CONFIG if available, otherwise use fallback
        const dietaryInfo = window.MENU_CONFIG?.dietaryInfo || {
            veg: { icon: "🥬", label: "Vegetarian", color: "#10B981" },
            nonVeg: { icon: "🍖", label: "Non-Vegetarian", color: "#EF4444" },
            spicy: { icon: "🌶️", label: "Spicy", color: "#F59E0B" },
            popular: { icon: "⭐", label: "Popular", color: "#D4AF37" }
        };
        
        if (item.isVeg) {
            badges.push(dietaryInfo.veg);
        } else {
            badges.push(dietaryInfo.nonVeg);
        }
        
        if (item.isSpicy) {
            badges.push(dietaryInfo.spicy);
        }
        
        if (item.isPopular) {
            badges.push(dietaryInfo.popular);
        }
        
        return badges;
    }

    setupEventListeners() {
        this.setupCategoryTabs();
        this.setupFilters();
        this.setupSearch();
        this.setupWhatsAppOrder();
    }

    setupCategoryTabs() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.category-tab') || e.target.closest('.category-tab')) {
                const tab = e.target.matches('.category-tab') ? e.target : e.target.closest('.category-tab');
                const category = tab.getAttribute('data-category');
                
                if (!category) return;
                
                console.log('Switching to category:', category);
                
                // Update active tab
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update active content
                document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
                const targetContent = document.querySelector(`.category-content[data-category="${category}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                    console.log('Category content shown for:', category);
                } else {
                    console.error('Category content not found for:', category);
                }
                
                this.currentCategory = category;
                this.applyCurrentFilter();
            }
        });
    }

    setupFilters() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                console.log('Filter clicked:', e.target.getAttribute('data-filter'));
                
                // Update active filter
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                this.currentFilter = e.target.getAttribute('data-filter');
                this.applyCurrentFilter();
            }
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('menu-search');
        const clearBtn = document.getElementById('search-clear');
        
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchTerm = e.target.value.toLowerCase().trim();
                    
                    if (this.searchTerm && clearBtn) {
                        clearBtn.style.display = 'block';
                    } else if (clearBtn) {
                        clearBtn.style.display = 'none';
                    }
                    
                    this.applyCurrentFilter();
                }, 300);
            });
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearSearch();
            });
        }
    }

    setupWhatsAppOrder() {
        const whatsappBtn = document.getElementById('whatsapp-order');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                const message = "Hello! I'd like to place an order from Hearts & Plates menu.";
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        }
    }

    applyCurrentFilter() {
        const activeContent = document.querySelector('.category-content.active');
        if (!activeContent) {
            console.error('No active category content found');
            return;
        }
        
        const items = activeContent.querySelectorAll('.menu-item');
        const searchResults = document.getElementById('search-results');
        const noResults = activeContent.querySelector('.no-results');
        
        let visibleCount = 0;
        
        console.log(`Applying filter: ${this.currentFilter}, search: "${this.searchTerm}"`);
        console.log(`Found ${items.length} items in category`);
        
        items.forEach(item => {
            const itemName = item.getAttribute('data-name') || '';
            const itemDesc = item.getAttribute('data-description') || '';
            const tags = item.getAttribute('data-tags') || '';
            
            let show = true;
            
            // Apply search filter
            if (this.searchTerm) {
                const matchesName = itemName.includes(this.searchTerm);
                const matchesDesc = itemDesc.includes(this.searchTerm);
                if (!matchesName && !matchesDesc) {
                    show = false;
                }
            }
            
            // Apply category filter
            if (this.currentFilter !== 'all') {
                if (!tags.includes(this.currentFilter)) {
                    show = false;
                }
            }
            
            if (show) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        console.log(`Visible items: ${visibleCount}`);
        
        // Update search results info
        if (searchResults) {
            if (this.currentFilter !== 'all' || this.searchTerm) {
                searchResults.style.display = 'block';
                let message = `Showing ${visibleCount} items`;
                if (this.currentFilter !== 'all') {
                    message += ` • ${this.currentFilter.replace('-', ' ')}`;
                }
                if (this.searchTerm) {
                    message += ` • "${this.searchTerm}"`;
                }
                searchResults.textContent = message;
            } else {
                searchResults.style.display = 'none';
            }
        }
        
        // Show/hide no results message
        if (noResults) {
            if (visibleCount === 0 && (this.currentFilter !== 'all' || this.searchTerm)) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
    }

    clearAllFilters() {
        this.clearSearch();
        this.currentFilter = 'all';
        
        // Reset filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
        });
        
        this.applyCurrentFilter();
    }

    clearSearch() {
        const searchInput = document.getElementById('menu-search');
        const clearBtn = document.getElementById('search-clear');
        
        if (searchInput) {
            searchInput.value = '';
            this.searchTerm = '';
        }
        
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }
        
        this.applyCurrentFilter();
    }

    showErrorMessage() {
        if (this.menuContainer) {
            this.menuContainer.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;"></i>
                    <h3>Unable to Load Menu</h3>
                    <p>Menu data is not available. Please check if menu-data.js is loaded properly.</p>
                    <button class="btn btn-primary" onclick="window.location.reload()">
                        Refresh Page
                    </button>
                </div>
            `;
        }
    }

    // Public method to switch categories (for footer links)
    switchToCategory(categoryKey) {
        const tab = document.querySelector(`[data-category="${categoryKey}"]`);
        if (tab) {
            tab.click();
        }
    }
}

// Function for footer links
function switchToCategory(categoryKey) {
    if (window.menuPage) {
        window.menuPage.switchToCategory(categoryKey);
    }
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add navigation toggle functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Initialize menu page
    window.menuPage = new MenuPage();
    console.log('✅ Menu page initialized successfully!');
});