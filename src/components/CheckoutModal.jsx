import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function CheckoutModal({
  isOpen = false,
  onClose = () => {},
  cart = [],
  onComplete = () => {},
}) {
  const [step, setStep] = useState(1);
  const [orderNumber, setOrderNumber] = useState(
    () => `AO-${Math.floor(100000 + Math.random() * 900000)}`
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const totalItems = (cart || []).reduce(
    (sum, item) => sum + (Number(item.qty) || Number(item.quantity) || 1),
    0
  );

  const totalAmount = (cart || []).reduce(
    (sum, item) =>
      sum +
      (Number(item.price) || 0) *
        (Number(item.qty) || Number(item.quantity) || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleDone = () => {
    if (onComplete) {
      onComplete();
    }
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      address: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
    });
    setOrderNumber(`AO-${Math.floor(100000 + Math.random() * 900000)}`);
    if (onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (step === 3) {
      handleDone();
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      aria-hidden={!isOpen}
    >
      <div className="modal" role="dialog" aria-modal="true">
        {/* Modal Header */}
        <div className="modal-header">
          <h3>
            {step === 1 && 'Customer Details'}
            {step === 2 && 'Payment'}
            {step === 3 && 'Order Confirmed'}
          </h3>
          <button
            type="button"
            className="cart-close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Step Indicator */}
          <div className="steps-indicator">
            <div
              className={`step-dot ${
                step === 1 ? 'active' : step > 1 ? 'completed' : ''
              }`}
            />
            <div className={`step-line ${step > 1 ? 'completed' : ''}`} />
            <div
              className={`step-dot ${
                step === 2 ? 'active' : step > 2 ? 'completed' : ''
              }`}
            />
            <div className={`step-line ${step > 2 ? 'completed' : ''}`} />
            <div className={`step-dot ${step === 3 ? 'active' : ''}`} />
          </div>

          {/* Step 1: Customer Details */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="e.g. jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="e.g. 082 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="city">
                    City / Area
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Cape Town"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="address">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="form-input"
                  placeholder="Enter your street address for delivery..."
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="modal-footer"
                style={{ padding: 'var(--space-md) 0 0 0' }}
              >
                <button type="submit" className="btn btn-primary">
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit}>
              <div className="form-group">
                <label className="form-label" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  className="form-input"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="19"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cardExpiry">
                    Expiry Date
                  </label>
                  <input
                    id="cardExpiry"
                    name="cardExpiry"
                    type="text"
                    className="form-input"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    maxLength="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cardCvv">
                    CVV
                  </label>
                  <input
                    id="cardCvv"
                    name="cardCvv"
                    type="password"
                    className="form-input"
                    placeholder="***"
                    value={formData.cardCvv}
                    onChange={handleChange}
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Order Items</label>
                  <div
                    className="form-input"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Total Amount</label>
                  <div
                    className="form-input"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: '700',
                      color: 'var(--blue-600)',
                    }}
                  >
                    R {totalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              <div
                className="modal-footer"
                style={{ padding: 'var(--space-md) 0 0 0' }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="checkout-success">
              <div className="success-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Order Confirmed!</h3>
              <p>
                Thank you for your order. We will contact you shortly with
                delivery details.
              </p>
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <span className="order-number">{orderNumber}</span>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDone}
                style={{ minWidth: '140px' }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
