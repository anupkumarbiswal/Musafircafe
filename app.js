/**
 * Musafir Cafe - Jharipani, Mussoorie
 * Main Client Application Script
 * Contact / WhatsApp: +91 8287201301
 */

// ==========================================================================
// Cafe Menu Data
// ==========================================================================
const MENU_ITEMS = [
  // Artisan Coffee
  {
    id: "c1",
    name: "Musafir Pour-Over (V60)",
    category: "coffee",
    price: 190,
    badge: "Specialty",
    badgeType: "special",
    desc: "Single-origin estate Arabica beans from Chikmagalur, hand-poured with mountain spring water for bright berry and floral notes.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c2",
    name: "Mountain Hazelnut Cappuccino",
    category: "coffee",
    price: 210,
    badge: "Bestseller",
    badgeType: "special",
    desc: "Rich double espresso with silky textured steamed milk and roasted mountain hazelnut infusion, dusted with cocoa.",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c3",
    name: "Himalayan Cortado",
    category: "coffee",
    price: 180,
    badge: "Chef Pick",
    badgeType: "special",
    desc: "Equal parts intense double ristretto and warm velvety milk served in a rustic rock glass.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c4",
    name: "Cinnamon Spiced Flat White",
    category: "coffee",
    price: 220,
    badge: "Signature",
    badgeType: "special",
    desc: "Double shot of dark roast blend micro-foamed to perfection with a whisper of freshly grated Ceylon cinnamon.",
    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c5",
    name: "Classic Espresso Romano",
    category: "coffee",
    price: 150,
    badge: "Pure Espresso",
    badgeType: "special",
    desc: "A bold, syrupy double espresso served with a fresh twist of Himalayan hill lemon to highlight acidity.",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
  },

  // Cold Refreshers
  {
    id: "cr1",
    name: "Doon Valley 18hr Cold Brew",
    category: "cold",
    price: 210,
    badge: "Cold Steeped",
    badgeType: "special",
    desc: "Steeped slowly for 18 hours in cold filtered mountain water. Ultra-smooth with zero bitterness and natural chocolate finish.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cr2",
    name: "Himalayan Honey Iced Latte",
    category: "cold",
    price: 240,
    badge: "Sweet & Cool",
    badgeType: "special",
    desc: "Pulled espresso shaken over ice with pure raw forest honey from Uttarakhand and chilled creamy milk.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cr3",
    name: "Wild Berry & Mint Sparkler",
    category: "cold",
    price: 190,
    badge: "Veg & Fruity",
    badgeType: "veg",
    desc: "Muddled seasonal Himalayan wild berries, garden-fresh mountain mint, crushed ice, and effervescent club soda.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },

  // Teas & Warmers
  {
    id: "t1",
    name: "Kashmiri Kahwa with Almonds & Saffron",
    category: "tea",
    price: 180,
    badge: "Himalayan",
    badgeType: "special",
    desc: "Fragrant green tea simmered with pure Kashmiri saffron strands, green cardamom, cinnamon, and slivered almonds.",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "t2",
    name: "Belgian Dark Hot Chocolate",
    category: "tea",
    price: 240,
    badge: "Customer Favorite",
    badgeType: "special",
    desc: "Melted 70% dark Belgian chocolate whisked with whole dairy milk, topped with toasted marshmallows and dark shavings.",
    img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "t3",
    name: "Pahadi Buransh Herbal Infusion",
    category: "tea",
    price: 160,
    badge: "Local Flower",
    badgeType: "veg",
    desc: "Soothing crimson tea brewed with naturally dried wild Rhododendron petals, ginger, and raw hill honey.",
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "t4",
    name: "Jharipani Kadak Masala Chai",
    category: "tea",
    price: 110,
    badge: "Desi Classic",
    badgeType: "veg",
    desc: "Robust Assam leaf brewed with crushed ginger, hill green cardamom, black pepper, and fresh milk in traditional kulhad style.",
    img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80"
  },

  // Mountain Comforts
  {
    id: "f1",
    name: "Jharipani Mountain Maggi Bowl",
    category: "comforts",
    price: 140,
    badge: "Iconic Comfort",
    badgeType: "veg",
    desc: "Tossed with butter, fresh peas, bell peppers, sweet corn, and our signature Musafir mountain spices. Pure hill nostalgia.",
    img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "f2",
    name: "Steaming Tibetan Dumplings (Momos)",
    category: "comforts",
    price: 190,
    badge: "Steamed / Fried",
    badgeType: "veg",
    desc: "Thinly hand-rolled wrappers stuffed with minced garden greens, paneer, and mountain spices. Served with fire-roasted tomato-sesame dip.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "f3",
    name: "Truffle & Rosemary Mountain Fries",
    category: "comforts",
    price: 210,
    badge: "Crispy",
    badgeType: "veg",
    desc: "Double-cooked thick cut hill potatoes tossed with fragrant truffle oil, Himalayan pink salt, and fresh garden rosemary.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "f4",
    name: "Wild Mushroom & Garlic Sourdough Toast",
    category: "comforts",
    price: 260,
    badge: "Chef Special",
    badgeType: "special",
    desc: "Crusty artisanal sourdough toasted with slow-cooked garlic confit butter, sautéed wild mushrooms, and thyme ricotta.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "f5",
    name: "Wood-Fired Margherita Pizza (10\")",
    category: "comforts",
    price: 380,
    badge: "Wood Fired",
    badgeType: "veg",
    desc: "Crispy thin crust topped with crushed San Marzano tomato sauce, fresh buffalo mozzarella, virgin olive oil, and sweet basil leaves.",
    img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80"
  },

  // Bakery & Sweets
  {
    id: "b1",
    name: "Warm Walnut Brownie with Vanilla Gelato",
    category: "bakery",
    price: 220,
    badge: "Fudgy Indulgence",
    badgeType: "special",
    desc: "Baked with local Akhrot (walnuts) and 60% cocoa chocolate, served sizzling warm with a scoop of vanilla bean gelato.",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "b2",
    name: "Mussoorie Apple Cinnamon Pie",
    category: "bakery",
    price: 240,
    badge: "Fresh Baked",
    badgeType: "special",
    desc: "Juicy organic Uttarakhand hill apples stewed with brown sugar and nutmeg, wrapped in buttery flaky crust.",
    img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "b3",
    name: "Wild Blueberry Cheesecake",
    category: "bakery",
    price: 260,
    badge: "Smooth & Rich",
    badgeType: "special",
    desc: "Classic velvety New York style baked cheesecake layered with wild mountain blueberry compote on graham base.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  }
];

// ==========================================================================
// App State
// ==========================================================================
let cart = [];
const CAFE_PHONE = "8287201301";
const CAFE_PHONE_INTL = "918287201301";

// Load cart from localStorage
try {
  const savedCart = localStorage.getItem("musafir_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = [];
}

// ==========================================================================
// DOM Elements
// ==========================================================================
const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.getElementById("menuTabs");
const cartBadge = document.getElementById("cartBadge");
const mobileBadgeCount = document.getElementById("mobileBadgeCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartDrawerItems = document.getElementById("cartDrawerItems");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const sendWhatsAppOrderBtn = document.getElementById("sendWhatsAppOrderBtn");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const mobileCartBtn = document.getElementById("mobileCartBtn");

const reservationModal = document.getElementById("reservationModal");
const openReserveBtn = document.getElementById("openReserveBtn");
const heroReserveBtn = document.getElementById("heroReserveBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalReservationForm = document.getElementById("modalReservationForm");
const reservationForm = document.getElementById("reservationForm");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const drawerOverlay = document.getElementById("drawerOverlay");
const toastNotification = document.getElementById("toastNotification");
const navbar = document.getElementById("navbar");

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems("all");
  updateCartUI();
  setupEventListeners();
  setMinDateFields();
});

// ==========================================================================
// Menu Rendering & Filtering
// ==========================================================================
function renderMenuItems(filterCategory = "all") {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const filteredItems = filterCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filterCategory);

  filteredItems.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <span class="menu-badge ${item.badgeType}">${item.badge}</span>
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">₹${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <button type="button" class="btn-add-cart" onclick="addToOrder('${item.id}')">
            <span>+ Add to Tray</span>
          </button>
          <a href="https://wa.me/${CAFE_PHONE_INTL}?text=Hi%20Musafir%20Cafe!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.name)}%20(₹${item.price})" target="_blank" rel="noopener noreferrer" class="order-wa-link">
            <span>Quick WhatsApp</span>
          </a>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Filter button handling
if (menuTabs) {
  menuTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    menuTabs.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });

    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    const category = btn.dataset.category;
    renderMenuItems(category);
  });
}

