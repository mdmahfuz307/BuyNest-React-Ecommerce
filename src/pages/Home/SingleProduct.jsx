import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const demoText = {
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const SingleProduct = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("/products.json");
              const data = await response.json();
             const product = data.filter((p) => p.id == id)
             setProducts(product[0])
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    }, [id])

    const {image, title, category, price} = products;

    const handleAddToCart = () => {
      addToCart(products, quantity);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    };

    const handleBuyNow = () => {
      addToCart(products, quantity);
      navigate('/cart');
    };

  return (
    <div className="pt-32 md:pt-40 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      
      <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/" className="font-semibold text-black">/ Shop</a>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          Product added to cart! ✓
        </div>
      )}

      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-max">
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt="Product-Image"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between lg:col-span-2">
                <div>
                  {/* Product Title */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-500 font-bold">
                    {title}
                  </h1>
                  {/* Product Description */}
                  <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                    Discover authentic quality and premium craftsmanship in this carefully selected product. Each item is rigorously inspected to ensure you receive only the finest materials and exceptional durability. Experience the perfect blend of style and functionality that customers have loved and trusted.
                  </p>
                  {/* Star Ratings */}
                  <div className="my-4 md:my-6 flex items-center gap-2">
                    <div className="flex text-yellow-500 gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} className="text-base md:text-lg" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm md:text-base">(128 reviews)</span>
                  </div>
                  {/* Product Price */}
                  <div className="mb-4 md:mb-6">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-red-500 font-bold">
                      ${price}
                    </span>
                  </div>
                </div>
                {/* Quantity Input and Order Button */}
                <div>
                  <div className="flex flex-col gap-4 w-full text-left">
                    {/* Quantity Label */}
                    <label className="font-bold text-sm md:text-base">Quantity</label>
                    {/* Quantity Input with +/- buttons */}
                    <div className="flex items-center gap-2 w-full md:w-48">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="flex-1 border-2 border-gray-300 px-2 md:px-3 py-2 rounded-lg hover:bg-gray-100 hover:border-red-500 transition font-bold text-lg cursor-pointer"
                      >
                        −
                      </button>
                      <input
                        className="flex-1 border-2 border-gray-300 text-sm md:text-base font-bold text-center rounded-lg outline-none py-2 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="flex-1 border-2 border-gray-300 px-2 md:px-3 py-2 rounded-lg hover:bg-gray-100 hover:border-red-500 transition font-bold text-lg cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="w-full my-6 space-y-2 md:space-y-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full py-2 md:py-3 px-4 bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex justify-center items-center gap-2 shadow-md cursor-pointer"
                    >
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="w-full py-2 md:py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex justify-center items-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Buy Now</span>
                      <FaArrowAltCircleRight />
                    </button>
                    <button
                      onClick={() => toggleWishlist(products)}
                      className={`w-full py-2 md:py-3 px-4 rounded-lg text-sm md:text-base font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 flex justify-center items-center gap-2 shadow-md cursor-pointer ${
                        isInWishlist(id)
                          ? 'bg-red-500 text-white border-red-500 hover:bg-red-600'
                          : 'bg-white text-red-500 border-red-500 hover:bg-red-50'
                      }`}
                    >
                      <FaHeart />
                      <span>{isInWishlist(id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* product details */}
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Details</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {demoText.details} {demoText.details}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {demoText.description} {demoText.description}
          </p>
        </div>
      </div>

      <div className="mt-5 mb-10">
        <h2 className="text-sm font-medium text-gray-900">Highlights</h2>
        <div className="mt-4 space-y-4">
          <li className="text-sm text-gray-600">
            {demoText.highlights[0]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[1]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[2]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[3]}
          </li>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
