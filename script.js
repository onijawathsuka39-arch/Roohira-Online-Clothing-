/* Mock Data & Logic for Roohira Online */

const products = [
    {
        id: 1,
        name: 'Desing Bedsheet with(Yellow and Green Half Circels )',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/VpScTGch/Chat-GPT-Image-Feb-15-2026-12-19-51-AM.png',
            'https://i.ibb.co/pjtt0c0G/Chat-GPT-Image-Feb-15-2026-12-21-12-AM.png',
            'https://i.ibb.co/tpLKzbHW/image-2.jpg'
        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 10 }
        ]
    },




    {
        id: 2,
        name: 'Desing Bedsheet with(Red rose follwers )',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/Pvc47470/Chat-GPT-Image-Feb-14-2026-11-51-26-PM.png',
            'https://i.ibb.co/PzxbqJkG/Chat-GPT-Image-Feb-14-2026-11-56-18-PM.png',
            'https://i.ibb.co/cK36KL4r/image-1.jpg'
        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 10 }
        ]
    },
    {
        id: 3,
        name: 'Desing Bedsheet Black and White Leaves',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/svdVSvxC/Chat-GPT-Image-Feb-14-2026-11-01-11-PM.png',
            'https://i.ibb.co/h1hSLLR7/Chat-GPT-Image-Feb-14-2026-11-11-25-PM.png',
            'https://i.ibb.co/dJ5QRNbz/image.jpg'
        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 3 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 3 }
        ]
    },
    {
        id: 4,
        name: 'Desing Bedsheet Indego ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/ZpQrQd0b/Chat-GPT-Image-Feb-15-2026-12-34-32-AM.png',
            'https://i.ibb.co/HfWjh7Rm/Whats-App-Image-2026-02-14-at-8-16-23-PM.jpg'

        ],
        variants: [
            { size: 'King Size (100*90)', price: 1500, oldPrice: 1900, stock: 5 },
            { size: 'Double (72*90)', price: 1300, oldPrice: 1900, stock: 0 }
        ]
    },
    {
        id: 5,
        name: 'Handloom Bedsheets',
        description: 'Best Quality and 100% Handloom Products',
        material: '100% Chinese Cotton',
        category: 'Handloom Bedsheet',
        images: [
            'https://i.ibb.co/jPHx1jk8/600508769-122095705677186228-5305927897494757706-n.jpg',
            'https://i.ibb.co/pvND7yjf/pink-printed-cotton-two-pilow-cover-double-handloom-bed-sheet-033.jpg',
            'https://i.ibb.co/6c4jB4P2/stripe-printed-handloom-bed-cover-179.jpg'
        ],
        variants: [
            { size: 'Singal(54*80)', price: 950, stock: 0 },
            { size: 'Double(60*90)', price: 1200, stock: 0 }
        ]
    },
    {
        id: 6,
        name: 'Desing Bedsheet with Dark Purple follwers',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/574XHb1/Chat-GPT-Image-Feb-15-2026-07-48-36-PM.png',
            'https://i.ibb.co/ycPnjrKS/Chat-GPT-Image-Feb-15-2026-07-52-14-PM.png',
            'https://i.ibb.co/kYXq5GM/Chat-GPT-Image-Feb-15-2026-08-09-43-PM.png'
        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 10 }
        ]
    },
    {
        id: 7,
        name: 'Desing Bedsheet with  Purple Square',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '100% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/7JvnjgD0/Chat-GPT-Image-Feb-15-2026-04-24-39-PM.png',
            'https://i.ibb.co/5h5bjny9/Chat-GPT-Image-Feb-15-2026-04-16-31-PM.png',
            'https://i.ibb.co/PZ1ypzr4/Chat-GPT-Image-Feb-15-2026-04-18-25-PM.png'
        ],
        variants: [
            { size: 'King(100*90)', price: 1600, oldPrice: 2100, stock: 10 },
            { size: 'Double(72*90)', price: 1400, oldPrice: 1900, stock: 19 }
        ]
    },
    {
        id: 8,
        name: 'Desing Bedsheet For Little Baby',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/v4pQ6PkY/Chat-GPT-Image-Feb-15-2026-07-50-28-PM.png',
            'https://i.ibb.co/Psds60QD/Chat-GPT-Image-Feb-15-2026-08-18-06-PM.png',
            'https://i.ibb.co/8gkhgXqt/Chat-GPT-Image-Feb-15-2026-08-17-38-PM.png'
        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 4 }
        ]
    },
    {
        id: 9,
        name: 'Orange Look Desing Bedsheet ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '100% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/N2y8mYpz/Chat-GPT-Image-Feb-16-2026-02-06-56-AM.png',
            'https://i.ibb.co/XZqJP6WX/Chat-GPT-Image-Feb-16-2026-02-11-52-AM.png',
            'https://i.ibb.co/svq7HyP9/image-3.jpg'
        ],
        variants: [
            { size: 'King(100*90)', price: 1600, oldPrice: 2100, stock: 10 },
            { size: 'Double(72*90)', price: 1400, oldPrice: 1900, stock: 4 }
        ]
    },
    {
        id: 10,
        name: ' Desing Bedsheet with Green Leaves ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/TBPLW68c/Chat-GPT-Image-Feb-16-2026-02-21-28-AM.png',
            'https://i.ibb.co/dT0kgXh/Chat-GPT-Image-Feb-16-2026-02-23-02-AM.png'

        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 5 }
        ]
    },
    {
        id: 11,
        name: ' Desing Bedsheet with Green Follwer Desing ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/xqqFXfjn/Chat-GPT-Image-Feb-19-2026-09-01-37-PM.png',
            'https://i.ibb.co/VpWQc8Pv/Chat-GPT-Image-Feb-19-2026-09-42-37-PM.png',
            'https://i.ibb.co/r2y1sDvJ/image-4.jpg'

        ],
        variants: [
            { size: 'King(100*90)', price: 1500, oldPrice: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1300, oldPrice: 1800, stock: 5 }
        ]
    },
    {
        id: 12,
        name: ' Desing Bedsheet with Pink Follwer Desing ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '100% Chinese Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/9mx9KBPX/Chat-GPT-Image-Feb-19-2026-09-21-22-PM.png',
            'https://i.ibb.co/99K6byvR/Chat-GPT-Image-Feb-19-2026-09-24-41-PM.png',
            'https://i.ibb.co/BKBGMDWL/image-5.jpg'

        ],
        variants: [
            { size: 'King(100*90)', price: 1600, oldPrice: 2100, stock: 10 },
            { size: 'Double(72*90)', price: 1400, oldPrice: 1900, stock: 5 }
        ]
    },
    {
        id: 13,
        name: 'Premium Blank Classic T-Shirt',
        description: 'High-quality basic t-shirt for daily wear. Choose your size, GSM, and preferred color.',
        material: '-',
        category: 'T-Shirts',
        images: [
            'https://i.ibb.co/pBcnr02v/Chat-GPT-Image-Mar-20-2026-08-30-01-PM.png',
            'https://i.ibb.co/3m2qcpfj/Chat-GPT-Image-Mar-20-2026-08-32-09-PM.png',
            'https://i.ibb.co/WpNB2G4D/Chat-GPT-Image-Mar-20-2026-08-37-22-PM.png',
            'https://i.ibb.co/rGck4JpM/Chat-GPT-Image-Mar-20-2026-08-39-36-PM.png'

        ],
        colors: [
            { name: 'Green', image: 'https://i.ibb.co/pBcnr02v/Chat-GPT-Image-Mar-20-2026-08-30-01-PM.png', hex: '#74c306ff' },
            { name: 'Black', image: 'https://i.ibb.co/3m2qcpfj/Chat-GPT-Image-Mar-20-2026-08-32-09-PM.png', hex: '#030202ff' },
            { name: 'Light Blue', image: 'https://i.ibb.co/WpNB2G4D/Chat-GPT-Image-Mar-20-2026-08-37-22-PM.png', hex: '#00f2ffff' },
            { name: 'Pink', image: 'https://i.ibb.co/rGck4JpM/Chat-GPT-Image-Mar-20-2026-08-39-36-PM.png', hex: '#d13ea5ff' }

        ],
        gsms: ['220 GSM', '220 GSM'],
        variants: [
            { size: 'S', price: 1100, oldPrice: 0, stock: 10 },
            { size: 'M', price: 1100, oldPrice: 0, stock: 10 },
            { size: 'L', price: 1100, oldPrice: 0, stock: 10 },
            { size: 'XL', price: 1100, oldPrice: 0, stock: 10 }
        ]
    },
    {
        id: 14,
        name: 'Premium Soft Bath Towel',
        description: 'Super soft, highly absorbent long-lasting bath towel. Choose your preferred size and color.',
        material: '100% Cotton',
        category: 'Towels',
        images: [
            'https://i.ibb.co/rGzxnC46/t123456.png',
            'https://i.ibb.co/Sk7p2xr/t1.png',
            'https://i.ibb.co/v4353wyN/t2.png',
            'https://i.ibb.co/cc2m1xt4/t3.png',
            'https://i.ibb.co/Jw6MPjYc/t4.png',
            'https://i.ibb.co/cKp1fv6W/t5.png ',
            'https://i.ibb.co/FLcSZjdk/t6.png'

        ],
        colors: [
            { name: 'Red', image: 'https://i.ibb.co/Sk7p2xr/t1.png ', hex: '#ff0202' },
            { name: 'Brown', image: 'https://i.ibb.co/v4353wyN/t2.png', hex: '#c49704' },
            { name: 'Dark Green', image: 'https://i.ibb.co/cc2m1xt4/t3.png', hex: '#296c10' },
            { name: 'Blue', image: 'https://i.ibb.co/Jw6MPjYc/t4.png', hex: '#014ef5' },
            { name: 'Grey', image: 'https://i.ibb.co/cKp1fv6W/t5.png ', hex: '#d2cfcb' },
            { name: 'Dark Brown', image: 'https://i.ibb.co/FLcSZjdk/t6.png', hex: '#572a07' }

        ],
        variants: [
            { size: 'Large (30x60)', price: 1300, oldPrice: 1500, stock: 0 }
        ]
    },
    {
        id: 15,
        name: 'Cotton සරම්',
        description: '100% Cotton and Good Quality.',
        material: '100% Cotton',
        category: 'Cotton සරම්',
        images: [
            'https://i.ibb.co/LzbfmwpB/b123456.png',
            'https://i.ibb.co/KpgcTZpS/b6.png',
            'https://i.ibb.co/tTP9Vk5m/b5.png ',
            'https://i.ibb.co/ns05Pnjn/b4.png',
            'https://i.ibb.co/qY9WFhvz/b3.png',
            'https://i.ibb.co/Qjrx01Cm/b2.png',
            'https://i.ibb.co/2myVP4Y/b1.png'

        ],
        colors: [
            { name: 'Light Green', image: 'https://i.ibb.co/KpgcTZpS/b6.png', hex: '#0aff02ff' },
            { name: 'Purple', image: 'https://i.ibb.co/tTP9Vk5m/b5.png ', hex: '#45033bff' },
            { name: 'Blue and Red', image: 'https://i.ibb.co/ns05Pnjn/b4.png', hex: '#fc0000ff' },
            { name: 'Dark Green', image: 'https://i.ibb.co/qY9WFhvz/b3.png', hex: '#1e5a04ff' },
            { name: 'Yellow', image: 'https://i.ibb.co/Qjrx01Cm/b2.png', hex: '#fffb01ff' },
            { name: 'Black', image: 'https://i.ibb.co/2myVP4Y/b1.png', hex: '#000000ff' }

        ],
        variants: [
            { size: 'Large ', price: 1100, oldPrice: 1200, stock: 0 }
        ]
    },
    {
        id: 16,
        name: 'Fabric Pillow ',
        description: 'Good Quality and Soft',
        material: 'Fabric Pillow',
        category: ' Pillow',
        images: [
            'https://i.ibb.co/7M3RYwp/2.png',
            'https://i.ibb.co/rBt8FD3/pillows-png-28.png'
        ],
        variants: [
            { size: '18 * 27', price: 1200, oldPrice: 0, stock: 10 }
        ]
    },
];