// ==========================================================================
// Order Tray / Cart Management
// ==========================================================================
window.addToOrder = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.id === itemId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${item.name}" to your tray!`);
};

window.changeCartQty = function(itemId, delta) {
  const index = cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
};

function saveCart() {
  try {
    localStorage.setItem("musafir_cart", JSON.stringify(cart));
  } catch (e) {
    // Ignore storage errors
  }
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartBadge) cartBadge.textContent = totalCount;
  if (mobileBadgeCount) mobileBadgeCount.textContent = totalCount;
  if (cartTotalPrice) cartTotalPrice.textContent = `₹${totalPrice}`;

  if (!cartDrawerItems) return;

  if (cart.length === 0) {
    cartDrawerItems.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-icon">☕</span>
        <h4>Your tray is empty</h4>
        <p>Explore our menu and add your favorite coffees and mountain bites!</p>
      </div>
    `;
    if (sendWhatsAppOrderBtn) sendWhatsAppOrderBtn.disabled = true;
  } else {
    cartDrawerItems.innerHTML = "";
    cart.forEach(item => {
      const row = document.createElement("div");
      row.className = "cart-item-row";
      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">₹${item.price * item.qty} (₹${item.price} each)</span>
        </div>
        <div class="cart-item-controls">
          <button type="button" class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
          <span style="font-weight:700; min-width:18px; text-align:center;">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
        </div>
      `;
      cartDrawerItems.appendChild(row);
    });

    if (sendWhatsAppOrderBtn) sendWhatsAppOrderBtn.disabled = false;
  }
}

