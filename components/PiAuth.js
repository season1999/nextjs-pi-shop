
"use client";
import { usePiAuth } from '../context/PiAuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function PiAuth() {
  const { user, loading, error, login, logout } = usePiAuth();

  if (loading) return <div className="p-4">Loading...</div>;
  
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      {user ? (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/images/pi-logo.jpg" width={24} height={24} alt="Pi Network" className="rounded-full" />
            <p>Logged in as: <span className="font-bold">{user.username}</span></p>
          </div>
          <div className="flex gap-2">
            <Link href="/profile" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              My Profile
            </Link>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={login}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          <Image src="/images/pi-logo.jpg" width={24} height={24} alt="Pi Network" className="rounded-full" />
          Login with Pi
        </button>
      )}
    </div>
  );
}