const STICKERS = [
    { id: 'S001', name: 'Motivated', image: 'https://i.ibb.co/Fqm78KfT/1.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S005', name: 'Girl', image: 'https://i.ibb.co/1YrnTdQL/5.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S021', name: 'Garfield', image: 'https://i.ibb.co/cSX7sMWL/21.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S031', name: 'Free Fire', image: 'https://i.ibb.co/hRmSPDHS/31.png', sizes: ['3x4', '5x6', '8x10'] },
    { id: 'S057', name: 'Bike', image: 'https://i.ibb.co/Z98bdK5/57.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S101', name: 'BTS', image: 'https://i.ibb.co/HfSxNVhX/101.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S017', name: 'girl art', image: 'https://i.ibb.co/jkTn1Pvr/17.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S033', name: 'Toothless', image: 'https://i.ibb.co/5hVhDVxJ/33.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S050', name: 'supra car', image: 'https://i.ibb.co/FLFsxQS8/50.png', sizes: ['3x3', '5x5', '8x8'] },
    { id: 'S072', name: 'dog art', image: 'https://i.ibb.co/XxSj1Nzx/72.png', sizes: ['3x3', '5x5', '8x8'] }
];

// State Management
function safeParse(item, defaultVal) {
    try {
        const val = localStorage.getItem(item);
        if (!val || val === 'undefined') return defaultVal;
        return JSON.parse(val);
    } catch (e) {
        console.error(`Error parsing localStorage item "${item}":`, e);
        return defaultVal;
    }
}

let cart = safeParse('roohira_cart', []);
let user = safeParse('roohira_user', null);
let currentTheme = localStorage.getItem('roohira_theme') || 'light';

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateCartCount();
    updateUserUI();

    // Page specific logic
    if (document.getElementById('product-grid')) loadShop();
    if (document.getElementById('featured-products')) loadFeatured();
    if (document.getElementById('product-detail-container')) loadProductDetails();
    if (document.getElementById('cart-container')) loadCart();
    if (document.getElementById('checkout-form')) loadCheckout();
    if (document.getElementById('login-form')) {
        initLogin();
        initForgotPassword();
    }
    if (document.getElementById('signup-form')) initSignup();
    if (document.getElementById('profile-container')) {
        loadProfile();
        initChangePassword();
    }
    if (document.getElementById('hero-typing-title')) initHeroTyping();
});

// --- Theme Management ---

function initTheme() {
    const theme = localStorage.getItem('roohira_theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('roohira_theme', target);
    updateThemeIcon(target);

    showToast(`${target.charAt(0).toUpperCase() + target.slice(1)} mode enabled`, 'success');
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-toggle i');
    icons.forEach(icon => {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });
}


// --- UI Updates ---

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('cart-badge');
    const sidebarBadge = document.getElementById('sidebar-cart-badge');

    if (badge) badge.textContent = count;
    if (sidebarBadge) {
        sidebarBadge.textContent = count;
        sidebarBadge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// --- Typing Effect ---
function initHeroTyping() {
    const title = document.getElementById('hero-typing-title');
    if (!title) return;

    const line1 = "Elevate Your Style With ";
    const line2 = "Premium Fashion";
    let charIndex = 0;
    let isLine2 = false;

    title.innerHTML = "";

    function type() {
        if (!isLine2) {
            if (charIndex < line1.length) {
                title.innerHTML += line1.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                title.innerHTML += "<br>";
                charIndex = 0;
                isLine2 = true;

                // Create the span for the second line with gradient styling
                const span = document.createElement('span');
                span.id = "hero-typing-accent";
                span.style.background = "linear-gradient(to right, var(--primary), var(--accent))";
                span.style.webkitBackgroundClip = "text";
                span.style.backgroundClip = "text";
                span.style.webkitTextFillColor = "transparent";
                title.appendChild(span);

                setTimeout(type, 300);
            }
        } else {
            const span = document.getElementById('hero-typing-accent');
            if (charIndex < line2.length) {
                span.innerHTML += line2.charAt(charIndex);
                charIndex++;
                setTimeout(type, 150);
            }
        }
    }

    setTimeout(type, 500);
}

// --- Looping Product Typing Effect ---
function initProductTyping() {
    const titles = document.querySelectorAll('.typing-title');
    titles.forEach(title => {
        // Prevent multiple initializations
        if (title.getAttribute('data-typing-active')) return;
        title.setAttribute('data-typing-active', 'true');

        const fullText = title.getAttribute('data-full-text');
        let charIndex = 0;
        let isTyping = true;

        title.innerHTML = "";

        function typeLoop() {
            if (isTyping) {
                if (charIndex < fullText.length) {
                    title.innerHTML += fullText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeLoop, 50); // Faster typing for short product names
                } else {
                    isTyping = false;
                    setTimeout(typeLoop, 2000); // Pause while full text is shown
                }
            } else {
                if (charIndex > 0) {
                    title.innerHTML = fullText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(typeLoop, 30); // Quick erase
                } else {
                    isTyping = true;
                    setTimeout(typeLoop, 500); // Small pause before restarting
                }
            }
        }

        typeLoop();
    });
}

function updateUserUI() {
    const loginLink = document.getElementById('login-link');
    const userMenu = document.getElementById('user-menu');

    // New Elements
    const headerLoginBtn = document.getElementById('header-login-btn');
    const headerUserMenu = document.getElementById('header-user-menu');
    const headerUsername = document.getElementById('header-username');
    const sidebarUserSection = document.getElementById('sidebar-user-section');

    if (user) {
        if (loginLink) loginLink.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'block';
            userMenu.querySelector('span').textContent = user.name.split(' ')[0];
        }

        // New UI
        if (headerLoginBtn) headerLoginBtn.style.display = 'none';
        if (headerUserMenu) {
            headerUserMenu.style.display = 'flex';
            if (headerUsername) headerUsername.textContent = user.name.split(' ')[0];
        }
        if (sidebarUserSection) sidebarUserSection.style.display = 'block';
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (userMenu) userMenu.style.display = 'none';

        // New UI
        if (headerLoginBtn) headerLoginBtn.style.display = 'block';
        if (headerUserMenu) headerUserMenu.style.display = 'none';
        if (sidebarUserSection) sidebarUserSection.style.display = 'none';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// --- Product Listing ---

function loadFeatured() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = products.slice(0, 3);
    container.innerHTML = featured.map(p => createProductCard(p)).join('');
    initProductTyping();
}

function loadShop() {
    const container = document.getElementById('product-grid');
    const filterContainer = document.getElementById('category-filters');
    if (!container) return;

    // Render Filters
    const categories = ['All', ...new Set(products.map(p => p.category))];
    if (filterContainer) {
        filterContainer.innerHTML = categories.map(cat =>
            `<button class="filter-tab ${cat === 'All' ? 'active' : ''}" onclick="filterProducts('${cat}')">${cat}</button>`
        ).join('');
    }

    // Initial Load
    renderProducts(products);
}

function filterProducts(category) {
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });

    const filtered = category === 'All'
        ? products
        : products.filter(p => p.category === category);

    renderProducts(filtered);
}

