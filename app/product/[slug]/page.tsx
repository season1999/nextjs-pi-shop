"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { usePiAuth } from '../../../context/PiAuthContext';

// Sample product data (unchanged)
const productsData = {
  'web-design': {
    id: 1,
    name: 'Web Design',
    price: 50,
    category: 'Design',
    image: '/pitech-logo.jpg',
    description: 'Professional web design services to create modern, responsive websites that engage users and drive conversions. Our team of expert designers will create a custom website that represents your brand and meets your business goals.',
    features: [
      'Responsive design for all devices',
      'Custom UI/UX design',
      'SEO-friendly structure',
      'Fast loading speed optimization',
      'User-friendly navigation',
      'Social media integration'
    ],
    deliverables: [
      'Complete website design files',
      'Ready-to-deploy HTML/CSS/JS code',
      '2 rounds of revisions',
      'Browser compatibility testing',
      '30-day support after delivery'
    ]
  },
  'mobile-app': {
    id: 2,
    name: 'Mobile App Development',
    price: 100,
    category: 'Development',
    image: '/images/mobile-app.jpg',
    description: 'End-to-end mobile application development for iOS and Android platforms. Our development team creates intuitive, high-performance apps that deliver exceptional user experiences and drive business growth.',
    features: [
      'Cross-platform development',
      'Native app experience',
      'Offline functionality',
      'Push notifications',
      'User authentication',
      'In-app purchases integration'
    ],
    deliverables: [
      'Complete source code',
      'App deployment to stores',
      '3 rounds of revisions',
      'Performance testing',
      '60-day support after launch'
    ]
  },
  'data-analytics': {
    id: 3,
    name: 'Data Analytics',
    price: 80,
    category: 'Analytics',
    image: '/images/data-analytics.jpg',
    description: 'Comprehensive data analytics services to help you make data-driven decisions. Our experts will analyze your data, create meaningful visualizations, and provide actionable insights to optimize your business processes.',
    features: [
      'Data collection and cleaning',
      'Advanced statistical analysis',
      'Custom dashboard creation',
      'Predictive modeling',
      'Trend identification',
      'Regular reporting'
    ],
    deliverables: [
      'Detailed analytics report',
      'Interactive dashboards',
      'Data visualization assets',
      'Strategic recommendations',
      'Ongoing data monitoring'
    ]
  },
  'digital-marketing': {
    id: 4,
    name: 'Digital Marketing',
    price: 70,
    category: 'Marketing',
    image: '/images/tech-tree.jpg',
    description: 'Strategic digital marketing services to increase your online presence and drive customer acquisition. Our marketing specialists will develop and implement customized strategies to reach your target audience and achieve your business objectives.',
    features: [
      'SEO optimization',
      'Social media marketing',
      'Content strategy',
      'Email marketing campaigns',
      'PPC advertising',
      'Performance tracking'
    ],
    deliverables: [
      'Marketing strategy document',
      'Campaign setup and management',
      'Content calendar',
      'Monthly performance reports',
      'Competitor analysis'
    ]
  },
  'ui-design': {
    id: 5,
    name: 'UI/UX Design',
    price: 60,
    category: 'Design',
    image: '/images/ui-design.jpg',
    description: 'User-centric UI/UX design services to create intuitive and engaging digital experiences. Our design team follows a human-centered approach to develop interfaces that delight users and achieve business goals.',
    features: [
      'User research',
      'Information architecture',
      'Wireframing and prototyping',
      'Visual design',
      'Usability testing',
      'Design system creation'
    ],
    deliverables: [
      'Complete UI design files',
      'Interactive prototypes',
      'User flow diagrams',
      'Style guide',
      'Design system components'
    ]
  },
  'seo-optimization': {
    id: 6,
    name: 'SEO Optimization',
    price: 45,
    category: 'Marketing',
    image: '/images/seo-tree.jpg',
    description: 'Comprehensive SEO services to improve your website\'s visibility in search engines. Our SEO experts will optimize your website structure, content, and backlink profile to increase organic traffic and improve your search engine rankings.',
    features: [
      'Keyword research and analysis',
      'On-page SEO optimization',
      'Technical SEO audit',
      'Content optimization',
      'Backlink strategy',
      'Performance tracking'
    ],
    deliverables: [
      'Final logo in various formats (PNG, JPG, SVG)',
      'Source files (AI, PSD)',
      'Color palette guide',
      'Typography specifications',
      'Usage guidelines'
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const { user } = usePiAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]); // Added cart state

  const slug = params.slug;

  useEffect(() => {
    // In a real app, fetch product data from an API
    // For now, we're using the local data
    if (productsData[slug]) {
      setProduct(productsData[slug]);
    }
    setLoading(false);
  }, [slug]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const initiatePayment = () => {
    // Placeholder for payment initiation
    console.log("Initiating payment...");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white flex flex-col items-center justify-center">
        <div className="text-2xl mb-4">Product not found</div>
        <Link href="/shop" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      {/* Header with Navigation (unchanged) */}
      <header className="pt-6 pb-4 px-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/pitech-logo.jpg"
                alt="Pi Tech Shop Logo"
                width={50}
                height={50}
                className="mr-2 rounded-md"
                priority
              />
            </Link>
            <h1 className="text-2xl font-bold ml-2">Pi Tech Shop</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="hover:text-purple-300 transition">Home</Link>
            <Link href="/shop" className="hover:text-purple-300 transition">Shop Now</Link>
            <Link href="/about" className="hover:text-purple-300 transition">About Us</Link>
            <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
            <Link href="/mission" className="hover:text-purple-300 transition">Mission & Vision</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb (unchanged) */}
      <div className="bg-black/20 py-2">
        <div className="container mx-auto px-6">
          <div className="text-sm">
            <Link href="/" className="hover:text-purple-300">Home</Link> &gt; 
            <Link href="/shop" className="mx-2 hover:text-purple-300">Shop</Link> &gt; 
            <span className="text-purple-300">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white/5 p-8 rounded-lg flex items-center justify-center">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={400} 
              height={300} 
              className="rounded-lg object-cover shadow-xl"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="mb-4 text-purple-300">{product.category}</div>
            <div className="text-3xl font-bold mb-6">{product.price} Pi</div>
            <p className="text-gray-300 mb-8">{product.description}</p>

            <div className="space-y-4 mb-8">
              <button 
                onClick={() => addToCart(product)}
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  addedToCart 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-purple-600 hover:bg-purple-700'
                } transition`}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              <button 
                className="w-full py-3 px-4 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
              >
                Buy Now with Pi
              </button>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-300">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deliverables Section (unchanged) */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">What You'll Receive</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.deliverables.map((item, index) => (
              <li key={index} className="bg-white/5 p-4 rounded-lg flex items-start">
                <div className="text-purple-400 mr-3">✓</div>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Products (unchanged) */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productsData)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link 
                  href={`/product/${Object.keys(productsData).find(key => productsData[key].id === relatedProduct.id)}`} 
                  key={relatedProduct.id}
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition"
                >
                  <div className="bg-gray-200 rounded-lg flex items-center justify-center h-32 mb-4">
                    <Image 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      width={100} 
                      height={80}
                      className="object-cover rounded-lg"  
                    />
                  </div>
                  <h3 className="font-semibold">{relatedProduct.name}</h3>
                  <div className="text-purple-300 text-sm">{relatedProduct.price} Pi</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart cart={cart} removeFromCart={removeFromCart} initiatePayment={initiatePayment} />

      {/* Footer Navigation */}
      <Footer cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      {/* Footer (unchanged) */}
      <footer className="py-8 px-6 border-t border-gray-700 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pi Tech Shop - SEASON2077 - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}


// Placeholder components
function Cart({ cart, removeFromCart, initiatePayment }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} Pi <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && <button onClick={initiatePayment}>Checkout</button>}
    </div>
  );
}

function Footer({ cartCount, openCart }) {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="flex justify-around">
        <span>🏠</span>
        <span onClick={openCart}>🛒 ({cartCount})</span>
        <span>🛍️</span>
        <span>☎️</span>
      </div>
    </footer>
  );
}