
import { Pi } from '@pinetwork-js/sdk';

// Initialize Pi SDK
export const initPiSdk = () => {
  Pi.init({ 
    version: '2.0',
    sandbox: true // Set to false in production
  });
};

// Authenticate user with Pi Network
export const authenticateWithPi = async () => {
  try {
    const authResponse = await Pi.authenticate(['username', 'payments'], {
      onIncompletePaymentFound: handleIncompletePayment
    });
    return authResponse;
  } catch (error) {
    console.error('Pi Authentication Error:', error);
    return null;
  }
};

// Handle incomplete payments
const handleIncompletePayment = async (payment) => {
  try {
    const completedPayment = await Pi.completePayment(payment.identifier);
    return completedPayment;
  } catch (error) {
    console.error('Error completing payment:', error);
    return null;
  }
};

// Create a payment with Pi
export const createPiPayment = async (amount, memo) => {
  try {
    const payment = await Pi.createPayment({
      amount,
      memo,
      metadata: { orderId: Date.now().toString() }
    });
    return payment;
  } catch (error) {
    console.error('Error creating payment:', error);
    return null;
  }
};

// Complete a payment
export const completePiPayment = async (paymentId) => {
  try {
    const completedPayment = await Pi.completePayment(paymentId);
    return completedPayment;
  } catch (error) {
    console.error('Error completing payment:', error);
    return null;
  }
};
