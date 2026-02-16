/* Mock Data & Logic for Roohira Online */

const products = [
    {
        id: 1,
        name: 'Desing Bedsheet Indego ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/ZpQrQd0b/Chat-GPT-Image-Feb-15-2026-12-34-32-AM.png',
            'https://i.ibb.co/HfWjh7Rm/Whats-App-Image-2026-02-14-at-8-16-23-PM.jpg'

        ],
        variants: [
            { size: 'King Size (110*90)', price: 1900, stock: 5 },
            { size: 'Double (72*90)', price: 1900, stock: 0 }

        ]
    },




    {
        id: 2,
        name: 'Handloom Bedsheets',
        description: 'Best Quality and 100% Handloom Products',
        material: '100% Cotton',
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
        id: 3,
        name: 'Desing Bedsheet Black and White Leaves',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/svdVSvxC/Chat-GPT-Image-Feb-14-2026-11-01-11-PM.png',
            'https://i.ibb.co/h1hSLLR7/Chat-GPT-Image-Feb-14-2026-11-11-25-PM.png',
            'https://i.ibb.co/dJ5QRNbz/image.jpg'
        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 3 },
            { size: 'Double(72*90)', price: 1800, stock: 3 }
        ]
    },
    {
        id: 4,
        name: 'Desing Bedsheet with(Red rose follwers )',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/Pvc47470/Chat-GPT-Image-Feb-14-2026-11-51-26-PM.png',
            'https://i.ibb.co/PzxbqJkG/Chat-GPT-Image-Feb-14-2026-11-56-18-PM.png',
            'https://i.ibb.co/cK36KL4r/image-1.jpg'
        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1800, stock: 10 }
        ]
    },
    {
        id: 5,
        name: 'Desing Bedsheet with(Yellow and Green Half Circels )',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/VpScTGch/Chat-GPT-Image-Feb-15-2026-12-19-51-AM.png',
            'https://i.ibb.co/pjtt0c0G/Chat-GPT-Image-Feb-15-2026-12-21-12-AM.png',
            'https://i.ibb.co/tpLKzbHW/image-2.jpg'
        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1800, stock: 10 }
        ]
    },
    {
        id: 6,
        name: 'Desing Bedsheet with Dark Purple follwers',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/574XHb1/Chat-GPT-Image-Feb-15-2026-07-48-36-PM.png',
            'https://i.ibb.co/ycPnjrKS/Chat-GPT-Image-Feb-15-2026-07-52-14-PM.png',
            'https://i.ibb.co/kYXq5GM/Chat-GPT-Image-Feb-15-2026-08-09-43-PM.png'
        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1800, stock: 10 }
        ]
    },
    {
        id: 7,
        name: 'Desing Bedsheet with  Purple Square',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '100% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/7JvnjgD0/Chat-GPT-Image-Feb-15-2026-04-24-39-PM.png',
            'https://i.ibb.co/5h5bjny9/Chat-GPT-Image-Feb-15-2026-04-16-31-PM.png',
            'https://i.ibb.co/PZ1ypzr4/Chat-GPT-Image-Feb-15-2026-04-18-25-PM.png'
        ],
        variants: [
            { size: 'King(110*90)', price: 2100, stock: 10 },
            { size: 'Double(72*90)', price: 1900, stock: 19 }
        ]
    },
    {
        id: 8,
        name: 'Desing Bedsheet For Little Baby',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/v4pQ6PkY/Chat-GPT-Image-Feb-15-2026-07-50-28-PM.png',
            'https://i.ibb.co/Psds60QD/Chat-GPT-Image-Feb-15-2026-08-18-06-PM.png',
            'https://i.ibb.co/8gkhgXqt/Chat-GPT-Image-Feb-15-2026-08-17-38-PM.png'
        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1800, stock: 4 }
        ]
    },
    {
        id: 9,
        name: 'Orange Look Desing Bedsheet ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '100% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/N2y8mYpz/Chat-GPT-Image-Feb-16-2026-02-06-56-AM.png',
            'https://i.ibb.co/XZqJP6WX/Chat-GPT-Image-Feb-16-2026-02-11-52-AM.png',
            'https://i.ibb.co/svq7HyP9/image-3.jpg'
        ],
        variants: [
            { size: 'King(110*90)', price: 2100, stock: 10 },
            { size: 'Double(72*90)', price: 1900, stock: 4 }
        ]
    },
    {
        id: 10,
        name: ' Desing Bedsheet with Green Leaves ',
        description: 'Best Quality With 2 pillow Covers.Delivery-350/=(Free delivery when you purchase two or more bed sheets)',
        material: '80% Cotton',
        category: ' Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/TBPLW68c/Chat-GPT-Image-Feb-16-2026-02-21-28-AM.png',
            'https://i.ibb.co/dT0kgXh/Chat-GPT-Image-Feb-16-2026-02-23-02-AM.png'

        ],
        variants: [
            { size: 'King(110*90)', price: 1900, stock: 10 },
            { size: 'Double(72*90)', price: 1800, stock: 5 }
        ]
    },
];