function renderProducts(items) {
    const container = document.getElementById('product-grid');
    if (items.length === 0) {
        container.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 3rem;"><h3>No products found under this category.</h3></div>`;
        return;
    }
    container.innerHTML = items.map(p => createProductCard(p)).join('');
    initProductTyping();
}

function createProductCard(product) {
    const defaultPrice = product.variants[0].price;
    const isSoldOut = product.variants.every(v => v.stock <= 0);

    return `
    <div class="product-card ${isSoldOut ? 'sold-out' : ''}">
        <div class="product-image">
            <a href="product.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.name}">
                ${isSoldOut ? '<div class="sold-out-badge">Sold Out</div>' : ''}
            </a>
            <div class="product-actions">
                ${!isSoldOut ? `<button onclick="addToCartPreview(${product.id})" class="action-btn" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>` : ''}
                <a href="product.html?id=${product.id}" class="action-btn" title="View Details"><i class="fas fa-eye"></i></a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <a href="product.html?id=${product.id}">
                <h3 class="product-title typing-title" data-full-text="${product.name}">
                    ${product.name}
                </h3>
            </a>
            <div class="flex justify-between items-center mt-2">
                <div class="price-tag-container">
                    ${product.variants[0].oldPrice ? `<span class="old-price">Rs. ${product.variants[0].oldPrice.toLocaleString()}</span>` : ''}
                    <span class="new-price">Rs. ${product.variants[0].price.toLocaleString()}</span>
                </div>
                <div class="text-warning"><i class="fas fa-star text-gold"></i> 4.5</div>
            </div>
        </div>
    </div>
    `;
}

function addToCartPreview(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Find first variant with stock
        const availableVariant = product.variants.find(v => v.stock > 0);
        if (availableVariant) {
            let finalSize = availableVariant.size;
            if (product.category === 'T-Shirts') {
                finalSize = `${finalSize} | ${product.gsms[0]} | ${product.colors[0].name}`;
            } else if (product.category === 'Towels' || product.category === 'Cotton සරම්') {
                finalSize = `${finalSize} | ${product.colors[0].name}`;
            }
            addToCart(id, 1, finalSize);
        } else {
            showToast('All sizes are out of stock!', 'error');
        }
    }
}

// --- Product Details ---

let currentProduct = null;

function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);
    currentProduct = product;

    if (!product) {
        document.getElementById('product-detail-container').innerHTML = '<div class="text-center p-10">Product not found</div>';
        return;
    }

    // Populate Details
    document.getElementById('detail-image').src = product.images[0];
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-desc').textContent = product.description;

    // Size Select
    const sizeSelect = document.getElementById('size-select');
    if (sizeSelect) {
        sizeSelect.innerHTML = product.variants.map(v => `<option value="${v.size}">Size: ${v.size} - Rs. ${v.price.toLocaleString()}</option>`).join('');
        // Set initial price
        const initialVariant = product.variants[0];
        const priceHTML = `
            <div class="price-box">
                ${initialVariant.oldPrice ? `<span class="old-price">Was: Rs. ${initialVariant.oldPrice.toLocaleString()}</span>` : ''}
                <span class="new-price" style="font-size: 1.8rem;">Rs. ${initialVariant.price.toLocaleString()}</span>
                ${initialVariant.oldPrice ? `<span style="color: #4ade80; font-size: 0.8rem; font-weight: bold; margin-top: 4px;">Exclusive Discount!</span>` : ''}
            </div>
        `;
        document.getElementById('detail-price').innerHTML = priceHTML;
    }

    document.getElementById('detail-material').textContent = product.material;

    // Handle T-shirt specific options
    const specBox = document.querySelector('.spec-box');

    // Remove old injected options if any
    const oldExtra = document.getElementById('extra-options');
    if (oldExtra) oldExtra.remove();
    const oldColors = document.getElementById('color-options');
    if (oldColors) oldColors.remove();

    if (product.category === 'T-Shirts' || product.category === 'Towels' || product.category === 'Cotton සරම්') {
        let extraHtml = '';
        if (product.category === 'T-Shirts') {
            const gsmValue = product.gsms && product.gsms.length > 0 ? product.gsms[0] : '180 GSM';
            extraHtml = `
                <div class="spec-item" id="extra-options" style="margin-top: 10px;">
                    <span class="label">GSM</span>
                    <span class="value">${gsmValue}</span>
                </div>
            `;
        }

        // Color Selection (Visual Swatches)
        const colorsHtml = `
            <div class="spec-item" id="color-options" style="flex-direction: column; align-items: flex-start; gap: 8px; margin-top: 10px;">
                <label class="label" style="margin-bottom: 0;">Select Color: <span id="color-label" style="font-weight: 600; color: var(--text-dark);">${product.colors[0].name}</span></label>
                <div style="display: flex; gap: 10px; margin-top: 5px; flex-wrap: wrap;" id="color-swatch-container">
                    ${product.colors.map((c, i) => `
                        <button onclick="selectProductColor('${c.name}', '${c.image}')" class="color-swatch ${i === 0 ? 'active' : ''}" style="width: 35px; height: 35px; border-radius: 50%; border: ${i === 0 ? '2px solid var(--primary)' : '2px solid #ddd'}; background-color: ${c.hex}; cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" data-color="${c.name}"></button>
                    `).join('')}
                </div>
            </div>
        `;

        // Hide Material if needed or just append
        if (extraHtml) specBox.insertAdjacentHTML('beforeend', extraHtml);
        specBox.insertAdjacentHTML('beforeend', colorsHtml);

        window.selectedColor = product.colors[0].name; // Default color

        // Show Sticker Section ONLY for T-Shirts
        const stickerSec = document.getElementById('product-sticker-section');
        if (stickerSec) {
            if (product.category === 'T-Shirts') {
                stickerSec.style.display = 'block';
                window.productStickers = []; // Reset for this product view
                renderShopStickers();
                loadShopStickers();
            } else {
                stickerSec.style.display = 'none';
            }
        }
    } else {
        window.selectedColor = null;
        const stickerSec = document.getElementById('product-sticker-section');
        if (stickerSec) stickerSec.style.display = 'none';
    }

    const stockStatus = document.getElementById('detail-stock');
    const firstVariant = product.variants[0];
    if (firstVariant && firstVariant.stock > 0) {
        stockStatus.textContent = 'In Stock';
        stockStatus.style.color = 'green';
        document.getElementById('add-to-cart-btn').disabled = false;
    } else {
        stockStatus.textContent = 'Out of Stock';
        stockStatus.style.color = 'red';
        document.getElementById('add-to-cart-btn').disabled = true;
    }

    // Render Thumbnails
    const thumbContainer = document.getElementById('thumbnail-container');
    if (product.images.length > 1) {
        thumbContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
        `).join('');
        thumbContainer.style.display = 'flex';
    } else {
        thumbContainer.style.display = 'none';
    }

    // Add event listener to Add Cart button
    const btn = document.getElementById('add-to-cart-btn');
    // Important: clear old event listeners if any
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.onclick = () => {
        const qtyInput = document.getElementById('qty-input');
        const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

        const sizeSelectEl = document.getElementById('size-select');
        let selectedSize = sizeSelectEl ? sizeSelectEl.value : '';
        const variant = currentProduct.variants.find(v => v.size === selectedSize);

        if (product.category === 'T-Shirts') {
            const gsm = product.gsms && product.gsms.length > 0 ? product.gsms[0] : '180 GSM';
            const color = window.selectedColor || 'Black';

            // Collect stickers if any
            const stickerCount = (window.productStickers || []).length;
            const extraPrice = Math.max(0, stickerCount - 1) * 100;
            const stickerDetails = (window.productStickers || []).map(s => `${s.name} (Side: ${s.side}, Size: ${s.size}, ID: ${s.id})`).join(' | ');

            const fullSizeLabel = `${selectedSize} | ${gsm} | ${color}${stickerDetails ? ' | Stickers: ' + stickerDetails : ''}`;

            // Add as a custom item to cart
            const customCartItem = {
                ...product,
                cartItemId: `custom-${Date.now()}-${Math.random()}`,
                customMapping: JSON.stringify(window.productStickers || []), // unique key for this sticker set
                image: document.getElementById('detail-image').src,
                price: variant ? (variant.price + extraPrice) : (1100 + extraPrice),
                size: fullSizeLabel,
                qty: qty,
                stickers: window.productStickers || []
            };

            // Check if identical custom item already exists
            const existing = cart.find(x =>
                x.id === product.id &&
                x.size === fullSizeLabel &&
                x.customMapping === customCartItem.customMapping
            );

            if (existing) {
                existing.qty += qty;
            } else {
                cart.push(customCartItem);
            }

            localStorage.setItem('roohira_cart', JSON.stringify(cart));
            updateCartCount();
            showToast(`${product.name} with stickers added to cart!`, 'success');
            return;
        } else if (product.category === 'Towels' || product.category === 'Cotton සරම්') {
            const color = window.selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0].name : '');
            selectedSize = `${selectedSize} | ${color}`;
        }

        addToCart(product.id, qty, selectedSize);
    };
}

function updateMainImageAnimated(newSrc) {
    const img = document.getElementById('detail-image');
    if (img.src.includes(newSrc)) return;

    img.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
    img.style.opacity = 0;
    img.style.transform = 'scale(0.96)';

    setTimeout(() => {
        img.onload = () => {
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        };
        img.src = newSrc;

        // Fallback in case of quick load or cache
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, 50);
    }, 250);
}

function selectProductColor(colorName, imageSrc) {
    window.selectedColor = colorName;
    updateMainImageAnimated(imageSrc);
    document.getElementById('color-label').textContent = colorName;

    // Update active swatch class
    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(swatch => {
        if (swatch.getAttribute('data-color') === colorName) {
            swatch.classList.add('active');
        } else {
            swatch.classList.remove('active');
        }
    });

    // Update thumbnail active states if they exist
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(t => {
        if (t.src.includes(imageSrc)) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });
}

function updatePriceOnSizeChange() {
    if (!currentProduct) return;
    const selectedSize = document.getElementById('size-select').value;
    const variant = currentProduct.variants.find(v => v.size === selectedSize);
    if (variant) {
        const priceHTML = `
            <div class="price-box">
                ${variant.oldPrice ? `<span class="old-price">Was: Rs. ${variant.oldPrice.toLocaleString()}</span>` : ''}
                <span class="new-price" style="font-size: 1.8rem;">Rs. ${variant.price.toLocaleString()}</span>
                ${variant.oldPrice ? `<span style="color: #4ade80; font-size: 0.8rem; font-weight: bold; margin-top: 4px;">Exclusive Discount!</span>` : ''}
            </div>
        `;
        document.getElementById('detail-price').innerHTML = priceHTML;

        // Check if T-shirt to update price slightly based on GSM? (Assuming price is same for now, or could depend on GSM)
        // If GSM changes, we can add a listener to gsm-select.

        // Update Stock Status
        const stockStatus = document.getElementById('detail-stock');
        const btn = document.getElementById('add-to-cart-btn');
        if (variant.stock > 0) {
            stockStatus.textContent = 'In Stock';
            stockStatus.style.color = 'green';
            btn.disabled = false;
        } else {
            stockStatus.textContent = 'Out of Stock';
            stockStatus.style.color = 'red';
            btn.disabled = true;
        }
    }
}

function changeImage(src, element) {
    updateMainImageAnimated(src);

    // Toggle active class
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

// --- Cart Logic ---

function addToCart(id, qty = 1, size = null) {
    const product = products.find(p => p.id === id);
    const baseSize = size ? size.split(' | ')[0] : null;
    const variant = baseSize ? product.variants.find(v => v.size === baseSize) : product.variants[0];
    const finalSize = size || variant.size;
    const finalPrice = variant.price;

    // Check Stock
    if (variant.stock <= 0) {
        showToast('Sorry, this size is out of stock!', 'error');
        return;
    }

    let defaultImage = product.images[0];
    if ((product.category === 'T-Shirts' || product.category === 'Towels' || product.category === 'Cotton සරම්') && size && size.includes(' | ')) {
        const parts = size.split(' | ');
        const colorName = parts[parts.length - 1].trim(); // last part is color
        if (product.colors) {
            const colorObj = product.colors.find(c => c.name === colorName);
            if (colorObj) defaultImage = colorObj.image;
        }
    }

    const cartItem = {
        ...product,
        cartItemId: `item-${id}-${finalSize}`,
        image: defaultImage,
        price: finalPrice,
        oldPrice: variant.oldPrice,
        size: finalSize,
        qty: parseInt(qty) || 1
    };

    const existingItem = cart.find(x =>
        x.id === id && x.size === finalSize && !x.customMapping
    );

    if (existingItem) {
        existingItem.qty += parseInt(qty) || 1;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('roohira_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} (${finalSize}) added to cart!`, 'success');
}

