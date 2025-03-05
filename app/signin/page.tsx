
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePiAuth } from '../../context/PiAuthContext';
import Footer from '../../components/Footer';

export default function SignInPage() {
  const { user, login } = usePiAuth();
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      // In a real app, we would handle traditional login here
      // For demo, we'll just use Pi Auth
      login();
    } else {
      // In a real app, we would handle registration here
      // For demo, we'll just use Pi Auth
      login();
    }
  };

  if (user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">You're signed in!</h1>
          <p className="mb-6">Welcome, {user.username}!</p>
          <Link href="/profile" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
            Go to Your Profile
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <Image src="/images/pi-logo.jpg" alt="Pi Network" width={80} height={80} className="rounded-full" />
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In to Pi Tech Shop</h1>
          
          {/* Tab Navigation */}
          <div className="flex mb-6 border-b border-gray-600">
            <button 
              className={`flex-1 py-2 ${activeTab === 'login' ? 'border-b-2 border-purple-500 font-bold' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`flex-1 py-2 ${activeTab === 'register' ? 'border-b-2 border-purple-500 font-bold' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Create Account
            </button>
          </div>
          
          {/* Pi Network Auth */}
          <div className="mb-6">
            <button 
              onClick={login}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
            >
              <Image src="/images/pi-logo.jpg" width={24} height={24} alt="Pi Network" className="rounded-full" />
              <span>{activeTab === 'login' ? 'Login with Pi' : 'Register with Pi'}</span>
            </button>
          </div>
          
          <div className="text-center my-4">
            <span className="bg-transparent px-3 text-gray-300">OR</span>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-800 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Create a username"
                  required
                />
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-gray-600 rounded-lg p-3 text-white"
                placeholder="Your email address"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-gray-600 rounded-lg p-3 text-white"
                placeholder="Your password"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          {activeTab === 'login' && (
            <div className="mt-4 text-center">
              <a href="#" className="text-purple-300 hover:text-purple-200">Forgot your password?</a>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