// State Management
let cart = JSON.parse(localStorage.getItem('roohira_cart')) || [];
let user = JSON.parse(localStorage.getItem('roohira_user')) || null;
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
            <a href="product.html?id=${product.id}"><h3 class="product-title">${product.name}</h3></a>
            <div class="flex justify-between items-center mt-2">
                <span class="product-price">Rs. ${defaultPrice.toLocaleString()}</span>
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
            addToCart(id, 1, availableVariant.size);
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
        document.getElementById('detail-price').textContent = `Rs. ${product.variants[0].price.toLocaleString()}`;
    }

    document.getElementById('detail-material').textContent = product.material;

    const stockStatus = document.getElementById('detail-stock');
    const firstVariant = product.variants[0];
    if (firstVariant && firstVariant.stock > 0) {
        stockStatus.textContent = `In Stock (${firstVariant.stock})`;
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
        thumbContainer.innerHTML = product.images.slice(0, 3).map((img, index) => `
            <img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
        `).join('');
    } else {
        thumbContainer.style.display = 'none';
    }

    // Add event listener to Add Cart button
    const btn = document.getElementById('add-to-cart-btn');
    btn.onclick = () => {
        const qty = parseInt(document.getElementById('qty-input').value);
        const selectedSize = sizeSelect.value;
        addToCart(product.id, qty, selectedSize);
    };
}

