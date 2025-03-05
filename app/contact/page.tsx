
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send the data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

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
            <Link href="/contact" className="text-purple-300 transition">Contact</Link>
            <Link href="/mission" className="hover:text-purple-300 transition">Mission & Vision</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-16 px-6 bg-black/30 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Have questions or need assistance? We're here to help. Get in touch with our team.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-500/20 p-6 rounded-lg border border-green-500">
                <p className="text-xl font-semibold">Thank you for your message!</p>
                <p className="mt-2">We've received your inquiry and will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  >
                    <option value="General Inquiry" className="bg-gray-800">General Inquiry</option>
                    <option value="Technical Support" className="bg-gray-800">Technical Support</option>
                    <option value="Billing Question" className="bg-gray-800">Billing Question</option>
                    <option value="Partnership Opportunity" className="bg-gray-800">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-8">
              <div className="flex items-start mb-6">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">support@pitechshop.pi</p>
                  <p className="text-gray-300">info@pitechshop.pi</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (877) PI-TECH</p>
                  <p className="text-gray-300">Available Mon-Fri, 9am-5pm PST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">Pi Network HQ, Blockchain Avenue</p>
                  <p className="text-gray-300">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Support Hours</h2>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between mb-3 pb-3 border-b border-gray-700">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b border-gray-700">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black/20 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How do payments work with Pi?</h3>
              <p className="text-gray-300">
                Our platform integrates directly with the Pi Network payment system. When you make a purchase, you'll be prompted to authorize the payment through your Pi wallet. Once confirmed, the transaction is processed on the Pi blockchain.
              </p>
            </div>
            
            <div className="mb-6 bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with a service?</h3>
              <p className="text-gray-300">
                We stand behind our services with a satisfaction guarantee. If you're not happy with the delivered work, please contact our support team within 7 days of delivery, and we'll work to resolve the issue or provide a refund as per our refund policy.
              </p>
            </div>
            
            <div className="mb-6 bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How long does it take to deliver a service?</h3>
              <p className="text-gray-300">
                Delivery times vary depending on the complexity of the service. Standard delivery times are listed on each service page. For custom projects, we'll provide a timeline during the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
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