function loadCart() {
    const container = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center py-10"><h3>Your cart is empty</h3><a href="shop.html" class="text-primary">Continue Shopping</a></div>';
        summary.style.display = 'none';
        return;
    }

    renderCartItems();
    updateCartTotals();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    container.innerHTML = cart.map((item, index) => {
        const identifier = item.cartItemId || item.id;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <div class="price-tag-container" style="margin-bottom: 5px;">
                        ${item.oldPrice ? `<span class="old-price" style="font-size: 0.7rem;">Rs. ${item.oldPrice.toLocaleString()}</span>` : ''}
                        <span class="new-price" style="font-size: 1rem;">Rs. ${item.price.toLocaleString()}</span>
                    </div>
                    ${item.size ? `<p class="cart-item-meta" style="font-size: 0.8rem; opacity: 0.7;">Size: ${item.size}</p>` : ''}
                </div>
                <div class="quantity-control">
                    <button onclick="updateQty('${identifier}', ${item.qty - 1})" class="qty-btn">-</button>
                    <span class="qty-display">${item.qty}</span>
                    <button onclick="updateQty('${identifier}', ${item.qty + 1})" class="qty-btn">+</button>
                </div>
                <button onclick="removeFromCart('${identifier}')" class="remove-btn" title="Remove"><i class="fas fa-trash"></i></button>
            </div>
        `;
    }).join('');
}

function updateQty(cartItemId, newQty) {
    if (newQty < 1) return;
    const item = cart.find(x => x.cartItemId === cartItemId || (x.id === cartItemId && !x.cartItemId)); // Backward compatibility check
    if (item) {
        item.qty = newQty;
        localStorage.setItem('roohira_cart', JSON.stringify(cart));
        renderCartItems();
        updateCartTotals();
        updateCartCount();
    }
}

function removeFromCart(cartItemId) {
    cart = cart.filter(x => (x.cartItemId || x.id) !== cartItemId);
    localStorage.setItem('roohira_cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function updateCartTotals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
}

// --- Checkout ---

function loadCheckout() {
    if (cart.length === 0) {
        window.location.href = 'shop.html';
        return;
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    document.getElementById('checkout-total').textContent = `Rs. ${subtotal.toLocaleString()}`;
    document.getElementById('summary-list').innerHTML = cart.map(item => `
        <div class="flex justify-between py-2 border-b border-gray-100">
            <span>${item.name} x ${item.qty}</span>
            <span>Rs. ${(item.price * item.qty).toLocaleString()}</span>
        </div>
    `).join('');

    // Pre-fill if user logged in
    if (user) {
        document.getElementById('name').value = user.name;
        document.getElementById('phone').value = user.phone;
    }
}

function placeOrder(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;

    if (!name || !address || !city || !phone) {
        showToast('Please fill all fields', 'error');
        return;
    }

    // Generate Order ID
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const dateStr = `${day}${month}${year}`;
    let orderCount = parseInt(localStorage.getItem('roohira_order_count') || '0') + 1;
    localStorage.setItem('roohira_order_count', orderCount.toString());
    const sequence = String(orderCount).padStart(3, '0');
    const orderId = `ORD-RO-${dateStr}-${sequence}`;

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    // Populate Invoice Template for PDF
    const invDate = document.getElementById('inv-date');
    const invId = document.getElementById('inv-id');
    const invName = document.getElementById('inv-name');
    const invPhone = document.getElementById('inv-phone');
    const invAddress = document.getElementById('inv-address');
    const invItems = document.getElementById('inv-items');
    const invTotal = document.getElementById('inv-total');

    if (invDate) invDate.textContent = `Date: ${date.toLocaleDateString()}`;
    if (invId) invId.textContent = `Order ID: ${orderId}`;
    if (invName) invName.textContent = name;
    if (invPhone) invPhone.textContent = phone;
    if (invAddress) invAddress.textContent = `${address}, ${city}`;

    const noteValue = document.getElementById('note').value;
    const invNoteContainer = document.getElementById('inv-note-container');
    const invNote = document.getElementById('inv-note');
    if (invNote && invNoteContainer) {
        if (noteValue) {
            invNote.textContent = `Note: ${noteValue}`;
            invNoteContainer.style.display = 'block';
        } else {
            invNoteContainer.style.display = 'none';
        }
    }

    if (invItems) {
        invItems.innerHTML = cart.map(item => {
            let stickerTableHtml = '';
            if (item.stickers && item.stickers.length > 0) {
                stickerTableHtml = `
                    <div style="margin-top: 8px; font-size: 7.5pt; color: #555;">
                        <strong>Includes:</strong> ${item.stickers.map(s => `${s.name} (ID: ${s.id})`).join(', ')}
                    </div>
                `;
            }

            return `
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                    <img src="${item.image}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                    <div style="font-weight: 700; font-size: 10pt; margin-bottom: 4px;">${item.name}</div>
                    <div style="font-size: 8pt; color: #777; line-height: 1.4;">Size: ${item.size}</div>
                    ${stickerTableHtml}
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-size: 10pt;">${item.qty}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-size: 10pt;">Rs. ${item.price.toLocaleString()}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-size: 10pt; font-weight: 700;">Rs. ${(item.price * item.qty).toLocaleString()}</td>
            </tr>
        `}).join('');
    }

    // --- Generate Customization Detail Pages for PDF ---
    const invCustomizations = document.getElementById('inv-customizations');
    if (invCustomizations) {
        let customizationHtml = '';
        cart.forEach((item, index) => {
            if (item.stickers && item.stickers.length > 0) {
                const stickerListHtml = item.stickers.map(s => `
                    <div style="border: 1px solid #eee; padding: 10px; margin-bottom: 5px; background: #fff; display: flex; align-items: center; gap: 15px;">
                        <img src="${s.image}" style="width: 40px; height: 40px; object-fit: contain;">
                        <div>
                            <div style="font-weight: 700; font-size: 14px; color: #e91e63;">${s.name} (ID: ${s.id})</div>
                            <div style="font-size: 12px; color: #666;">Size: ${s.size} | Pos: ${s.x ? s.x.toFixed(0) : '50'}%, ${s.y ? s.y.toFixed(0) : '50'}% | Rot: ${s.rotation ? s.rotation.toFixed(0) : '0'}°</div>
                        </div>
                    </div>
                `).join('');

                const overlaysHtml = item.stickers.map(s => {
                    const sizePx = s.size.includes('3') ? '60px' : (s.size.includes('5') ? '90px' : '120px');
                    const posLine = `left: ${s.x || 50}%; top: ${s.y || 50}%; transform: translate(-50%, -50%) rotate(${s.rotation || 0}deg);`;
                    return `<img src="${s.image}" style="position: absolute; width: ${sizePx}; height: auto; ${posLine} pointer-events: none;">`;
                }).join('');

                customizationHtml += `
                    <div style="page-break-before: always; padding: 40px; background: white; text-align: center;">
                        <h2 style="color: #e91e63; font-size: 24px; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 30px;">
                            Customization Details - Item #${index + 1}
                        </h2>
                        <div style="display: flex; gap: 30px; align-items: flex-start; justify-content: space-between;">
                            <div style="flex: 1; text-align: left;">
                                <h3 style="font-size: 18px; margin-bottom: 15px;">Product info:</h3>
                                <p style="margin-bottom: 5px; font-weight: 700; font-size: 16px;">${item.name}</p>
                                <p style="margin-bottom: 20px; color: #666; font-size: 14px;">${item.size}</p>
                                
                                <h3 style="font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Applied Stickers:</h3>
                                ${stickerListHtml}
                            </div>
                            
                            <div style="flex: 1; border: 1px solid #ddd; padding: 20px; border-radius: 12px; background: #fafafa;">
                                <div style="position: relative; width: 400px; height: 400px; background: #fff; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                                    <img src="${item.image}" style="width: 100%; height: 100%; object-fit: contain;">
                                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">${overlaysHtml}</div>
                                </div>
                                <p style="margin-top: 15px; font-size: 12px; color: #888; font-style: italic;">Visual Preview for reference only</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        invCustomizations.innerHTML = customizationHtml;
    }

    if (invTotal) invTotal.textContent = `Rs. ${subtotal.toLocaleString()}`;

    // PDF Options
    const element = document.getElementById('invoice-template');
    const opt = {
        margin: 5,
        filename: `Invoice-${orderId}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3, useCORS: true, logging: false, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Construct WhatsApp Message
    const orderItemsText = cart.map(item => {
        let text = `• *${item.name}* (${item.size})%0A  Qty: ${item.qty} x Rs. ${item.price.toLocaleString()}`;
        if (item.stickers && item.stickers.length > 0) {
            text += `%0A  _Custom Stickers:_`;
            item.stickers.forEach(s => {
                text += `%0A  - ${s.name} (ID: ${s.id}, ${s.size})`;
            });
        }
        return text;
    }).join('%0A%0A');
    const customerNote = document.getElementById('note').value;
    const message = `*Order Confirmation: ${orderId}*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}, ${city}${customerNote ? '%0A*Note:* ' + customerNote : ''}%0A%0A*Items:*%0A${orderItemsText}%0A%0A*Total: Rs. ${subtotal.toLocaleString()}*%0A%0AThank you for ordering from Roohira Online!`;

    // Process PDF Download and then WhatsApp
    const btn = document.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    if (element && typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save().then(() => {
            finishOrder(orderId, subtotal, message);
        }).catch(err => {
            console.error('PDF Error:', err);
            finishOrder(orderId, subtotal, message); // Still send WhatsApp if PDF fails
        });
    } else {
        finishOrder(orderId, subtotal, message);
    }
}

function finishOrder(orderId, subtotal, message) {
    // Save to history
    if (user) {
        const orders = JSON.parse(localStorage.getItem(`roohira_orders_${user.email}`)) || [];
        orders.push({
            id: orderId,
            date: new Date().toISOString(),
            total: subtotal,
            items: cart
        });
        localStorage.setItem(`roohira_orders_${user.email}`, JSON.stringify(orders));
    }

    // Clear cart
    cart = [];
    localStorage.removeItem('roohira_cart');

    // Open WhatsApp
    window.open(`https://wa.me/94714433279?text=${message}`, '_blank');
    window.location.href = 'index.html';
}

