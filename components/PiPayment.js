
"use client";
import { useState } from 'react';
import { usePiAuth } from '../context/PiAuthContext';
import { createPiPayment, completePiPayment } from '../utils/piSdk';
import Image from 'next/image';

export default function PiPayment() {
  const { user } = usePiAuth();
  const [amount, setAmount] = useState(1);
  const [memo, setMemo] = useState('Payment for TechHive services');
  const [paymentId, setPaymentId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreatePayment = async () => {
    if (!user) {
      setError('Please login first');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const payment = await createPiPayment(amount, memo);
      if (payment) {
        setPaymentId(payment.identifier);
        setPaymentStatus('created');
      } else {
        setError('Failed to create payment');
      }
    } catch (err) {
      setError('Payment creation failed');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCompletePayment = async () => {
    if (!paymentId) {
      setError('No payment to complete');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const completedPayment = await completePiPayment(paymentId);
      if (completedPayment) {
        setPaymentStatus('completed');
      } else {
        setError('Failed to complete payment');
      }
    } catch (err) {
      setError('Payment completion failed');
      console.error('Payment completion error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="p-4 text-center">Please login with Pi to make payments</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Image src="/images/pi-logo.jpg" width={30} height={30} alt="Pi Network" className="rounded-full" />
        <h2 className="text-xl font-bold">Pi Payment</h2>
      </div>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <div className="mb-4">
        <label className="block mb-2">Amount (Pi):</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
          min="0.1"
          step="0.1"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Memo:</label>
        <input 
          type="text" 
          value={memo} 
          onChange={(e) => setMemo(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      {!paymentId ? (
        <button 
          onClick={handleCreatePayment}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400"
        >
          <Image src="/images/pi-logo.jpg" width={20} height={20} alt="Pi Network" className="rounded-full" />
          {loading ? 'Processing...' : 'Pay with Pi'}
        </button>
      ) : paymentStatus === 'created' ? (
        <div>
          <div className="mb-4 p-2 bg-yellow-100 text-yellow-700 rounded">
            Payment created with ID: {paymentId}
          </div>
          <button 
            onClick={handleCompletePayment}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
          >
            <Image src="/images/pi-logo.jpg" width={20} height={20} alt="Pi Network" className="rounded-full" />
            {loading ? 'Processing...' : 'Complete Payment'}
          </button>
        </div>
      ) : (
        <div className="p-2 bg-green-100 text-green-700 rounded">
          Payment completed successfully!
        </div>
      )}
    </div>
  );
}
