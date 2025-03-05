
// Simplified Pi SDK implementation for Next.js compatibility

// Mock Pi SDK to avoid dependency issues
const Pi = {
  initialized: false,
  
  init: function(options) {
    console.log('Pi SDK initialized with options:', options);
    this.initialized = true;
    this.sandbox = options.sandbox;
    this.version = options.version;
    return true;
  },
  
  authenticate: function(scopes, callbacks) {
    console.log('Pi authenticate called with scopes:', scopes);
    if (!this.initialized) {
      throw new Error('Pi SDK not initialized');
    }
    
    // In development/sandbox mode, return mock user data
    return Promise.resolve({
      user: {
        uid: 'mock-user-id',
        username: 'mock-pi-user',
      },
      accessToken: 'mock-access-token'
    });
  },
  
  createPayment: function(paymentData) {
    console.log('Creating payment:', paymentData);
    if (!this.initialized) {
      throw new Error('Pi SDK not initialized');
    }
    
    // Return mock payment data
    return Promise.resolve({
      identifier: 'mock-payment-' + Date.now(),
      amount: paymentData.amount,
      memo: paymentData.memo,
      metadata: paymentData.metadata,
      status: 'created',
      created_at: new Date().toISOString()
    });
  },
  
  completePayment: function(paymentId) {
    console.log('Completing payment:', paymentId);
    if (!this.initialized) {
      throw new Error('Pi SDK not initialized');
    }
    
    // Return mock completed payment
    return Promise.resolve({
      identifier: paymentId,
      status: 'completed',
      completed_at: new Date().toISOString()
    });
  }
};

// Initialize Pi SDK
export const initPiSdk = () => {
  try {
    Pi.init({ 
      version: '2.0',
      sandbox: true // Set to false in production
    });
    return true;
  } catch (error) {
    console.error('Failed to initialize Pi SDK:', error);
    return false;
  }
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
