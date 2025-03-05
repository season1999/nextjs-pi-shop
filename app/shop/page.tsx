"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePiAuth } from '../../context/PiAuthContext';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 20, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 30, image: '/product3.jpg' },
];

export default function ShopPage() {
  const { user } = usePiAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        {/* ... rest of your shop page content ... */}
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