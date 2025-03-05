
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePiAuth } from '../context/PiAuthContext';

export default function Cart({ cart, removeFromCart, initiatePayment }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = usePiAuth();

  return (
    <div className="cart-container">
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 className="text-xl font-bold">Your Cart ({cart.length})</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-content">
                    <div className="cart-item-image">
                      <Image 
                        src={item.image || '/images/pi-logo.jpg'} 
                        alt={item.name} 
                        width={60} 
                        height={60} 
                        className="rounded-md"
                      />
                    </div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">{item.price} Pi</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="cart-item-remove"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>{cart.reduce((sum, item) => sum + item.price, 0)} Pi</span>
              </div>
              <button
                onClick={initiatePayment}
                className="cart-checkout"
              >
                <Image 
                  src="/images/pi-logo.jpg" 
                  alt="Pi" 
                  width={20} 
                  height={20}
                  className="rounded-full"
                />
                <span>Checkout with Pi</span>
              </button>
            </div>
          </>
        )}
      </div>
      
      <button 
        onClick={() => setIsOpen(true)}
        className="cart-toggle fixed bottom-20 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-40 lg:hidden"
      >
        🛒 {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </button>
      
      {/* Cart overlay */}
      {isOpen && (
        <div 
          className="cart-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      <style jsx>{`
        .cart-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 90%;
          max-width: 400px;
          height: 100vh;
          background-color: rgba(30, 30, 50, 0.95);
          backdrop-filter: blur(10px);
          z-index: 50;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
        }
        
        .cart-drawer.open {
          right: 0;
        }
        
        .cart-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }
        
        .cart-item {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cart-item-content {
          display: flex;
          align-items: center;
        }
        
        .cart-item-details {
          flex: 1;
          margin-left: 1rem;
        }
        
        .cart-item-name {
          font-weight: bold;
        }
        
        .cart-item-price {
          color: #a78bfa;
        }
        
        .cart-item-remove {
          color: #ef4444;
          font-size: 1.2rem;
          padding: 0.25rem;
        }
        
        .cart-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .cart-checkout {
          width: 100%;
          padding: 0.75rem;
          background-color: #6d28d9;
          color: white;
          border-radius: 0.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .cart-empty {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
        }
        
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 40;
        }
        
        .cart-toggle {
          position: relative;
        }
        
        .cart-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: #ef4444;
          color: white;
          font-size: 0.75rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
