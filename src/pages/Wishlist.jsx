import { FaArrowLeft, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-32 md:pt-40 mb-20">
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">Add items to your wishlist to save them for later!</p>
          <Link
            to="/"
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-32 md:pt-40 mb-20">
      <div className="flex items-center gap-2 pt-8 text-gray-500 mb-8">
        <Link to="/">Home</Link> <span className="font-semibold text-black">/Wishlist</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fadeIn">
            <Link to={`/shop/${item.id}`} className="block overflow-hidden bg-gray-100 h-40 md:h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <div className="p-3 md:p-4">
              <Link to={`/shop/${item.id}`}>
                <h3 className="font-semibold text-sm md:text-base text-gray-800 hover:text-red-500 mb-1 line-clamp-2 transition-colors">
                  {item.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">{item.category}</p>
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <span className="text-base md:text-lg font-bold text-red-500">${item.price}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-semibold">In Stock</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1 font-semibold cursor-pointer"
                >
                  <FaShoppingCart className="w-3 h-3 md:w-4 md:h-4" /> 
                  <span className="hidden sm:inline">Add to Cart</span>
                  <span className="sm:hidden">Add</span>
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-3 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer"
                >
                  <FaTrash className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clear Wishlist Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={clearWishlist}
          className="text-red-500 hover:text-red-700 transition font-semibold cursor-pointer"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
