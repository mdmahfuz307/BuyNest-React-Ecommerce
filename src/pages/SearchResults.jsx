import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        (product.description && product.description.toLowerCase().includes(lowercaseQuery))
    );

    setResults(filtered);
  }, [query, allProducts]);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-32 md:pt-40 mb-20">
      <div className="flex items-center gap-2 pt-8 text-gray-500 mb-8">
        <Link to="/">Home</Link> <span className="font-semibold text-black">/Search Results</span>
      </div>

      <h1 className="text-4xl font-bold mb-2 text-gray-800">Search Results</h1>
      <p className="text-gray-600 mb-8">
        Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for{' '}
        <strong>"{query}"</strong>
      </p>

      {results.length > 0 ? (
        <Card filteredItems={results} />
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Results Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find any products matching "{query}"
          </p>
          <Link
            to="/"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
          >
            Back to Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
