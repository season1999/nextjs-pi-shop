
"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ cartCount = 0, openCart }) {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-800 border-t border-gray-700 py-3 px-4 flex justify-around items-center z-40">
      <button
        onClick={() => router.push('/')}
        className="flex flex-col items-center text-gray-300 hover:text-white"
      >
        <span className="text-xl">🏠</span>
        <span className="text-xs mt-1">Home</span>
      </button>

      <button
        onClick={() => router.push('/shop')}
        className="flex flex-col items-center text-gray-300 hover:text-white"
      >
        <span className="text-xl">🛍️</span>
        <span className="text-xs mt-1">Shop</span>
      </button>

      <button
        onClick={openCart}
        className="flex flex-col items-center text-gray-300 hover:text-white relative"
      >
        <span className="text-xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
        <span className="text-xs mt-1">Cart</span>
      </button>

      <button
        onClick={() => router.push('/signin')}
        className="flex flex-col items-center text-gray-300 hover:text-white"
      >
        <span className="text-xl">👤</span>
        <span className="text-xs mt-1">Login</span>
      </button>

      <button
        onClick={() => router.push('/contact')}
        className="flex flex-col items-center text-gray-300 hover:text-white"
      >
        <span className="text-xl">☎️</span>
        <span className="text-xs mt-1">Support</span>
      </button>
    </div>
  );
}