function updatePriceOnSizeChange() {
    if (!currentProduct) return;
    const selectedSize = document.getElementById('size-select').value;
    const variant = currentProduct.variants.find(v => v.size === selectedSize);
    if (variant) {
        document.getElementById('detail-price').textContent = `Rs. ${variant.price.toLocaleString()}`;

        // Update Stock Status
        const stockStatus = document.getElementById('detail-stock');
        const btn = document.getElementById('add-to-cart-btn');
        if (variant.stock > 0) {
            stockStatus.textContent = `In Stock (${variant.stock})`;
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
    document.getElementById('detail-image').src = src;

    // Toggle active class
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

// --- Cart Logic ---

function addToCart(id, qty = 1, size = null) {
    const product = products.find(p => p.id === id);
    const variant = size ? product.variants.find(v => v.size === size) : product.variants[0];
    const finalSize = size || variant.size;
    const finalPrice = variant.price;

    // Check Stock
    if (variant.stock <= 0) {
        showToast('Sorry, this size is out of stock!', 'error');
        return;
    }

    const cartItem = {
        ...product,
        image: product.images[0],
        price: finalPrice,
        size: finalSize,
        qty
    };

    const existingItem = cart.find(x => x.id === id && x.size === finalSize);

    if (existingItem) {
        existingItem.qty += qty;
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
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div style="flex-grow: 1;">
                <h3>${item.name}</h3>
                <p class="text-gray-500">Rs. ${item.price.toLocaleString()}</p>
            </div>
            <div class="quantity-control">
                <button onclick="updateQty(${item.id}, ${item.qty - 1})" class="qty-btn">-</button>
                <span class="qty-display">${item.qty}</span>
                <button onclick="updateQty(${item.id}, ${item.qty + 1})" class="qty-btn">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700" title="Remove"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function updateQty(id, newQty) {
    if (newQty < 1) return;
    const item = cart.find(x => x.id === id);
    if (item) {
        // Check stock ideally
        item.qty = newQty;
        localStorage.setItem('roohira_cart', JSON.stringify(cart));
        renderCartItems();
        updateCartTotals();
        updateCartCount();
    }
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    localStorage.setItem('roohira_cart', JSON.stringify(cart));
    loadCart(); // Reload whole view
    updateCartCount();
}

function updateCartTotals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    document.getElementById('cart-total').textContent = `Rs. ${subtotal.toLocaleString()}`;
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
        invItems.innerHTML = cart.map(item => `
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                    <img src="${item.image}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                    <div style="font-weight: 700; font-size: 10pt; margin-bottom: 4px;">${item.name}</div>
                    <div style="font-size: 8pt; color: #777;">Size: ${item.size} | Material: ${item.material || 'Premium'}</div>
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-size: 10pt;">${item.qty}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-size: 10pt;">Rs. ${item.price.toLocaleString()}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-size: 10pt; font-weight: 700;">Rs. ${(item.price * item.qty).toLocaleString()}</td>
            </tr>
        `).join('');
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
    const orderItemsText = cart.map(item => `• *${item.name}* (${item.size})%0A  Qty: ${item.qty} x Rs. ${item.price.toLocaleString()}`).join('%0A%0A');
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
    // If event is provided, check if it's the background or close button
    const modal = document.getElementById('banner-modal');
    modal.style.display = "none";
}

// --- Customization Logic ---

let customOrder = {
    category: '',
    designId: null,
    designName: '',
    designImage: '',
    material: '',
    size: '110*90',
    width: '',
    height: '',
    note: ''
};

function selectCategory(category) {
    customOrder.category = category;
    goToStep('design');
    loadCustomizeDesigns();
}

function loadCustomizeDesigns() {
    const grid = document.getElementById('customize-design-grid');
    if (!grid) return;

    // Use existing products as designs
    grid.innerHTML = products.map(p => `
        <div class="design-card" onclick="selectDesign(${p.id}, '${p.name.replace(/'/g, "\\'")}', '${p.images[0]}', '${p.material}', '${p.category}')">
            <img src="${p.images[0]}" alt="${p.name}">
            <p class="text-center mt-2 text-sm font-semibold">${p.name}</p>
        </div>
    `).join('');
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

    // Update Preview in the next step
    const previewImg = document.getElementById('preview-image');
    const previewName = document.getElementById('preview-name');
    const previewMaterial = document.getElementById('preview-material');
    const previewCategory = document.getElementById('preview-category');

    if (previewImg) previewImg.src = image;
    if (previewName) previewName.textContent = name;
    if (previewMaterial) previewMaterial.textContent = material || '80% Cotton';
    if (previewCategory) previewCategory.textContent = category || 'Printed Design';

    // Smooth transition to next step
    setTimeout(() => {
        goToStep('options');
    }, 200);
}

function toggleCustomSize(isCustom) {
    const inputs = document.getElementById('custom-size-inputs');
    if (isCustom) {
        inputs.style.display = 'flex';
        customOrder.size = 'Custom';
    } else {
        inputs.style.display = 'none';
        const checked = document.querySelector('input[name="cust-size"]:checked');
        if (checked) customOrder.size = checked.value;
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
    if (pdfMat) pdfMat.textContent = customOrder.material || '80% Cotton';
    // WhatsApp Message
    const message = `*Customize Order Request*%0A%0A*Design:* ${customOrder.designName}%0A*Category:* ${customOrder.category || ''}%0A*Material:* ${customOrder.material || ''}%0A*Size:* ${customOrder.size}%0A*Advance Required:* Rs. 500/=%0A%0A*Customer Details:*%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A%0A*Note:* ${customOrder.note || ''}`;

    // Directly open WhatsApp (PDF Download disabled as requested)
    window.open(`https://wa.me/94714433279?text=${message}`, '_blank');
    showToast('Order placed! Redirecting to WhatsApp...', 'success');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

