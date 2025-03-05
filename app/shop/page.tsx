
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePiAuth } from '../../context/PiAuthContext';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

export default function ShopPage() {
  const { user } = usePiAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample products data
  const sampleProducts = [
    { id: 1, name: 'Web Design', price: 50, category: 'Design', image: '/images/ui-workspace.jpg', slug: 'web-design' },
    { id: 2, name: 'Mobile App Development', price: 100, category: 'Development', image: '/images/mobile-design.jpg', slug: 'mobile-app' },
    { id: 3, name: 'Data Analytics', price: 80, category: 'Analytics', image: '/images/data-dashboard.jpg', slug: 'data-analytics' },
    { id: 4, name: 'Digital Marketing', price: 70, category: 'Marketing', image: '/images/tech-tree.jpg', slug: 'digital-marketing' },
    { id: 5, name: 'UI/UX Design', price: 60, category: 'Design', image: '/images/ui-design.jpg', slug: 'ui-design' },
    { id: 6, name: 'SEO Optimization', price: 45, category: 'Marketing', image: '/images/seo-tree.jpg', slug: 'seo-optimization' },
  ];

  const categories = ['All', 'Design', 'Development', 'Analytics', 'Marketing'];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('piShopCart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('piShopCart', JSON.stringify(updatedCart));
  };

  const initiatePayment = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Payment of ${total} Pi will be processed through the PiPayment component`);
  };

  useEffect(() => {
    // Fetch products (using sample data for now)
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
    
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('piShopCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse saved cart', error);
      }
    }
  }, []);

  useEffect(() => {
    // Filter products based on category and search query
    let result = products;
    
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Shop Our Services</h1>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="bg-slate-200 p-4 rounded-lg flex items-center justify-center h-48">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={180} 
                    height={120} 
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-300">{product.category}</p>
                <p className="text-lg font-bold mt-2 flex items-center">
                  <Image src="/images/pi-logo.jpg" width={20} height={20} alt="Pi" className="rounded-full mr-2" />
                  {product.price} Pi
                </p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                  <Link 
                    href={`/product/${product.slug}`}
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Cart Component */}
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        initiatePayment={initiatePayment} 
      />
      
      {/* Footer Navigation */}
      <Footer 
        cartCount={cart.length} 
        openCart={toggleCart} 
      />
    </main>
  );
}