function openCart() {
  if (cartDrawer) {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
  }
  if (drawerOverlay) drawerOverlay.classList.add("active");
}

function closeCart() {
  if (cartDrawer) {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
  }
  if (!mobileDrawer || !mobileDrawer.classList.contains("open")) {
    if (drawerOverlay) drawerOverlay.classList.remove("active");
  }
}

// WhatsApp Order Builder
if (sendWhatsAppOrderBtn) {
  sendWhatsAppOrderBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    let itemsText = cart.map(i => `• ${i.qty}x ${i.name} — ₹${i.price * i.qty}`).join("\n");
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const message = `*☕ New Order Request - Musafir Cafe (Jharipani, Mussoorie)*\n\n` +
      `*Order Details:*\n${itemsText}\n\n` +
      `*Estimated Total:* ₹${total}\n\n` +
      `*Customer Note:* Please confirm availability. I will pick up / dine-in at Musafir Cafe!`;

    const waUrl = `https://wa.me/${CAFE_PHONE_INTL}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    showToast("Order prepared! Opening WhatsApp...");
  });
}

// ==========================================================================
// Table Reservations
// ==========================================================================
function handleReservationSubmit(e, form) {
  e.preventDefault();
  const formData = new FormData(form);
  
  const name = form.querySelector("[name='name']") ? form.querySelector("[name='name']").value.trim() : form.querySelector("#mResName").value.trim();
  const phone = form.querySelector("[name='phone']") ? form.querySelector("[name='phone']").value.trim() : form.querySelector("#mResPhone").value.trim();
  const guests = form.querySelector("[name='guests']") ? form.querySelector("[name='guests']").value : form.querySelector("#mResGuests").value;
  const date = form.querySelector("[name='date']") ? form.querySelector("[name='date']").value : form.querySelector("#mResDate").value;
  const time = form.querySelector("[name='time']") ? form.querySelector("[name='time']").value : form.querySelector("#mResTime").value;
  const seating = form.querySelector("[name='seating']") ? form.querySelector("[name='seating']").value : (form.querySelector("#mResArea") ? form.querySelector("#mResArea").value : "Any");
  const notes = form.querySelector("[name='notes']") ? form.querySelector("[name='notes']").value.trim() : "";

  if (!name || !phone || !date) {
    showToast("Please fill in all required fields!");
    return;
  }

  const reservationMessage = 
    `*🏔️ Table Reservation - Musafir Cafe, Jharipani*\n\n` +
    `• *Name:* ${name}\n` +
    `• *Phone:* ${phone}\n` +
    `• *Guests:* ${guests}\n` +
    `• *Date:* ${date}\n` +
    `• *Time Slot:* ${time}\n` +
    `• *Seating Preference:* ${seating}\n` +
    (notes ? `• *Special Notes:* ${notes}\n\n` : `\n`) +
    `Kindly confirm table availability. Thank you!`;

  const waUrl = `https://wa.me/${CAFE_PHONE_INTL}?text=${encodeURIComponent(reservationMessage)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");

  showToast("Reservation request sent! Confirming via WhatsApp.");

  // Close modal if open
  if (reservationModal && reservationModal.open) {
    reservationModal.close();
  }
  form.reset();
  setMinDateFields();
}

