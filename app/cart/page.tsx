
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePiAuth } from '../../context/PiAuthContext';
import Footer from '../../components/Footer.js';

export default function CartPage() {
  const { user } = usePiAuth();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('piShopCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        calculateTotal(parsedCart);
      } catch (error) {
        console.error('Failed to parse saved cart', error);
      }
    }
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    setTotalPrice(total);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('piShopCart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('piShopCart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const initiatePayment = () => {
    alert(`Payment of ${totalPrice} Pi will be processed through the Pi Network`);
    // Add actual payment integration here
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white pb-24">
      {/* Header */}
      <header className="pt-6 pb-4 px-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/pitech-logo.jpg"
              alt="Pi Tech Shop Logo"
              width={50}
              height={50}
              className="mr-2 rounded-md"
              priority
            />
            <h1 className="text-2xl font-bold ml-2">Pi Tech Shop</h1>
          </Link>
          <Link href="/shop" className="text-white hover:text-purple-300">
            Continue Shopping
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <p className="mb-4 text-xl">Your cart is empty</p>
            <Link 
              href="/shop" 
              className="inline-block bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="divide-y divide-gray-700">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 flex items-start">
                      <div className="flex-shrink-0 bg-gray-200 rounded-lg w-24 h-24 flex items-center justify-center overflow-hidden">
                        <Image 
                          src={item.image || '/images/pi-logo.jpg'} 
                          alt={item.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            Remove
                          </button>
                        </div>
                        
                        <p className="text-purple-300 text-lg">{item.price} Pi</p>
                        
                        <div className="mt-2 flex items-center">
                          <span className="mr-2">Quantity:</span>
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                            className="w-8 h-8 bg-gray-700 rounded-l-lg flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-10 h-8 bg-gray-800 flex items-center justify-center">
                            {item.quantity || 1}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                            className="w-8 h-8 bg-gray-700 rounded-r-lg flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="mt-2 text-right">
                          <p className="font-semibold">
                            Subtotal: {(item.price * (item.quantity || 1)).toFixed(2)} Pi
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Order Summary</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>{totalPrice.toFixed(2)} Pi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>0.00 Pi</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-2 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{totalPrice.toFixed(2)} Pi</span>
                  </div>
                </div>
                
                <button
                  onClick={initiatePayment}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-yellow-500"
                >
                  <Image 
                    src="/pitech-logo.jpg" 
                    alt="Pi"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>Checkout with Pi</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer cartCount={cart.length} openCart={() => {}} />
    </main>
  );
}
