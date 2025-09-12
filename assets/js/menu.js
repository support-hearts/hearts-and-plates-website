// Updated Menu Page JavaScript - FIXED VERSION
class MenuPage {
    constructor() {
        this.currentFilters = new Set(['all']);
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
            setTimeout(() => this.waitForMenuData(callback), 100);
        }
    }

    addRequiredStyles() {
        if (document.getElementById('menu-styles')) return;

        const style = document.createElement('style');
        style.id = 'menu-styles';
        style.textContent = `
            /* FIXED: Category Tabs - No scrolling, wrap instead */
            .category-tabs-wrapper {
                width: 100%;
                margin-bottom: 1rem;
            }

            .category-tabs {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                padding: 1rem;
                background: var(--glass);
                border-radius: 12px;
                border: 1px solid var(--border);
                box-shadow: var(--shadow-sm);
                width: 100%;
                justify-content: center;
                align-items: flex-start;
                /* REMOVED: overflow-x, scrollbar styles */
            }

            .category-tab {
                flex: 0 0 auto;
                padding: 0.6rem 1rem;
                background: var(--surface);
                color: var(--text-secondary);
                border: 1px solid var(--border);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
                font-size: 0.85rem;
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: 0.4rem;
                font-family: inherit;
                position: relative;
                overflow: visible;
                width: auto;
                min-width: auto;
                margin-bottom: 0.5rem;
            }

            .category-tab::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
                transition: left 0.5s ease;
            }

            .category-tab:hover::before {
                left: 100%;
            }

            .category-tab:hover {
                color: var(--primary);
                border-color: var(--primary);
                transform: translateY(-1px);
                box-shadow: var(--shadow-md);
            }

            .category-tab.active {
                background: var(--primary);
                color: white;
                border-color: var(--primary);
                box-shadow: var(--shadow-colored);
            }

            .category-tab i {
                font-size: 0.9rem;
            }

            /* Filter Pills */
            .filter-pills-container {
                margin-bottom: 2rem;
            }

            .filter-pills {
                display: flex;
                gap: 0.5rem;
                padding: 1rem;
                background: var(--surface-light);
                border-radius: 25px;
                border: 1px solid var(--border-light);
                justify-content: center;
                flex-wrap: wrap;
                box-shadow: var(--shadow-sm);
                position: relative;
            }

            .filter-pills::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(145deg, rgba(99, 102, 241, 0.02) 0%, rgba(236, 72, 153, 0.01) 100%);
                border-radius: inherit;
                pointer-events: none;
            }

            .filter-pill {
                padding: 0.5rem 1rem;
                background: var(--surface);
                color: var(--text-secondary);
                border: 1px solid var(--border);
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.8rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-sm);
                z-index: 1;
            }

            .filter-pill::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: var(--gradient-primary);
                opacity: 0;
                transition: opacity 0.3s ease;
                border-radius: inherit;
            }

            .filter-pill:hover::before {
                opacity: 1;
            }

            .filter-pill:hover {
                color: white;
                border-color: var(--primary);
                transform: translateY(-1px);
                box-shadow: var(--shadow-colored);
            }

            .filter-pill.active {
                background: var(--primary);
                color: white;
                border-color: var(--primary);
                box-shadow: var(--shadow-colored);
            }

            .filter-pill span {
                position: relative;
                z-index: 1;
            }

            /* Menu Content */
            .menu-content {
                position: relative;
                min-height: 400px;
            }

            .category-content {
                display: none;
                animation: fadeInUp 0.6s ease-out;
            }

            .category-content.active {
                display: block;
            }

            /* Menu Items Grid */
            .menu-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 1.5rem;
                margin-top: 2rem;
            }

            /* Individual Menu Item Cards */
            .menu-item {
                background: var(--glass);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 1.5rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-sm);
            }

            .menu-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(145deg, rgba(99, 102, 241, 0.02) 0%, rgba(236, 72, 153, 0.01) 100%);
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
                border-radius: inherit;
            }

            .menu-item:hover::before {
                opacity: 1;
            }

            .menu-item:hover {
                transform: translateY(-5px) scale(1.01);
                border-color: rgba(99, 102, 241, 0.2);
                box-shadow: var(--shadow-colored);
            }

            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1rem;
            }

            .item-name {
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--text-primary);
                margin: 0;
                flex: 1;
                font-family: 'Playfair Display', serif;
                letter-spacing: -0.01em;
            }

            .item-price {
                font-size: 1.2rem;
                font-weight: 700;
                color: var(--primary);
                margin-left: 1rem;
                white-space: nowrap;
            }

            .item-description {
                color: var(--text-secondary);
                font-size: 0.95rem;
                margin-bottom: 1rem;
                line-height: 1.6;
            }

            .item-badges {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }

            .badge {
                padding: 0.25rem 0.75rem;
                font-size: 0.75rem;
                border-radius: 20px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.25rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                border: 1px solid transparent;
                transition: all 0.3s ease;
            }

            .badge:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
            }

            /* Search Results */
            .search-results {
                margin-bottom: 1.5rem;
                padding: 1rem 1.5rem;
                background: var(--glass);
                border-radius: 12px;
                border: 1px solid var(--border);
                color: var(--text-secondary);
                font-size: 0.95rem;
                text-align: center;
                display: none;
                box-shadow: var(--shadow-md);
            }

            .no-results {
                text-align: center;
                padding: 4rem 2rem;
                color: var(--text-secondary);
                display: none;
            }

            .no-results i {
                font-size: 4rem;
                margin-bottom: 1.5rem;
                color: var(--primary);
                animation: float 4s ease-in-out infinite;
            }

            .no-results h3 {
                margin-bottom: 1rem;
                color: var(--text-primary);
                font-size: 1.5rem;
                font-family: 'Playfair Display', serif;
            }

            .no-results p {
                margin-bottom: 2rem;
                font-size: 1.1rem;
            }

            .no-results .btn {
                background: var(--gradient-primary);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: var(--shadow-colored);
            }

            .no-results .btn:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-colored-lg);
                filter: brightness(1.05);
            }

            /* Responsive Design - IMPROVED */
            @media (max-width: 768px) {
                .category-tabs {
                    padding: 1rem;
                    gap: 0.5rem;
                }

                .category-tab {
                    padding: 0.6rem 1rem;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                    min-height: 40px;
                }

                .category-tab i {
                    font-size: 0.8rem;
                }

                .category-tab span {
                    display: none; /* Hide text on mobile, show only icons */
                }

                .filter-pills {
                    padding: 0.75rem;
                    gap: 0.4rem;
                }

                .filter-pill {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.75rem;
                }

                .menu-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .menu-item {
                    padding: 1.25rem;
                }

                .item-header {
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .item-price {
                    margin-left: 0;
                    align-self: flex-end;
                }
            }

            @media (max-width: 480px) {
                .category-tabs {
                    padding: 0.75rem;
                    gap: 0.4rem;
                }

                .category-tab {
                    padding: 0.5rem 0.75rem;
                    font-size: 0.75rem;
                    min-width: 50px;
                    justify-content: center;
                }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    createMenuStructure() {
        if (!this.menuContainer) return;
        
        this.menuContainer.innerHTML = `
            <div class="category-tabs-wrapper">
                <div class="category-tabs" id="category-tabs"></div>
            </div>
            
            <div class="filter-pills-container">
                <div class="filter-pills" id="filter-pills">
                    <button class="filter-pill active" data-filter="all"><span>All Items</span></button>
                    <button class="filter-pill" data-filter="veg"><span>Vegetarian</span></button>
                    <button class="filter-pill" data-filter="non-veg"><span>Non-Vegetarian</span></button>
                    <button class="filter-pill" data-filter="seafood"><span>Seafood</span></button>
                    <button class="filter-pill" data-filter="popular"><span>Popular</span></button>
                    <button class="filter-pill" data-filter="spicy"><span>Spicy</span></button>
                </div>
            </div>
            
            <div class="search-results" id="search-results"></div>
            <div class="menu-content" id="menu-content"></div>
        `;
    }

    loadMenu() {
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
        if (!tabsContainer) {
            console.error('Category tabs container not found!');
            return;
        }

        const categories = [
            { key: 'appetizers', title: 'Appetizers', icon: 'fas fa-leaf' },
            { key: 'soups', title: 'Soups', icon: 'fas fa-bowl-hot' },
            { key: 'mainCourse', title: 'Main Course', icon: 'fas fa-bowl-rice' },
            { key: 'riceAndBiryani', title: 'Rice & Biryani', icon: 'fas fa-bowl-rice' },
            { key: 'chineseRiceNoodles', title: 'Chinese Rice & Noodles', icon: 'fas fa-bowl-food' },
            { key: 'tandooriKebabs', title: 'Tandoori & Kebabs', icon: 'fas fa-fire' },
            { key: 'breadsAndSouthIndian', title: 'Breads & South Indian', icon: 'fas fa-bread-slice' },
            { key: 'beveragesAndAddons', title: 'Beverages & Add-ons', icon: 'fas fa-glass-water' },
            { key: 'internationalAndDesserts', title: 'International & Desserts', icon: 'fas fa-ice-cream' }
        ];

        const categoryTabsHTML = categories.map((cat, index) => `
            <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${cat.key}">
                <i class="${cat.icon}"></i> <span>${cat.title}</span>
            </button>
        `).join('');

        tabsContainer.innerHTML = categoryTabsHTML;
        console.log('Category tabs created - no scroll functionality');
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
                `<span class="badge" style="background: ${badge.color}20; color: ${badge.color}; border-color: ${badge.color};" data-badge="${badge.label.toLowerCase()}">
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
                            <span class="item-price">${this.formatPrice(item.price)}</span>
                        </div>
                        <p class="item-description">${item.description}</p>
                        <div class="item-badges">${badgesHTML}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // FIXED: Correct tag generation
    getItemTags(item, categoryKey) {
        const tags = [];
        
        // Add dietary tags based on data structure from menu-data.js
        if (item.isVeg === true) {
            tags.push('veg');
        } else {
            tags.push('non-veg');
        }
        
        if (item.isSpicy === true) {
            tags.push('spicy');
        }
        
        if (item.isPopular === true) {
            tags.push('popular');
        }
        
        // Add seafood tag based on item name
        const itemNameLower = item.name.toLowerCase();
        if (itemNameLower.includes('fish') ||
            itemNameLower.includes('prawn') ||
            itemNameLower.includes('crab') ||
            itemNameLower.includes('squid') ||
            itemNameLower.includes('pomfret')) {
            tags.push('seafood');
        }
        
        const result = tags.join(' ');
        console.log(`Item "${item.name}" -> Tags: "${result}"`);
        return result;
    }

    getDietaryBadges(item) {
        const badges = [];
        
        const dietaryInfo = window.MENU_CONFIG?.dietaryInfo || {
            veg: { icon: "🥬", label: "Vegetarian", color: "#10B981" },
            nonVeg: { icon: "🥩", label: "Non-Vegetarian", color: "#EF4444" },
            spicy: { icon: "🌶️", label: "Spicy", color: "#F59E0B" },
            popular: { icon: "⭐", label: "Popular", color: "#D4AF37" }
        };
        
        if (item.isVeg === true) {
            badges.push(dietaryInfo.veg);
        } else {
            badges.push(dietaryInfo.nonVeg);
        }
        
        if (item.isSpicy === true) {
            badges.push(dietaryInfo.spicy);
        }
        
        if (item.isPopular === true) {
            badges.push(dietaryInfo.popular);
        }
        
        return badges;
    }

    formatPrice(price) {
        if (price === 0) return "Market Price";
        return `₹${price}`;
    }

    setupEventListeners() {
        this.setupCategoryTabs();
        this.setupFilters();
        this.setupSearch();
        this.setupWhatsAppOrder();
    }

    // FIXED: Proper category tab handling
    setupCategoryTabs() {
        document.addEventListener('click', (e) => {
            // Check if clicked element is a category tab or inside one
            const tab = e.target.closest('.category-tab');
            if (!tab) return;
            
            const category = tab.getAttribute('data-category');
            if (!category) return;
            
            console.log('Category clicked:', category);
            
            // Update active tab
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
            const targetContent = document.querySelector(`.category-content[data-category="${category}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Switched to category:', category);
            }
            
            this.currentCategory = category;
            
            // Clear global search results
            const globalNoResults = document.querySelector('.global-no-results');
            if (globalNoResults) {
                globalNoResults.style.display = 'none';
            }
            
            // Apply current filters
            setTimeout(() => this.applyCurrentFilter(), 100);
        });
    }

    // FIXED: Proper filter handling
    setupFilters() {
        document.addEventListener('click', (e) => {
            const filterPill = e.target.closest('.filter-pill');
            if (!filterPill) return;
            
            const filterValue = filterPill.getAttribute('data-filter');
            console.log('Filter clicked:', filterValue);
            
            if (filterValue === 'all') {
                this.currentFilters.clear();
                this.currentFilters.add('all');
                
                document.querySelectorAll('.filter-pill').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
                });
            } else {
                this.currentFilters.delete('all');
                
                if (this.currentFilters.has(filterValue)) {
                    this.currentFilters.delete(filterValue);
                } else {
                    this.currentFilters.add(filterValue);
                }
                
                if (this.currentFilters.size === 0) {
                    this.currentFilters.add('all');
                }
                
                document.querySelectorAll('.filter-pill').forEach(btn => {
                    const btnFilter = btn.getAttribute('data-filter');
                    btn.classList.toggle('active', this.currentFilters.has(btnFilter));
                });
            }
            
            this.applyCurrentFilter();
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

    // FIXED: Filter application logic
    applyCurrentFilter() {
        if (this.searchTerm) {
            this.applyGlobalSearch();
            return;
        }

        const activeContent = document.querySelector('.category-content.active');
        if (!activeContent) {
            console.error('No active category content found');
            return;
        }
        
        const items = activeContent.querySelectorAll('.menu-item');
        const searchResults = document.getElementById('search-results');
        const noResults = activeContent.querySelector('.no-results');
        
        let visibleCount = 0;
        
        console.log(`Applying filters: ${Array.from(this.currentFilters).join(', ')}`);
        console.log(`Processing ${items.length} items`);
        
        items.forEach(item => {
            const rawTags = item.getAttribute('data-tags') || '';
            const tags = rawTags.trim().split(/\s+/).filter(tag => tag.length > 0);
            const itemName = item.querySelector('.item-name')?.textContent || 'Unknown';
            
            let show = true;
            
            if (!this.currentFilters.has('all')) {
                let matchesFilter = false;
                for (const filter of this.currentFilters) {
                    if (tags.includes(filter)) {
                        matchesFilter = true;
                        console.log(`✓ "${itemName}" matches filter "${filter}"`);
                        break;
                    }
                }
                if (!matchesFilter) {
                    show = false;
                    console.log(`✗ "${itemName}" doesn't match filters. Tags: [${tags.join(', ')}], Filters: [${Array.from(this.currentFilters).join(', ')}]`);
                }
            }
            
            // FIXED: Force display change
            if (show) {
                item.style.setProperty('display', 'block', 'important');
                visibleCount++;
            } else {
                item.style.setProperty('display', 'none', 'important');
            }
        });
        
        console.log(`Result: ${visibleCount} items visible`);
        
        // Update search results info
        if (searchResults) {
            if (!this.currentFilters.has('all')) {
                searchResults.style.display = 'block';
                const activeFilters = Array.from(this.currentFilters).join(', ');
                searchResults.textContent = `Showing ${visibleCount} items • Filters: ${activeFilters}`;
            } else {
                searchResults.style.display = 'none';
            }
        }
        
        // Show/hide no results message
        if (noResults) {
            if (visibleCount === 0 && !this.currentFilters.has('all')) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
    }

    applyGlobalSearch() {
        const searchResults = document.getElementById('search-results');
        let totalVisibleCount = 0;
        let matchingCategories = [];

        document.querySelectorAll('.category-content').forEach(content => {
            content.classList.remove('active');
        });

        Object.keys(window.MENU_DATA).forEach(categoryKey => {
            const content = document.querySelector(`.category-content[data-category="${categoryKey}"]`);
            if (!content) return;

            const items = content.querySelectorAll('.menu-item');
            let categoryVisibleCount = 0;

            items.forEach(item => {
                const itemName = item.getAttribute('data-name') || '';
                const itemDesc = item.getAttribute('data-description') || '';
                const tags = (item.getAttribute('data-tags') || '').split(' ');

                let show = false;

                if (this.searchTerm) {
                    if (itemName.includes(this.searchTerm) || itemDesc.includes(this.searchTerm)) {
                        show = true;
                    }
                }

                if (show && !this.currentFilters.has('all')) {
                    let matchesFilter = false;
                    for (const filter of this.currentFilters) {
                        if (tags.includes(filter)) {
                            matchesFilter = true;
                            break;
                        }
                    }
                    if (!matchesFilter) {
                        show = false;
                    }
                }

                if (show) {
                    item.style.setProperty('display', 'block', 'important');
                    categoryVisibleCount++;
                    totalVisibleCount++;
                } else {
                    item.style.setProperty('display', 'none', 'important');
                }
            });

            if (categoryVisibleCount > 0) {
                matchingCategories.push({
                    key: categoryKey,
                    count: categoryVisibleCount,
                    title: window.MENU_DATA[categoryKey].title
                });
                content.classList.add('active');
            }
        });

        if (searchResults) {
            if (this.searchTerm) {
                searchResults.style.display = 'block';
                let message = `Found ${totalVisibleCount} items matching "${this.searchTerm}"`;
                
                if (!this.currentFilters.has('all')) {
                    const activeFilters = Array.from(this.currentFilters).join(', ');
                    message += ` • Filters: ${activeFilters}`;
                }
                
                if (matchingCategories.length > 1) {
                    message += ` across ${matchingCategories.length} categories`;
                }
                
                searchResults.innerHTML = `
                    <div>${message}</div>
                    ${matchingCategories.length > 1 ? 
                        `<div style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.8;">
                            ${matchingCategories.map(cat => `${cat.title} (${cat.count})`).join(' • ')}
                        </div>` 
                        : ''
                    }
                `;
            } else {
                searchResults.style.display = 'none';
            }
        }

        if (totalVisibleCount === 0 && this.searchTerm) {
            if (!document.querySelector('.global-no-results')) {
                const noResultsHTML = `
                    <div class="global-no-results no-results" style="display: block;">
                        <i class="fas fa-search"></i>
                        <h3>No items found</h3>
                        <p>No menu items match your search "${this.searchTerm}"</p>
                        <button class="btn btn-primary" onclick="window.menuPage.clearSearch()">
                            Clear Search
                        </button>
                    </div>
                `;
                document.getElementById('menu-content').insertAdjacentHTML('afterbegin', noResultsHTML);
            } else {
                const globalNoResults = document.querySelector('.global-no-results');
                globalNoResults.style.display = 'block';
                globalNoResults.querySelector('p').textContent = `No menu items match your search "${this.searchTerm}"`;
            }
        } else {
            const globalNoResults = document.querySelector('.global-no-results');
            if (globalNoResults) {
                globalNoResults.style.display = 'none';
            }
        }

        if (!this.searchTerm) {
            document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
            const currentContent = document.querySelector(`.category-content[data-category="${this.currentCategory}"]`);
            if (currentContent) {
                currentContent.classList.add('active');
            }
        }

        console.log(`Global search results: ${totalVisibleCount} items across ${matchingCategories.length} categories`);
    }

    clearAllFilters() {
        this.clearSearch();
        this.currentFilters.clear();
        this.currentFilters.add('all');
        
        document.querySelectorAll('.filter-pill').forEach(btn => {
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
        
        const globalNoResults = document.querySelector('.global-no-results');
        if (globalNoResults) {
            globalNoResults.style.display = 'none';
        }
        
        this.applyCurrentFilter();
    }

    showErrorMessage() {
        if (this.menuContainer) {
            this.menuContainer.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                    <h3 style="color: var(--text-primary);">Unable to Load Menu</h3>
                    <p style="color: var(--text-secondary);">Menu data is not available. Please check if menu-data.js is loaded properly.</p>
                    <button class="btn btn-primary" onclick="window.location.reload()" style="
                        background: var(--gradient-primary);
                        color: white;
                        border: none;
                        padding: 1rem 2rem;
                        border-radius: 12px;
                        font-weight: 600;
                        margin-top: 1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">
                        Refresh Page
                    </button>
                </div>
            `;
        }
    }

    switchToCategory(categoryKey) {
        const tab = document.querySelector(`[data-category="${categoryKey}"]`);
        if (tab) {
            tab.click();
        }
    }
}

function switchToCategory(categoryKey) {
    if (window.menuPage) {
        window.menuPage.switchToCategory(categoryKey);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    window.menuPage = new MenuPage();
    console.log('✅ Menu page initialized successfully!');
});