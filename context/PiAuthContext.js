
"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { initPiSdk, authenticateWithPi } from '../utils/piSdk';

const PiAuthContext = createContext();

export function PiAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Pi SDK
    try {
      initPiSdk();
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
        setUser({
          uid: authResult.user.uid,
          username: authResult.user.username,
          accessToken: authResult.accessToken,
        });
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
  };

  return (
    <PiAuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </PiAuthContext.Provider>
  );
}

export const usePiAuth = () => useContext(PiAuthContext);
