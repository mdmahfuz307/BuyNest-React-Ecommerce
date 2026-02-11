import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, calculateTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-32 md:pt-40 mb-20">
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some items to get started!</p>
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
        <Link to="/">Home</Link> <span className="font-semibold text-black">/Cart</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <table className="w-full hidden md:table">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Total</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{item.title}</p>
                          <p className="text-gray-600 text-sm">{item.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold">${item.price}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 border rounded w-24">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex-1 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex-1 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition cursor-pointer"
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile View */}
            <div className="md:hidden space-y-4 p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{item.category}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">${item.price}</span>
                    <span className="text-sm text-gray-600">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 border rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex-1 py-1 px-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                      >
                        −
                      </button>
                      <span className="flex-1 text-center font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex-1 py-1 px-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition px-3 py-2 cursor-pointer"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Cart Button */}
          <div className="mt-4 flex justify-between items-center">
            <Link
              to="/"
              className="text-red-500 hover:text-red-700 flex items-center gap-2 transition"
            >
              <FaArrowLeft /> Continue Shopping
            </Link>
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 transition font-semibold cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg p-4 md:p-6 h-fit md:sticky md:top-32 border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Order Summary</h2>

          <div className="space-y-3 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-300">
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold text-green-500">Free</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-600">Tax (estimated):</span>
              <span className="font-semibold">
                ${(parseFloat(calculateTotal()) * 0.1).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-6 md:mb-8">
            <span className="text-lg md:text-xl font-bold">Total:</span>
            <span className="text-xl md:text-2xl font-bold text-red-500">
              ${(parseFloat(calculateTotal()) * 1.1).toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 mb-3 text-sm md:text-base cursor-pointer">
            Checkout
          </button>
          <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-50 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base cursor-pointer">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
