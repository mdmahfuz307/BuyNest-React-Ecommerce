import { useState } from "react";
import { FaBars, FaHeart, FaHome, FaPalette, FaSearch, FaShoppingBag, FaTimes, FaToolbox } from "react-icons/fa";
import { FaCakeCandles, FaDice, FaRing, FaShirt } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import logo from "/logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { getCartCount } = useCart();
    const { wishlistItems } = useWishlist();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    }
    
  const navItems = [
    { title: "Jewelry & Accessories", path: "/category/jewelry & accessories", icon: FaRing },
    { title: "Clothing & Shoes", path: "/category/clothing & shoes", icon: FaShirt },
    { title: "Home & Living", path: "/category/home & living", icon: FaHome },
    { title: "Wedding & Party", path: "/category/wedding & party", icon: FaCakeCandles },
    { title: "Toys & Entertainment", path: "/category/toys & entertainment", icon: FaDice },
    { title: "Art & Collectibles", path: "/category/art & collectibles", icon: FaPalette },
    { title: "Craft Supplies & Tools", path: "/category/craft supplies & tools", icon: FaToolbox },
  ];
  return (
    <header className="w-full bg-white bg-opacity-95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <nav className="px-4 md:px-16 py-3 md:py-4">
        <div className="flex justify-between items-center gap-2 md:gap-4">
          {/* Search on Desktop */}
          <form onSubmit={handleSearch} className="text-black hidden md:flex items-center gap-2 border-2 border-gray-300 hover:border-red-500 focus-within:border-red-500 transition-colors rounded-lg pl-3 flex-1 max-w-xs">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none py-2 px-2 w-full placeholder-gray-400"
            />
          </form>

          {/* Logo */}
          <Link to="/" className="transform hover:scale-105 transition-transform flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3 md:gap-6 text-black">
            <Link to="/wishlist" className="flex items-center gap-1 md:gap-2 relative group hover:text-red-500 transition-colors whitespace-nowrap">
              <FaHeart className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" /> 
              <span className="hidden md:inline text-xs md:text-sm">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="flex items-center gap-1 md:gap-2 relative group hover:text-red-500 transition-colors whitespace-nowrap">
              <FaShoppingBag className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-xs md:text-sm">Cart</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center gap-3">
            <Link to="/cart" className="relative group">
              <FaShoppingBag className="text-black w-5 h-5 group-hover:text-red-500 transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="group">
              {
                isMenuOpen ? <FaTimes className="w-5 h-5 text-black group-hover:text-red-500 transition-colors"/> : <FaBars className="w-5 h-5 text-black group-hover:text-red-500 transition-colors"/>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Category Navigation */}
      <div className="hidden lg:block border-t-2 border-gray-200 px-4 md:px-16">
        <ul className="flex items-center justify-between text-black gap-1 flex-wrap py-4">
          {navItems.map(({ title, path, icon: IconComponent }) => (
            <li key={title} className="group flex items-center px-1 lg:px-3 py-2 rounded-lg hover:bg-red-50 transition-all duration-300">
              <NavLink
                to={path}
                className={({ isActive}) => `flex items-center gap-1 lg:gap-2 transition-colors text-xs lg:text-sm whitespace-nowrap ${isActive ? 'text-red-500 font-semibold' : 'hover:text-red-500'}`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        {/* Mobile Search */}
        <div className="sm:hidden border-t-2 border-gray-200 px-4 py-3">
          <form onSubmit={handleSearch} className="flex items-center gap-2 border-2 border-gray-300 focus-within:border-red-500 transition-colors rounded-lg pl-3">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none py-2 px-2 w-full text-sm placeholder-gray-400"
            />
          </form>
        </div>

        {/* Mobile Category Menu */}
        <ul className={`bg-gradient-to-b from-gray-900 to-black text-white px-4 py-4 transition-all duration-300 space-y-2 ${isMenuOpen ? "block" : "hidden"}`}>
          {navItems.map(({ title, path, icon: IconComponent }) => (
            <li key={title} className="hover:text-red-500 cursor-pointer transition-colors">
              <Link
                to={path}
                onClick={toggleMenu}
                className="flex items-center gap-2 text-sm py-2"
              >
                <IconComponent className="w-4 h-4" />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
