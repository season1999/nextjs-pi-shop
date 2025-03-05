
"use client";
import { useState, useEffect } from 'react';
import { usePiAuth } from '../../context/PiAuthContext';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';

export default function ProfilePage() {
  const { user } = usePiAuth();
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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
    // Mock orders data - in a real app, this would fetch from an API
    if (user) {
      setOrders([
        { 
          id: 'ord-' + Math.floor(Math.random() * 10000),
          date: '2023-05-15',
          total: 25,
          status: 'completed',
          items: [
            { name: 'Web Design', price: 25 }
          ]
        },
        { 
          id: 'ord-' + Math.floor(Math.random() * 10000),
          date: '2023-04-22',
          total: 40,
          status: 'completed',
          items: [
            { name: 'Logo Design', price: 40 }
          ]
        }
      ]);
    }
    
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('piShopCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse saved cart', error);
      }
    }
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">My Profile</h1>
          <p className="mb-4">Please login to view your profile.</p>
          <Link href="/" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
            Go to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>
          
          {/* User info section */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-purple-700 rounded-full p-3">
                <Image src="/images/pi-logo.jpg" width={50} height={50} alt="Pi Network" className="rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.username}</h2>
                <p className="text-gray-300">Pi Network User</p>
                <p className="text-gray-300">Member since: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-700">
            <div className="flex">
              <button
                className={`py-3 px-6 ${activeTab === 'orders' ? 'border-b-2 border-yellow-400 font-medium' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                My Orders
              </button>
              <button
                className={`py-3 px-6 ${activeTab === 'account' ? 'border-b-2 border-yellow-400 font-medium' : ''}`}
                onClick={() => setActiveTab('account')}
              >
                Account Settings
              </button>
            </div>
          </div>
          
          {/* Tab content */}
          {activeTab === 'orders' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Order History</h3>
              
              {orders.length === 0 ? (
                <p className="text-center py-8">You haven't placed any orders yet.</p>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-bold">Order #{order.id}</h4>
                          <p className="text-sm text-gray-300">Placed on {order.date}</p>
                        </div>
                        <div>
                          <span className="px-3 py-1 rounded-full bg-green-800 text-green-100 text-sm">
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <h5 className="font-medium mb-2">Items</h5>
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between py-1">
                            <span>{item.name}</span>
                            <span>{item.price} Pi</span>
                          </div>
                        ))}
                        <div className="border-t border-gray-700 mt-2 pt-2 flex justify-between font-bold">
                          <span>Total</span>
                          <span>{order.total} Pi</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'account' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Account Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Pi Network Username</label>
                  <input 
                    type="text" 
                    value={user.username}
                    disabled
                    className="w-full p-2 bg-white/20 rounded border border-gray-300"
                  />
                  <p className="text-sm text-gray-300 mt-1">Username is managed by Pi Network</p>
                </div>
                
                <div>
                  <label className="block mb-2">Email Notifications</label>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="emailNotifications" 
                      className="mr-2"
                    />
                    <label htmlFor="emailNotifications">Receive order updates and promotions</label>
                  </div>
                </div>
                
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
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
