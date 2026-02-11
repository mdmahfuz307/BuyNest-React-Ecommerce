/**
 * Utility functions for eCommerce operations
 */

/**
 * Format price with currency symbol
 * @param {number} price - The price to format
 * @param {string} currency - Currency symbol (default: $)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = '$') => {
  return `${currency}${parseFloat(price).toFixed(2)}`;
};

/**
 * Calculate tax amount
 * @param {number} amount - The amount to calculate tax on
 * @param {number} taxRate - Tax rate as decimal (default: 0.1 for 10%)
 * @returns {number} Tax amount
 */
export const calculateTax = (amount, taxRate = 0.1) => {
  return parseFloat((amount * taxRate).toFixed(2));
};

/**
 * Calculate total with tax
 * @param {number} subtotal - Subtotal amount
 * @param {number} taxRate - Tax rate as decimal
 * @returns {number} Total including tax
 */
export const calculateTotal = (subtotal, taxRate = 0.1) => {
  const tax = calculateTax(subtotal, taxRate);
  return parseFloat((subtotal + tax).toFixed(2));
};

/**
 * Apply discount to price
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage
 * @returns {number} Price after discount
 */
export const applyDiscount = (price, discountPercent) => {
  const discount = (price * discountPercent) / 100;
  return parseFloat((price - discount).toFixed(2));
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Debounce function for search and filters
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} Debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generate unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Check if item is in stock
 * @param {number} quantity - Available quantity
 * @returns {boolean} True if in stock
 */
export const isInStock = (quantity) => {
  return quantity > 0;
};

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

/**
 * Compare two arrays
 * @param {array} arr1 - First array
 * @param {array} arr2 - Second array
 * @returns {boolean} True if arrays are equal
 */
export const arraysEqual = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

/**
 * Remove duplicates from array
 * @param {array} arr - Array to deduplicate
 * @param {string} key - Property key for objects
 * @returns {array} Deduplicated array
 */
export const removeDuplicates = (arr, key) => {
  const seen = new Set();
  return arr.filter((item) => {
    const value = key ? item[key] : item;
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

/**
 * Get average rating from reviews
 * @param {array} reviews - Array of review objects with rating
 * @returns {number} Average rating
 */
export const getAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};
