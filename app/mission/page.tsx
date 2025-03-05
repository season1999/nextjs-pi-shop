
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      {/* Header with Navigation */}
      <header className="pt-6 pb-4 px-6 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/pitech-logo.jpg"
                alt="Pi Tech Shop Logo"
                width={50}
                height={50}
                className="mr-2 rounded-md"
                priority
              />
            </Link>
            <h1 className="text-2xl font-bold ml-2">Pi Tech Shop</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="hover:text-purple-300 transition">Home</Link>
            <Link href="/shop" className="hover:text-purple-300 transition">Shop Now</Link>
            <Link href="/about" className="hover:text-purple-300 transition">About Us</Link>
            <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
            <Link href="/mission" className="text-purple-300 transition">Mission & Vision</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-20 px-6 bg-black/30 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Mission & Vision</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Building the future of digital commerce in the Pi Network ecosystem
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg mb-4">
              To empower digital creators and businesses by providing a secure, accessible marketplace powered by Pi Network's cryptocurrency.
            </p>
            <p className="mb-4">
              At Pi Tech Shop, our mission is to bridge the gap between digital service providers and consumers through the innovative Pi Network ecosystem. We aim to create value for the Pi community by offering high-quality, affordable digital services while promoting the utility and adoption of Pi cryptocurrency.
            </p>
            <p>
              We are committed to fostering a thriving digital economy within the Pi Network that rewards creativity, expertise, and community participation. By providing a platform where service providers can showcase their talents and users can access these services using Pi, we contribute to the growth and sustainability of the Pi ecosystem.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <p className="text-lg mb-4">
              To become the leading digital services marketplace in the Pi Network ecosystem, driving mainstream adoption of cryptocurrency through practical utility.
            </p>
            <p className="mb-4">
              We envision a future where Pi is recognized as a valuable currency for everyday digital transactions, with Pi Tech Shop serving as the premier destination for high-quality digital services. Our platform will be known for its user-friendly experience, diverse service offerings, and commitment to excellence.
            </p>
            <p>
              As Pi Network evolves, we aim to scale our marketplace to include thousands of service providers across various categories, creating economic opportunities for digital creators worldwide while maintaining our core values of quality, security, and community focus.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Quality</h3>
              <p className="text-gray-300 text-center">
                We are committed to excellence in everything we do. Every service on our platform meets rigorous quality standards to ensure customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community</h3>
              <p className="text-gray-300 text-center">
                We believe in the power of community. Our platform is built by and for the Pi Network community, with a focus on collaborative growth.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Innovation</h3>
              <p className="text-gray-300 text-center">
                We constantly push boundaries to develop new features and services that enhance the Pi ecosystem and provide value to our users.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Security</h3>
              <p className="text-gray-300 text-center">
                We prioritize the security of our platform and user data, implementing robust protocols to ensure safe transactions and interactions.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Fairness</h3>
              <p className="text-gray-300 text-center">
                We operate with transparency and fairness, ensuring equitable opportunities for service providers and fair pricing for consumers.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Reliability</h3>
              <p className="text-gray-300 text-center">
                We are committed to delivering consistent, reliable experiences for our users, with dependable service delivery and responsive support.
              </p>
            </div>
          </div>
        </div>

        {/* Our Goals */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Strategic Goals</h2>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <ol className="space-y-6">
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expand Service Offerings</h3>
                  <p className="text-gray-300">
                    Continuously grow our marketplace by onboarding skilled service providers across diverse digital categories, ensuring we meet the evolving needs of the Pi community.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enhance User Experience</h3>
                  <p className="text-gray-300">
                    Regularly refine our platform's interface and functionality to provide an intuitive, seamless experience for both service providers and consumers.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Foster Community Engagement</h3>
                  <p className="text-gray-300">
                    Build and nurture a vibrant community of Pi enthusiasts, digital creators, and consumers through events, forums, and collaborative initiatives.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Advance Pi Network Adoption</h3>
                  <p className="text-gray-300">
                    Collaborate with Pi Network and other ecosystem partners to drive wider adoption of Pi cryptocurrency through education, outreach, and innovative use cases.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">5</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implement Blockchain Innovations</h3>
                  <p className="text-gray-300">
                    Leverage emerging blockchain technologies to enhance platform security, transaction efficiency, and user verification processes.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/refund" className="text-gray-400 hover:text-white">Refund Policy</Link>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pi Tech Shop - SEASON2077 - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
