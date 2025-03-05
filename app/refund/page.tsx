
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function RefundPolicy() {
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
        <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Last Updated: January 1, 2077
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              At Pi Tech Shop, we strive to ensure your complete satisfaction with our digital services. This Refund Policy outlines the conditions under which we provide refunds for services purchased on our platform.
            </p>
            <p>
              By using our services, you agree to the terms of this Refund Policy. Please read this policy carefully before making a purchase.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eligibility for Refunds</h2>
            <p className="mb-4">
              We consider refund requests under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Not Delivered:</strong> If you have not received the service you purchased within the specified delivery timeframe.</li>
              <li><strong>Service Not as Described:</strong> If the service delivered does not match the description provided at the time of purchase in material ways.</li>
              <li><strong>Technical Issues:</strong> If technical issues prevent you from accessing or using the service as intended, and our support team is unable to resolve these issues within a reasonable timeframe.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Refund Request Timeframe</h2>
            <p className="mb-4">
              To be eligible for a refund, you must submit your request within the following timeframes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Not Delivered:</strong> Within 14 days after the expected delivery date.</li>
              <li><strong>Service Not as Described or Technical Issues:</strong> Within 7 days of service delivery or discovery of the issue, whichever comes first.</li>
            </ul>
            <p className="mt-4">
              Refund requests submitted after these timeframes may be considered on a case-by-case basis but are not guaranteed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
            <p className="mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our support team at support@pitechshop.pi with the subject line "Refund Request".</li>
              <li>Include your order number, the service purchased, and the reason for your refund request.</li>
              <li>Provide any relevant details or documentation that supports your request (screenshots, communications with service providers, etc.).</li>
            </ol>
            <p className="mt-4">
              Our support team will review your request and respond within 3 business days. We may request additional information to properly assess your claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
            <p className="mb-4">
              If your refund request is approved, we will process the refund as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds will be issued in Pi cryptocurrency to the same Pi wallet used for the original purchase.</li>
              <li>Full refunds will be processed for services not delivered or services that fundamentally fail to meet the described functionality.</li>
              <li>Partial refunds may be offered for services that partially meet the described functionality or where only certain components of a service package are not satisfactory.</li>
              <li>Refunds will typically be processed within 10 business days of approval.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Non-Refundable Purchases</h2>
            <p className="mb-4">
              The following purchases are generally not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services that have been fully delivered and meet the described functionality, even if you are unsatisfied with the design, style, or subjective elements.</li>
              <li>Services where you have already approved or accepted the final deliverable.</li>
              <li>Services where you have failed to provide necessary information or feedback within the specified timeframe, causing delays in delivery.</li>
              <li>Subscription services after the applicable refund request timeframe has passed.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Special Circumstances</h2>
            <p className="mb-4">
              We recognize that exceptional situations may arise. In cases of extreme dissatisfaction or unusual circumstances not covered by this policy, we may consider refund requests outside the standard criteria on a case-by-case basis.
            </p>
            <p>
              Our primary goal is customer satisfaction, and we will work with you to find a reasonable solution to legitimate concerns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Changes to this Refund Policy</h2>
            <p>
              We may update this Refund Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Refund Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Refund Policy, please contact our support team:
            </p>
            <div className="mt-4">
              <p>Email: support@pitechshop.pi</p>
              <p>Phone: +1 (877) PI-TECH</p>
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
