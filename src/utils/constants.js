/**
 * Application Constants
 */

// Tax rates
export const TAX_RATE = 0.1; // 10%
export const SHIPPING_COST = 0; // Free shipping

// Storage keys
export const STORAGE_KEYS = {
  CART: 'cart',
  WISHLIST: 'wishlist',
  USER: 'user',
  THEME: 'theme',
};

// API endpoints (if using backend)
export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  ORDERS: '/api/orders',
  USERS: '/api/users',
  CART: '/api/cart',
  WISHLIST: '/api/wishlist',
};

// Product categories
export const PRODUCT_CATEGORIES = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Entertainment',
  'Art & Collectibles',
  'Craft Supplies & Tools',
];

// Sorting options
export const SORT_OPTIONS = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

// Price range limits
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 1000,
  STEP: 10,
};

// Pagination
export const ITEMS_PER_PAGE = 12;

// Toast notification durations (ms)
export const TOAST_DURATION = {
  SHORT: 2000,
  MEDIUM: 4000,
  LONG: 6000,
};

// Debounce delays (ms)
export const DEBOUNCE_DELAY = {
  SEARCH: 300,
  FILTER: 500,
};

// Shopping cart constants
export const CART_CONSTANTS = {
  MAX_QUANTITY: 999,
  MIN_QUANTITY: 1,
};

// URLs
export const URLS = {
  HOME: '/',
  CART: '/cart',
  WISHLIST: '/wishlist',
  SHOP: '/shop',
  SEARCH: '/search',
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please try again.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  REQUIRED_FIELD: 'This field is required.',
  ADD_TO_CART_ERROR: 'Failed to add item to cart.',
  REMOVE_FROM_CART_ERROR: 'Failed to remove item from cart.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_CART: 'Product added to cart!',
  REMOVED_FROM_CART: 'Product removed from cart.',
  ADDED_TO_WISHLIST: 'Product added to wishlist!',
  REMOVED_FROM_WISHLIST: 'Product removed from wishlist.',
  NEWSLETTER_SUBSCRIBED: 'Thank you for subscribing!',
};
