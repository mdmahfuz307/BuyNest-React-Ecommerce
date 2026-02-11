import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 pb-8 border-b-2 border-gray-200 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px] animate-slideUp">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-gray-600 leading-relaxed">
              Your trusted destination for premium fashion, accessories, and lifestyle products. We bring you the best selections from world-renowned brands with exceptional quality and unbeatable prices. Shop with confidence and experience excellence in every purchase.
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-300 transform hover:scale-125" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-300 transform hover:scale-125" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-300 transform hover:scale-125" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-300 transform hover:scale-125" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-gray-800 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold mb-4 text-lg text-gray-800">CATALOG</h4>
            <div className="space-y-3">
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-gray-800 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold mb-4 text-lg text-gray-800">CUSTOMER SERVICES</h4>
            <div className="space-y-3">
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-gray-800 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold mb-4 text-lg text-gray-800">ABOUT US</h4>
            <div className="space-y-3">
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="w-full bg-gray-900 border-t border-gray-300">
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
          <p className="text-white text-center py-6 text-sm">© {currentYear} BuyNest, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
