
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PiAuth from "../components/PiAuth";
import { usePiAuth } from "../context/PiAuthContext";
import PiPayment from "../components/PiPayment";

export default function Home() {
  const { user } = usePiAuth();
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [recommendation, setRecommendation] = useState('');

  // Sample services data
  const sampleServices = [
    { id: 1, name: 'Web Design', price: 50, category: 'Design', image: '/images/ui-workspace.jpg', slug: 'web-design' },
    { id: 2, name: 'Mobile App Development', price: 100, category: 'Development', image: '/images/mobile-design.jpg', slug: 'mobile-app' },
    { id: 3, name: 'Data Analytics', price: 80, category: 'Analytics', image: '/images/data-dashboard.jpg', slug: 'data-analytics' },
    { id: 4, name: 'Digital Marketing', price: 70, category: 'Marketing', image: '/images/tech-tree.jpg', slug: 'digital-marketing' },
    { id: 5, name: 'UI/UX Design', price: 60, category: 'Design', image: '/images/ui-design.jpg', slug: 'ui-design' },
    { id: 6, name: 'SEO Optimization', price: 45, category: 'Marketing', image: '/images/seo-tree.jpg', slug: 'seo-optimization' },
  ];

  useEffect(() => {
    // Fetch services (using sample data for now)
    setServices(sampleServices);

    // AI Recommendation (mock for now, replace with OpenAI API call)
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setRecommendation(data.recommendation || "Based on your profile, we recommend starting with our Web Design package and SEO Optimization to maximize your online presence."));
  }, []);

  const addToCart = (service) => setCart([...cart, service]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const initiatePayment = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Payment of ${total} Pi will be processed through the PiPayment component`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="pt-6 pb-4 px-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/pitech-logo.jpg"
              alt="Pi Tech Shop Logo"
              width={50}
              height={50}
              className="mr-2 rounded-md"
              priority
            />
            <h1 className="text-2xl font-bold ml-2">Pi Tech Shop</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="hover:text-purple-300 transition">Home</Link>
            <Link href="/shop" className="hover:text-purple-300 transition">Shop Now</Link>
            <Link href="/profile" className="hover:text-purple-300 transition">My Profile</Link>
            <Link href="/about" className="hover:text-purple-300 transition">About Us</Link>
            <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
            <Link href="/mission" className="hover:text-purple-300 transition">Mission & Vision</Link>
          </nav>
          <div>
            <PiAuth />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-5xl font-extrabold mb-4 animate-pulse">Pi Tech Shop - SEASON2077</h2>
        <p className="text-xl mb-6">Powered by AI, Built for You</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">Explore Services</button>
      </section>

      {/* AI Recommendation */}
      {recommendation && (
        <section className="bg-white/10 backdrop-blur-sm p-6 mx-4 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-2">AI Recommendation</h3>
          <p>{recommendation}</p>
        </section>
      )}

      {/* Services Section */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Browse Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="bg-slate-200 p-4 rounded-lg flex items-center justify-center h-48">
                <Image src={service.image} alt={service.name} width={180} height={120} className="rounded-lg object-cover" />
              </div>
              <h4 className="text-xl font-semibold mt-4">{service.name}</h4>
              <p className="text-gray-300">{service.category}</p>
              <p className="text-lg font-bold mt-2">{service.price} Pi</p>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => addToCart(service)}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <Link 
                  href={`/product/${service.slug}`}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/shop" 
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            View All Products
          </Link>
        </div>
      </section>

      {/* Pi Payment Integration Demo */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Try Pi Payment Integration
          </h3>
          
          <div className="max-w-md mx-auto bg-slate-700/50 p-6 rounded-lg">
            <PiPayment />
          </div>
        </div>
      </section>

      {/* Cart Section */}
      {cart.length > 0 && (
        <section className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-lg">
          <h3 className="text-xl font-bold">Your Cart ({cart.length})</h3>
          <ul className="max-h-40 overflow-y-auto">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{item.name} - {item.price} Pi</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-400">Remove</button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Total: {cart.reduce((sum, item) => sum + item.price, 0)} Pi</p>
          <button
            onClick={initiatePayment}
            className="mt-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Checkout with Pi
          </button>
        </section>
      )}

      {/* Live Chat (Placeholder) */}
      <div className="fixed bottom-16 right-4">
        <button
          onClick={() => alert('Live chat coming soon!')}
          className="bg-purple-500 p-4 rounded-full shadow-lg hover:bg-purple-600"
        >
          💬 Chat
        </button>
      </div>

      {/* Subscription CTA */}
      <section className="py-12 text-center bg-gray-800">
        <h3 className="text-2xl font-bold mb-4">Unlock Exclusive Discounts</h3>
        <p className="mb-6">Subscribe monthly for just 10 Pi!</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">
          Subscribe Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pi Tech Shop - SEASON2077 - All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
