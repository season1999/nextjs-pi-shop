"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, this would send the data to an API
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message temporarily
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Pi Tech Shop Support</h3>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:pitechhive@gmail.com" className="hover:text-purple-300">pitechhive@gmail.com</a>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Pi Network Integration</h3>
              <p className="mb-4">We're proud partners with the Pi Network.</p>
              <div className="flex items-center">
                <Image 
                  src="/images/pi-logo.jpg" 
                  alt="Pi Network" 
                  width={60} 
                  height={60}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="text-sm">Seamless Pi currency integration</p>
                  <p className="text-sm">Secure payment processing</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Enter your message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}