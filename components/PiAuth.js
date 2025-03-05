
"use client";
import { usePiAuth } from '../context/PiAuthContext';

export default function PiAuth() {
  const { user, loading, error, login, logout } = usePiAuth();

  if (loading) return <div className="p-4">Loading...</div>;
  
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      {user ? (
        <div>
          <p className="mb-2">Logged in as: <span className="font-bold">{user.username}</span></p>
          <button 
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <button 
          onClick={login}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Login with Pi
        </button>
      )}
    </div>
  );
}
