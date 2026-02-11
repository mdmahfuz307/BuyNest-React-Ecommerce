import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch all products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  // Filter products by category and price
  useEffect(() => {
    let filtered = products;

    if (category && category !== 'all') {
      filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Price filter
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
    }
    // Default: popularity (no change)

    setFilteredProducts(filtered);
  }, [products, category, priceRange, sortBy]);

  // Get unique categories
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-32 md:pt-40 mb-20">
      <div className="flex items-center gap-2 pt-8 text-gray-500 mb-8">
        <a href="/">Home</a> <span className="font-semibold text-black">/Products</span>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        {category === 'all' || !category ? 'All Products' : `${category} Products`}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaFilter /> Filters
            </h2>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-gray-800">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={category === cat || (!category && cat === 'all')}
                      onChange={() => {
                        // Handle category change via URL would be better
                        setSortBy('popularity');
                      }}
                      className="w-4 h-4 rounded"
                    />
                    <span className="capitalize">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-gray-800">Price Range</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Min Price: ${priceRange[0]}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Math.min(parseInt(e.target.value), priceRange[1]), priceRange[1]])
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max Price: ${priceRange[1]}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Math.max(parseInt(e.target.value), priceRange[0])])
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setPriceRange([0, 1000]);
                setSortBy('popularity');
              }}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              <FaFilter /> Filters
            </button>

            <div className="flex items-center gap-2">
              <label className="text-gray-600 font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-500"
              >
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <span className="text-gray-600">
              Showing <strong>{filteredProducts.length}</strong> products
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <Card filteredItems={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No products found</p>
              <p className="text-gray-500">Try adjusting your filters or search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