// --- Auth ---

// --- Auth ---

function initLogin() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock Login
        const storedUser = JSON.parse(localStorage.getItem(`roohira_user_${email}`));

        if (storedUser && storedUser.password === password) {
            localStorage.setItem('roohira_user', JSON.stringify(storedUser));
            showToast('Login Successful!', 'success');
            setTimeout(() => window.location.href = 'index.html', 1000);
        } else {
            showToast('Invalid credentials (Check signup)', 'error');
        }
    };
}

function initSignup() {
    const form = document.getElementById('signup-form');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        const newUser = { name, email, phone, password };
        localStorage.setItem(`roohira_user_${email}`, JSON.stringify(newUser));
        localStorage.setItem('roohira_user', JSON.stringify(newUser));

        showToast('Account Created!', 'success');
        setTimeout(() => window.location.href = 'index.html', 1000);
    };
}

function initChangePassword() {
    const form = document.getElementById('change-password-form');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const currentPass = document.getElementById('current-password').value;
        const newPass = document.getElementById('new-password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (!user) return; // Should not happen if on profile page

        const storedUser = JSON.parse(localStorage.getItem(`roohira_user_${user.email}`));

        if (storedUser.password !== currentPass) {
            showToast('Incorrect current password', 'error');
            return;
        }

        if (newPass !== confirmPass) {
            showToast('New passwords do not match', 'error');
            return;
        }

        storedUser.password = newPass;
        localStorage.setItem(`roohira_user_${user.email}`, JSON.stringify(storedUser));
        localStorage.setItem('roohira_user', JSON.stringify(storedUser)); // Update session

        showToast('Password updated successfully!', 'success');
        form.reset();
    };
}

