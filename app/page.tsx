
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import PiAuth from "../components/PiAuth";
import PiPayment from "../components/PiPayment";
import { usePiAuth } from "../context/PiAuthContext";

export default function Home() {
  const { user } = usePiAuth();
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch("/api/hello").then((res) => res.json());
        setApiResponse(response);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    }
    fetchApi();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="pt-6 pb-4 px-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/vercel.svg"
              alt="TechHive Logo"
              className="dark:invert mr-2"
              width={120}
              height={24}
              priority
            />
            <h1 className="text-2xl font-bold ml-2">TechHive</h1>
          </div>
          <div>
            <PiAuth />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            AI-Powered Digital Solutions Marketplace
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find the perfect digital services for your business with personalized 
            AI recommendations and secure Pi Network payments.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            TechHive Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">AI Recommendations</h4>
              <p className="text-gray-300">
                Get personalized service suggestions based on your business needs and preferences.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Pi Network Payments</h4>
              <p className="text-gray-300">
                Secure and seamless payments using Pi cryptocurrency.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Quality Services</h4>
              <p className="text-gray-300">
                Access a marketplace of verified providers for web design, SEO, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pi Payment Integration Demo */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Try Pi Payment Integration
          </h3>
          
          <div className="max-w-md mx-auto bg-slate-700/50 p-6 rounded-lg">
            <PiPayment />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TechHive - All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
