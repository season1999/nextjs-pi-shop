
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
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
            <Link href="/mission" className="hover:text-purple-300 transition">Mission & Vision</Link>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <div className="py-16 px-6 bg-black/30 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Last Updated: January 1, 2077
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Pi Tech Shop ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Register for an account</li>
              <li>Purchase services</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Pi Network username</li>
              <li>Transaction history</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
            <p className="mb-4">
              When you access our website, we may automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring websites</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending transaction notifications</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending administrative information, such as updates to our terms and policies</li>
              <li>Sending marketing communications if you have opted in to receive them</li>
              <li>Personalizing your experience on our platform</li>
              <li>Analyzing usage patterns to improve our website and services</li>
              <li>Protecting against fraudulent or unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pi Network Integration</h2>
            <p className="mb-4">
              Our platform integrates with Pi Network for authentication and payment processing. When you connect your Pi Network account to our platform, we receive information from Pi Network in accordance with the permissions you grant and Pi Network's privacy policy.
            </p>
            <p>
              This information is used solely for the purpose of facilitating your use of our services, processing payments, and providing you with a seamless experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or in response to valid legal processes, such as a court order or subpoena.</li>
              <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property, or that of our users or others.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct or update inaccurate personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
              <li>The right to object to the processing of your personal information</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4">
              <p>Email: privacy@pitechshop.pi</p>
              <p>Address: Pi Network HQ, Blockchain Avenue, San Francisco, CA 94103</p>
            </div>
          </section>
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