function loadProfile() {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Show full signup details in profile header
    if (document.getElementById('profile-name')) document.getElementById('profile-name').textContent = user.name || 'User';
    if (document.getElementById('profile-email')) document.getElementById('profile-email').textContent = user.email || '';

    // Add phone to profile if element exists
    const phoneEl = document.getElementById('profile-phone');
    if (phoneEl) phoneEl.textContent = user.phone || 'N/A';

    const orders = JSON.parse(localStorage.getItem(`roohira_orders_${user.email}`)) || [];
    const container = document.getElementById('order-history');

    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = '<div class="text-center py-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"><p class="text-gray-500">You haven\'t placed any orders yet.</p></div>';
    } else {
        // Sort orders by newest first (descending by timestamp/ID)
        const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));

        container.innerHTML = sortedOrders.map(o => `
            <div class="bg-white border border-gray-100 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <div class="text-sm text-gray-400 mb-1">Order #${o.id ? o.id.split('-').pop() : 'N/A'}</div>
                        <div class="font-bold text-lg text-gray-900">${o.date ? new Date(o.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date'}</div>
                    </div>
                    <div class="text-right">
                        <div class="text-primary font-bold text-xl">Rs. ${o.total ? o.total.toLocaleString() : '0'}</div>
                        <div class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block mt-1">Confirmed</div>
                    </div>
                </div>
                
                <div class="border-t border-gray-50 pt-4 flex justify-between items-center">
                    <button onclick="toggleOrderDetails('${o.id}')" class="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
                        View Order Items <i class="fas fa-chevron-down text-xs transition-transform" id="icon-${o.id}"></i>
                    </button>
                    <button onclick="deleteOrder('${o.id}')" class="text-red-500 hover:text-red-700 text-sm font-semibold flex items-center gap-1" title="Delete Order">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                    
                    <div id="details-${o.id}" style="display: none;" class="mt-4 bg-gray-50 p-4 rounded-lg">
                        ${(o.items || []).map(item => `
                            <div class="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                                <div class="flex items-center gap-3">
                                    <img src="${item.image || (item.images ? item.images[0] : '')}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                                    <div style="text-align: left;">
                                        <div class="text-sm font-semibold text-gray-800">${item.name}</div>
                                        <div class="text-xs text-gray-500">Size: ${item.size || 'Standard'} | Qty: ${item.qty}</div>
                                    </div>
                                </div>
                                <div class="text-sm font-bold text-gray-700">Rs. ${((item.price || 0) * (item.qty || 1)).toLocaleString()}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function logout() {
    localStorage.removeItem('roohira_user');
    window.location.href = 'index.html';
}

function toggleOrderDetails(id) {
    const el = document.getElementById(`details-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (el.style.display === 'none') {
        el.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        el.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}

function deleteOrder(orderId) {
    if (!user) return;

    // Confirm deletion
    if (!confirm('Are you sure you want to delete this order from your history?')) {
        return;
    }

    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem(`roohira_orders_${user.email}`)) || [];

    // Filter out the order to delete
    const updatedOrders = orders.filter(order => order.id !== orderId);

    // Save updated orders back to localStorage
    localStorage.setItem(`roohira_orders_${user.email}`, JSON.stringify(updatedOrders));

    // Show success message
    showToast('Order deleted successfully', 'success');

    // Reload the profile to update the display
    loadProfile();
}


// --- Utilities ---

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function initForgotPassword() {
    const forgotLink = document.getElementById('forgot-password-link');
    const backBtn = document.getElementById('back-to-login');
    const loginForm = document.getElementById('login-form');
    const forgotForm = document.getElementById('forgot-password-form');
    const signupPrompt = document.getElementById('signup-prompt');

    if (!forgotLink || !forgotForm) return;

    forgotLink.onclick = (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        forgotForm.style.display = 'block';
        signupPrompt.style.display = 'none';
    };

    backBtn.onclick = () => {
        loginForm.style.display = 'block';
        forgotForm.style.display = 'none';
        signupPrompt.style.display = 'block';
    };

    forgotForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;
        const phone = document.getElementById('reset-phone').value;
        const newPassword = document.getElementById('reset-new-password').value;

        const storedUser = JSON.parse(localStorage.getItem(`roohira_user_${email}`));

        if (storedUser && storedUser.phone === phone) {
            storedUser.password = newPassword;
            localStorage.setItem(`roohira_user_${email}`, JSON.stringify(storedUser));
            showToast('Password reset successfully!', 'success');

            // Go back to login
            loginForm.style.display = 'block';
            forgotForm.style.display = 'none';
            signupPrompt.style.display = 'block';
            forgotForm.reset();
        } else {
            showToast('Email or phone number does not match!', 'error');
        }
    };
}



// --- Banner Modal ---
function openBannerModal(index) {
    const bannerContainers = document.querySelectorAll('.offer-banner-container');
    if (bannerContainers[index]) {
        const img = bannerContainers[index].querySelector('img');
        if (img) {
            const modal = document.getElementById('banner-modal');
            const modalImg = document.getElementById('modal-img');
            modalImg.src = img.src;
            modal.style.display = "flex";
        }
    }
}

function closeBannerModal(event) {
    const modal = document.getElementById('banner-modal');
    modal.style.display = "none";
}

function toggleOffersModal() {
    const modal = document.getElementById('offers-modal');
    if (modal) {
        const isVisible = modal.style.display === "flex";
        modal.style.display = isVisible ? "none" : "flex";

        // Disable body scroll when modal is open
        document.body.style.overflow = isVisible ? "auto" : "hidden";
    }
}

// --- Customization Logic ---

let customOrder = {
    category: '',
    designId: null,
    designName: '',
    designImage: '',
    material: '',
    size: 'M',
    color: 'White',
    width: '',
    height: '',
    note: '',
    stickers: [], // Array of {id, name, image, size, side}
    basePrice: 1200
};

function selectCategory(category) {
    customOrder.category = category;
    if (category === 'T-Shirts') {
        customOrder.stickers = []; // Reset stickers when starting fresh
        goToStep('tshirt-base');
        updateCustomTshirtState();
    } else {
        goToStep('design');
        loadCustomizeDesigns();
    }
}

function loadCustomizeDesigns() {
    const grid = document.getElementById('customize-design-grid');
    if (!grid) return;

    // Designs are now added manually in the customize.html file.
    // Auto-adding from the products array has been disabled.
}

function selectDesign(id, name, image, material, category) {
    customOrder.designId = id;
    customOrder.designName = name;
    customOrder.designImage = image;
    customOrder.material = material;
    customOrder.category = category;

    // Highlight selected
    document.querySelectorAll('.design-card').forEach(c => c.classList.remove('active'));

    // Attempt to find the clicked card to add active class
    const event = window.event;
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Update Preview and Price in the next step
    const previewImg = document.getElementById('preview-image');
    const previewName = document.getElementById('preview-name');
    const previewMaterial = document.getElementById('preview-material');
    const previewCategory = document.getElementById('preview-category');

    if (previewImg) previewImg.src = image;
    if (previewName) previewName.textContent = name;
    if (previewMaterial) previewMaterial.textContent = material || '80% Chinese Cotton';
    if (previewCategory) previewCategory.textContent = category || 'Printed Design';

    updateCustomPriceDisplay();

    // Smooth transition to next step
    setTimeout(() => {
        goToStep('options');
    }, 200);
}

function toggleCustomSize(isCustom) {
    const inputs = document.getElementById('custom-size-inputs');
    if (isCustom) {
        inputs.style.display = 'flex';
        customOrder.size = 'custom';
    } else {
        inputs.style.display = 'none';
        const checked = document.querySelector('input[name="cust-size"]:checked');
        if (checked) customOrder.size = checked.value;
    }
    updateCustomPriceDisplay();
}

function updateCustomPriceDisplay() {
    const pricePreview = document.getElementById('custom-price-preview');
    if (!pricePreview) return;

    let price = 0;
    let oldPrice = 0;

    const material = customOrder.material || '80% Chinese Cotton';
    const size = customOrder.size;

    if (material.includes('100%')) {
        if (size === '100*90') {
            price = 1900;
            oldPrice = 2100;
        } else if (size === '72*90') {
            price = 1750;
            oldPrice = 1900;
        } else if (size === '60*90') {
            price = 1200;
        }
    } else {
        // 80% Chinese Cotton
        if (size === '100*90') {
            price = 1750;
            oldPrice = 1900;
        } else if (size === '72*90') {
            price = 1500;
            oldPrice = 1800;
        } else if (size === '60*90') {
            price = 1000;
        }
    }

    if (price > 0) {
        pricePreview.innerHTML = `
            ${oldPrice ? `<span class="old-price">Rs. ${oldPrice.toLocaleString()}</span>` : ''}
            <span class="new-price">Rs. ${price.toLocaleString()}</span>
        `;
    } else if (size === 'custom') {
        pricePreview.innerHTML = `<span class="new-price" style="font-size: 0.8rem; color: #666;">Price on calculation</span>`;
    } else {
        pricePreview.innerHTML = `<span class="new-price">Contact for Price</span>`;
    }
}

function goToStep(stepName) {
    // Validate before moving forward
    if (stepName === 'details') {
        const isCustom = document.querySelector('input[name="cust-size"]:checked').value === 'custom';
        if (isCustom) {
            const w = document.getElementById('cust-width').value;
            const h = document.getElementById('cust-height').value;
            if (!w || !h) {
                showToast('Please enter width and height', 'error');
                return;
            }
            customOrder.width = w;
            customOrder.height = h;
            customOrder.size = `Custom (${w}" x ${h}")`;
        } else {
            customOrder.size = document.querySelector('input[name="cust-size"]:checked').value;
        }
        customOrder.note = document.getElementById('cust-note').value;
    }

    // Hide all steps
    ['category', 'design', 'options', 'details'].forEach(s => {
        const el = document.getElementById(`step-${s}`);
        if (el) el.style.display = 'none';

        // Update Progress UI
        const stepMap = { 'category': 1, 'design': 2, 'options': 3, 'details': 4 };
        const stepNum = stepMap[s];
        const progressItem = document.getElementById(`p-step-${stepNum}`);
        if (progressItem) {
            if (s === stepName) {
                progressItem.classList.add('active');
                const num = progressItem.querySelector('.step-num');
                if (num) {
                    num.style.background = 'var(--primary)';
                    num.style.color = 'white';
                }
                const span = progressItem.querySelector('span');
                if (span) {
                    span.style.color = 'var(--text-dark)';
                    span.style.fontWeight = '700';
                }
            } else if (stepMap[s] < stepMap[stepName]) {
                // Completed steps
                progressItem.classList.remove('active');
                const num = progressItem.querySelector('.step-num');
                if (num) {
                    num.style.background = '#4ade80'; // Green
                    num.style.color = 'white';
                    num.innerHTML = '<i class="fas fa-check"></i>';
                }
            } else {
                progressItem.classList.remove('active');
                const num = progressItem.querySelector('.step-num');
                if (num) {
                    num.style.background = 'white';
                    num.style.color = '#999';
                    num.textContent = stepNum;
                }
                const span = progressItem.querySelector('span');
                if (span) {
                    span.style.color = '#999';
                    span.style.fontWeight = '500';
                }
            }
        }
    });

    // Show target step
    const target = document.getElementById(`step-${stepName}`);
    if (target) target.style.display = 'block';

    // Scroll to top of wizard
    document.getElementById('customize-wizard').scrollIntoView({ behavior: 'smooth' });
}

function placeCustomizeOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone || !address) {
        showToast('Please fill all details', 'error');
        return;
    }

    // Populate PDF data
    document.getElementById('pdf-date').textContent = new Date().toLocaleDateString();
    document.getElementById('pdf-img').src = customOrder.designImage;
    document.getElementById('pdf-design-name').textContent = customOrder.designName;
    document.getElementById('pdf-size').textContent = customOrder.size;
    const pdfMat = document.getElementById('pdf-material');
    if (pdfMat) pdfMat.textContent = customOrder.material || '80% Chinese Cotton';
    // Calculate price for WhatsApp message
    let estPrice = "On Calculation";
    const mat = customOrder.material || '80% Chinese Cotton';
    const sz = customOrder.size;
    if (mat.includes('100%')) {
        if (sz.includes('100*90')) estPrice = "Rs. 1,900/=";
        else if (sz.includes('72*90')) estPrice = "Rs. 1,750/=";
    } else {
        if (sz.includes('100*90')) estPrice = "Rs. 1,750/=";
        else if (sz.includes('72*90')) estPrice = "Rs. 1,500/=";
    }

    // WhatsApp Message
    const message = `*Customize Order Request*%0A%0A*Design:* ${customOrder.designName}%0A*Category:* ${customOrder.category || ''}%0A*Material:* ${mat}%0A*Size:* ${sz}%0A*Estimated Total:* ${estPrice}%0A*Advance Required:* Rs. 500/=%0A%0A*Customer Details:*%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A%0A*Note:* ${customOrder.note || ''}`;

    // Directly open WhatsApp (PDF Download disabled as requested)
    window.open(`https://wa.me/94714433279?text=${message}`, '_blank');
    showToast('Order placed! Redirecting to WhatsApp...', 'success');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// --- T-Shirt Specific Customization ---

function selectTshirtColor(color, image) {
    customOrder.color = color;
    document.getElementById('tshirt-base-preview').src = image;

    // Update swatches
    document.querySelectorAll('.tshirt-swatch').forEach(s => {
        const bg = s.style.backgroundColor;
        // Simple way to match
        if ((color === 'White' && s.style.background.includes('ffffff')) ||
            (color === 'Black' && s.style.background.includes('111111')) ||
            (color === 'Red' && s.style.background.includes('dc2626'))) {
            s.classList.add('active');
            s.style.borderColor = 'var(--primary)';
        } else {
            s.classList.remove('active');
            s.style.borderColor = '#ddd';
        }
    });

    updateCustomTshirtState();
}

function updateCustomTshirtState() {
    customOrder.size = document.getElementById('tshirt-size-select').value;
    updateTshirtPrice();
    renderStickerList();
}

function updateTshirtPrice() {
    // Base price 1200. First 1 sticker free. Then 100 each.
    const stickerCount = customOrder.stickers.length;
    const additionalStickers = Math.max(0, stickerCount - 1);
    const extraPrice = additionalStickers * 100;
    const totalPrice = customOrder.basePrice + extraPrice;

    const priceEl = document.getElementById('tshirt-custom-price');
    if (priceEl) {
        priceEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;
    }
}

function goToStickersStep() {
    goToStep('stickers');
    loadStickers();
}

function loadStickers() {
    const grid = document.getElementById('sticker-grid');
    if (!grid) return;

    grid.innerHTML = STICKERS.map(s => `
        <div class="design-card" onclick="openStickerModal('${s.id}')">
            <img src="${s.image}" alt="${s.name}" style="width: 100%; border-radius: 10px;">
            <p class="text-center mt-2 text-sm font-semibold">${s.name}</p>
            <p class="text-center text-xs text-gray-500">ID: ${s.id}</p>
        </div>
    `).join('');
}

let activeStickerId = null;

function openStickerModal(id) {
    const sticker = STICKERS.find(s => s.id === id);
    if (!sticker) return;
    activeStickerId = id;

    document.getElementById('modal-sticker-img').src = sticker.image;
    document.getElementById('modal-sticker-name').textContent = sticker.name;

    // Populate sizes
    const sizeSelect = document.getElementById('sticker-size');
    if (sizeSelect && sticker.sizes) {
        sizeSelect.innerHTML = sticker.sizes.map(s => `<option value="${s}">${s} inch</option>`).join('');
    }

    document.getElementById('sticker-detail-modal').style.display = 'flex';
}

function closeStickerModal() {
    document.getElementById('sticker-detail-modal').style.display = 'none';
}

function addStickerToOrder() {
    const sticker = STICKERS.find(s => s.id === activeStickerId);
    if (!sticker) return;

    const size = document.getElementById('sticker-size').value;
    const side = document.querySelector('input[name="sticker-side"]:checked').value;

    customOrder.stickers.push({
        id: sticker.id,
        name: sticker.name,
        image: sticker.image,
        size: size,
        side: side,
        x: 50, // Default X position (center)
        y: 50, // Default Y position (center)
        rotation: 0 // Default rotation (degrees)
    });

    closeStickerModal();
    goToStep('tshirt-base');
    updateCustomTshirtState();
    showToast(`${sticker.name} sticker added!`, 'success');
}

function renderStickerList() {
    const container = document.getElementById('stickers-container');
    const listParent = document.getElementById('added-stickers-list');
    const overlays = document.getElementById('tshirt-sticker-overlays');

    if (!container || !listParent || !overlays) return;

    if (customOrder.stickers.length === 0) {
        listParent.style.display = 'none';
        overlays.innerHTML = '';
        return;
    }

    listParent.style.display = 'block';
    container.innerHTML = customOrder.stickers.map((s, index) => `
        <div class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
            <span class="text-xs font-semibold">${s.name} (${s.side} - ${s.size})</span>
            <button onclick="removeSticker(${index})" class="text-red-500 hover:text-red-700" style="background: none; border: none; padding: 0; cursor: pointer;">
                <i class="fas fa-times-circle"></i>
            </button>
        </div>
    `).join('');

    // Render Overlays with Drag & Drop and Rotation capability
    overlays.innerHTML = customOrder.stickers.map((s, index) => {
        const sizePx = s.size.includes('3') ? '40px' : (s.size.includes('5') ? '60px' : '80px');
        const posLine = s.x ? `left: ${s.x}%; top: ${s.y}%; transform: translate(-50%, -50%) rotate(${s.rotation || 0}deg);` : `position: relative;`;
        return `
            <div id="wiz-sticker-wrapper-${index}" style="position: absolute; ${posLine} cursor: move; pointer-events: auto; padding: 10px;">
                <img src="${s.image}" 
                     id="wiz-sticker-${index}"
                     onmousedown="startMovingSticker(event, ${index}, 'wizard')"
                     ontouchstart="startMovingSticker(event, ${index}, 'wizard')"
                     style="width: ${sizePx}; height: auto; display: block; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                <div class="rotate-handle" 
                     onmousedown="startRotatingSticker(event, ${index}, 'wizard')"
                     ontouchstart="startRotatingSticker(event, ${index}, 'wizard')"
                     style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; background: white; border: 2px solid var(--primary); border-radius: 50%; cursor: alias; display: flex; align-items: center; justify-content: center; font-size: 8px; color: var(--primary);">
                    <i class="fas fa-redo"></i>
                </div>
            </div>`;
    }).join('');
}

function removeSticker(index) {
    customOrder.stickers.splice(index, 1);
    updateCustomTshirtState();
    showToast('Sticker removed', 'info');
}

function finishTshirtCustomization() {
    // Calculate final price
    const stickerCount = customOrder.stickers.length;
    const additionalStickers = Math.max(0, stickerCount - 1);
    const totalPrice = customOrder.basePrice + (additionalStickers * 100);

    // Create a special cart item
    const stickerDetails = customOrder.stickers.map(s => `${s.name} (Side: ${s.side}, Size: ${s.size}, ID: ${s.id}, Pos: ${s.x ? s.x.toFixed(0) + ',' + s.y.toFixed(0) : 'N/A'}, Rot: ${s.rotation || 0}deg)`).join(' | ');
    const finalSizeLabel = `${customOrder.size} | Color: ${customOrder.color}${stickerDetails ? ' | Stickers: ' + stickerDetails : ''}`;

    const cartItem = {
        id: Date.now(), // Unique ID for custom items
        name: `Customized T-Shirt (${customOrder.color})`,
        image: document.getElementById('tshirt-base-preview').src,
        price: totalPrice,
        size: finalSizeLabel,
        qty: 1,
        isCustom: true,
        stickers: customOrder.stickers,
        baseColor: customOrder.color,
        baseSize: customOrder.size
    };

    cart.push(cartItem);
    localStorage.setItem('roohira_cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Custom T-Shirt added to cart!', 'success');

    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1000);
}

// --- Shop Product T-Shirt Stickers ---

function toggleStickerGrid() {
    const grid = document.getElementById('product-sticker-grid-container');
    if (grid) {
        grid.style.display = grid.style.display === 'none' ? 'block' : 'none';
    }
}

function loadShopStickers() {
    const grid = document.getElementById('product-sticker-grid');
    if (!grid) return;

    grid.innerHTML = STICKERS.map(s => `
        <div class="shop-sticker-item" onclick="openShopStickerModal('${s.id}')" style="cursor: pointer; border: 1px solid #eee; border-radius: 8px; padding: 5px; transition: 0.3s; background: #fff;">
            <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
    `).join('');
}

let activeShopStickerId = null;

function openShopStickerModal(id) {
    const sticker = STICKERS.find(s => s.id === id);
    if (!sticker) return;
    activeShopStickerId = id;

    document.getElementById('shop-modal-sticker-img').src = sticker.image;
    document.getElementById('shop-modal-sticker-name').textContent = sticker.name;

    // Populate sizes
    const shopSizeSelect = document.getElementById('shop-sticker-size');
    if (shopSizeSelect && sticker.sizes) {
        shopSizeSelect.innerHTML = sticker.sizes.map(s => `<option value="${s}">${s} inch</option>`).join('');
    }

    document.getElementById('shop-sticker-modal').style.display = 'flex';
}

function closeShopStickerModal() {
    document.getElementById('shop-sticker-modal').style.display = 'none';
}

function addStickerToShopOrder() {
    const sticker = STICKERS.find(s => s.id === activeShopStickerId);
    if (!sticker) return;

    const size = document.getElementById('shop-sticker-size').value;
    const side = document.querySelector('input[name="shop-sticker-side"]:checked').value;

    if (!window.productStickers) window.productStickers = [];

    window.productStickers.push({
        id: sticker.id,
        name: sticker.name,
        image: sticker.image,
        size: size,
        side: side,
        x: 50, // Default X position (center)
        y: 50, // Default Y position (center)
        rotation: 0 // Default rotation
    });

    closeShopStickerModal();
    renderShopStickers();
    showToast(`${sticker.name} sticker added!`, 'success');
}

function renderShopStickers() {
    const container = document.getElementById('product-added-stickers');
    const overlays = document.getElementById('product-sticker-overlays');

    if (!container || !overlays) return;

    if (!window.productStickers || window.productStickers.length === 0) {
        container.innerHTML = '<span class="text-xs text-gray-400">No stickers added yet</span>';
        overlays.innerHTML = '';
        return;
    }

    container.innerHTML = window.productStickers.map((s, index) => `
        <div class="sticker-tag">
            <span>${s.name} (Side: ${s.side}, Size: ${s.size})</span>
            <i class="fas fa-times-circle cursor-pointer" onclick="removeShopSticker(${index})"></i>
        </div>
    `).join('');

    // Update Overlays with Drag & Drop and Rotation
    overlays.innerHTML = window.productStickers.map((s, index) => {
        const sizePx = s.size.includes('3') ? '30px' : (s.size.includes('5') ? '50px' : '70px');
        const posLine = s.x ? `left: ${s.x}%; top: ${s.y}%; transform: translate(-50%, -50%) rotate(${s.rotation || 0}deg);` : `position: relative;`;
        return `
            <div id="shop-sticker-wrapper-${index}" style="position: absolute; ${posLine} cursor: move; pointer-events: auto; padding: 10px;">
                <img src="${s.image}" 
                     id="shop-sticker-${index}"
                     onmousedown="startMovingSticker(event, ${index}, 'shop')"
                     ontouchstart="startMovingSticker(event, ${index}, 'shop')"
                     style="width: ${sizePx}; height: auto; display: block; opacity: 0.85;">
                <div class="rotate-handle" 
                     onmousedown="startRotatingSticker(event, ${index}, 'shop')"
                     ontouchstart="startRotatingSticker(event, ${index}, 'shop')"
                     style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: white; border: 1px solid var(--primary); border-radius: 50%; cursor: alias; display: flex; align-items: center; justify-content: center; font-size: 6px; color: var(--primary);">
                    <i class="fas fa-redo"></i>
                </div>
            </div>`;
    }).join('');

    // Update Price with stickers
    updateProductPagePrice();
}

function removeShopSticker(index) {
    window.productStickers.splice(index, 1);
    renderShopStickers();
}

function updateProductPagePrice() {
    if (!currentProduct) return;
    const sizeSelect = document.getElementById('size-select');
    if (!sizeSelect) return;

    const selectedSize = sizeSelect.value;
    const variant = currentProduct.variants.find(v => v.size === selectedSize);
    if (!variant) return;

    const stickerCount = (window.productStickers || []).length;
    const additionalPrice = Math.max(0, stickerCount - 1) * 100;
    const totalPrice = variant.price + additionalPrice;

    const priceBox = document.querySelector('.new-price');
    if (priceBox) {
        priceBox.textContent = `Rs. ${totalPrice.toLocaleString()}`;
    }
}

// --- Sticker Drag & Drop Logic ---

let movingSticker = null;

function startMovingSticker(e, index, type) {
    const touch = e.type === 'touchstart' ? e.touches[0] : e;
    // Find the wrapper div (e.target is the img)
    const target = e.target.closest('div');
    if (e.type !== 'touchstart') e.preventDefault();

    const parent = target.parentElement; // This is 'tshirt-sticker-overlays'
    const rect = parent.getBoundingClientRect();

    movingSticker = {
        index: index,
        type: type,
        parent: parent,
        rect: rect,
        target: target
    };

    if (e.type === 'touchstart') {
        document.addEventListener('touchmove', moveSticker, { passive: false });
        document.addEventListener('touchend', stopMovingSticker);
    } else {
        document.addEventListener('mousemove', moveSticker);
        document.addEventListener('mouseup', stopMovingSticker);
    }
}

function moveSticker(e) {
    if (!movingSticker) return;

    const touch = e.type === 'touchmove' ? e.touches[0] : e;
    if (e.type === 'touchmove') e.preventDefault(); // Prevent scrolling while dragging

    const x = ((touch.clientX - movingSticker.rect.left) / movingSticker.rect.width) * 100;
    const y = ((touch.clientY - movingSticker.rect.top) / movingSticker.rect.height) * 100;

    // Constrain within the T-shirt area (approx 10% to 90%)
    const constrainedX = Math.max(10, Math.min(90, x));
    const constrainedY = Math.max(15, Math.min(85, y));

    movingSticker.target.style.left = `${constrainedX}%`;
    movingSticker.target.style.top = `${constrainedY}%`;

    // We must preserve the rotation transform
    let currentRot = 0;
    if (movingSticker.type === 'shop') {
        currentRot = window.productStickers[movingSticker.index].rotation || 0;
    } else {
        currentRot = customOrder.stickers[movingSticker.index].rotation || 0;
    }
    movingSticker.target.style.transform = `translate(-50%, -50%) rotate(${currentRot}deg)`;

    // Update the position in the data array
    if (movingSticker.type === 'shop') {
        window.productStickers[movingSticker.index].x = constrainedX;
        window.productStickers[movingSticker.index].y = constrainedY;
    } else {
        customOrder.stickers[movingSticker.index].x = constrainedX;
        customOrder.stickers[movingSticker.index].y = constrainedY;
    }
}

function stopMovingSticker() {
    movingSticker = null;
    document.removeEventListener('mousemove', moveSticker);
    document.removeEventListener('mouseup', stopMovingSticker);
    document.removeEventListener('touchmove', moveSticker);
    document.removeEventListener('touchend', stopMovingSticker);
}

// --- Sticker Rotation Logic ---

let rotatingSticker = null;

function startRotatingSticker(e, index, type) {
    const touch = e.type === 'touchstart' ? e.touches[0] : e;
    const target = e.target.closest('div.rotate-handle').parentElement;
    e.stopPropagation(); // Prevent drag from triggering
    if (e.type !== 'touchstart') e.preventDefault();

    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    rotatingSticker = {
        index: index,
        type: type,
        target: target,
        centerX: centerX,
        centerY: centerY
    };

    if (e.type === 'touchstart') {
        document.addEventListener('touchmove', rotateSticker, { passive: false });
        document.addEventListener('touchend', stopRotatingSticker);
    } else {
        document.addEventListener('mousemove', rotateSticker);
        document.addEventListener('mouseup', stopRotatingSticker);
    }
}

function rotateSticker(e) {
    if (!rotatingSticker) return;
    const touch = e.type === 'touchmove' ? e.touches[0] : e;
    if (e.type === 'touchmove') e.preventDefault();

    const dx = touch.clientX - rotatingSticker.centerX;
    const dy = touch.clientY - rotatingSticker.centerY;

    // Calculate angle (atan2 returns radians, we convert to degrees)
    // We add 90 because the handle is at the top (negative Y)
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

    rotatingSticker.target.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    // Save to data
    if (rotatingSticker.type === 'shop') {
        window.productStickers[rotatingSticker.index].rotation = angle;
    } else {
        customOrder.stickers[rotatingSticker.index].rotation = angle;
    }
}

function stopRotatingSticker() {
    rotatingSticker = null;
    document.removeEventListener('mousemove', rotateSticker);
    document.removeEventListener('mouseup', stopRotatingSticker);
    document.removeEventListener('touchmove', rotateSticker);
    document.removeEventListener('touchend', stopRotatingSticker);
}

