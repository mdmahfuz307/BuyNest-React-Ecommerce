import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Card = ({ filteredItems }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
      {filteredItems.slice(0, 8).map((item, index) => (
        <div 
          key={item.id} 
          className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Link to={`/shop/${item.id}`} className="block relative overflow-hidden bg-gray-100 h-64 rounded-t-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Quick action buttons on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(item, 1);
                }}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-lg hover:bg-red-600 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <FaShoppingCart className="text-lg" /> Add
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(item);
                }}
                className={`p-2.5 rounded-lg transition-all duration-300 transform scale-75 group-hover:scale-100 cursor-pointer ${
                  isInWishlist(item.id)
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white text-red-500 hover:bg-red-50 shadow-lg'
                }`}
              >
                <FaHeart className="text-lg" />
              </button>
            </div>
          </Link>
          <div className="p-4">
            <Link to={`/shop/${item.id}`}>
              <h4 className="text-base font-semibold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors duration-300">{item.title}</h4>
            </Link>

            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="font-bold text-red-500 text-lg">${item.price}</p>
            </div>
            
            <button 
              onClick={() => addToCart(item, 1)}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
