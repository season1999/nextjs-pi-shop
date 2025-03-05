
"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { initPiSdk, authenticateWithPi } from '../utils/piSdk';

const PiAuthContext = createContext();

export function PiAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Pi SDK
    try {
      initPiSdk();
      
      // Check for stored user data
      const storedUser = localStorage.getItem('piUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Failed to initialize Pi SDK:', err);
      setError('Failed to initialize Pi SDK');
      setLoading(false);
    }
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      const authResult = await authenticateWithPi();
      if (authResult) {
        const userData = {
          uid: authResult.user.uid,
          username: authResult.user.username,
          accessToken: authResult.accessToken,
        };
        setUser(userData);
        
        // Store user data in localStorage
        localStorage.setItem('piUser', JSON.stringify(userData));
      }
    } catch (err) {
      setError('Authentication failed');
      console.error('Authentication error:', err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('piUser');
  };

  const addOrder = (order) => {
    const updatedOrders = [...userOrders, order];
    setUserOrders(updatedOrders);
  };

  return (
    <PiAuthContext.Provider value={{ 
      user, 
      loading, 
      error, 
      login, 
      logout,
      userOrders,
      addOrder
    }}>
      {children}
    </PiAuthContext.Provider>
  );
}

export const usePiAuth = () => useContext(PiAuthContext);
