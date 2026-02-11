# 🛒 BuyNest-React-Ecommerce

A modern, fully responsive React-based E-commerce platform with complete shopping cart functionality, wishlist management, product filtering, and search capabilities.

## 🚀 Features Implemented

### Core Shopping Features
-  **Product Listing Page** - Browse all products with grid layout
-  **Single Product Detail Page** - Detailed product information with images
-  **Category Filtering** - Filter products by category
-  **Sorting Functionality** - Sort by popularity, newest, price (low-high, high-low)
-  **Search Functionality** - Real-time product search by title, category, or description

### Shopping Cart Management
-  **Add to Cart** - Quick add from product cards or detail page
-  **Persistent Cart** - Data stored in localStorage (survives page refresh)
-  **Full Cart Management** - View, edit, and manage cart items
-  **Quantity Adjustment** - Increase/decrease item quantity with +/- buttons
-  **Remove Items** - Delete products from cart
-  **Real-time Total Calculation** - Automatic price updates with tax estimation
-  **Cart Badge** - Navbar displays cart item count
-  **Empty Cart State** - Helpful message when cart is empty

### Wishlist/Favorites
-  **Add to Wishlist** - Save products for later
-  **Wishlist Page** - View all saved items
-  **Persistent Wishlist** - Data stored in localStorage
-  **Quick Actions** - Move items to cart directly from wishlist

### User Experience
-  **Responsive Design** - Mobile, tablet, and desktop optimized
-  **Smooth Animations** - Hover effects and transitions
-  **Newsletter Integration** - Email subscription component
-  **Toast Notifications** - User feedback on actions
-  **Breadcrumb Navigation** - Easy navigation tracking


## 🗂️ Project Structure

```
BuyNest-React-Ecommerce/
├── src/
│   ├── components/
│   │   ├── Card.jsx              (Product cards - updated with animations)
│   │   ├── Navbar.jsx            (Header - icons + animations)
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home/                 (Homepage)
│   │   ├── Cart.jsx
│   │   ├── CategoryProducts.jsx
│   │   ├── Wishlist.jsx
│   │   └── SearchResults.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── WishlistContext.jsx
│   │   └── SearchContext.jsx
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   │
│   ├── router/
│   │   └── Router.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css              (Updated with animations)
│   └── App.css
│
├── public/
│   ├── logo.svg
│   ├── products.json
│   └── images/
│
└── Configuration
    ├── package.json            (Updated: React 19, Tailwind 4, Vite 5.2)
    ├── tailwind.config.js
    ├── vite.config.js
    └── .env.example
```

---


## 🛠️ Technologies Used

- **React 18.3.1** - UI library
- **React Router DOM 6.26.0** - Client-side routing
- **Vite 5.4.8** - Build tool
- **Tailwind CSS 3.4.13** - Styling
- **React Icons 5.3.0** - Icon library
- **Swiper 11.1.14** - Carousel component

## 📦 Installation & Setup

### Steps

1. **Clone the repository**
```bash
git clone <https://github.com/mdmahfuz307/BuyNest-React-Ecommerce.git>
cd BuyNest-React-Ecommerce

```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
# or
pnpm build
```

## 🔄 State Management

### Cart Context
- Manages shopping cart state
- Provides functions: `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`, `calculateTotal()`, `getCartCount()`
- Persists data to localStorage

### Wishlist Context
- Manages wishlist/favorites state
- Provides functions: `addToWishlist()`, `removeFromWishlist()`, `isInWishlist()`, `toggleWishlist()`, `clearWishlist()`
- Persists data to localStorage

### Search Context
- Manages search query and results
- Provides functions: `handleSearch()`, `clearSearch()`

## 🛣️ Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage with products and categories |
| `/shop/:id` | SingleProduct | Product detail page |
| `/cart` | Cart | Shopping cart management |
| `/category/:category` | CategoryProducts | Products filtered by category |
| `/wishlist` | Wishlist | Saved items |
| `/search?q=:query` | SearchResults | Search results |

## 💾 LocalStorage Data Structure

### Cart (key: 'cart')
```javascript
[
  {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    quantity: number
  }
]
```

### Wishlist (key: 'wishlist')
```javascript
[
  {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string
  }
]
```

## 🎨 UI Components Breakdown

### Navbar
- Logo and branding
- Search bar with form submission
- Cart badge with item count
- Wishlist icon with count
- Mobile-responsive menu

### Product Card
- Product image with hover zoom effect
- Title and category
- Price display
- Quick action buttons (Add to Cart, Add to Wishlist)
- Link to product detail page

### Cart Page
- Desktop table view of cart items
- Mobile card view
- Quantity adjustment controls
- Remove item buttons
- Order summary and totals
- Checkout button

### CategoryProducts Page
- Sidebar filters (price range, category)
- Sorting options
- Product grid display
- Mobile-friendly filter toggle
- Product count display

### Wishlist Page
- Product cards with details
- Remove from wishlist button
- Add to cart directly
- Empty state messaging

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration. Modify `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Vite Configuration
Development and build settings are in `vite.config.js`. The project is configured with React plugin for Fast Refresh.

## 📱 Responsive Breakpoints

- **Mobile** - Below 640px
- **Tablet** - 640px to 1024px
- **Desktop** - 1024px and above
- **Large Desktop** - 1536px and above

## 🚀 Performance Optimizations

- Component-level code splitting with React Router
- Efficient state management with Context API
- LocalStorage for persistent client-side data
- Lazy loading of product images
- Optimized Tailwind CSS compilation

## 🎯 Future Enhancements

- User authentication and accounts
- Payment gateway integration (Stripe, PayPal)
- Product reviews and ratings
- Inventory management
- Order history and tracking
- Admin dashboard
- API integration for real backend
- Email notifications
- Advanced filtering options

## 📝 Environment Variables

```env
VITE_API_BASE_URL          # API endpoint (optional)
VITE_STORE_NAME            # Store branding
VITE_STORE_CURRENCY        # Currency symbol
VITE_ENABLE_GIFT_CARDS     # Feature flag
VITE_ENABLE_WISHLISTS      # Feature flag
VITE_ENABLE_REVIEWS        # Feature flag
VITE_GA_ID                 # Google Analytics
VITE_STRIPE_PUBLIC_KEY     # Stripe integration
VITE_PAYPAL_CLIENT_ID      # PayPal integration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Support

For support, please create an issue in the repository or contact the development team.

---

**Happy Shopping! 🛍️**