if (reservationForm) {
  reservationForm.addEventListener("submit", (e) => handleReservationSubmit(e, reservationForm));
}

if (modalReservationForm) {
  modalReservationForm.addEventListener("submit", (e) => handleReservationSubmit(e, modalReservationForm));
}

// Modal open/close
function openModal() {
  if (reservationModal) {
    if (typeof reservationModal.showModal === "function") {
      reservationModal.showModal();
    } else {
      reservationModal.setAttribute("open", "");
    }
  }
}

function closeModal() {
  if (reservationModal) {
    if (typeof reservationModal.close === "function") {
      reservationModal.close();
    } else {
      reservationModal.removeAttribute("open");
    }
  }
}

// Set minimum date to today
function setMinDateFields() {
  const today = new Date().toISOString().split("T")[0];
  const dateInputs = document.querySelectorAll("input[type='date']");
  dateInputs.forEach(input => {
    input.min = today;
    if (!input.value) input.value = today;
  });
}

// ==========================================================================
// Mobile Navigation Drawer
// ==========================================================================
function openMobileDrawer() {
  if (mobileDrawer) mobileDrawer.classList.add("open");
  if (drawerOverlay) drawerOverlay.classList.add("active");
  if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "true");
}

function closeMobileDrawer() {
  if (mobileDrawer) mobileDrawer.classList.remove("open");
  if (!cartDrawer || !cartDrawer.classList.contains("open")) {
    if (drawerOverlay) drawerOverlay.classList.remove("active");
  }
  if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "false");
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  if (!toastNotification) return;
  toastNotification.textContent = message;
  toastNotification.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3200);
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Cart
  if (openCartBtn) openCartBtn.addEventListener("click", openCart);
  if (mobileCartBtn) mobileCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);

  // Reservation Dialog
  if (openReserveBtn) openReserveBtn.addEventListener("click", openModal);
  if (heroReserveBtn) heroReserveBtn.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (reservationModal) {
    reservationModal.addEventListener("click", (e) => {
      if (e.target === reservationModal) closeModal();
    });
  }

  // Drawer
  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeMobileDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", () => {
      closeMobileDrawer();
      closeCart();
    });
  }

  // Close drawer when link clicked
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", closeMobileDrawer);
  });

  // Sticky Navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinksList = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute("id");
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
