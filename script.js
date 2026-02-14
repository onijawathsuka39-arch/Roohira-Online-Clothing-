/* Mock Data & Logic for Roohira Online */

const products = [
    {
        id: 1,
        name: 'Bedsheet ',
        description: 'Experience a comfortable sleep today.',
        material: '80% Cotton',
        category: 'Printed Design Bedsheet',
        images: [
            'https://i.ibb.co/1tnLRyBh/Whats-App-Image-2026-02-14-at-8-16-24-PM.jpg',
            'https://i.ibb.co/HfWjh7Rm/Whats-App-Image-2026-02-14-at-8-16-23-PM.jpg'
           
        ],
        stock: 5,
        variants: [
            { size: 'King Size (110*90)', price: 2100 }
           
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
        stock: 2,
        variants: [
            { size: 'Singal(54*80)', price: 950 },
            { size: 'Double(60*90)', price: 1200 }
        ]
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('roohira_cart')) || [];
let user = JSON.parse(localStorage.getItem('roohira_user')) || null;

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
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

// --- UI Updates ---

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('cart-badge');
    if (badge) badge.textContent = count;
}

function updateUserUI() {
    const loginLink = document.getElementById('login-link');
    const userMenu = document.getElementById('user-menu');

    if (user) {
        if (loginLink) loginLink.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'block';
            userMenu.querySelector('span').textContent = user.name.split(' ')[0];
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (userMenu) userMenu.style.display = 'none';
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
    return `
    <div class="product-card">
        <div class="product-image">
            <a href="product.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.name}">
            </a>
            <div class="product-actions">
                <button onclick="addToCartPreview(${product.id})" class="action-btn" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>
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
        // Add first variant as default from shop page
        addToCart(id, 1, product.variants[0].size);
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
    if (product.stock > 0) {
        stockStatus.textContent = 'In Stock';
        stockStatus.style.color = 'green';
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
                
                <div class="border-t border-gray-50 pt-4">
                    <button onclick="toggleOrderDetails('${o.id}')" class="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
                        View Order Items <i class="fas fa-chevron-down text-xs transition-transform" id="icon-${o.id}"></i>
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



