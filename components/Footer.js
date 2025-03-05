
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePiAuth } from '../context/PiAuthContext';

export default function Footer({ cartCount = 0, openCart }) {
  const pathname = usePathname();
  const { user } = usePiAuth();
  
  const isActive = (path) => {
    return pathname === path ? 'text-yellow-400' : 'text-white';
  };
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-30">
      <div className="container mx-auto">
        <div className="flex items-center justify-around py-3">
          <Link href="/" className={`flex flex-col items-center ${isActive('/')}`}>
            <span className="text-2xl">🏠</span>
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link href="/shop" className={`flex flex-col items-center ${isActive('/shop')}`}>
            <span className="text-2xl">🛍️</span>
            <span className="text-xs mt-1">Shop</span>
          </Link>
          
          <button 
            onClick={openCart}
            className="flex flex-col items-center text-white"
          >
            <div className="relative">
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">Cart</span>
          </button>
          
          <Link 
            href={user ? "/profile" : "/"} 
            className={`flex flex-col items-center ${isActive('/profile')}`}
          >
            <span className="text-2xl">{user ? '👤' : '🔑'}</span>
            <span className="text-xs mt-1">{user ? 'Profile' : 'Login'}</span>
          </Link>
          
          <Link href="/contact" className={`flex flex-col items-center ${isActive('/contact')}`}>
            <span className="text-2xl">☎️</span>
            <span className="text-xs mt-1">Support</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
